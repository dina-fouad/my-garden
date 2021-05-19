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
  table.innerHTML='';
  let head = document.createElement('tr');
  table.appendChild(head);


  let th1 = document.createElement('th');
  head.appendChild(th1);
  th1.textContent= 'image';

  let th2 = document.createElement('th');
  head.appendChild(th2);
  th2.textContent= 'Name';


  let th3 = document.createElement('th');
  head.appendChild(th3);
  th3.textContent= 'season';


  for(let i = 0 ; i < Flowers.all.length ; i++){
    let trE = document.createElement('tr');
    table.appendChild(trE);

    let td1 =document.createElement('img');
    trE.appendChild(td1);
    td1.src = `${Flowers.all[i].img}`;

    let td2 =document.createElement('td');
    trE.appendChild(td2);
    td2.textContent = `${Flowers.all[i].name}`;

    let td3 =document.createElement('td');
    trE.appendChild(td3);
    td3.textContent = `${Flowers.all[i].season}`;
  }
}





function saveData() {
  JSON.stringify(Flowers.all);
}


function getDate() {
  JSON.parse(localStorage.getItem('form'));

}

getDate();
