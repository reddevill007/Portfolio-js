
const links=document.querySelectorAll(".alternate-style");
// console.log(links);
      totalLinks=links.length;

function setActiveStyle(color){
    // console.log(color);
    for(let i = 0; i<totalLinks; i++){
        if(color === links[i].getAttribute("title")){
            links[i].removeAttribute("disabled");
        }
        else{
            links[i].setAttribute("disabled","true");
        }
    }
}

// Body Theme

const bodySkin=document.querySelectorAll(".body-skin");
      totalBodySkin=bodySkin.length;

for(let i = 0; i<totalBodySkin; i++){
    bodySkin[i].addEventListener("change",function(){
        // console.log(this.value);
        if(this.value === "dark"){
            document.body.className="dark";
        }
        else{
            document.body.className="";
        }
    })
}



document.querySelector(".toggle-switcher").addEventListener("click",() =>{
    // console.log("hi")
    document.querySelector(".style-switcher").classList.toggle("open");
})