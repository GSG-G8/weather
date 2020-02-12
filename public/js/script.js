const city  = document.getElementById("city");


function cb(data){
  // console.log(11111,data)
  
  data.forEach(element => {
    const option = document.createElement("option")
    option.value = element;
    city.appendChild(option)
  });
}


const searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", ()=>{
  city.innerHTML="";
  request("/cities?q=" + searchInput.value, cb)
})