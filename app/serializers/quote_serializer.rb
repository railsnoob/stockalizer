class QuoteSerializer < ActiveModel::Serializer
  attributes :id, :ticker_symbol, :ticker_id, :created_at, :price, :pricing_date
end
