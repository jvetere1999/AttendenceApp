const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');
const checkinBtn = document.getElementById('check-in');
const userIDInput = document.getElementById("user_id");
const eventIDInput = document.getElementById("event_id");
const timeCreatedInput= document.getElementById("time_created");
axios.defaults.baseURL = 'https://api.example.com';

checkinBtn.addEventListener('click', () => {
  const userID = userIDInput.value;
  const eventID = eventIDInput.value;
  const timeCreated = timeCreatedInput.value;


  axios.post(" /url ", {
     user_id: userID,
     event_id: eventID,
     time_created: timeCreated
  })
  .then(response => {
      console.log(response);
  });
});