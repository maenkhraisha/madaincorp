const URL =
  'http://filltext.com/?rows=10&fname=Maen&lname=Khraisha&category=[%22category1%22,%22category2%22,%22category3%22]&pretty=true';

const fetchData = async () => {
  const res = await fetch(URL);
  const data =  res.json();    
  return data;
};

export default fetchData;
