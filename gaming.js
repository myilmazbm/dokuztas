var piece;
var obstacles=[];
var score;
var GameArea={
    canvas:document.createElement("canvas"),
    start:function(){
        this.canvas.width=window.innerWidth;
        this.canvas.height=window.innerHeight;
        this.canvas.style.cursor = "none";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas,document.body.childNodes[0]);
        this.frameNo=0;
        this.interval= setInterval(updateGameArea,17);
        window.addEventListener('keydown',function (e){GameArea.keys = (GameArea.keys || []);GameArea.keys[e.keyCode]=true;})
        window.addEventListener('keyup',function (e){GameArea.keys[e.keyCode] = false;})
        //window.addEventListener('mousemove',function(e){GameArea.x=e.pageX;GameArea.y=e.pageY;})
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
    //obstacle = new component(10, 200, "green", 300, 120);
    piece = new component(30,30,"somun.png",10,10,"image");
    score = new component("30px","Consolas","black",280,40,"text");
    //background = new component(656,270,"vida.png",0,0,"background");
}

function everyinterval(n){
    if((GameArea.frameNo/n)%1==0){return true;}
    return false;
}

function component(width,height,color,x,y,type){
    this.type = type;
    if(type=="image" || type == "background"){
        this.image = new Image();
        this.image.src = color;
    }
    this.width=width;
    this.height=height;
    this.color=color;
    this.speedX=0;
    this.speedY=0;
    this.gravity = 0.05;
    this.gravitySpeed = 0;
    this.x=x;
    this.y=y;
    this.bounce=0.6;
    this.update = function(){
        context=GameArea.context;
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
    this.newPos =function (){
        this.gravitySpeed += this.gravity;
        this.x+=this.speedX;
        this.y+=this.speedY+this.gravitySpeed;
        if(this.type=="background"){
            if(this.x==-(this.width)){
                this.x=0;   
            }
        }
        this.hitBottom();       
    }
    this.hitBottom = function(){
        var rockbottom = GameArea.canvas.height - this.height;
        if(this.y > rockbottom){
            this.y=rockbottom;
            this.gravitySpeed=-(this.gravitySpeed*this.bounce);
        }
    }
    this.crashWith=function(other){
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherlert = other.x;
        var otherright = other.x + (other.width);
        var othertop = other.y;
        var otherbottom = other.y + (other.height)
        var crash=true;
        if((mybottom<othertop)||(mytop>otherbottom)||(myleft>otherright)||myright<otherlert){crash=false;}
        return crash;
    }
}
function updateGameArea(){
    var x,y;
    for(i=0;i<obstacles.length;i++){
        if(piece.crashWith(obstacles[i])){
            GameArea.stop();
            return;
        }
    }
    GameArea.clear();
    GameArea.frameNo++;
    //background.speedX=-1;
    //background.update();
    //background.newPos();
    if(GameArea.frameNo==1||everyinterval(170)){
        x=GameArea.canvas.width;
        minh=20;
        maxh=200;
        height=Math.floor(Math.random()*(maxh-minh+1)+minh);
        ming=50;
        maxg=200;
        gap = Math.floor(Math.random()*(maxg-ming+1)+ming);
        obstacles.push(new component(10,height,"green",x,0));
        obstacles.push(new component(10,x-height-gap,"green",x,height+gap));
    }
    for(i=0;i<obstacles.length;i+=1){
        obstacles[i].x+=-1;
        obstacles[i].update();
    }
    piece.speedX=0;
    piece.speedY=0;
    //obstacle.x += -1;
    //obstacle.update();
    if(GameArea.keys && GameArea.keys[37]){piece.speedX=-1;}
    if(GameArea.keys && GameArea.keys[39]){piece.speedX=1;}
    if(GameArea.keys && GameArea.keys[38]){piece.speedY=-1;}
    if(GameArea.keys && GameArea.keys[40]){piece.speedY=1;}
    //if(GameArea.x && GameArea.y){piece.x=GameArea.x;piece.y=GameArea.y;}
    score.text="SCORE: " + GameArea.frameNo;
    score.update();
    
    piece.newPos();
    piece.update();

}

function stopMove(){
    piece.speedX=0;
    piece.speedY=0;
}
function accelerate(n) {
    piece.gravity = n;
}