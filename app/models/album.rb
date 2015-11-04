class Album < ActiveRecord::Base
	has_many :reviews
end
