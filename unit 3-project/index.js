let vedioplay=document.getElementById("vedioplay")
let mainvedio=document.getElementById("mainvedio")
    
function stop(){
    vedioplay.style.display="none"
    mainvedio.pause()
}

function playvedio(file){
    mainvedio.src=file;
    vedioplay.style.display="block"
   mainvedio.play()
  

}


let vedio=document.querySelectorAll(".vid")
let icon=document.querySelectorAll("#mid_sec>div>i")
 

 for(let i=0;i<vedio.length;i++){
     vedio[i].addEventListener("mouseover",()=>{
         vedio[i].play()
         vedio[i].muted = true;
         icon[i].style.display="none"
     })
     vedio[i].addEventListener("mouseout",()=>{
         vedio[i].pause()
         icon[i].style.display="block"
     })
     vedio[i].addEventListener("click",()=>{

  
        m_playvedio(vedio[i].src)
         icon[i].style.display="none"
     })
 }

 let m_play=document.getElementById("m_ved_div")
let m_vedio=document.getElementById("m_vid")
function stop_mved(){
    m_play.style.display="none"
    m_vedio.pause()
}

function m_playvedio(file){
    m_vedio.src=file;
    m_play.style.display="block"
    m_vedio.play()
  

}

let Content_marketing=["./mutivedio/Content_marketing/1.mp4","./mutivedio/Content_marketing/2.mp4","./mutivedio/Content_marketing/3.mp4","./mutivedio/Content_marketing/4.mp4","./mutivedio/Content_marketing/5.mp4","./mutivedio/Content_marketing/6.mp4"]


let content_link=[   "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Hydrogen%20Economy%20TN.png",
                "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/siemens-content-TN.png",
                "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Responsible%20Investment%20TN.png",
                "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Workplace%20Evolution%20TN.png",
                "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/The%20Pandemic%20TN.png" ,
                "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Supply%20Chain%20Resilience%20TN.png"
            ]

let Communication=["./mutivedio/Communication/1.mp4","./mutivedio/Communication/2.mp4","./mutivedio/Communication/3.mp4","./mutivedio/Communication/4.mp4","./mutivedio/Communication/5.mp4","./mutivedio/Communication/6.mp4"]

let communication_link=["https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Coral%20Reef%20Protection%20TN.png",
                    "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Zespri%20Selects%20SAP%20TN.png",
                    "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Textile%20Recycling%20TN.png",
                    "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Navigating%20the%20Seas%20TN.png",
                    "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Outstanding%20Researchers.png",
                    "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Fighting%20COVID-19%20TN.png" 
                ]


let Localization=["./mutivedio/Localization/1.mp4","./mutivedio/Localization/2.mp4","./mutivedio/Localization/3.mp4","./mutivedio/Localization/4.mp4","./mutivedio/Localization/5.mp4","./mutivedio/Localization/6.mp4"]


let localization_link=[
    "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/Colliers%201%20TN.png",
    "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/siemens-local-TN.png",
    "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/Agility%20TN.png",
    "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/Siemens%20Energy%20TN.png",
    "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/DNV%20GL%20TN.png" ,
    "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/Colliers%202%20TN.png",
]
let people_culture=["./mutivedio/people_culture/1.mp4","./mutivedio/people_culture/2.mp4","./mutivedio/people_culture/3.mp4","./mutivedio/people_culture/4.mp4","./mutivedio/people_culture/5.mp4","./mutivedio/people_culture/6.mp4"]

let people_link=[
    "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Women%20in%20Tech%20TN.png",
    "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Volunteers%20Week%20TN.png",
    "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Create%20Your%20Future%20TN.png",
    "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/siemens-culture-TN.png",
    "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Voice%20of%20Sulzer%20TN.png",
    "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Fundraising%20Challenge%20TN.png"

]


let Promotional=["./mutivedio/Promotional/1.mp4","./mutivedio/Promotional/2.mp4","./mutivedio/Promotional/3.mp4","./mutivedio/Promotional/4.mp4","./mutivedio/Promotional/5.mp4","./mutivedio/Promotional/6.mp4"]


let Promotional_link=["https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Global%20Leader%20TN.png",
                "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Remote%20Auditing%20TN.png",
                "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Turbocompressor%20TN.png",
                "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Innovation%20Awards%20TN.png",
                "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Dormakaba%20TN.png",
                "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/V%20Plate%20TN.png"
            ]

Append_vedio(Content_marketing,content_link)

function Append_vedio(file,link){
 
let M_vid=document.querySelectorAll(".M_vid")

for(let i=0;i<M_vid.length;i++){
    M_vid[i].src=file[i]
    M_vid[i].poster=link[i]
   
  
    
}
   
}

let multi_vedio=document.querySelectorAll(".M_vid")
let multi_icon=document.querySelectorAll("#multi_vedio>div>i")
 

 for(let i=0;i<multi_vedio.length;i++){
    multi_vedio[i].addEventListener("mouseover",()=>{
        multi_vedio[i].play()
        multi_vedio[i].muted = true;
        multi_icon[i].style.display="none"
     })
     multi_vedio[i].addEventListener("mouseout",()=>{
        multi_vedio[i].pause()
        multi_icon[i].style.display="block"
     })
     multi_vedio[i].addEventListener("click",()=>{

      
        multi_playvedio(multi_vedio[i].src)
        multi_icon[i].style.display="none"
     })
 }

 let multi_play=document.getElementById("m_ved_play")
let played_vedio=document.getElementById("mplay")
function multi_stop(){
    multi_play.style.display="none"
    played_vedio.pause()
}

function multi_playvedio(file){
    played_vedio.src=file;
    multi_play.style.display="block"
    played_vedio.play()
  

}

let image_link=[
  " https://storage.googleapis.com/lumen5-site-images/carousel-mhi-bg.png ",
"https://storage.googleapis.com/lumen5-site-images/carousel-ncstate-bg.png",
"https://storage.googleapis.com/lumen5-site-images/carousel-cms-bg.png",
 "https://storage.googleapis.com/lumen5-site-images/carousel-mondadori-bg.png",
"https://storage.googleapis.com/lumen5-site-images/carousel-berkshire-bg.png",
"https://storage.googleapis.com/lumen5-site-images/carousel-siemens-bg.png",
   ] 


let img=document.getElementById("img")
let image=0
   let slideleft = () => {
    image--
       if(image<0){
        image=image_link.length-1
       }
       img.src=image_link[image]
     console.log(image)

   }
   let slideright = () => {
    image++
       if(image==image_link.length){
        image=0
       }
       img.src=image_link[image]
       console.log(image)
   }

