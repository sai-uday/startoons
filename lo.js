const progress=document.querySelector(".progresss-done");
const input=document.querySelector(".inputValue");
const statu=document.querySelector(".status");
const maxInput=document.querySelector(".maxValue");
let finalValue;
let max;
function changeWidth(){
    if(finalValue!=NaN && max!=NaN && finalValue<=max){    
        progress.style.height=`${(finalValue/max)*100}%`;
        statu.innerText=`${(finalValue/max)*100}%`;
    }
        if(finalValue>max){    
            alert("Max value is less than Input Value");
        }

}
input.addEventListener("keyup",function(){
    finalValue=parseInt(input.value)
    setTimeout(changeWidth,1000);
})
maxInput.addEventListener("keyup",function(){
    max=parseInt(maxInput.value)
    setTimeout(changeWidth,1000);
}) 