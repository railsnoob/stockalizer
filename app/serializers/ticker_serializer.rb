class TickerSerializer < ActiveModel::Serializer
  embed :ids, embed_in_root:true
  attributes :id, :name, :created_at
  has_many :quotes
end
