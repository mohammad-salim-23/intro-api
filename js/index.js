function LoadUser2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>displayUser(data));
}

function displayUser(users){
      for(const data of users){
        console.log(data.name);
        const list = document.getElementById('user-list');
        const li = document.createElement('li');
        li.innerText = data.name;
        list.appendChild(li);
      }
}