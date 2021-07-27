//Importing My Elements to the Script
const inputbox = document.getElementById("number-box");
const submitbtn = document.getElementById("submit-btn");
const mygame = document.getElementById("mygame");

//Adding functions to the Submit Button
submitbtn.addEventListener("click", addstatus)
submitbtn.addEventListener("click", check)

//Here is where the random number is generated every time when the page load/reload
const p = document.createElement("p")
          p.value = Math.floor(Math.random() * 10 + 1);
          console.log(p.value)

//This function runs when you press the ''Generate New Number'' button          
function randomvalue () {
    p.value = Math.floor(Math.random() * 10 + 1);
    console.log(p.value)
    mygame.children[3].remove()
    mygame.children[3].remove()
    mygame.children[2].remove()
}

//This function run when you click on the Submit Button
function addstatus () {
          if (mygame.children[2]=== undefined){
             const h4 =  document.createElement("h4")
             h4.innerHTML = "Your Status"
             mygame.appendChild(h4)
          }  
}

//This is the main function, where it will say if you guessed the number or not!
function check(){
      if (inputbox.value == p.value) {
          sucess()
          inputbox.value === ""
      } 
      else {wrong()}
}

//If you guesses the number, then this function runs
function sucess () {
     if (mygame.children[3] === undefined && mygame.children[4] === undefined) {
           const h4 = document.createElement("h4")
           h4.innerHTML = "Congratulations, you guessed the number!";
           mygame.appendChild(h4)
           const newnumber = document.createElement("button")
           newnumber.innerHTML = "Generate a New Number";
           mygame.appendChild(newnumber)
           newnumber.addEventListener("click", randomvalue )
           inputbox.value= ""    
    }
      else {
          if(mygame.children[4] !== undefined) {mygame.children[4].remove()}

          mygame.children[3].remove()

          const h4 = document.createElement("h4")
          h4.innerHTML = "Congratulations, you guessed the number!";
          mygame.appendChild(h4)

          const newnumber = document.createElement("button")
          newnumber.innerHTML = "Generate a New Number";
          mygame.appendChild(newnumber)
          newnumber.addEventListener("click", randomvalue )
        }
}

//If you don't hit the number, this function will run
function wrong (){
    if (mygame.children[3] === undefined){
         const h4 = document.createElement("h4")
         h4.innerText = "Wrong Number, Try Again!";
         mygame.appendChild(h4)}
         inputbox.value=""

   

}



