var mouseIsDown=false;
var offsetX = 0;
var offsetY = 0;
var mouseX = 0;
var mouseY = 0;
var objects=[];
var dizili=[[1,0,0,1,0,0,1],
            [0,1,0,1,0,1,0],
            [0,0,1,1,1,0,0],
            [1,1,1,0,1,1,1],
            [0,0,1,1,1,0,0],
            [0,1,0,1,0,1,0],
            [1,0,0,1,0,0,1]];
var sira=1;
var hamle=[BosTahta()];
var GameArea={
    canvas:document.createElement("canvas"),
    start:function(){
        this.canvas.width=window.innerHeight+300;
        this.canvas.height=window.innerHeight-30;
        this.canvas.style.cursor = "pointer";
        //this.canvas.style.backgroundcolor="";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas,document.body.childNodes[0]);
        this.frameNo=0;
        //this.interval= setInterval(updateGameArea,35);
        //window.addEventListener('keydown',function (e){GameArea.keys = (GameArea.keys || []);GameArea.keys[e.keyCode]=true;})
        //window.addEventListener('keyup',function (e){GameArea.keys[e.keyCode] = false;})
        window.addEventListener('mousemove',function(e){handleMouseMove(e)});
        window.addEventListener('mouseup',function(e){handleMouseUp(e)});
        window.addEventListener('mousedown',function(e){handleMouseDown(e)});
    },
    clear: function(){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    },
    stop: function(){
        clearInterval(this.interval);
    }
}
function startGame(){
    GameArea.start();
    //piece = new component(GameArea.canvas.height/9,GameArea.canvas.height/9,"somun.png",0,0,"image");
    //objects.push(piece);
    for (let index = 0; index < 9; index++) {
        objects.push( new component(GameArea.canvas.height/9,GameArea.canvas.height/9,"somun.png",parseInt(GameArea.canvas.width-GameArea.canvas.height/9),parseInt(GameArea.canvas.height-(index+1)*GameArea.canvas.height/9),"image"));
        objects.push( new component(GameArea.canvas.height/9,GameArea.canvas.height/9,"vida.png",parseInt(GameArea.canvas.width-2*GameArea.canvas.height/9),parseInt(GameArea.canvas.height-(index+1)*GameArea.canvas.height/9),"image"));

    }
    //updateGameArea();
    setTimeout(updateGameArea,30);
}
function updateGameArea(){
    GameArea.clear();
    TahtaCiz();
    objects.forEach(element => {
        element.update();
    });
}
//https://stackoverflow.com/questions/18034637/how-to-make-html5-draggable-objects-over-canvas
function component(width,height,color,x,y,type){
    this.type = type;
    if(type=="image" || type == "background"){
        this.image = new Image();
        this.image.src = color;
    }
    this.mouseOver=false;
    this.mx=0;
    this.my=0;
    this.width=width;
    this.height=height;
    this.color=color;
    this.speedX = 0;
    this.speedY = 0;
    this.x=x;
    this.y=y;
    this.lx=-1;
    this.ly=-1;
    this.update = function(){
        context=GameArea.context;
        if(this.mouseOver){this.x=mouseX-this.mx;this.y=mouseY-this.my;}
        if(type=="image" || type == "background"){
            context.drawImage(this.image,this.x,this.y,this.width,this.height);
            if(type == "background"){
                context.drawImage(this.image,this.x+this.width,this.y,this.width,this.height);
            }
        }
        else if(this.type=="text"){context.font=this.width+" "+this.height;context.fillStyle=color;context.fillText(this.text,this.x,this.y);}
        else{
            context.fillStyle=color;
            context.fillRect(this.x,this.y,this.width,this.height);
        }
        
    };
    this.newPos = function(){
        this.x+=this.speedX;
        this.y+=this.speedY;
    }
}
function yuva(x,y,r,c="grey"){
    context = GameArea.context;
    context.beginPath();
    var grd = context.createRadialGradient(x,y,0,x,y,r*4);
    grd.addColorStop(0,c);
    grd.addColorStop(1,"white");
    context.fillStyle=grd;
    context.arc(x,y,r,0,2*Math.PI);
    context.fill();
}
function cizgi(x1,y1,x2,y2,c="black"){
    context = GameArea.context;
    context.beginPath();
    context.strokeStyle = c;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke(); // Draw it
}
function kareCiz(x,y,l,c="black"){
    cizgi(x,y,x+l,y,c);
    cizgi(x,y,x,y+l,c);
    cizgi(x+l,y,x+l,y+l,c);
    cizgi(x,y+l,x+l,y+l,c);
}
function TahtaCiz(cc="black",cy="black"){
    var w=GameArea.canvas.height
    //var h=GameArea.canvas.height

    kareCiz(w/7*(0+0.5),w/7*(0+0.5),w/7*6,cc);
    kareCiz(w/7*(1+0.5),w/7*(1+0.5),w/7*4,cc);
    kareCiz(w/7*(2+0.5),w/7*(2+0.5),w/7*2,cc);
    cizgi(w/7*(3+0.5),w/7*(0+0.5),w/7*(3+0.5),w/7*(2+0.5),cc);
    cizgi(w/7*(3+0.5),w/7*(4+0.5),w/7*(3+0.5),w/7*(6+0.5),cc);
    cizgi(w/7*(0+0.5),w/7*(3+0.5),w/7*(2+0.5),w/7*(3+0.5),cc);
    cizgi(w/7*(4+0.5),w/7*(3+0.5),w/7*(6+0.5),w/7*(3+0.5),cc);
    for(i=0;i<dizili.length;i++){
        for(j=0;j<dizili[i].length;j++){
            if(dizili[i][j]==1){
                yuva(w/7*(i+0.5),w/7*(j+0.5),w/21,cy);
            }
        }
    }
}
window.onresize = function(event) {
    GameArea.canvas.width=window.innerHeight+300;
    GameArea.canvas.height=window.innerHeight-30;
    objects.forEach(element => {
        element.width = GameArea.canvas.height/7;
        element.height = GameArea.canvas.height/7;
    });
};
function handleMouseDown(e){
    mouseX=parseInt(e.clientX-offsetX);
    mouseY=parseInt(e.clientY-offsetY);

    mouseIsDown=true;
    for(var i=0;i<objects.length;i++){
        var object=objects[i];
        if(mouseX > object.x && mouseX < (object.width+object.x) && mouseY > object.y && mouseY < (object.y+object.height)){ 
            object.mouseOver=true;
            object.mx=(mouseX-object.x);
            object.my=(mouseY-object.y);
            //object.x+=(mouseX-object.mx);
            //object.y+=(mouseY-object.my);
            //updateGameArea();
            break;
        }
    }

}

