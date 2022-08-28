let viedo=document.querySelectorAll(".vid");
let playIcon=document.querySelectorAll(".playIcon")
for(let i=0;i<viedo.length;i++){
    viedo[i].addEventListener("mouseover",function(){
        viedo[i].play();
    })
    viedo[i].addEventListener("mouseout",function(){
        viedo[i].pause();
    })
}



