const  loadComment =()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(jso))
  .catch(error=>console.error("error happened",error));

}
const loadComment2 = async()=>{
    try{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await res.json();
    console.log(data);
    }
    catch(error){
        console.error("data load error");
    }
}
