console.log("I am javascript on your page!");

import { films } from './films.js'
import { people } from './people.js'

console.log(films[0].title);
let mainArea = document.querySelector("main");

let film1 = document.createElement("div");
let title1 = document.createElement("h1");
let crawl1 = document.createElement("p");

film1.appendChild(title1);
film1.appendChild(crawl1);

title1.textContent = films[0].title;
crawl1.textContent = films[0].opening_crawl;

mainArea.appendChild(film1);

let film2 = document.createElement("div");
let title2 = document.createElement("h1");
let crawl2 = document.createElement("p");

film2.appendChild(title2);
film2.appendChild(crawl2);

title2.textContent = films[1].title;
crawl2.textContent = films[1].opening_crawl;

mainArea.appendChild(film2);

let film3 = document.createElement("div");
let title3 = document.createElement("h1");
let crawl3 = document.createElement("p");

film3.appendChild(title3);
film3.appendChild(crawl3);

title3.textContent = films[2].title;
crawl3.textContent = films[2].opening_crawl;

mainArea.appendChild(film3);

let film4 = document.createElement("div");
let title4 = document.createElement("h1");
let crawl4 = document.createElement("p");

film4.appendChild(title4);
film4.appendChild(crawl4);

title4.textContent = films[3].title;
crawl4.textContent = films[3].opening_crawl;

mainArea.appendChild(film4);

let film5 = document.createElement("div");
let title5 = document.createElement("h1");
let crawl5 = document.createElement("p");

film5.appendChild(title5);
film5.appendChild(crawl5);

title5.textContent = films[4].title;
crawl5.textContent = films[4].opening_crawl;

mainArea.appendChild(film5);

let film6 = document.createElement("div");
let title6 = document.createElement("h1");
let crawl6 = document.createElement("p");

film6.appendChild(title6);
film6.appendChild(crawl6);

title6.textContent = films[5].title;
crawl6.textContent = films[5].opening_crawl;

mainArea.appendChild(film6);

let film7 = document.createElement("div");
let title7 = document.createElement("h1");
let crawl7 = document.createElement("p");

film7.appendChild(title7);
film7.appendChild(crawl7);

title7.textContent = films[6].title;
crawl7.textContent = films[6].opening_crawl;

mainArea.appendChild(film7);

people.forEach(function(people) {
    let peopleDiv = document.createElement('div')
    let name = document.createElement('h1')
    let gender = document.createElement('h3')
    let pic = document.createElement('img')

    peopleDiv.appendChild(name)
    peopleDiv.appendChild(gender)
    peopleDiv.appendChild(pic)

    let charNum = getCharNumber(people.url)

    name.textContent = people.name
    gender.textContent = people.gender
    pic.src = 'https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg'
    
    mainArea.appendChild(peopleDiv)
})

function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end -2, end)
    if(charID.indexOf('/') !== -1 ) {
        return charID.slice(1,2)
    } else {
        return charID
    }
}

const maleCharacters = people.filter(people => people.gender === 'male')
console.log(maleCharacters)
const femaleCharacters = people.filter(people => people.gender === 'female')
console.log(femaleCharacters)