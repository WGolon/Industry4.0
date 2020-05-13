
let hole1=document.querySelector('.hole1');
let hole2=document.querySelector('.hole2');
let hole3=document.querySelector('.hole3');
let hole4=document.querySelector('.hole4');
let overlay=document.querySelector('.overlay img');
let bushing=document.querySelector('.bushing img');
let bushingh2=document.querySelector('.bushing h2');
let overlayh2=document.querySelector('.overlay h2');
let overlayp=document.querySelector('.overlay p');
let bushingp=document.querySelector('.bushing p');
let corpsep=document.querySelector('.corpse p');
let ouptut=document.querySelector('.out');
let input=document.querySelector('.inpt');
let btn=document.querySelector('.btn');
let name = document.querySelector('.name');
let namecp = document.querySelector('.namecp');

// binary=[bushing, overlay, hole4, hole3, hole2, hole1]
let binary=[0,0,0,0,0,0];
let bin=0;
let binaryString='';

let onld = () =>{
   namecp.value = name.value;
   btn.addEventListener('click', alert(`${namecp.value} przesłałeś/aś do sterownika następujący part number: ${input.value} `));
}


let fcn = () =>{
   let ref =parseInt(binaryString,2);
   input.value=ref;
   ouptut.innerHTML=ref;
}


let converting=(arr)=>{
   binaryString='';
   arr.forEach( e => {
      if(e) binaryString+='1';
      else binaryString+='0';
   });
   fcn();
}

let status= (state, index)=>{
   if(!state) binary[index]=1;
   else binary[index]=0;
   converting(binary);
   return binary[index];
};

let pickedHoles = (arr)=>{
   let sum=0;
   for(i=2; i<6; i++){
      sum = sum + arr[i];
   }
   corpsep.innerHTML=`${sum} picked holes`;
}


// Event handlers
hole1.addEventListener('click', ()=>{
   bin=status(binary[5],5);
   if(!bin) hole1.style.backgroundColor ="red";
   else hole1.style.backgroundColor ="green";
   pickedHoles(binary);
});

hole2.addEventListener('click', ()=>{
   bin=status(binary[4],4);
   if(!bin) hole2.style.backgroundColor ="red";
   else hole2.style.backgroundColor ="green";
   pickedHoles(binary);
});

hole3.addEventListener('click', ()=>{
   bin=status(binary[3],3);
   if(!bin) hole3.style.backgroundColor ="red";
   else hole3.style.backgroundColor ="green";
   pickedHoles(binary);
});

hole4.addEventListener('click', ()=>{
   bin=status(binary[2],2);
   if(!bin) hole4.style.backgroundColor ="red";
   else hole4.style.backgroundColor ="green";
   pickedHoles(binary);
   //converting(binary);
});

overlay.addEventListener('click', ()=>{
   bin=status(binary[1],1);
   if(!bin){
      overlay.style.border="7px solid rgb(112, 37, 37)";
      overlayh2.style.color='red';
      overlayp.style.color='red';
      overlayp.innerHTML='not selected';
   } 
   else {
      overlay.style.border="7px solid rgb(0, 110, 0)";
      overlayh2.style.color='green';
      overlayp.style.color='green';
      overlayp.innerHTML='selected';
   }
});

bushing.addEventListener('click', ()=>{
   bin=status(binary[0],0);
   if(!bin){
      bushing.style.border="7px solid rgb(112, 37, 37)";
      bushingh2.style.color='red';
      bushingp.style.color='red';
      bushingp.innerHTML='not selected';
   } 
   else{
      bushing.style.border="7px solid rgb(0, 110, 0)";
      bushingh2.style.color='green';
      bushingp.style.color='green';
      bushingp.innerHTML='selected';
   } 
});
