// banglaValue englishValue ictValue  button btnCalE btnCalB btnCalI


//bangla result btn
const btnCalculatorB = document.getElementById('btnCalB');
btnCalculatorB.addEventListener('click', ()=>{
   const banglaMark =parseInt( document.getElementById('banglaValue').value);
  let addItInTotalMark=parseInt(document.getElementById('totalMark').innerHTML=banglaMark);

  mark('banglaGrade', banglaMark);
  totalNumber();


//    const bangaGrade=parseInt(document.getElementById('banglaGrade').innerText=banglaMark);
})

//English result btn

const btnCalculatorE = document.getElementById('btnCalE');
btnCalculatorE.addEventListener('click', ()=>{
    const englishMark =parseInt( document.getElementById('englishValue').value);
  let addItInTotalMark=parseInt(document.getElementById('totalMark').innerHTML=englishMark);
 
  mark('englishGrade', englishMark);
  totalNumber();

})

//ICT reslt btn 

const btnCalculatorI = document.getElementById('btnCalI');
btnCalculatorI.addEventListener('click', ()=>{
    const ictMark =parseInt( document.getElementById('ictValue').value);
    let addItInTotalMark=parseInt(document.getElementById('totalMark').innerHTML=ictMark);
   
     mark('ictGrade', ictMark);
     totalNumber();
})

//final calculation Btn
const finalGradBtn=document.getElementById('finalcalBtn');
finalGradBtn.addEventListener('click' , function(){
    var grandMark= parseInt(document.getElementById('totalMark').innerText);
    finalGrade();
})





function mark(id, mk){

    if(mk >= 80 && mk <= 100){
    document.getElementById(id).innerText='A +'
   }else if(mk >= 70 && mk <= 79){
    document.getElementById(id).innerText='A'
   }else if(mk >= 60 && mk <= 69){
    document.getElementById(id).innerText='A-'
   }else if(mk >= 50 && mk <= 59){
    document.getElementById(id).innerText='B'
   }else if(mk >= 40 && mk <= 49){
    document.getElementById(id).innerText='C'
   }else if(mk >= 33 && mk <= 39){
    document.getElementById(id).innerText='D'
   }else{
    document.getElementById(id).innerText='F'
   }
  
}

function totalNumber(){
   var valuOfIct =Number( document.getElementById('ictValue').value);
   var valuOfBangla =Number( document.getElementById('banglaValue').value);
   var valuOfEnglish =Number( document.getElementById('englishValue').value);
   var totalNum=parseInt(document.getElementById('totalMark').innerText =valuOfIct + valuOfEnglish + valuOfBangla);
  return totalNum;
}




function finalGrade(){
  
   var grandMark=document.getElementById('totalMark').innerText;
    if(grandMark >= 240 && grandMark <= 300 ){
      return  document.getElementById('finalGrade').innerText="GP-5.00 = A +";
    }else if(grandMark >= 210 && grandMark <= 239){
        return  document.getElementById('finalGrade').innerText="GP-4.00 = A ";
    }else if(grandMark >= 180 && grandMark <= 209){
        return  document.getElementById('finalGrade').innerText="GP-3.50 =  A -";
    }else if(grandMark >= 150 && grandMark <= 179){
        return  document.getElementById('finalGrade').innerText="GP-3.00 = B ";
    }else if(grandMark >=120  && grandMark <= 149){
        return  document.getElementById('finalGrade').innerText="GP-2.00 = C ";
    }else if(grandMark >=99  && grandMark <= 119){
        return  document.getElementById('finalGrade').innerText="GP-1.00 = D ";
    }else{
        return  document.getElementById('finalGrade').innerText="GP-0.00 = F ";
    }
     


}


