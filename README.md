tracer
======

Simple code tracer, use exception stack info to implemence.

## Installing
```bash
bower install tracer --save
```

## How to use ?
```javascrip
<script src="bower_components/tracer/index.js"></script>
<script>
    function outer () {
        !function inner () {
            tracer('Who call me ? Where am I ?')
        }();
    }
    outer();
</script>
```
Look at the console of Developer Tools, it will output:
```
▶ Who call me ? Where am I ?
    at inner (/path/to/project/index.html:12:17)
    at outer (/path/to/project/index.html:13:14)
    at /path/to/project/index.html:15:9
```

## License
The MIT License (MIT)

Copyright (c) 2014 guankaishe

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.