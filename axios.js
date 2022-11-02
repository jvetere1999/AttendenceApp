const checkIn = document.getElementById("check-in");
const createEvent = document.getElementById("create-event");
const updateEvent = document.getElementById("update-event");
axios.defaults.baseURL = 'https://httpbin.org';

checkIn.addEventListener('submit', async function(e){
  e.preventDefault();

  const formData = new FormData(checkIn);

  console.log([...formData]);

  try{
    const res = await axios.post('/post', formData) 
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
    const res = await axios.post('/post', formData)
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
    const res = await axios.post('/post', formData)
    console.log(res);
  } catch(e) {
    console.log(error);
  }
 
})


