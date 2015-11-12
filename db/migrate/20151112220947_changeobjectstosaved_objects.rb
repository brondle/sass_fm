class ChangeobjectstosavedObjects < ActiveRecord::Migration
  def change
    rename_table :savedobjects, :saved_objects
  end
end
