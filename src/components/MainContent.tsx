import { useState } from "react";
let count = 1;
function MainContent(): JSX.Element {
  const [numberFromRender, queueRerenderedWithNumber] = useState<[any]>([1]);
  //let count = 1;
  const checkFizzBuzz = () => {
    if (isFizz(count)) {
      queueRerenderedWithNumber(["Fizz"]);
    } else if (isBuzz(count)) {
      queueRerenderedWithNumber(["Buzz"]);
    } else {
      queueRerenderedWithNumber([count]);
    }
    console.log("the current number is : ", count);
    console.log("the render number is : ", numberFromRender);
    count++;
  };

  return (
    <>
      <h1> FizzBuzz Game</h1>
      <p>Your Current Number: {count - 1}</p>
      <p> the render number is: {numberFromRender.join()}</p>
      <button onClick={checkFizzBuzz}>Next</button>
      <p>{numberFromRender.map(makeList)}</p>
    </>
  );
}
//count ++;
function isFizz(num: number): boolean {
  let ans = false;
  if (num % 3 === 0) {
    ans = true;
  }
  return ans;
}

function isBuzz(num: number): boolean {
  let ans = false;
  if (num % 5 === 0) {
    ans = true;
  }
  return ans;
}

function makeList(str: any) {
  return (
    <>
      <ul>
        <li>{str} </li>
      </ul>
    </>
  );
}

export default MainContent;
