class Review<ActiveRecord::Base
	belongs_to :album
	belongs_to :user

	validates :title, :body, :presence=> true
