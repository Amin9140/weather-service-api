# Weather Service API

A REST API built with **Node.js** and **Express** that serves live weather data for cities around the world, along with a simple front-end page.

Built as part of the [freeCodeCamp](https://www.freecodecamp.org/) Back End Development and APIs curriculum.

## Features

- Live weather data fetched from an external API using `async`/`await` and `fetch`
- Route parameters for dynamic URLs (`/api/weather/:city`)
- Modular routing with `express.Router`, keeping weather routes in their own file
- Chainable route handlers with `app.route()` for multiple HTTP methods on one path
- Error handling with `try`/`catch`, returning a `404` instead of crashing
- Static file serving with `express.static` and `res.sendFile`
- Self-documenting `/api/info` endpoint listing every route

## Tech Stack

- **Runtime:** Node.js (ES Modules)
- **Framework:** Express
- **Weather data:** freeCodeCamp Weather Proxy

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Serves the front-end page |
| GET | `/api/info` | API name, version and list of endpoints |
| GET | `/api/status` | Health check, returns `200 OK` |
| GET | `/docs` | Redirects to `/api/info` |
| GET | `/api/greet/:name` | Returns a personalized greeting |
| GET | `/api/data` | Returns sample data |
| POST | `/api/data` | Creates data, returns `201 Created` |
| GET | `/api/weather` | Lists supported cities |
| GET | `/api/weather/:city` | Current weather for a city |

## Example Responses

**`GET /api/weather/London`**

```json
{
  "city": "London",
  "temperature": 12.4,
  "description": "light rain"
}
```

**`GET /api/weather/Atlantis`** (city not found, returns `404`)

```json
{
  "error": "Could not fetch weather for Atlantis"
}
```

Weather values are live, so your results will differ from the example above.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) version 18 or later (needed for the built-in `fetch`)

### Installation

```bash
git clone https://github.com/Amin9140/weather-service-api.git
cd weather-service-api
npm install
node index.js
```

The server starts at `http://localhost:3000`. Try it out:

```bash
curl http://localhost:3000/api/weather/Tokyo
```

## Project Structure

```
weather-service-api/
├── public/
│   └── index.html    # Front-end page
├── index.js          # App setup, core routes, static files
├── weather.js        # Weather router
├── package.json
└── .gitignore
```

## What I Learned

- How Express routing works, from simple routes to route parameters and modular routers
- Using HTTP status codes deliberately (`200`, `201`, `302`, `404`)
- Making server-to-server requests and reshaping external API data
- Handling errors gracefully so one bad request can't crash the server
- Working with ES Modules, including recreating `__dirname`

## Acknowledgments

- [freeCodeCamp](https://www.freecodecamp.org/) for the project curriculum and weather proxy
