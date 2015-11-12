class SavedObject < ActiveRecord::Base
	has_many :reviews
	has_and_belongs_to_many :users

	def as_json(options = {})
		super(options.merge(include: :reviews))
	end
end
