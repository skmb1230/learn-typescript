// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText(10); //  숫자
// logText("하이"); // 문자열
// logText(true); // 진위값
// 위 logText()는 모든 타입이 any

// 같은 로직인데 타입이 다양하게 들어올 경우
// 유지보수 및 가독성에 좋지않다.
function logText(text: string) {
  console.log(text);
  return text;
}

function logNumber(num: number) {
  console.log(num);
  return num;
}

// 이렇게 유니온으로 사용이 가능하다.
// 하지만 타입이 많아 질 경우 boolean, object, callback function ...
// 마찬가지로 유지보수 및 가독성이 불편해질듯..
function logUnion(text: string | number) {
  console.log(text);
  return text;
}

logText("a");
logNumber(10);

//제네릭<T>
//호출할때 타입을 넘겨준다.
//그렇다면 인자값과 리턴값 타입도 겨주면서 동적으로 정해줄 수 있다.
// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }

// // 명시적으로 string으로 정해주면 무슨타입이 들어갈지 명확하게 알 수 있다.
// logText<string>("할루");
