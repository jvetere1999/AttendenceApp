const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');
const checkinBtn = document.getElementById('check-in');


const getData = () => {
    axios.get('https://reqres.in/api/users').then(response => {
        console.log(response);
    });
};

const sendData = () => {
    axios.post('https://reqres.in/api/register', {
        email: 'eve.holt@reqres.in',
        password: 'pistol'
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err, err.response);
    });
};

const checkin = () => {
    axios.post(' url ', {
       user_id: number,
       event_id: number,
       time_created: number,
    })
    .then(response => {
        console.log(response);
    });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
checkinBtn.addEventListener('click', checkin);