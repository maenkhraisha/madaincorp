import fetchData from './utils/api-operations.js';

const rootDiv = document.getElementById('list-container');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
let dataFromApi = [];

const generateHtmlList = (data) => {
    rootDiv.innerHTML = ``;
  const html = 
    `<div >
        ${data.map((item) => {
            return `<div class="list-item">
                        <p>${item.fname.slice(0,1)}${item.lname.slice(0,1)}</p>
                        <p>${item.fname}</p>
                        <p>${item.lname}</p>
                        <p>${item.category}</p>
                    </div>`;
        })}
    </div>`;
  rootDiv.innerHTML = html;
};

window.addEventListener('load', async () => {
  dataFromApi = await fetchData();
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