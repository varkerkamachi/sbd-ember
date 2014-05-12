class NoteSerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, :name, :note
end
