const vopros = document.querySelector(".vopros");
const button1 = document.querySelector(".variant-1");
const button2 = document.querySelector(".variant-2");
const button3 = document.querySelector(".variant-3");
const button4 = document.querySelector(".variant-4");

const otvet = [];
const pravOtvet = [1, 3, 4, 3, 1, 4, 1, 2, 2, 1];
const zadacha = ['Витя прочитал 100 страниц из книги, при этом ему осталось прочитать в 1,5 раза больше. Сколько процентов книги прочел Витя? Сколько процентов ему осталось проесть?', 'Стоимость книги, сначала увеличили на 20%, а потом снизили на 15 рублей. Сколько стоила книга сначала, если теперь она стоит 225 рублей?', 'В треугольнике ABC угол ∠A равен 48°, угол ∠B равен 32°. Постройте треугольник ABC. Чему равен угол ∠C? Чему равна сумма всех углов треугольника?', 'В магазине до обеда было продано 60 кг муки, а осталось в 1,5 раза больше, чем продано. Сколько процентов всей муки было продано до обеда? Сколько процентов муки осталось в магазине?', 'Запишите среднее арифметическое чисел: 3, 4,5, 12.', 'Велосипедист ехал со скоростью 18 км/час в течении 2,1 часа, а со скоростью 22 км/час 1,9 часа. Вычислите среднюю скорость велосипедиста.', 'Группа туристов путешествовала 3 дня. В первый день они преодолели 30% всего пути, во второй 22%, а в третий остальные 24 км. Какое расстояние преодолели туристы за 3 дня?', 'В столовую завезли картофель, лук и морковь. Картофеля завезли 80 кг, что составило  70%  от общего количества завезенных. Сколько моркови завезли в столовую, если лук составил  15%  всех овощей?', 'В торговый павильон привезли 206 кг фруктов. Слив 7 ящиков по 9,5 кг в каждом, груш - 6 ящиков по 8,7 кг в каждом, и 8 ящиков абрикос. Сколько кг абрикос было в каждом ящике?', 'Два велосипедиста, одновременно начали движение в разных направлениях. Скорость одного 28,4 км/ч, другого 19,7 км час. На каком расстоянии друг от друга будут велосипедисты через 1,8 часа.'
];
const variant = [['60%', '55%', '50%', '40%'], ['190', '180', '200', '205'], ['89', '92', '90', '100'], ['65%', '55%', '60%', '40%'], ['6.5', '4.2', '5.5', '6'], ['18', '18.2', '19', '19.9'], ['50', '55', '60', '65'], ['11', '12', '10', '14'], ['10.2','9.7', '11.9', '9.2'], ['86.58 км', '72.95 км', '85.43 км', '87.89 км']];
let num = 0;
let bal = 0;
let massage = '';


button1.addEventListener("click", (e) => {
  otvet.push(1);
  test();
});

button2.addEventListener("click", (e) => {
  otvet.push(2);
  test();
});

button3.addEventListener("click", (e) => {
  otvet.push(3);
  test();
});

button4.addEventListener("click", (e) => {
  otvet.push(4);
  test();
});

function test() {
  if(num == 9) {
    final();
    return;
  }

  vopros.innerHTML = `<p>${zadacha[num]}</p>`;
  button1.innerHTML = `<p>${variant[num][0]}</p>`;
  button2.innerHTML = `<p>${variant[num][1]}</p>`;
  button3.innerHTML = `<p>${variant[num][2]}</p>`;
  button4.innerHTML = `<p>${variant[num][3]}</p>`;
  num++;
}

test();

function final() {
  bal = 0;
  otvet.forEach((item, i) => {
    if(item == pravOtvet[i]) {
      bal += 10;
    }
  });

  if(bal == 100) {
    massage = 'ты гений!!!'; 
  }else if(bal > 70) {
    massage = 'хорошо ты молодец!'; 
  }else {
    massage = 'попробуй еще раз'; 
  }


  vopros.innerHTML = `<p>${bal} баллов ${massage}</p>`;
  button1.innerHTML = `<p></p>`;
  button2.innerHTML = `<p></p>`;
  button3.innerHTML = `<p></p>`;
  button4.innerHTML = `<p></p>`;
}

console.log(zadacha.length);