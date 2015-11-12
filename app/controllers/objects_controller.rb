class ObjectsController < ApplicationController
	def index
	respond_with Object.all
end

def create
	respond_with Object.create(object_params)
end

def show
	respond_with Object.find(params[:id])
end

def upvote
	object = Object.find(params[:id])
	object.increment!(:upvotes)

	respond_with object
end

private
def object_params
	params.require(:object).permit(:name, :artist, :thumb)
end
end
end
