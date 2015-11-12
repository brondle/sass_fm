class ReviewsController < ApplicationController
	def create
		object = Object.find(params[:object_id])
		review = object.reviews.create(review_params)
		respond_with object, review
	end

	def review_params
		params.require(:review).permit(:title, :body)
	end

end
