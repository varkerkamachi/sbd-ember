class CreateRemotes < ActiveRecord::Migration
  def change
    create_table :remotes do |t|
      t.string :name
      t.string :url
      t.text :note
      t.references :configuration_system, index: true
      t.references :audit, index: true

      t.timestamps
    end
  end
end
