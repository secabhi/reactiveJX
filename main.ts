import { Observable } from 'rxjs';

/*let numbers = [1, 6, 10]
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
})*/

let round = document.getElementById("round");

let source = Observable.fromEvent(document,"mousemove")
                       .map((e:MouseEvent)=>{
                           return {
                           x:e.clientX,
                           y:e.clientY
                           }
                       })
                       .filter(value=> value.x<500)
                       .delay(500)


function onNext(value){
    round.style.left = value.x;
    round.style.top = value.y;

}

source.subscribe(
    onNext,
    e => console.log(`error ${e}`),
    () => console.log("completed")
)