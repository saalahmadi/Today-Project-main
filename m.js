




const newskey="71ac389cf4a74515b209b1dd9807c97e"
const weatherKey="9f277e7f12ab452dad53f63de8159005"
const searchWord=document.getElementById("search")
let sw=search(searchWord)



const newsApi=`https://newsapi.org/v2/everything?q=${sw}&from=2022-01-02&sortBy=publishedAt&apiKey=${newskey}`
const weatherApi=`https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&city=Jeddah&key=${weatherKey}&include=minutely`



fetch(weatherApi)
  .then(response => response.json())
  .then(data => {

console.log(data.data)


    

    document.getElementById("weather").innerHTML =data.data.map(user => 
        `<div class="card my-3">
        <div class="row g-0 ">
    <div class="col-md-6 ">
    <div class="card-body">
    <h5 class="card-title">${user.city_name}</h5>
    <p class="card-text">${user.temp}</p>
    </div>
    </div>
   
        </div>
        </div>
       `
    ).join('')




  });

fetch(newsApi)
  .then(response => response.json())
  .then(data => {





    console.log(data.articles)

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




   
function search(s){
    s.addEventListener("input",e=>{
        const value=e.target.value
        console.log(value)
    })
}