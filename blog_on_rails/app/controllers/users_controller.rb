class UsersController < ApplicationController
    before_action :authenticate_user!, only: [:edit, :update]
    before_action :authorized_user!, only: [:edit, :update]

    def new
        @user = User.new
    end

    def create
        @user = User.new user_params
        if @user.save
            flash[:primary] = "Welcome, #{@user.name}!"
            session[:user_id] = @user.id
            redirect_to root_path
        else
            render :new
        end
    end

    def edit
        @user = User.find params[:id]
    end

    def update
        @user = User.find params[:id]
        if @user.update user_params
            redirect_to root_path
        else
            render :edit
        end
    end

    def edit_password
        @user = User.find params[:id]
    end

    def update_password
        @user = User.find params[:id]
        old_password = password_params[:old_password]
        new_password = password_params[:new_password]
        new_password_confirmation = password_params[:new_password_confirmation]

        if old_password != new_password && new_password == new_password_confirmation 
            @user.password = password_params[:new_password]
            @user.save
            redirect_to root_path
        else
            render :edit_password
        end
    end

    private

    def user_params
        params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end

    def password_params
        params.permit(:old_password, :new_password, :new_password_confirmation)
    end

    def authorized_user!
        @user = User.find params[:id]
        unless can?(:crud, @user)
            flash[:danger] = "you are NOT authorized!"
            redirect_to root_path
        end
    end
end
