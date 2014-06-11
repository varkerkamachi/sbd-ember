class RemoteSerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, :name, :url, :note
end