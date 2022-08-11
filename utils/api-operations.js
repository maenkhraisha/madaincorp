const URL =


  'http://filltext.com/?rows=10&fname=Maen&lname=Khraisha&category=["category1","category2","category3"]&pretty=true';

const fetchData = async () => {
  const res = await fetch(URL);
  const data =  res.json();    
  return data;
};

export default fetchData;
