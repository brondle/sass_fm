class ChangeAlbumsToObjects < ActiveRecord::Migration
  def change
    rename_table :albums, :objects
    change_table :objects do |t|
      t.column :thumb, :string
    end
  end
end
