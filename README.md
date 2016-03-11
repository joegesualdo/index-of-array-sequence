## Index Of Array Sequence
> Find index of array sequence 

## Install
```
$ npm install --save index-of-array-sequence
```

## Usage

#### Find the index of an array sequence
```javascript
var indexOfArraySequence = require("index-of-array-sequence")

quote = ["hello","world"]
source = ["This", "is", "a", "hello", "world", "program"]

indexOfArraySequence(quote, source) 
//=> 3
```

#### Find the index of a string sequence
```javascript
var indexOfArraySequence = require("index-of-array-sequence")

quote = "hello world"
source = "This is a hello world program"

indexOfArraySequence(quote, source) 
//=> 3
```

## Test
```
$ mocaha test.js
```

## API

### `indexOfArraySequence(searchSequence, source)`
> Returns the position of the first occurrence of a specified sequence in an array. Method returns -1 if the value to search for never occurs.

| Name | Type | Description |
|------|------|-------------|
| searchSequence| `String|Array` | An array or string that represent the sequence you'll be searching for|
| source | `String|Array` | The array or string to be searched |

```javascript
var indexOfArraySequence = require("index-of-array-sequence")

quote = "hello world"
source = "This is a hello world program"

indexOfArraySequence(quote, source)
//=> 3
```
