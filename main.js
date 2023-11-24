var row=document.querySelector(".row")
console.log(row);
function show(){
    fetch('https://api.tvmaze.com/shows/1/crew')
        .then((msg)=>
           msg.json())
        .then((n)=>{
            for(e of n){
                creation()
                console.log(e);
            }
        })
        .catch((err)=>{
            console.log("Error");
        })
        
}
  show()  
const creation=(n)=>{
    row.innerHTML+=`<div class="col">
    <div class="card">
        <div class="image">
            <img src="${e.person.image.medium}" >
        </div>
        <div class="info">
            <h1 class="title"> ${e.person.name}</h1>
        </div>
        <div>
            <h3>Type : ${e.type}</h3>
        </div>
        <div>
            <ul class="list">
                <li>Gender :<span>${e.person.gender}</span></li>
                <li>DOB :<span>${e.person.birthday}</span></li>
            </ul>
        </div>
        <div class="btn">
        <a href="${e.person._links.self.href}">More details</a>
        </div>
    </div>
</div>`
  }
    
