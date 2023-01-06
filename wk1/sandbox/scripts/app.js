const d = new Date();
const dayName = d.getDay();
const monthName = d.getMonth();
const year = d.getFullYear();

const today = document.querySelector('#today')

today.textContent = `Jacob Timothy Hair - Current Date: ${dayName}, ${monthName} ${d.getDate()}, ${year}`;

let quantity = document.querySelector('#q').value;

document.querySelector('p').innerHTML = `Welcome to <em>our</em> neighborhood!`

function getTemperature(temperature){
    return temperature;
}
let temp = 'Enter tempurature'
document.querySelector(`#temp`).value = getTemperature(temp);

const divs = document.querySelectorAll('div')


let citynames = ["New York","Sacramento","Cleveland","South Bend","Tampa Bay","Corpus Christi"];

let filterC = citynames.filter(city => city.charAt(0) === 'C');
