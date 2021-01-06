function BosTahta(n=7,v=0){
    return Array(n).fill().map(()=>Array(n).fill(v));
}
function Mcikarma(T1,T2){
  return T1.map((item,i)=>item.map((item2,j)=>item2-T2[i][j]))
}
function farkbul(T1,T2){
    for(i=0;i<T.length;i++){for(j=0;j<T1.length;j++){if(T1[i][j]-T2[i][j]===-1)return [i,j]}}
    //Mcikarma(T1,T2).forEach((item,i)=>item.forEach((item2,j)=>{if(item2==-1)return [i,j]}));
    return [-1,-1]
}
function kontrol(T,i){
    switch(i){
        case [0,0]:
            a=T[0,0]+T[0,3]+T[0,6];
            b=T[0,0]+T[3,0]+T[6,0];
            if(a===3||b===3)return True;
            break;
        case [0,3]:
            a=T[0,0]+T[0,3]+T[0,6];
            b=T[0,3]+T[1,3]+T[2,3];
            if(a===3||b===3)return True;
            break;
        case [0,6]:
            a=T[0,0]+T[0,3]+T[0,6];
            b=T[0,6]+T[3,6]+T[6,6];
            if(a===3||b===3)return True;
            break;
        case [1,1]:
            a=T[1,1]+T[1,3]+T[1,5];
            b=T[1,1]+T[3,1]+T[5,1];
            if(a===3||b===3)return True;
            break;
        case [1,3]:
            a=T[1,1]+T[1,3]+T[1,5];
            b=T[0,3]+T[1,3]+T[2,3];
            if(a===3||b===3)return True;
            break;
        case [1,5]:
            a=T[1,1]+T[1,3]+T[1,5];
            b=T[1,5]+T[3,5]+T[5,5];
            if(a===3||b===3)return True;
            break;
        case [2,2]:
            a=T[2,2]+T[2,3]+T[2,4];
            b=T[2,2]+T[3,2]+T[4,2];
            if(a===3||b===3)return True;
            break;
        case [2,3]:
            a=T[2,2]+T[2,3]+T[2,4];
            b=T[0,3]+T[1,3]+T[2,3];
            if(a===3||b===3)return True;
            break;
        case [2,4]:
            a=T[2,2]+T[2,3]+T[2,4];
            b=T[2,4]+T[3,4]+T[4,4];
            if(a===3||b===3)return True;
            break;
        case [3,0]:
            a=T[3,0]+T[3,1]+T[3,2];
            b=T[0,0]+T[3,0]+T[6,0];
            if(a===3||b===3)return True;
            break;
        case [3,1]:
            a=T[3,0]+T[3,1]+T[3,2];
            b=T[1,1]+T[3,1]+T[5,1];
            if(a===3||b===3)return True;
            break;
        case [3,2]:
            a=T[3,0]+T[3,1]+T[3,2];
            b=T[2,2]+T[3,2]+T[4,2];
            if(a===3||b===3)return True;
            break;
        case [3,4]:
            a=T[3,4]+T[3,5]+T[3,6];
            b=T[2,4]+T[3,4]+T[4,4];
            if(a===3||b===3)return True;
            break;
        case [3,5]:
            a=T[3,4]+T[3,5]+T[3,6];
            b=T[1,5]+T[3,5]+T[5,5];
            if(a===3||b===3)return True;
            break;
        case [3,6]:
            a=T[3,4]+T[3,5]+T[3,6];
            b=T[0,6]+T[3,6]+T[6,6];
            if(a===3||b===3)return True;
            break;
        case [4,2]:
            a=T[4,2]+T[4,3]+T[4,4];
            b=T[2,2]+T[3,2]+T[4,2];
            if(a===3||b===3)return True;
            break;
        case [4,3]:
            a=T[4,2]+T[4,3]+T[4,4];
            b=T[4,3]+T[5,3]+T[6,3];
            if(a===3||b===3)return True;
            break;
        case [4,4]:
            a=T[4,2]+T[4,3]+T[4,4];
            b=T[2,4]+T[3,4]+T[4,4];
            if(a===3||b===3)return True;
            break;
        case [5,1]:
            a=T[5,1]+T[5,3]+T[5,5];
            b=T[1,1]+T[3,1]+T[5,1];
            if(a===3||b===3)return True;
            break;
        case [5,3]:
            a=T[5,1]+T[5,3]+T[5,5];
            b=T[4,3]+T[5,3]+T[6,3];
            if(a===3||b===3)return True;
            break;
        case [5,5]:
            a=T[5,1]+T[5,3]+T[5,5];
            b=T[1,5]+T[3,5]+T[5,5];
            if(a===3||b===3)return True;
            break;
        case [6,0]:
            a=T[6,0]+T[6,3]+T[6,6];
            b=T[0,0]+T[3,0]+T[6,0];
            if(a===3||b===3)return True;
            break;
        case [6,3]:
            a=T[6,0]+T[6,3]+T[6,6];
            b=T[4,3]+T[5,3]+T[6,3];
            if(a===3||b===3)return True;
            break;
        case [6,6]:
            a=T[6,0]+T[6,3]+T[6,6];
            b=T[0,6]+T[3,6]+T[6,6];
            if(a===3||b===3)return True;
            break;
        default:
    }
}

