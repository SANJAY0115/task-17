
let countdown=document.getElementById("count");



function btnfunc()
{



function text()
{
    console.log("Happy New Year");
    countdown.innerHTML="Happy New Year"
    
    
}


function one(callback)
{
   console.log("1");
   countdown.innerHTML=1;
   setTimeout(callback,1000);
}
function two(callback)
{
    console.log("2")
    countdown.innerHTML=2;
    setTimeout(callback,1000);
}
function three(callback)
{
    console.log("3");
    countdown.innerHTML=3;
    setTimeout(callback,1000);
}
function four(callback)
{
    console.log("4");
    countdown.innerHTML=4;
    setTimeout(callback,1000);
}
function five(callback)
{
    console.log("5");
    countdown.innerHTML=5;
    setTimeout(callback,1000);
}
function six(callback)
{
    console.log("6");
    countdown.innerHTML=6;
    setTimeout(callback,1000);
}
function seven(callback)
{
    console.log("7");
    countdown.innerHTML=7;
    setTimeout(callback,1000);
}
function eight(callback)
{
    console.log("8");
    countdown.innerHTML=8;
    setTimeout(callback,1000);
}
function nine(callback)
{
    console.log("9");
    countdown.innerHTML=9;
    setTimeout(callback,1000);
}
function ten(callback)
{
    console.log("10");
    countdown.innerHTML=10;
    setTimeout(callback,1000);
}


ten(()=>{
    nine(()=>{
       eight(()=>{
         seven(()=>{
            six(()=>{
                five(()=>{
                    four(()=>{
                      three(()=>{
                        two(()=>{
                            one(()=>{
                                text();
                            })
                        })
                      })
                    })
                })
            })
        })
       })
    })
})

}