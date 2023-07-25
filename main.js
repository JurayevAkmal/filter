// const text = document.getElementById('text')
// const inp = document.getElementById('inp')
// const btn = document.getElementById('btn')

// btn.addEventListener('click', function(){
//     const inputText = inp.value;

//     text.textContent = inputText
// })
// function clear(){
//     text.style.display = "none";
// }



const all = document.getElementById('ALL')
const jor1 = document.getElementById('j1')
const jor4 = document.getElementById('j4')
const airF = document.getElementById('airF')

// all.addEventListener("click", () =>{
    // document.querySelectorAll("#jordan1").style.display = "block";
//     document.getElementsByClassName("jordan1").style.display = "block";
// })
all.addEventListener("click",() => {
    
        
        
    
        document.getElementById("jordan1").style.display = "block";
        document.getElementById("jordan4").style.display = "block";
        document.getElementById("jordan4_1").style.display = "block";
        document.getElementById("jordan1_1").style.display = "block";

        document.getElementById("airForce_2").style.display = "block";
        document.getElementById("airForce").style.display = "block";
    })
jor1.addEventListener("click",() => {
    
    document.getElementById("jordan1").style.display = "block";
        document.getElementById("jordan1_1").style.display = "block";
        document.getElementById("jordan4").style.display = "none";
        document.getElementById("jordan4_1").style.display = "none";

        document.getElementById("airForce_2").style.display = "none";
        document.getElementById("airForce").style.display = "none";
    })
jor4.addEventListener("click",() => {
        document.getElementById("jordan1").style.display = "none";
        document.getElementById("jordan1_1").style.display = "none";
        document.getElementById("jordan4").style.display = "block";
        document.getElementById("jordan4_1").style.display = "block";

        document.getElementById("airForce_2").style.display = "none";
        document.getElementById("airForce").style.display = "none";
    })
airF.addEventListener("click",() => {
        document.getElementById("jordan1").style.display = "none";
        document.getElementById("jordan1_1").style.display = "none";
        document.getElementById("jordan4").style.display = "none";
        document.getElementById("jordan4_1").style.display = "none";

        document.getElementById("airForce_2").style.display = "block";
        document.getElementById("airForce").style.display = "block";
    })
