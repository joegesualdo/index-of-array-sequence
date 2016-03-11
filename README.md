## Index Of Array Sequence
> Find index of array sequence 

## Install
```
$ npm install --save index-of-array-sequence
```

## Usage
```javascript
var indexOfArraySequence = require("index-of-array-sequence")

quoteArray = ["hello", "world"]
sourceArray = ["This", "is", "a", "hello", "world", "program"]

indexOfArraySequence(quoteArray, sourceArray) 
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
| searchSequence| `Array` | An array that represent the sequence you'll be searching for|
| source | `Array` | The array to be searched |

```javascript
var indexOfArraySequence = require("index-of-array-sequence")

quoteArray = ["hello", "world"]
sourceArray = ["This", "is", "a", "hello", "world", "program"]

indexOfArrySequence(quoteArray, sourceArray) 
//=> 3
```
