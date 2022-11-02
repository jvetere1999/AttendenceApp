const checkIn = document.getElementById("check-in");
const createEvent = document.getElementById("create-event");
const updateEvent = document.getElementById("update-event");
//axios.defaults.baseURL = 'https://api.example.com';

checkIn.addEventListener('submit', async function(e){
  e.preventDefault();

  const formData = new FormData(checkIn);

  console.log([...formData]);

  try{
    const res = await axios.post('https://httpbin.org/post', formData) //replace full url with /url
    console.log(res);
  } catch(e) {
    console.log(error);
  }
 
})

createEvent.addEventListener('submit', async function(e){
  e.preventDefault();

  const formData = new FormData(createEvent);

  console.log([...formData]);

  try{
    const res = await axios.post('https://httpbin.org/post', formData)
    console.log(res);
  } catch(e) {
    console.log(error);
  }
 
})

updateEvent.addEventListener('submit', async function(e){
  e.preventDefault();

  const formData = new FormData(updateEvent);

  console.log([...formData]);

  try{
    const res = await axios.post('https://httpbin.org/post', formData)
    console.log(res);
  } catch(e) {
    console.log(error);
  }
 
})


