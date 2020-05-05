class AddColumnToContact < ActiveRecord::Migration[5.2]
  def change
    add_column :contacts, :content, :string
  end
end
