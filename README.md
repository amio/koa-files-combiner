# koa-files-combiner

A koa middleware for combining files.

### Usage

```javascript
var koa = require('koa')
var combine = require('koa-files-combiner')

var app = koa()
app.use(combine('path/to/static/files/root'))

app.listen(3000)
```

Then request the files bundle in browser:
```
http://localhost:3000/combine/js/global/libs.min.js,/bootstrap/bootstrap.min.js
                     /-------/--/------------------,/--------------------------
                        |     |         file1                 file2
                        |     |
                        |    type("js" or "css", for MIME)
                        |
                      use combine service
```
