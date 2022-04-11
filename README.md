# simple-rest-mock

A simple mock server for RESTful APIs. Easily add new resources with CRUD support and simple data handling.

## Usage

```
[PORT=] npx simple-rest-mock [--resources=] [--data=]
```

This will run a local server on the specified port with CRUD endpoints for given resources.

It will also create a local `data.json` file, which acts as a DB storage.

`PORT` - Default: 3003

<br />

### Options

| Name        | Description                                | Default                   |
| ----------- | ------------------------------------------ | ------------------------- |
| --resources | `string[]` comma-separated list of strings | `users,posts`             |
| --data      | `string` path to the data file             | `./data-<timestamp>.json` |
| --port      | `number` port for the server               | `3003`                    |

---

<br />

### Examples

<br />

#### With no options

---

`npx simple-rest-mock`

The mock server will be running on port `3003`, using `data-<timestamp>.json` to hold the data and serving the `users` and `posts` resources.

<br />

#### With all options

---

`npx simple-rest-mock --resources=movies,genres --data=data.json --port=8080`

The mock server will be running on port `8080`, using `data.json` to hold the data and serving the `movies` and `genres` resources.

## Resources

For each REST resource a set of CRUD endpoints are being created. For example, if you have specified `movies` as a resource at the time of starting the server, then the following endpoints will be served out-of-the-box:

<br />

| Method | Endpoint    | Request         | Response                                | Description                                                     |
| ------ | ----------- | --------------- | --------------------------------------- | --------------------------------------------------------------- |
| POST   | /movies     | any JSON object | Same JSON object with new `id` property | Creates a new movie with the provided data                      |
| GET    | /movies     | N/A             | An array of movie objects               | Fetches all movie records                                       |
| GET    | /movies/:id | N/A             | The movie with the specified `id`       | Fetches the movie record with the given `id`                    |
| PUT    | /movies/:id | any JSON object | Same JSON object with specified `id`    | Replaces the movie record with the given `id` by the new object |
| DELETE | /movies/:id | N/A             | The `id` of the removed record          | Removes the movie record by the given `id`                      |

<br />

### Data

All data is being stored in the data file, which you specify when starting the server. It's a simple JSON content, and you can manually change it to serve the data you want.
