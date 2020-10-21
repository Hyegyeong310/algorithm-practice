# algorithm-practice

### List 안의 두 개 숫자를 더했을 때 S가 되는지 판별하는 함수

#### solution1
```js
const solution1 = (list, s) => {
  // 0번째 요소부터 마지막 요소 전까지 반복
  for (let i = 0; i < list.length - 1; i++) {
    // 1번째 요소부터 마지막 요소까지 반복
    for (let j = 1 + i; j < list.length; j++) {
      // i번째 요소 + j번째 요소를 더한 값이 s와 같은지 체크
      if (list[i] + list[j] === s) {
        // 같으면 true 리턴
        return true;
      }
    }
  }
  // 같은 것이 없으면 for문을 모두 돌고 false 리턴
  return false;
};
```
- 이중 for문을 이용하여 비교하는데 어려움이 없었지만 최악의 경우 O(n^2)에 해당한다.

#### solution2
```js
const solution2 = (list, s) => {
  // 상수 obj 선언 및 Object 할당
  const obj = {};
  // 0번째 요소부터 마지막 요소까지 반복
  for(let i=0; i < list.length; i++) {
    // obj 객체에 i번째 요소의 value가 존재하면
    if (obj[list[i]]) {
      // true를 리턴
      return true;
    } else {
      // obj 객체에 i번째 요소의 value가 없으면
      // s - list[i]값을 key, list[i]를 value로 할당
      obj[s - list[i]] = list[i];
    }
  }
  // obj 객체에 i번째 요소 value가 존재하지 않으면
  // for문을 모두 돌고 false 리턴
  return false;
}
```
- for문 1번과 object 객체 사용.
- 최악의 경우 마지막 요소까지 반복되기 때문에 O(n)에 해당한다.

```js
  /*
    list는 [1,2,5,7]이고 s가 7일 때,
    for문을 모두 돌았을 경우 obj 값은 {6: 1, 5: 2, 2: 5, 0: 7}.
    Object 타입은 없는 key로 접근하면 undefined가 됌.
    즉, obj의 key에 대한 값이 있다면
    key + value (list의 두 요소의 합)이 s가 되어 true를 리턴한다.
  */
  solution2([1,2,5,7], 7); // true
  solution2([1,2,5,7], 10); // false
```

### 실행 스크립트
```bash
git clone https://github.com/Hyegyeong310/algorithm-practice.git && cd algorithm-practice

npm install

# jest test 실행
npm test
```