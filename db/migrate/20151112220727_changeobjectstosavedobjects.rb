class Changeobjectstosavedobjects < ActiveRecord::Migration
  def change
    rename_table :objects, :savedobjects
  end
end
