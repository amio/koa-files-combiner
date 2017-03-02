# koa-files-combiner

[![Greenkeeper badge](https://badges.greenkeeper.io/amio/koa-files-combiner.svg)](https://greenkeeper.io/)

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

### Options

```javascript
app.use(combine('path/to/static/files/root', options))
```
which `options` could be:
```
{
  prePathParser: function(url) { /*...*/ return url },
  pathParser: function(url) { /*...*/ return filesObj },
  postPathParser: function(filesObj) { /*...*/ return filesObj }
}
```

the `filesObj` should be:
```
{
  type: 'js',
  files: ['path/to/file1.js', 'path/to/file2.js']
}
```
