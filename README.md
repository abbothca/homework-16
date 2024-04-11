# homework-16
## HW16 - "Promise"

**1.** _Є наступний код:_
```
    console.log('start');
    
    const promise1 = new Promise((resolve, reject) => {
    console.log(1)
    resolve(2)
    })
    
    promise1.then(res => {
    console.log(res)
    })
    
    console.log('end');
```

_Яким буде результат його виклику? Чому? Опишіть як працює цей код._

**2.** _Є наступний код:_
```
Promise.resolve(1)
		.then((x) => x + 1)
		.then((x) => { throw new Error('My Error') })
		.catch(() => 1)
		.then((x) => x + 1)
		.then((x) => console.log(x))
		.catch(console.error)
```

_Яким буде результат його виклику? Чому? Опишіть як працює цей код._

**3.** _Є наступний код:_
```
const promise = new Promise(res => res(2));
	promise.then(v => {
	        console.log(v);
	        return v * 2;
	    })
	    .then(v => {
	        console.log(v);
	        return v * 2;
	    })
	    .finally(v => {
	        console.log(v);
	        return v * 2;
	    })
	    .then(v => {
	        console.log(v);
	    });
```
_Яким буде результат його виклику? Чому? Опишіть як працює цей код._
_Яким буде результат його виклику? Чому? Опишіть як працює цей код._
