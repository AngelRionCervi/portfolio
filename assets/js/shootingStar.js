var canvas = document.getElementById("myCanvas");

canvas.width = window.screen.width/100*62;
canvas.height = window.screen.height;

let cometColor = '#f1f0ea';
var ctx = canvas.getContext("2d");


function genRand(min, max, decimalPlaces) {  
    var rand = Math.random()*(max-min) + min;
    var power = Math.pow(10, decimalPlaces);
    return Math.floor(rand*power) / power;
}

let xss = [];
let yss = [];
let cometSize = [];
let cometSizeInc = [];
let cometSpeed = [];
let cometExtend = [];
let cometExtendMult = [];
let tailNumber = [];


function shootingStar() {

    let enter;
    let exit;

    canvas.addEventListener('mouseenter', ()=>{
        clearInterval(exit);
        enter = setInterval(()=>{
            cometSizeInc.forEach((v, i, a)=>{
                if(a[i] < 0.08){
                    a[i] += 0.005;
                }
            })
            cometExtendMult.forEach((v, i, a)=>{
                if(cometExtend[i] < 2){
                    a[i] += 0.01;
                }
            })
        }, 100)

    })

    canvas.addEventListener('mouseout', ()=>{
        clearInterval(enter);
        exit = setInterval(()=>{
            cometSizeInc.forEach((v, i, a)=>{
                if(a[i] > 0.005){
                    a[i] -= 0.0005;
                }
            })
            cometExtendMult.forEach((v, i, a)=>{
                if(cometExtend[i] > 0){
                    a[i] -= 0.001;
                }
            })
        }, 100)
    })

    setInterval(()=>{
        if(xss.length < 50) {
            for (let n = 0; n < 5; n++) {
                xss.push(genRand(-(canvas.width/2), canvas.width, 0))
                yss.push(genRand(-(canvas.height), canvas.height, 0))
                cometSize.push(0);
                cometSizeInc.push(genRand(0.001, 0.006, 3));
                cometSpeed.push(genRand(0.5, 1.5, 3));
                cometExtend.push(genRand(1, 1.4, 3));
                cometExtendMult.push(genRand(1, 1.004, 3));
                tailNumber.push(genRand(4, 8, 0))
            } 
        }
    }, 500)

    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        yss.forEach((v, i, a) => {
            if(v - cometSize[i]*2*(tailNumber[i]+1)*cometExtend[i] > canvas.height) {
                a.splice(i, 1);
                xss.splice(i, 1);
                cometSize.splice(i, 1);
                cometSizeInc.splice(i, 1);
                cometSpeed.splice(i, 1);
                cometExtend.splice(i, 1);
                cometExtendMult.splice(i, 1);
                tailNumber.splice(i, 1);
            }
        })
        
        xss.forEach((v, i, a) => {

            for (let u = 1; u < tailNumber[i]+1; u++) {

                    
                ctx.beginPath();
                ctx.arc(a[i] - cometSize[i]*(1.618*u)*cometExtend[i], yss[i] - cometSize[i]*(1.618*u)*cometExtend[i], cometSize[i]/(1.618*u), 0, Math.PI*2);
                ctx.fillStyle = "rgba(241, 240, 234, "+ 1/u +")";
                ctx.strokeStyle = "rgba(241, 240, 234, "+ 1/u +")";
                ctx.fill();
                ctx.closePath();

            }
            
            
            cometSize[i] += cometSizeInc[i];
            
            
            if(cometExtend[i] > 3) {
                cometExtend[i] *= cometExtendMult[i];
            }
            
            a[i] += cometSpeed[i];
            yss[i] += cometSpeed[i];
        })

        requestAnimationFrame(render);
    }

    render();
}


shootingStar();