function MuhtemelHareketler(i){
    T=BosTahta();
    switch(i){
        case [0,0]:
            return [[0,3],[3,0]];
            break;
        case [0,3]:
            return [[0,0],[1,3],[0,6]];
            break;
        case [0,6]:
            return [[0,3],[3,6]];
            break;
        case [1,1]:
            return [[1,3],[3,1]];
            break;
        case [1,3]:
            return [[0,3],[]];
            break;
        case [1,5]:
            a=T[1,1]+T[1,3]+T[1,5];
            b=T[1,5]+T[3,5]+T[5,5];
            if(a===3||b===3)return True;
            break;
        case [2,2]:
            a=T[2,2]+T[2,3]+T[2,4];
            b=T[2,2]+T[3,2]+T[4,2];
            if(a===3||b===3)return True;
            break;
        case [2,3]:
            a=T[2,2]+T[2,3]+T[2,4];
            b=T[0,3]+T[1,3]+T[2,3];
            if(a===3||b===3)return True;
            break;
        case [2,4]:
            a=T[2,2]+T[2,3]+T[2,4];
            b=T[2,4]+T[3,4]+T[4,4];
            if(a===3||b===3)return True;
            break;
        case [3,0]:
            a=T[3,0]+T[3,1]+T[3,2];
            b=T[0,0]+T[3,0]+T[6,0];
            if(a===3||b===3)return True;
            break;
        case [3,1]:
            a=T[3,0]+T[3,1]+T[3,2];
            b=T[1,1]+T[3,1]+T[5,1];
            if(a===3||b===3)return True;
            break;
        case [3,2]:
            a=T[3,0]+T[3,1]+T[3,2];
            b=T[2,2]+T[3,2]+T[4,2];
            if(a===3||b===3)return True;
            break;
        case [3,4]:
            a=T[3,4]+T[3,5]+T[3,6];
            b=T[2,4]+T[3,4]+T[4,4];
            if(a===3||b===3)return True;
            break;
        case [3,5]:
            a=T[3,4]+T[3,5]+T[3,6];
            b=T[1,5]+T[3,5]+T[5,5];
            if(a===3||b===3)return True;
            break;
        case [3,6]:
            a=T[3,4]+T[3,5]+T[3,6];
            b=T[0,6]+T[3,6]+T[6,6];
            if(a===3||b===3)return True;
            break;
        case [4,2]:
            a=T[4,2]+T[4,3]+T[4,4];
            b=T[2,2]+T[3,2]+T[4,2];
            if(a===3||b===3)return True;
            break;
        case [4,3]:
            a=T[4,2]+T[4,3]+T[4,4];
            b=T[4,3]+T[5,3]+T[6,3];
            if(a===3||b===3)return True;
            break;
        case [4,4]:
            a=T[4,2]+T[4,3]+T[4,4];
            b=T[2,4]+T[3,4]+T[4,4];
            if(a===3||b===3)return True;
            break;
        case [5,1]:
            a=T[5,1]+T[5,3]+T[5,5];
            b=T[1,1]+T[3,1]+T[5,1];
            if(a===3||b===3)return True;
            break;
        case [5,3]:
            a=T[5,1]+T[5,3]+T[5,5];
            b=T[4,3]+T[5,3]+T[6,3];
            if(a===3||b===3)return True;
            break;
        case [5,5]:
            a=T[5,1]+T[5,3]+T[5,5];
            b=T[1,5]+T[3,5]+T[5,5];
            if(a===3||b===3)return True;
            break;
        case [6,0]:
            a=T[6,0]+T[6,3]+T[6,6];
            b=T[0,0]+T[3,0]+T[6,0];
            if(a===3||b===3)return True;
            break;
        case [6,3]:
            a=T[6,0]+T[6,3]+T[6,6];
            b=T[4,3]+T[5,3]+T[6,3];
            if(a===3||b===3)return True;
            break;
        case [6,6]:
            a=T[6,0]+T[6,3]+T[6,6];
            b=T[0,6]+T[3,6]+T[6,6];
            if(a===3||b===3)return True;
            break;
        default:
    }
}

Sıra='somun'
Hamle=[]

T=BosTahta();
Hamle.push(T)


T1=BosTahta();
T1[3][2]=1;
console.log(T)
console.log(T1)
console.log(Mcikarma(T,T1))
console.log(farkbul(T,T1))