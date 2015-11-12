class SavedObjectsController < ApplicationController
def index
	respond_with SavedObject.all
end

def create
	respond_with SavedObject.create(saved_object_params)
end

def show
	respond_with SavedObject.find(params[:id])
end

def upvote
	object = SavedObject.find(params[:id])
	# object.increment!(:upvotes)

	respond_with object
end

private
	def saved_object_params
		params.require(:saved_object).permit(:name, :artist, :thumb)
	end
end
