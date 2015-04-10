# is-bzip2 [![Build Status](http://img.shields.io/travis/kevva/is-bzip2/master.svg?style=flat)](https://travis-ci.org/kevva/is-bzip2)

> Check if a Buffer/Uint8Array is a BZIP2 file


## Install

```
$ npm install --save is-bzip2
```


## Usage

```
var read = require('fs').readFileSync;
var isBzip2 = require('is-bzip2');

isBzip2(read('foo.bz2'));
//=> true
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