function handleMouseUp(e){
    mouseX=parseInt(e.clientX-offsetX);
    mouseY=parseInt(e.clientY-offsetY);
    mouseIsDown=false;
    let w=GameArea.canvas.height;
    let mhareket=Mcikarma(dizili,hamle[hamle.length-1]);
    objects.forEach(element => {
        if (element.mouseOver) {
            var smallest=-1;
            var yakinolan=[element.lx,element.ly];
            for(i=0;i<mhareket.length;i++){
                for(j=0;j<mhareket[i].length;j++){
                    if(mhareket[i][j]==1){
                        //yuva(w/7*(i+0.5),w/7*(j+0.5),w/21,cy);
                        nowsm=((w/7*(i+0.5)-(element.x+element.width/2))**2+(w/7*(j+0.5)-(element.y+element.height/2))**2)**(1/2);
                        if((nowsm<smallest||smallest==-1)&&(nowsm<w/8)){
                            smallest=nowsm
                            yakinolan=[i*1,j*1];//[w/7*(i+0.5)-element.width/2,w/7*(j+0.5)-element.height/2];
                        }
                    }
                }
            }
            if ((smallest!=-1&&smallest<w/8)||(element.lx!=-1)) {
                element.x=w/7*(yakinolan[0]+0.5)-element.width/2;
                element.y=w/7*(yakinolan[1]+0.5)-element.height/2;
            }
            if(yakinolan[0]!=element.lx || yakinolan[1]!=element.ly){
                
                araci=hamle[hamle.length-1].map(e=>e.map(i=>i));
                araci[yakinolan[0]][yakinolan[1]]=sira*1;
                if(element.lx!=-1&&element.ly!=-1){araci[element.lx][element.ly]=0;}
                hamle[hamle.length] = araci;
                element.lx=yakinolan[0];
                element.ly=yakinolan[1];
                if(sira==1){sira=-1}else{sira=1}
            }
        }
        element.mouseOver=false;
    });
    
    updateGameArea();
}
function handleMouseMove(e){
    if(!mouseIsDown){ return; }
    mouseX=parseInt(e.clientX-offsetX);
    mouseY=parseInt(e.clientY-offsetY);

    updateGameArea();
}
function Mcikarma(T1,T2){
    return T1.map((item,i)=>item.map((item2,j)=>item2-T2[i][j]))
}
function BosTahta(n=7,v=0){
    return Array(n).fill().map(()=>Array(n).fill(v));
}