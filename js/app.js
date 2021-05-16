'use strict';

const form =  document.getElementById('form');
const table = document.getElementById('table');

function Flowers (name , img , season ){
  this.name = name;
  this.img = `./img/${name}.jpeg`;
  this.season=season;
  Flowers.all.push(this);
}


Flowers.all = [];

form.addEventListener('submit', getFlower);

function getFlower (event){
  event.preventDefault();
  let name = event.target.name.value;
  let img = event.target.image.value;
  let season = event.target.season.value;
  new Flowers(name , img , season);
  render();
  saveData();
}


function render (){
  form.innerHTML='';
  let head = document.createElement('tr');
  table.appendChild(head);


  let thE = document.createElement('th');
  head.appendChild(thE);
  thE.textContent= 'image';

  let th1E = document.createElement('th');
  head.appendChild(th1E);
  th1E.textContent= 'name';


  let th2E = document.createElement('th');
  head.appendChild(th2E);
  th2E.textContent= 'season';


  for(let i = 0 ; i < Flowers.all.length ; i++){
    let trE = document.createElement('tr');
    table.appendChild(trE);

    let td1E =document.createElement('td');
    trE.appendChild(td1E);
    td1E.textContent = `${Flowers.all[i].img}`;

    let td2E =document.createElement('td');
    trE.appendChild(td2E);
    td2E.textContent = `${Flowers.all[i].name}`;

    let td3E =document.createElement('td');
    trE.appendChild(td3E);
    td3E.textContent = `${Flowers.all[i].season}`;
  }
}


function saveData(){
  JSON.stringify(Flowers.all);
}



function getData (){
  JSON.parse(localStorage.getItem('form'));


}

getData();
