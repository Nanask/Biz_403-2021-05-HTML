console.log("안녕하세요");
let arr = [];
// 공백배열에 데이터 추가하기
arr.push("홍길동");
arr.push("이몽룡");
arr.push("성춘향");
//배열 전체 내용 확인하기
console.log(arr);
console.log(arr[1]);

// spread 연산자
// ES6+ 에서 사용하는 배열과 관련된 연산자
let arrCopy = [...arr, "임꺽정"];
//arrCopy = [arr[0],arr[1],arr[2]] 이렇게 사용할 수 있으나 한번에 나타낼때는 spread 연산자를 사용하자
console.log(arrCopy);
console.log("arrCopy", arrCopy);
