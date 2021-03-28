const projectLink = document.getElementsByClassName("hero-intro-box-link")[0];
let colorList=["#FF0000","#0066FF","#00FF5D","#FFA200","#8000FF","#A300FF"];

function createTriangle() {
    let newTriangle=document.createElementNS("http://www.w3.org/2000/svg","svg");
    let triangleSize=Math.random()*15+8;
    newTriangle.setAttribute("class","projectTriangle");
    newTriangle.setAttribute("width",`${triangleSize}`);
    newTriangle.setAttribute("height",`${triangleSize}`);
    newTriangle.setAttribute("viewBox",`0 0 11.142 11.142`);
    newTriangle.style.position="absolute";
    newTriangle.style.left="50%";
    newTriangle.style.top="0px";
    newTriangle.style.zIndex="1";
    newTriangle.style.transform=`rotateZ(${Math.floor(Math.random()*361)}deg)`
    newTriangle.style.opacity="1";
    let trianglePath=document.createElementNS("http://www.w3.org/2000/svg", 'path');
    let triangleRotate=Math.floor(Math.random()*360)
    trianglePath.setAttribute("d","M4,0,8,8H0Z");
    trianglePath.setAttribute("transform","matrix(0.574, 0.819, -0.819, 0.574, 6.553, 0)");
    trianglePath.setAttribute("fill",`${colorList[Math.floor(Math.random()*(colorList.length))]}`);
    newTriangle.appendChild(trianglePath);
    return newTriangle;
}

function createDot() {
    let newDot=document.createElementNS("http://www.w3.org/2000/svg","svg");
    let dotSize=Math.random()*15+8;
    newDot.setAttribute("class","projectDot");
    newDot.setAttribute("width",`${dotSize}`);
    newDot.setAttribute("height",`${dotSize}`);
    newDot.setAttribute("viewBox",`0 0 7.481 7.481`);
    newDot.style.position="absolute";
    newDot.style.left="50%";
    newDot.style.top="0px";
    newDot.style.zIndex="1";
    newDot.style.transform=`rotateZ(${Math.floor(Math.random()*361)}deg)`
    newDot.style.opacity="1";
    let dotPath=document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    let dotRotate=Math.floor(Math.random()*360)
    dotPath.setAttribute("cx","2.738");
    dotPath.setAttribute("cy","2.738");
    dotPath.setAttribute("r","2.738");
    dotPath.setAttribute("fill",`${colorList[Math.floor(Math.random()*(colorList.length))]}`);
    newDot.appendChild(dotPath);
    return newDot;
}

function createPlusStar() {
    let newStar=document.createElementNS("http://www.w3.org/2000/svg","svg");
    let starSize=Math.random()*15+8;
    newStar.setAttribute("class","projectStar");
    newStar.setAttribute("width",`${starSize}`);
    newStar.setAttribute("height",`${starSize}`);
    newStar.setAttribute("viewBox",`0 0 8.924 8.924`);
    newStar.style.position="absolute";
    newStar.style.left="50%";
    newStar.style.top="0px";
    newStar.style.zIndex="1";
    newStar.style.transform=`rotateZ(${Math.floor(Math.random()*361)}deg)`
    newStar.style.opacity="1";
    let starPath=document.createElementNS("http://www.w3.org/2000/svg", 'path');
    let starRotate=Math.floor(Math.random()*360)
    starPath.setAttribute("d",`M2.706,0V2.706H0v1.8H2.706V7.215h1.8V4.509H7.215v-1.8H4.509V0Z`);
    starPath.setAttribute("fill",`${colorList[Math.floor(Math.random()*(colorList.length))]}`);
    newStar.appendChild(starPath);
    return newStar;
}

function animateShape() {
    let shape=[createPlusStar,createDot,createTriangle][Math.floor(Math.random()*3)]();
    projectLink.appendChild(shape)
    let startTime=new Date().getTime();
    let totalLeft=Math.random()*100;
    let incrementer=(totalLeft-50)/100

    function animateFunc(){
        let currentTime=new Date().getTime();
        if(parseInt(shape.style.top)==-100){
            shape.remove()
            return
        }
        if (currentTime-startTime<30){
            window.requestAnimationFrame(animateFunc)
        }else{
            startTime=currentTime
            shape.style.opacity-=.01
            shape.style.top=parseInt(shape.style.top)-1.5+"px";
            shape.style.left=parseFloat(shape.style.left)+incrementer+"%";
            window.requestAnimationFrame(animateFunc)
        }
    }
    animateFunc()
}

let startTiming=new Date().getTime();
animateShape()

function makeAnimation() {
    let currentTiming=new Date().getTime();
    if(currentTiming-startTiming<500) {
        requestAnimationFrame(makeAnimation)
    }else {
        animateShape()
        startTiming=currentTiming
        requestAnimationFrame(makeAnimation)
    }
}

makeAnimation()