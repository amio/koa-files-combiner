# koa-files-combiner

A koa middleware for combining files.

### Usage

```javascript
var koa = require('koa')
var serve = require('koa-static')
var combine = require('koa-files-combiner')

var app = koa()
app.use(combine(path.join(__dirname, 'path/to/static/files/root')))
app.use(serve(path.join(__dirname, 'path/to/static/files/root')))

app.listen(3000)
```
