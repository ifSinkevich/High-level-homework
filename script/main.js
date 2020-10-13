'use strict';

let lang = prompt('Выбирайте ru или en:');

if (lang === 'ru') {
  console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
}
if (lang === 'en') {
  console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
}

switch (lang) {
  case 'ru':
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
    break;
  case 'en':
    console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
}

let days = ['ru', 'en'];
days['ru'] = 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье';
days['en'] = 'Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday';
console.log(days[lang]);
  


let name = prompt('Как Вас зовут?');
let namePerson = name == 'Артём' ? 'Директор' : name == 'Максим' ? 'Преподаватель' : 'Студент';
console.log(namePerson);

