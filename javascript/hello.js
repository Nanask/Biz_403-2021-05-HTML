console.log("반갑습니다");
let num1 = 30;
let num2 = 40;
let sum = num1 + num2;

console.log("30 + 40 = ", sum);

/*
var 키워드는 java public과 성질이 유사하다.
한번 선언된 변수를 다시 선언할 수 있다.
변수의 타입이 없다.
*/
var strName = "홍길동";
var strNation = "대한민국";
strName = 100;
var strName = 99 * 100;

/*
ES6 이상에서 사용하는 변수 선언 키워드
private과 성질이 유사하다
한번 선언된 변수를 다시 선언할 수 없다.
*/
let nation1 = "Korea";
nation1 = 200;
// let nation1 = '대한민국'
let nation2 = "대한민국";

// 배열을 선언하기
let array = [1, 2, 3, 4, 5, 6];

// 배열에서 값을 읽을때
console.log(array[0]);

// 배열 요소 중 다수의 배열을 읽을때
console.log(array[(0, 2)]);

// 배열 일부를 복사할때
let array2 = array[(0, 2, 4)];
console.log(array2);
