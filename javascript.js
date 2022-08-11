import fetchData from './utils/api-operations.js';

const rootDiv = document.getElementById('root');

const generateHtmlList = (data) => {
  
  console.log(data);
  const html = `<div>${data.map((item) => {
    return `<p>${item.fname}</p><p>${item.lname}</p><p>${item.category}</p>`
  })}</div>`;
  rootDiv.innerHTML = html;
};

window.addEventListener('load', async () => {
  const data = await fetchData();
  generateHtmlList(data);
});
