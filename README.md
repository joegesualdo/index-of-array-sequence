## Index Of Array Sequence
> Find index of array sequence 

## Install
```
$ npm install --save index-of-array-sequence
```

## Usage
```javascript
var indexOfArraySequence = require("index-of-array-sequence")

quoteArray = ["canary", "in", "a", "coal", "mine"]
sourceArray = ["Do", "you", "think", "it's", "a", "canary", "in", "the", "coal", "mine", "or", "not?"]
found = indexOfArrySequence(quoteArray, sourceArray) 
console.log(found) #=> true
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

quoteArray = ["canary", "in", "a", "coal", "mine"]
sourceArray = ["Do", "you", "think", "it's", "a", "canary", "in", "the", "coal", "mine", "or", "not?"]
found = indexOfArrySequence(quoteArray, sourceArray) 
console.log(found) #=> true
```
