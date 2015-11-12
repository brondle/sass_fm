class AddSavedObjectIdToReviews < ActiveRecord::Migration
  def change
    change_table :reviews do |t|
      t.column :saved_object_id, :int
    end
  end
end
