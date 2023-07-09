// 인터페이스 제네릭을 이용하여 value값을 동적으로 사용 가능하게 만든다.
interface DropdownItem<T> {
  value: T;
  selected: boolean;
}

// interface Email {
//   value: string;
//   selected: boolean;
// }

// interface ProductNumber {
//   value: number;
//   selected: boolean;
// }

//인터페이스 타입을 지정하고 string을 제네릭에 넣어준다.
const emails: DropdownItem<string>[] = [
  { value: "naver.com", selected: true },
  { value: "gmail.com", selected: false },
  { value: "hanmail.net", selected: false },
];

const numberOfProducts: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

// createDropdownItem <T>에 동적으로 타입을 할당 받고
// DropdownItem<T>에 위 할당받은 타입을 넣어서
// DropdownItem<string> | DropdownItem<number>를 대체 할 수 있다.
function createDropdownItem<T>(item: DropdownItem<T>) {
  const option = document.createElement("option");
  if (typeof item.value === "string") {
    option.value = item.value.toString();
    option.innerText = item.value.toString();
  }
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector("#email-dropdown");
  selectTag!.appendChild(item);
});

// 테스트
numberOfProducts.forEach(function (product) {
  const item = createDropdownItem<number>(product);
});
