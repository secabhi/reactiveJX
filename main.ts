import { Observable } from 'rxjs';

let numbers = [1, 6, 10]
let source = Observable.create(observer => {
    let index = 0;
    let getValue = () => {
        observer.next(numbers[index++]);

        if (index < numbers.length) {
            setTimeout(getValue, 2500)
        }
        else {
            observer.complete();
        }
    }

    getValue();
})

source.subscribe(
    value => console.log(`value is ${value}`),
    e => console.log(`error ${e}`),
    () => console.log("completed")
)