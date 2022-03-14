import { useState } from "react";

function MainContent(): JSX.Element {
  return <></>;
}

function isFizz(num: number): boolean {
  let ans = true;
  if (num % 3 === 0) {
    ans = true;
  }
  return ans;
}

function isBuzz(num: number): boolean {
  let ans = true;
  if (num % 5 === 0) {
    ans = true;
  }
  return ans;
}

export default MainContent;
