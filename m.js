




const newskey="71ac389cf4a74515b209b1dd9807c97e"
const weatherKey="9f277e7f12ab452dad53f63de8159005"
let pn=1
let next=document.querySelector("#next")
let prev=document.querySelector("#prev")
const searchWord=document.getElementById("search")
const serachBtn=document.getElementById("searchButton")
const s=document.getElementById("s")
const sb=document.getElementById("sb")
let catApi
let sw=""
let sweather=""

serachBtn.addEventListener("click",(event)=>{
console.log(event.target.id)
event.preventDefault()
sw=searchWord.value

const searchApi=`https://newsapi.org/v2/everything?q=${sw}&from=2022-01-02&page=${pn}&sortBy=publishedAt&apiKey=${newskey}`

fetch(searchApi)
  .then(response => response.json())
  .then(data => {
    document.getElementById("newsCard").innerHTML =data.articles.map(user => 
        `<div class="card my-3">
        <div class="row g-0 ">
        <div class="col-md-3 text-center">
        <img src=" ${user.urlToImage}" class="img-fluid rounded-start" alt="product">
        </div>
    <div class="col-md-6 ">
    <div class="card-body">
    <h5 class="card-title">${user.title}</h5>
    <p class="card-text">${user.description}</p>
    <a href="${user.url}">Read more</a>
    </div>
    </div>
   
        </div>
        </div>
       `
    ).join('')
  });

})
let cat=document.querySelectorAll("#headings a")
for(let heading of cat){
    heading.addEventListener("click",(e)=>{
let category=e.target.id
 catApi=`https://newsapi.org/v2/top-headlines?category=${category}&page=${pn}&apiKey=71ac389cf4a74515b209b1dd9807c97e`

fetch(catApi)
  .then(response => response.json())
  .then(data => {
    document.getElementById("newsCard").innerHTML =data.articles.map(user => 
        `<div class="card my-3">
        <div class="row g-0 ">
        <div class="col-md-3 text-center">
        <img src=" ${user.urlToImage}" class="img-fluid rounded-start" alt="product">
        </div>
    <div class="col-md-6 ">
    <div class="card-body">
    <h5 class="card-title">${user.title}</h5>
    <p class="card-text">${user.description}</p>
    <a href="${user.url}">Read more</a>
    </div>
    </div>
   
        </div>
        </div>
       `
    ).join('')
  });
    })
}

next.addEventListener("click",()=>{
pn++;
if(pn>=2){
    prev.disabled=false
}
if(pn==5){
    prev.disabled=true
} catApi=`https://newsapi.org/v2/top-headlines?&page=${pn}&apiKey=71ac389cf4a74515b209b1dd9807c97e`
fetch(catApi)
  .then(response => response.json())
  .then(data => {
    document.getElementById("newsCard").innerHTML =data.articles.map(user => 
        `<div class="card my-3">
        <div class="row g-0 ">
        <div class="col-md-3 text-center">
        <img src=" ${user.urlToImage}" class="img-fluid rounded-start" alt="product">
        </div>
    <div class="col-md-6 ">
    <div class="card-body">
    <h5 class="card-title">${user.title}</h5>
    <p class="card-text">${user.description}</p>
    <a href="${user.url}">Read more</a>
    </div>
    </div>
   
        </div>
        </div>
       `
    ).join('')
  });
})

prev.addEventListener("click",()=>{
  
    if(pn>=2){
        prev.disabled=false
    }  pn--;
    catApi=`https://newsapi.org/v2/top-headlines?&page=${pn}&apiKey=71ac389cf4a74515b209b1dd9807c97e`
    fetch(catApi)
      .then(response => response.json())
      .then(data => {
        document.getElementById("newsCard").innerHTML =data.articles.map(user => 
            `<div class="card my-3">
            <div class="row g-0 ">
            <div class="col-md-3 text-center">
            <img src=" ${user.urlToImage}" class="img-fluid rounded-start" alt="product">
            </div>
        <div class="col-md-6 ">
        <div class="card-body">
        <h5 class="card-title">${user.title}</h5>
        <p class="card-text">${user.description}</p>
        <a href="${user.url}">Read more</a>
        </div>
        </div>
       
            </div>
            </div>
           `
        ).join('')
      });
    })

    sb.addEventListener("click",(event)=>{
        console.log(event.target.id)
        event.preventDefault()
        sweather=s.value
        
        const searchApi=`https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&city=${sweather}&key=${weatherKey}&include=minutely`
        
        fetch(searchApi)
        .then(response => response.json())
        .then(data => {
      
      console.log(data.data)
      
      
          
      
      fetch(weatherApi)
      .then(response => response.json())
      .then(data => {
    let temp =data.data[0].app_temp;
    let cityName=data.data[0].city_name;
    let status=data.data[0].weather.description;
    let icon=data.data[0].weather.icon;
    
       
    
        document.getElementById("weather").innerHTML = `${temp} <br> ${status} <br> ${cityName} <img src="https://www.weatherbit.io/static/img/icons/${icon}.png"/>`
        
    
    
    
    
      });
      
      
      
      
        });
        
        })
const weatherApi=`https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&city=Jeddah&key=${weatherKey}&include=minutely`

fetch(weatherApi)
  .then(response => response.json())
  .then(data => {
let temp =data.data[0].app_temp;
let cityName=data.data[0].city_name;
let status=data.data[0].weather.description;
let icon=data.data[0].weather.icon;

   

    document.getElementById("weather").innerHTML = `${temp} <br> ${status} <br> ${cityName} <img src="https://www.weatherbit.io/static/img/icons/${icon}.png"/>`
    




  });

 





