function kalmansetup(){ 
    

      fill('#FFFFFF');
      ellipse(windowWidth*0.45, windowHeight*0.5, 20, 20); 
      ellipse(windowWidth*0.55, windowHeight*0.4, 20, 20); 
      ellipse(windowWidth*0.65, windowHeight*0.3, 20, 20); 
      ellipse(windowWidth*0.75, windowHeight*0.2, 20, 20); 
  
      ellipse(windowWidth*0.8, windowHeight*0.5, 20, 20); 
      ellipse(windowWidth*0.75, windowHeight*0.4, 20, 20); 
      ellipse(windowWidth*0.7, windowHeight*0.3, 20, 20); 
      ellipse(windowWidth*0.65, windowHeight*0.2, 20, 20); 
}

function kalmanplot1(){
  //line(windowWidth-550, windowHeight-300, windowWidth-450, windowHeight-400)
  noFill();
  rect(windowWidth*0.45-20, windowHeight*0.5-20, 60, 60);
}


function kalmanplot2(){
 // kalmanplot1(); 
  line(windowWidth*0.45, windowHeight*0.5, windowWidth*0.55, windowHeight*0.4);
  noFill();
  rect(windowWidth*0.55-20, windowHeight*0.4-20, 70, 70);
}


function kalmanplot3(){
 // kalmanplot1(); 
  line(windowWidth*0.55, windowHeight*0.4,windowWidth*0.65, windowHeight*0.3)
  noFill();
  rect(windowWidth*0.65-10, windowHeight*0.3-20, 100, 100);
}


function kalmanplot4(){
  
  line(windowWidth*0.65, windowHeight*0.3,windowWidth*0.75, windowHeight*0.2)
  noFill();
  rect(windowWidth*0.75-10, windowHeight*0.2-20, 60, 60);
  
  
  line(windowWidth*0.65, windowHeight*0.3,windowWidth*0.65, windowHeight*0.2)
  noFill();
  rect(windowWidth*0.65-20, windowHeight*0.2-20, 60, 60);
}

function kalmanplot5(){
  
  line(windowWidth*0.7, windowHeight*0.3,windowWidth*0.75, windowHeight*0.2);
  noFill();
  rect(windowWidth*0.75-20, windowHeight*0.2-20, 60, 60);
}
  