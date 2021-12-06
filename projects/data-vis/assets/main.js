var eighthBottomSrc = "assets/notes/eighth-bottom.png";
var eighthTopSrc = "assets/notes/eighth-top.png";
var halfBottomSrc = "assets/notes/half-bottom.png";
var halfTopSrc = "assets/notes/half-top.png";
var quarterBottomSrc = "assets/notes/quarter-bottom.png";
var quarterTopSrc = "assets/notes/quarter-top.png";
var restSrc = "assets/notes/rest.png";

const data = [ 
    { type: 'eighthBottom', staff: 1, measure: 1, noteNumber: 1, top: 1, audio:"" },
    { type: 'eighthBottom', staff: 1, measure: 1, noteNumber: 2, top: 2, audio:""  },
    { type: 'eighthBottom', staff: 1, measure: 1, noteNumber: 3, top: 3, audio:""  },
    { type: 'eighthBottom', staff: 1, measure: 1, noteNumber: 4, top: 4, audio:""  },
    { type: 'eighthBottom', staff: 1, measure: 1, noteNumber: 5, top: 5, audio:""  },

    { type: 'quarterTop', staff: 1, measure: 2, noteNumber: 1, top: 6, audio:""  },
    { type: 'quarterTop', staff: 1, measure: 2, noteNumber: 2, top: 7, audio:"" },
    { type: 'quarterTop', staff: 1, measure: 2, noteNumber: 3, top: 8, audio:""  },
    { type: 'quarterTop', staff: 1, measure: 2, noteNumber: 4, top: 9, audio:""  },
    { type: 'quarterTop', staff: 1, measure: 2, noteNumber: 5, top: 10, audio:""  },

    { type: 'quarterTop', staff: 2, measure: 1, noteNumber: 1, top: 6, audio:""  },
    { type: 'quarterTop', staff: 2, measure: 1, noteNumber: 2, top: 7, audio:"" },
    { type: 'quarterTop', staff: 2, measure: 1, noteNumber: 3, top: 8, audio:""  },
    { type: 'quarterTop', staff: 2, measure: 1, noteNumber: 4, top: 9, audio:""  },
    { type: 'quarterTop', staff: 2, measure: 1, noteNumber: 5, top: 10, audio:""  },

    { type: 'eighthBottom', staff: 2, measure: 2, noteNumber: 1, top: 1, audio:"" },
    { type: 'eighthBottom', staff: 2, measure: 2, noteNumber: 2, top: 2, audio:""  },
    { type: 'eighthBottom', staff: 2, measure: 2, noteNumber: 3, top: 3, audio:""  },
    { type: 'eighthBottom', staff: 2, measure: 2, noteNumber: 4, top: 4, audio:""  },
    { type: 'eighthBottom', staff: 2, measure: 2, noteNumber: 5, top: 5, audio:""  },


    { type: 'halfTop', staff: 3, measure: 1, noteNumber: 1, top: 6, audio:""  },
    { type: 'quarterTop', staff: 3, measure: 1, noteNumber: 2, top: 7, audio:"" },
    { type: 'quarterTop', staff: 3, measure: 1, noteNumber: 3, top: 8, audio:""  },
    { type: 'quarterTop', staff: 3, measure: 1, noteNumber: 4, top: 9, audio:""  },
    { type: 'quarterTop', staff: 3, measure: 1, noteNumber: 5, top: 10, audio:""  },

    { type: 'eighthBottom', staff: 3, measure: 2, noteNumber: 1, top: 1, audio:"" },
    { type: 'eighthBottom', staff: 3, measure: 2, noteNumber: 2, top: 2, audio:""  },
    { type: 'eighthBottom', staff: 3, measure: 2, noteNumber: 3, top: 3, audio:""  },
    { type: 'eighthBottom', staff: 3, measure: 2, noteNumber: 4, top: 4, audio:""  },
    { type: 'eighthBottom', staff: 3, measure: 2, noteNumber: 5, top: 5, audio:""  },

    { type: 'halfTop', staff: 4, measure: 1, noteNumber: 1, top: 6, audio:""  },
    { type: 'quarterTop', staff: 4, measure: 1, noteNumber: 2, top: 7, audio:"" },
    { type: 'quarterTop', staff: 4, measure: 1, noteNumber: 3, top: 8, audio:""  },
    { type: 'quarterTop', staff: 4, measure: 1, noteNumber: 4, top: 9, audio:""  },
    { type: 'quarterTop', staff: 4, measure: 1, noteNumber: 5, top: 10, audio:""  },

    { type: 'eighthBottom', staff: 4, measure: 2, noteNumber: 1, top: 1, audio:"" },
    { type: 'eighthBottom', staff: 4, measure: 2, noteNumber: 2, top: 2, audio:""  },
    { type: 'rest', staff: 4, measure: 2, noteNumber: 3, top: 2, audio:""  },
    { type: 'eighthBottom', staff: 4, measure: 2, noteNumber: 4, top: 4, audio:""  },
    { type: 'eighthBottom', staff: 4, measure: 2, noteNumber: 5, top: 5, audio:""  },

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
        var leftPos = 0;
        if (data[i].noteNumber == 1) {
          leftPos = 190;
        } else if (data[i].noteNumber == 2) {
          leftPos = 295;
        } else if (data[i].noteNumber == 3) {
          leftPos = 400;
        } else if (data[i].noteNumber == 4) {
          leftPos = 505;
        } else if (data[i].noteNumber == 5) {
          leftPos = 610;
        }

        if (data[i].measure == 2) {
            leftPos+= 590;
        }

        var topPos = 0;
        if (data[i].top == 1) {
            topPos = 392;
        } else if (data[i].top == 2) {
            topPos = 379;
        } else if (data[i].top == 3) {
            topPos = 364;
        } else if (data[i].top == 4) {
            topPos = 350;
        } else if (data[i].top == 5) {
            topPos = 336;
        } else if (data[i].top == 6) {
            topPos = 443;
        } else if (data[i].top == 7) {
            topPos = 430;
        } else if (data[i].top == 8) {
            topPos = 413;
        } else if (data[i].top == 9) {
            topPos = 403;
        } else if (data[i].top == 10) {
            topPos = 391;
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
        img.addEventListener("click", function(){ 
            alert("clicked"); 
            img.classList.remove("original");
            img.classList.add("after");
        }, false);
        document.querySelector(".music-container").appendChild(img);
    }    
}
drawNotes();

var body = document.body,
    html = document.documentElement;
var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

var overlay = document.querySelector(".overlay");
overlay.style.height = height;
overlay.style.width = window.innerWidth;

var infoBtn = document.querySelector(".info-btn");
infoBtn.addEventListener("click", function(){ 
    document.querySelector(".overlay").classList.add("is-open");
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