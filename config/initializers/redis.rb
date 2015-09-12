if Rails.env.development? || Rails.env.test?
  $redis = Redis.new(:host => 'localhost', :port=> 6379)
else
  uri = URI.parse(ENV["REDISTOGO_URL"])
  $redis = Redis.new(:url => uri)
  # $redis = Redis.new(:host=> ENV['REDIS_HOST'], :port=> (ENV['REDIS_PORT'] ? ENV['REDIS_PORT'] : 6379))
end

