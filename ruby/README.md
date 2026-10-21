# Stars Lookup API - Ruby Gem

Stars Lookup retrieves physical and positional stellar data by star name or astronomical classification. Query individual stars or filter by spectral class to obtain mass in kilograms, distance in light-years, and stellar type.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_starslookup'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_starslookup
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_starslookup'

# Initialize the client
client = APIVerve::Starslookup::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({ name: "Sirius" })

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ name: "Sirius" })
  puts response["data"]
rescue APIVerve::Starslookup::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Starslookup::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Starslookup::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "starName": "Sirius",
    "mass": 4.674385e+30,
    "diameter": 2825760,
    "galX": -5.895,
    "galY": -6.152,
    "galZ": -1.167,
    "dist": 8.6,
    "starType": "A1(V)",
    "temp": 9500,
    "color": "0xbaccff"
  }
}
```

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/starslookup?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/starslookup?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/starslookup?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
