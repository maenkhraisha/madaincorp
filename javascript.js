import fetchData from './utils/api-operations.js';

const rootDiv = document.getElementById('list-container');
const btnAll = document.getElementById('btn-all');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
let dataFromApi = [];

const generateHtmlList = (data) => {
  rootDiv.innerHTML = ``;
  const html = 
    `<ul >
        ${data.map((item) => {
            return `<li class="list-item">
                        <p>${item.fname.slice(0,1)}${item.lname.slice(0,1)}</p>
                        <p>${item.fname}</p>
                        <p>${item.lname}</p>
                        <p>${item.category}</p>
                    </li>`;
        })}
    </ul>`;
  rootDiv.innerHTML = html;
};

window.addEventListener('load', async () => {
  dataFromApi = await fetchData();
  console.log(dataFromApi);
  generateHtmlList(dataFromApi);
});

btn1.addEventListener('click',async()=>{
    let data = [...dataFromApi];
    data = data.filter(item=> item.category == "category1");
    generateHtmlList(data);
})

btn2.addEventListener('click', async()=>{
    let data = [...dataFromApi];
    data = data.filter(item=> item.category == "category2");
    generateHtmlList(data);
})

btn3.addEventListener('click', async()=>{
    let data = [...dataFromApi];
    data = data.filter(item=> item.category == "category3");
    generateHtmlList(data);
})

btnAll.addEventListener('click', async()=>{
    let data = [...dataFromApi];    
    generateHtmlList(data);
})