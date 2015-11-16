class ReviewsController < ApplicationController
	before_filter :authenticate_user!, only: [:create]
	def create
		object = Object.find(params[:object_id])
		review = object.reviews.create(review_params.merge(user_id: current_user.id))
		respond_with object, review
	end

	def review_params
		params.require(:review).permit(:title, :body)
	end

end
