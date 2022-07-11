console.log('comntentScript loaded');


let ctxOrig;
let img;
let canvas
let ctxMy

 //// worker.load();

///  worker.initialize('eng');

function runCapture() {
  const canvas1: any = document.querySelector('canvas[data-stream-id="screen_stream"]'); 
  if(canvas1 && !ctxOrig) {

    ctxOrig = canvas1.getContext('2d');

    console.log('getContext ', ctxOrig)    

var elemDiv = document.createElement('div');
elemDiv.style.cssText = 'position:absolute;width:200px;height:100px;z-index:100;background:#FFF;';

const canvas: any = document.createElement('canvas'); //finds Original Canvas
///img = document.createElement('img'); 

document.body.appendChild(elemDiv);

elemDiv.appendChild(canvas);
ctxMy = canvas.getContext('2d');
///img = new Image();

//elemDiv.appendChild(img);

  }

  if(ctxOrig) {
    const imageData = ctxOrig.getImageData(10, 10, 200, 80);
    console.log(imageData);    
    ctxMy.putImageData(imageData, 0, 0);

   

    //worker.recognize(imageData).then((r) => {
     //   console.log(r.text);
       // textarea.value = r.text
   // })
   /// img.src = imageData;

  }
   

console.log(canvas);
}



/// setInterval(() => runCapture(), 15000)