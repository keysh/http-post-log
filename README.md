# HTTP POST logger
Parse and log messages sent via http post method.

## Configuration

You can provide `PORT` environment variable in `.env` file.

```
PORT=8080
```

## Running

Just run `npm start` and watch terminal for messages.

```
$ npm start

> http-post-log@1.0.0 start /Users/jakub/Projects/http-post-log
> node ./server.js

Listening on: 8080
```

## Testing

```
curl -H "Content-Type: application/json" -X POST -d '{"username":"xyz","password":"xyz"}' http://localhost:8080/api/login
```

It will print following lines:

```
  <-- POST /api/login
{"username":"xyz","password":"xyz"}
  --> POST /api/login 200 9ms 16b
```

## Docker

You can dockerize application with following steps:

Build image:
```
docker build -t <your username>/http-post-log .
```

Start container:
```
docker run -p 8080:8080 -d <your username>/http-post-log
```

Watch for application logs:
```
# Get container ID
$ docker ps

# Print app output
$ docker logs <container id>
```