let div1=document.querySelector("#shopcar");
let div2=document.querySelector("#carrierbag");
 
function jump(){
   
    if(div2.classList!="carrierbag-animate")
    {
        div2.classList.add("carrierbag-animate");
    }
 
    if(div1.classList!="shopcar-animate")
    {
        div1.classList.add("shopcar-animate"); //zıplaması için
        setTimeout(function(){
            div1.classList.remove("shopcar-animate");
        },400);
    }
}
 
var hit =setInterval(function(){
 
        var shopcarBottom =parseInt(window
                .getComputedStyle(div1)
                .getPropertyValue("bottom")); //piksel olarak algıladığı için parsenInt kullandım
 
        var carrierbagLeft =parseInt(window
                .getComputedStyle(div1)
                .getPropertyValue("left"));
        
        if(carrierbagLeft > 0 && carrierbagLeft < 50 && shopcarBottom < 50){
            div2.classList.remove("carrierbag-animate");
            div1.classList.remove("shopcar-animate");
            div2.style.display="none";
            div1.style.display="none";
            window.alert("alert");
        }
},10);

