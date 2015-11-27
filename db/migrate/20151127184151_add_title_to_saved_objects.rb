class AddTitleToSavedObjects < ActiveRecord::Migration
  def change
    change_table :saved_objects do |t|
      t.column :title, :string
      t.remove :artist
      t.remove :name
    end
  end
end
