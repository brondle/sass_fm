class SavedObjectsController < ApplicationController
	before_filter :authenticate_user!, only: [:create]
def index
	results = SavedObject.where(user_id: params[:user_id])
	# results_array = []
	print(results)
		respond_with results
end

def create
	SavedObject.create(saved_object_params.merge(user_id: current_user.id))
	redirect_to '/'
end

def show
	respond_with SavedObject.find(params[:id])
end

# def upvote
# 	object = SavedObject.find(params[:id])
# 	# object.increment!(:upvotes)
#
# 	respond_with object
# end

private
	def saved_object_params
		params.require(:saved_object).permit(:name, :title, :type, :discogs_id, :artist, :thumb)
	end
end
