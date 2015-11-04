class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.column :name, :string
      t.column :artist, :string
      t.timestamps
    end
    create_table :reviews do |t|
      t.column :title, :string
      t.column :body, :string
      t.timestamps
    end
  end
end
