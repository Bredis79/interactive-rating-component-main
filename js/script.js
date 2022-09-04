



const li = document.querySelectorAll(".list > button")
const btn = document.querySelector("#button")
const sectionRating = document.querySelector("#rating")
const sectionSelected = document.querySelector("#selected")
let selectedNum = document.querySelector("#selectedNum")


// select li and change background
   // for(let i = 0; i < li.length; i++)
li.forEach(function(a){

   
})


li.forEach(function(a){

   a.addEventListener("click", function(event){
     
      if(document.querySelector(".active") == null){
        this.className += " active"
      }
       else {document.querySelector('.active').classList.remove('active')
       this.className += " active";
      }
     
   
console.log(a.className)
      // insert value of the click
       selectedNum.innerText = event.target.textContent
 })  

})

//  this.style.backgroundColor = "hsl(217, 12%, 63%)"


 // After click on button toggle content

 btn.addEventListener("click", function(event){
      
    sectionSelected.style.display = "block"
    sectionRating.style.display = "none"
        
 })

