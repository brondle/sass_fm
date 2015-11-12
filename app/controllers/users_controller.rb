class UsersController < ApplicationController


	# could look into using cookies to store auth tokens
	def new
		@user = User.new
	end

	def create
		@user = User.new(user_params)
		if @user.save
			session[:user_id] = @user.id
			redirect_to root_url
			flash[:notice] = "Thanks for signing up!"
		else
			render "new"
		end
	end

	def user_params
		params.require(:user).permit(:email, :password, :password_confirmation)
	end
end
