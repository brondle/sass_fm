class Review<ActiveRecord::Base
	belongs_to :saved_object
	belongs_to :user

	validates :title, :body, :presence=> true
	def as_json(options = {})
		super(options.merge(include: :user))
	end
end
