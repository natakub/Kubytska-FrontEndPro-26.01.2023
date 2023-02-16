// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями.s

function addNumbers() {
  a = 0;
  return function (b) {
    return (a += b);
  };
}

const sum = addNumbers();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
