//Подумал лучше будет не ровно 10, а самостоятельно выбранное кол-во
function mathRadnom(min, max, quanity) {
  const arr = [];
  for (let i = 0; i < quanity; i++) {
    min = Math.ceil(min);
    max = Math.floor(max);
    arr.push(Math.floor(Math.random() * (max - min)) + min);
  }
  return arr;
}

console.log(mathRadnom(100, 200, 10));

function objRandom(amount) {
  let users = [];
  for (let i = 0; i <= amount; i++) {
    users.push({
      email: `user${i}@gmail.com`,
      age: ageRandom(12, 50),
      isMale: isMaleRandom(),
    });
  }
  return users;
}

console.log(objRandom(2));

function ageRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function isMaleRandom() {
  const rand = Boolean(Math.round(Math.random()));
  return rand;
}
