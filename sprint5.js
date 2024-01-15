// // ZAD 1 //


const people = [
   {
     firstName: "Alicja",
     lastName: "Kowalska",
   },
   {
     firstName: "Jan",
     lastName: "Nowak",
   }
    ,{
     firstName: "Halina",
     lastName: "Malina",
   }
   ,{
    firstName: "Irka",
    lastName: "O",
   }
 ];

// Napisz funkcję, która przetwarza każdą osobę w tablicy people w następujący sposób:
// a) Dla każdego imienia, weź ostatnie 3 litery, odwróć ich kolejność i zapisz do zmiennej.
// b) Dla każdego nazwiska, weź pierwsze 3 litery, zamień miejscami pierwszą i ostatnią literę, i dołącz do zmiennej utworzonej w punkcie a).
// c) Zmień wielkość liter w taki sposób, aby ostateczny pseudonim (nickname) zaczynał się wielką literą, a reszta liter była mała.
// d) Jeśli liczba znaków w imieniu lub nazwisku jest mniejsza niż 2, pseudonim będzie odpowiednio krótszy.
function nickname(object){
  for(let element of object){
      let firstName = element.firstName
      .split("")
      .slice(-3)
      .reverse()
      .join("")
      .toLowerCase();

      let lastName = element.lastName
      .split("")
      .slice(0, 3)
      .reverse()
      .join("")
      .toLowerCase();

    let nick = firstName + lastName; 
    let nickName = nick.split("");
    let firstLetter = nickName[0].toUpperCase();
    nickName.shift();
    let fullNickName = firstLetter + nickName.join("");

    if(element.firstName.length || element.lastName.length > 2){
      element.nickName = fullNickName;
    }else {
      element.nickName = fullNickName.slice(-2);
    }
  }
}
nickname(people);

// // ZAD 2 //

// Dane wejściowe
// const people = [
//   {
//     firstName: "Alicja",
//     lastName: "Kowalska",
//     nickname: "Ajcwok"
//   },
//   {
//     firstName: "Jan",
//     lastName: "Nowak",
//     nickname:"Najwon",
//   },
//   {
//     firstName: "Halina",
//     lastName: "Malina",
//     nickname:"Anilam",
//   }
// ];
function age(object){
  for(let element of object){
    let lengthName = element.firstName.length + element.lastName.length;
    let keys = Object.keys(element);
    let sumKeys = keys.join('').length;
    if(lengthName % 2 === 0){
      element.age = sumKeys - element.firstName.length;
    }else {
      element.age = lengthName;
    }
    }
    console.log(object);
}
age(people);
// Rozszerz funkcję z poprzedniego zadania:
// Dodaj pole age, które jest wyliczane na podstawie sumy liter w imieniu i nazwisku. Jeżeli ilość liter w imieniu i
// nazwisku jest parzysta to wiek będzie będzie wyliczany, na postawie długości kluczy znajdujących się w obiekcie pomniejszone o długość imienia.

// // Zad 3 //

// Dane Wejściowe
// const people = [
//   {
//     firstName: "Alicja",
//     lastName: "Kowalska",
//     nickname: "Ajcwok"
//     age:19
//   },
//   {
//     firstName: "Jan",
//     lastName: "Nowak",
//     nickname:"Najwon",
//     age:22
//   },
//   {
//     firstName: "Waldemar",
//     lastName: "Malina",
//     nickname:"Ramlam",
//     age:17
//   }
// ];

//     a) Do każdego obiektu dodaj funkcję introduceYourself, która za pomocą słówka this wyświetli w konsoli tekst powitalny.
//     Dla powyższego przykładu tekst powinien wyglądać w następujący sposób:
//     "Cześć jestem Alicja Kowalska, ale w szkole mówią na mnie [Ajcwok]."
//     b) za pomocą pętli forEach, wywołaj funkcję powitalną dla każdego elementu tablicy. W rezultacie na ekranie powinien
//     pojawić się tekst powitalny dla każdej osoby w tablicy
function introduce(object) {
  for (const person of object) {
    person.introduceYourself = function () {
      return `Cześć jestem ${this.firstName} ${this.lastName}, ale w szkole mówią na mnie ${this.nickName}`;
    };
  }
}
function addIntroduce(object) {
  object.forEach((person) => {
    console.log(person.introduceYourself());
  });
}
introduce(people);
addIntroduce(people);
// ZAD 4.

//  // Dane wejściowe //
//  [{
//     firstName: "Alicja",
//     lastName: "Kowalska",
//     nickname: "Ajcwok",
//     age:19,
//     introduceYourself: // funkcja //
//     }
//     itd ... ]

// const colors = ["red", "green", "yellow", "blue", "pink", "orange"];

// Napisz funkcję, która :
//     a) przyjmie parametr typu number z zakresu 1 - 30
//     b) funkcja ma przyjmować jeden parametr typu number z zakresu 1 - 30
//     c) jeżeli podany parametr jest poza zakresem, powinien wyświetlić się odpowiedni komunikat
//         - podałeś za małą liczbę, liczba nie może być mniejsza niż 1
//         - podałeś za dużą liczbę, liczba nie może być większa niż 30
//     d) w przypadku wywołania funkcji bez parametru, powinniśmy ustawić domyślną wartość na 5
//     e) funkcja powinna zsumować pary klucz + wartość trzech pierwszych pozycji w obiekcie (użyj do tego Object.entries)
//     odjąć od tej sumy liczbę wprowadzoną w parametrze, a następnie za pomocą działania modulo (%) względem długości tablicy kolorów
//     wyznaczyć index
//     f) za pomocą indexu funkcja powinna wyciągnąć odpowiedni kolor z tablicy i wyświetlić go w konsoli.
// ​
//     Dla powyższego przykładu i liczby 5 wprowadzonej w parametrze, powinniśmy uzyskać wynik:
//     (45 - 5) % 6 = 4
//     console.log(colors[4]) //pink
// ​
//     Hints
//     - jeżeli po odjęciu parametru funkcji od sumy liter uzyskacie wartośc ujemną, możecie użyć metody z biblioteki Math,
//     Math.abs(-20), która zamieni liczbę na wartość absolutną, czyli dodatnią

const colors = ["red", "green", "yellow", "blue", "pink", "orange"];

function color(object, number = 5) {
  if(number < 1) {
    console.log("podałeś za małą liczbę, liczba nie może być mniejsza niż 1");
  }else if(number > 30) {
    console.log("podałeś za dużą liczbę, liczba nie może być większa niż 30");
  } else {
  let keyValue = Object
  .entries(object)
  .slice(0, 3);
  let sum = 0;
  for(const [keys, values] of keyValue){
    sum += keys.length + values.firstName.length + values.lastName.length + values.nickName.length;
  }
  let colorIndex = Math.abs(sum - number) % colors.length;
  console.log("My color is: " + colors[colorIndex]);
  }
}
color(people, 7);
