# Promise.props
Adds type-safe Bluebird like `Promise.props` to the native `Promise`.

Just import like so before you want to use it
```javascript
import '@wesley-clements/promise.props';
```
Then you can use `Promise.props` anywhere afterwards.

This example
```javascript
Promise
  .props({
    number: Promise.resolve(1),
    string: Promise.resolve("hello"),
  })
  .then(console.log)
```
will print out
```javascript
{
  number: 1,
  string: "hello"
}
```


