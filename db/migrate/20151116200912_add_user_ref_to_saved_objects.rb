class AddUserRefToSavedObjects < ActiveRecord::Migration
  def change
    add_reference :saved_objects, :user, index: true, foreign_key: true
  end
end
