class PostsController < ApplicationController
    before_action :authenticate_user!, except: [:show, :index]
    before_action :authorized_user!, only: [:edit, :update, :destroy]

    def index
        @posts = Post.all.order(created_at: :desc)
    end
    
    def show
        @post = Post.find params[:id]
        @comments = @post.comments.order(created_at: :desc)
        @comment = Comment.new
    end
    
    def new
        @post = Post.new
    end

    def create
        @post = Post.new post_params
        @post.user = current_user
        if @post.save
            flash[:primary] = "Thanks for your new post!"
            redirect_to post_path(@post.id)
        else
            render :new 
        end
    end

    def edit
        @post = Post.find params[:id]
    end

    def update
        @post = Post.find params[:id]
        if @post.update post_params
            flash[:primary] = "Thanks for updating your post!"
            redirect_to post_path(@post.id)
        else 
            render :edit
        end
    end

    def destroy
        @post = Post.find params[:id]
        @post.destroy
        flash[:primary] = "We're sorry to see that you deleted your post."
        redirect_to root_path
    end

    private

    def post_params
        params.require(:post).permit(:title, :body)
    end

    def authorized_user!
        @post = Post.find params[:id]
        unless can?(:crud, @post)
            flash[:danger] = "You are not authorized!"
            redirect_to post_path("#{@post.id}")
        end
    end
end
