class Review<ActiveRecord::Base
	belongs_to :album

	validates :title, :body, :presence=> true
