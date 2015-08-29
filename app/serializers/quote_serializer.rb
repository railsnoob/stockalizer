class QuoteSerializer < ActiveModel::Serializer
  embed :ids, embed_in_root:true
  attributes :id, :ticker_symbol, :ticker_id, :created_at, :price, :pricing_date
end
