class AddIdandTypeToObjects < ActiveRecord::Migration
  def change
    change_table :objects do |t|
      t.column :discogs_id, :int
      t.column :type, :string
    end
  end
end
