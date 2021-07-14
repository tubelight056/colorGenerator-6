

function Colorgenerator(){
    let redq=document.querySelector(".red");
    let greenq=document.querySelector(".green");
    let blueq=document.querySelector(".blue");
    let alphaq=document.querySelector(".alpha");
    let redp=document.querySelector(".redp");
    let greenp=document.querySelector(".greenp");
    let bluep=document.querySelector(".bluep");
    let alphap=document.querySelector(".alphap");
    let redvalue,bluevalue,greenvalue,alphavalue;
    this.onchangehandler=()=>{
        redvalue=redq.value;
        greenvalue=greenq.value;
        bluevalue=blueq.value;
        alphavalue=alphaq.value;
        redp.innerHTML=redvalue;
        greenp.innerHTML=greenvalue;
        bluep.innerHTML=bluevalue;
        alphap.innerHTML=alphavalue;
        hexcolortitle=`background-color:#${this.numtohex(redvalue)}${this.numtohex(greenvalue)}${this.numtohex(bluevalue)}${this.numtohex(alphavalue)}`
        document.querySelector(".title").value=hexcolortitle;
        document.querySelector("body").style.background="#"+this.numtohex(redvalue)+this.numtohex(greenvalue)+this.numtohex(bluevalue)+this.numtohex(alphavalue);
    }
    this.numtohex=(num)=>{
        var hex=Number(num).toString(16);
        return (hex.length==1)? '0'+hex : hex;
    }
    this.copys=()=>{
        var text = document.getElementById('title');
        text.select();
        document.execCommand('copy');
    }
}
const colorgenerator=new Colorgenerator();
