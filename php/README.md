# Stars Lookup API - PHP Package

Stars Lookup retrieves physical and positional stellar data by star name or astronomical classification. Query individual stars or filter by spectral class to obtain mass in kilograms, distance in light-years, and stellar type.

## Installation

Install via Composer:

```bash
composer require apiverve/starslookup
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Starslookup\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute(['name' => 'Sirius']);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Starslookup\Client;
use APIVerve\Starslookup\Exceptions\APIException;
use APIVerve\Starslookup\Exceptions\ValidationException;

try {
    $response = $client->execute(['name' => 'Sirius']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/starslookup?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/starslookup?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/starslookup?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
