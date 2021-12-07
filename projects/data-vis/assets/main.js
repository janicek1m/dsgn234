var eighthBottomSrc = "assets/notes/eighth-bottom.png";
var eighthTopSrc = "assets/notes/eighth-top.png";
var halfBottomSrc = "assets/notes/half-bottom.png";
var halfTopSrc = "assets/notes/half-top.png";
var quarterBottomSrc = "assets/notes/quarter-bottom.png";
var quarterTopSrc = "assets/notes/quarter-top.png";
var restSrc = "assets/notes/rest.png";

var body = document.body, html = document.documentElement;
var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
var width = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.documentElement.clientWidth);

const data = [ 
    { type: 'eighthBottom', staff: 1, measure: 1, noteNumber: 1, top: 2, audio:"assets/audio/1.1.mp3", title:"5 min." },
    { type: 'quarterTop', staff: 1, measure: 1, noteNumber: 2, top: 7, audio:"assets/audio/1.2.mp3", title:"15 min."  },
    { type: 'halfBottom', staff: 1, measure: 1, noteNumber: 3, top: 3, audio:"assets/audio/1.3.mp3", title:"30 min."  },
    { type: 'eighthTop', staff: 1, measure: 1, noteNumber: 4, top: 8, audio:"assets/audio/1.4.mp3", title:"10 min."  },
    { type: 'rest', staff: 1, measure: 1, noteNumber: 5, top: 2, audio:"", title:"5 min."  },

    { type: 'halfTop', staff: 1, measure: 2, noteNumber: 1, top: 6, audio:"assets/audio/2.1.mp3", title:"35 min." },
    { type: 'rest', staff: 1, measure: 2, noteNumber: 2, top: 2, audio:"", title:"15 min." },
    { type: 'quarterBottom', staff: 1, measure: 2, noteNumber: 3, top: 2, audio:"assets/audio/2.3.mp3", title:"20 min." },
    { type: 'quarterTop', staff: 1, measure: 2, noteNumber: 4, top: 7, audio:"assets/audio/2.4.mp3", title:"15 min." },
    { type: 'quarterTop', staff: 1, measure: 2, noteNumber: 5, top: 6, audio:"assets/audio/1.5.mp3", title:"15 min."  },

    { type: 'quarterTop', staff: 2, measure: 1, noteNumber: 1, top: 7, audio:"assets/audio/3.1.mp3", title:"10 min." },
    { type: 'quarterTop', staff: 2, measure: 1, noteNumber: 2, top: 6, audio:"assets/audio/2.2.mp3", title:"15 min." },
    { type: 'eighthBottom', staff: 2, measure: 1, noteNumber: 3, top: 3, audio:"assets/audio/3.3.mp3", title:"8 min." },
    { type: 'eighthBottom', staff: 2, measure: 1, noteNumber: 4, top: 4, audio:"assets/audio/3.4.mp3", title:"8 min." },
    { type: 'eighthBottom', staff: 2, measure: 1, noteNumber: 5, top: 1, audio:"assets/audio/2.5.mp3", title:"10 min." },

    { type: 'rest', staff: 2, measure: 2, noteNumber: 1, top: 2, audio:"", title:"10 min." },
    { type: 'eighthBottom', staff: 2, measure: 2, noteNumber: 2, top: 2, audio:"assets/audio/3.2.mp3", title:"5 min." },
    { type: 'rest', staff: 2, measure: 2, noteNumber: 3, top: 2, audio:"", title:"5 min." },
    { type: 'halfBottom', staff: 2, measure: 2, noteNumber: 4, top: 4, audio:"assets/audio/4.4.mp3", title:"35 min." },
    { type: 'halfBottom', staff: 2, measure: 2, noteNumber: 5, top: 1, audio:"assets/audio/3.5.mp3", title:"45 min." },

    { type: 'halfTop', staff: 3, measure: 1, noteNumber: 1, top: 6, audio:"assets/audio/4.1.mp3", title:"30 min." },
    { type: 'quarterBottom', staff: 3, measure: 1, noteNumber: 2, top: 4, audio:"assets/audio/4.2.mp3", title:"15 min." },
    { type: 'quarterTop', staff: 3, measure: 1, noteNumber: 3, top: 8, audio:"assets/audio/4.3.mp3", title:"12 min." },
    { type: 'rest', staff: 3, measure: 1, noteNumber: 4, top: 2, audio:"", title:"10 min." },
    { type: 'eighthTop', staff: 3, measure: 1, noteNumber: 5, top: 10, audio:"assets/audio/4.5.mp3", title:"5 min." },

    { type: 'eighthTop', staff: 3, measure: 2, noteNumber: 1, top: 6, audio:"assets/audio/5.1.mp3", title:"5 min." },
    { type: 'rest', staff: 3, measure: 2, noteNumber: 2, top: 2, audio:"",  title:"5 min."  },
    { type: 'eighthBottom', staff: 3, measure: 2, noteNumber: 3, top: 3, audio:"assets/audio/5.3.mp3",  title:"10 min." },
    { type: 'eighthBottom', staff: 3, measure: 2, noteNumber: 4, top: 2, audio:"assets/audio/5.4.mp3",  title:"10 min." },
    { type: 'eighthBottom', staff: 3, measure: 2, noteNumber: 5, top: 5, audio:"assets/audio/5.5.mp3",  title:"10 min." },

    { type: 'quarterTop', staff: 4, measure: 1, noteNumber: 1, top: 6, audio:"assets/audio/6.1.mp3",  title:"15 min." },
    { type: 'halfTop', staff: 4, measure: 1, noteNumber: 2, top: 7, audio:"assets/audio/5.2.mp3",  title:"25 min." },
    { type: 'halfBottom', staff: 4, measure: 1, noteNumber: 3, top: 3, audio:"assets/audio/6.3.mp3",  title:"30 min." },
    { type: 'quarterTop', staff: 4, measure: 1, noteNumber: 4, top: 10, audio:"assets/audio/6.4.mp3", title:"12 min." },
    { type: 'rest', staff: 4, measure: 1, noteNumber: 5, top: 2, audio:"",  title:"5 min." },

    { type: 'eighthBottom', staff: 4, measure: 2, noteNumber: 1, top: 1, audio:"assets/audio/7.1.mp3", title:"2 min."},
    { type: 'eighthTop', staff: 4, measure: 2, noteNumber: 2, top: 2, audio:"assets/audio/6.2.mp3",  title:"8 min." },
    { type: 'rest', staff: 4, measure: 2, noteNumber: 3, top: 2, audio:"",  title:"5 min." },
    { type: 'halfBottom', staff: 4, measure: 2, noteNumber: 4, top: 9, audio:"assets/audio/7.4.mp3",  title:"50 min." },
    { type: 'rest', staff: 4, measure: 2, noteNumber: 5, top: 2, audio:"",  title:"5 min." },
];

