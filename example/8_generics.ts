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
  //text.split string과 number의 공통점에관한 부분만 접근가능.
  //split같은 경우 string에서만 사용 가능하기 때문에 에러가 난다.
  return text;
}

//const a = logText("a");
// a.split < 이것도 에러가 난다 number가 들어 갈 수 있기때문.
//logNumber(10);

//제네릭<T>
//호출 할 시점에 타입을 넘겨준다.
//그렇다면 인자값과 리턴값 타입도 겨주면서 동적으로 정해줄 수 있다.
function logGenerics<T>(text: T): T {
  console.log(text);
  return text;
}

// 명시적으로 string으로 정해주면 무슨타입이 들어갈지 명확하게 알 수 있다.
const str = logGenerics<string>("할루");
// str.split 제네릭으로 타입을 정해주었기 때문에 split 사용 가능.

// boolean값으로 지정 되어 있다.
const flag = logGenerics<boolean>(true);

// 인터페이스에 제네릭 선언
// 호출과 동시에 타입을 선언하면 string, number, boolean... 유연하게 사용 가능하다.
// selected가 공통으로 들어 갈경우 사용하면 유용하다.
interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<string> = { value: "test", selected: true };
