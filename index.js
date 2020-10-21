/*
- List에는 중복되는 수가 없다고 가정한다.
- List에는 음수가 없다고 가정한다.
- List는 요소가 2개 이상이다.
*/

// 이중 for문 O(n^2)
exports.solution1 = (list, s) => {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = 1 + i; j < list.length; j++) {
      if (list[i] + list[j] === s) {
        return true;
      }
    }
  }
  return false;
};

// for문 + object 타입 O(n)
exports.solution2 = (list, s) => {
  const obj = {};
  for(let i=0; i < list.length; i++) {
    if (obj[list[i]]) {
      return true;
    } else {
      obj[s - list[i]] = list[i];
    }
  }
  return false;
}