function drawNotes (){
    for (var i = 0; i < data.length; i++){
        const img = document.createElement("img");
        if (data[i].type == 'eighthBottom') {
            img.setAttribute("src", eighthBottomSrc);
        } else if (data[i].type == 'eighthTop') {
            img.setAttribute("src", eighthTopSrc);
        } else if (data[i].type == 'halfBottom') {
            img.setAttribute("src", halfBottomSrc);
        } else if (data[i].type == 'halfTop') {
            img.setAttribute("src", halfTopSrc);
        } else if (data[i].type == 'quarterBottom') {
            img.setAttribute("src", quarterBottomSrc);
        } else if (data[i].type == 'quarterTop') {
            img.setAttribute("src", quarterTopSrc);
        } else if (data[i].type == 'rest') {
            img.setAttribute("src", restSrc);
        }
        img.style.height = "149px";
        img.style.position = "absolute";
        var leftPos = (window.innerWidth - 1265) / 2;

        if (data[i].noteNumber == 1) {
          leftPos += 110;
        } else if (data[i].noteNumber == 2) {
          leftPos += 215;
        } else if (data[i].noteNumber == 3) {
          leftPos += 320;
        } else if (data[i].noteNumber == 4) {
          leftPos += 425;
        } else if (data[i].noteNumber == 5) {
          leftPos += 530;
        }

        if (data[i].measure == 2) {
            leftPos+= 580;
        }

        var topPos = 0;
        if (data[i].top == 1) {
            topPos = -11;
        } else if (data[i].top == 2) {
            topPos = -23;
        } else if (data[i].top == 3) {
            topPos = -40;
        } else if (data[i].top == 4) {
            topPos = -52;
        } else if (data[i].top == 5) {
            topPos = -66;
        } else if (data[i].top == 6) {
            topPos = 41;
        } else if (data[i].top == 7) {
            topPos = 28;
        } else if (data[i].top == 8) {
            topPos = 13;
        } else if (data[i].top == 9) {
            topPos = 0;
        } else if (data[i].top == 10) {
            topPos = -14;
        }

        if (data[i].staff == 2) {
            topPos+= 264;
        } else if (data[i].staff == 3) {
            topPos+= 528;
        } else if (data[i].staff == 4) {
            topPos+= 792;
        }

        img.style.left = leftPos + "px";
        img.style.top = topPos + "px";
        img.classList.add("original");

        const div = document.createElement("div");
        div.classList.add("hidden");
        div.innerHTML = "<p>" + data[i].title+"</p>";
        div.style.position = "absolute";
        
        let divTop = topPos - 60;
        if (data[i].type == 'rest') {
            divTop = topPos - 25;
        } 
        let divLeft = leftPos;
        if (data[i].type == 'rest') {
            divLeft = leftPos - 20;
        } else if (data[i].type == 'eighthTop') {
            divLeft = leftPos - 18;
        } else if (data[i].type == 'quarterTop') {
            divLeft = leftPos - 20;
        } else if (data[i].type == 'halfTop') {
            divLeft = leftPos - 20;
        } else if (data[i].type == 'eighthBottom') {
            divLeft = leftPos;
        } else if (data[i].type == 'quarterBottom') {
            divLeft = leftPos - 10;
        } else if (data[i].type == 'halfBottom') {
            divLeft = leftPos - 10;
        } 
        div.style.top = divTop + "px";
        div.style.left = divLeft + "px";
        div.classList.add("tooltip");

        const audio = new Audio(data[i].audio);

        img.addEventListener("click", function(){
            audio.volume = 0.2;
            audio.play(); 
            img.classList.remove("original");
            img.classList.add("after");
        }, false);

        // const audio = new Audio(data[i].audio);
        img.addEventListener("mouseover", function() {
            if (img.classList.contains("after")) {
                audio.volume = 0.2;
                audio.play();
            }
            div.classList.remove("hidden");
            div.classList.add("visible");
        }, false);

        img.addEventListener("mouseleave", function() {
            if (img.classList.contains("after")) {
                audio.pause();
            }
            div.classList.remove("visible");
            div.classList.add("hidden");
        }, false);
        let staff = ".staff-" + data[i].staff;
        document.querySelector(staff).appendChild(img);
        document.querySelector(staff).appendChild(div);
    }    
}
drawNotes();


var overlay = document.querySelector(".overlay");
overlay.style.height = height;
overlay.style.width = window.innerWidth;

var infoBtn = document.querySelector(".info-btn");
infoBtn.addEventListener("click", function(){ 
    document.querySelector(".overlay").classList.add("is-open");
    document.querySelector(".overlay").style.height = "150%";
    disableScroll();
}, false);

var closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", function(){ 
    document.querySelector(".overlay").classList.remove("is-open");
    enableScroll();
}, false);


//Source: https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily How to disable/enable scrolling 
var keys = {37: 1, 38: 1, 39: 1, 40: 1};
function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); 
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.addEventListener('touchmove', preventDefault, wheelOpt); 
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}