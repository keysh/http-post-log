// Load environment variables from .env file
require('dotenv').config();

// Dependencies
const Koa        = require('koa');
const bodyParser = require('koa-body');
const logger     = require('koa-logger');

// Setup application
const app  = new Koa();
const port = process.env.PORT || 3000;

// Configure middleware
app.use(bodyParser());
app.use(logger());

// Print body for POST method
app.use(async (ctx, next) => {
    await next();

    if (ctx.method === 'POST') {
        console.log(`${JSON.stringify(ctx.request.body)}`);
    }
})

// Reply to the request
app.use(ctx => {
    ctx.body = 'Message received';
});

// Start listening
app.listen(port);
console.log(`Listening on: ${port}`);
