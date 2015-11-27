class RenameTypeColumnToObjectType < ActiveRecord::Migration
  def change
    change_table :saved_objects do |t|
      t.rename :type, :object_type
    end
  end
end
