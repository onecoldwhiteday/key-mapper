

# key mapper(in progress) 

![image](logo.png)

Tiny dependentless JavaScript library for keeping project case consistensy. 
Aimed mostly for those front-ends which have to deal with some snakes in desert of REST communication, but not bounded to that.

🍥 No `RegExp` used(because it's slow!).
🍥 Framework agnostic

## installation 🥢 

``` bun install key-mapper```
``` pnpm install key-mapper```
``` yarn add key-mapper```
``` npm install key-mapper```

## usage 🍜 
Import separately only those parts you need.
```js    
import { toSnake, toCamel, keysToSnake, keysToCamel } from 'key-mapper'

// Basics
toSnake(str) // someKey -> some_key 
toCamel(str) // some_key -> someKey

// Do not worry, those methods are recursive
keysToSnake(obj) 
/* { someKey: 'value', also: { childKey: 'value1' } } -> 
    -> { some_key: true, also: { child_key: 'value1' } } */
keysToCamel(obj)
/* { some_key: 'value', also: { child_key: 'value1' } } -> 
    -> { someKey: true, also: { childKey: 'value1' } } */
```


### easy way to setup it on project initialisation and forget 🥡

`responseToCamel`  adds interceptor for every response you get without redundant modification. 
```js
import { reponseToCamel } from 'key-mapper'
// If you use fetch
reponseToCamel();
// If you use Axios
reponseToCamel(axiosInstance);
```

`payloadToSnake` adds interceptor for every POST/PUT/PATCH request you send.
```js
import { payloadToSnake } from 'key-mapper'
// If you use fetch
payloadToSnake();
// If you use Axios
payloadToSnake(axiosInstance);
```

or you can add them at once: 
```js
import { useKeyMapper } from 'key-mapper'
// If you use fetch
useKeyMapper()
// If you use Axios
useKeyMapper(axiosInstance)
```

## performance 🏮
TODO
Test results, benchmarks etc

## collaboration 🍢
TODO
Create Pull Request, Issues, blah blah
