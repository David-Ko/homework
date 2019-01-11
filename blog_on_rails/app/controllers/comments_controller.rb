class CommentsController < ApplicationController
    before_action :authenticate_user!
    before_action :authorized_user!, only: [:destroy]
    
    def destroy
        @comment = Comment.find params[:id]
        @comment.destroy
        flash[:primary] = "We're sad to see that you deleted your comment."
        redirect_to post_path(@comment.post)
    end

    def create
        @comment = Comment.new comment_params
        @post = Post.find params[:id]
        @comment.post = @post
        @comment.user = current_user

        if @comment.save
            flash[:primary] = "Thanks for your comment!"
            redirect_to post_path(@post.id)
        else
            @comments = @post.comments.order(created_at: :desc)
            render "posts/show"
        end
    end

    private
    def comment_params
        params.require(:comment).permit(:body)
    end

    def authorized_user!
        @comment = Comment.find params[:id]
        unless can?(:crud, @comment)
            flash[:danger] = "You are not authorized!"
            redirect_to post_path(@comment.post)
        end
    end
end

