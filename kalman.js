function kalmansetup(){ 
    

      fill('#FFFFFF');
      ellipse(windowWidth-450, windowHeight-400, 20, 20); 
      ellipse(windowWidth-350, windowHeight-500, 20, 20); 
      ellipse(windowWidth-250, windowHeight-600, 20, 20); 
      ellipse(windowWidth-150, windowHeight-700, 20, 20); 
      ellipse(windowWidth-200, windowHeight-400, 20, 20); 
      ellipse(windowWidth-250, windowHeight-500, 20, 20); 
      ellipse(windowWidth-300, windowHeight-600, 20, 20); 
      ellipse(windowWidth-350, windowHeight-700, 20, 20); 
}

function kalmanplot1(){
  line(windowWidth-550, windowHeight-300, windowWidth-450, windowHeight-400)
  noFill();
  rect(windowWidth-460, windowHeight-420, 60, 60);
}


function kalmanplot2(){
 // kalmanplot1(); 
  line(windowWidth-450, windowHeight-400, windowWidth-350, windowHeight-500)
  noFill();
  rect(windowWidth-400, windowHeight-540, 70, 70);
}


function kalmanplot3(){
 // kalmanplot1(); 
  line(windowWidth-350, windowHeight-500,windowWidth-250, windowHeight-600)
  noFill();
  rect(windowWidth-320, windowHeight-650, 100, 100);
}


function kalmanplot4(){
  
  line(windowWidth-250, windowHeight-600,windowWidth-150, windowHeight-700)
  noFill();
  rect(windowWidth-180, windowHeight-750, 60, 60);
  
  
  line(windowWidth-250, windowHeight-600,windowWidth-350, windowHeight-700)
  noFill();
  rect(windowWidth-380, windowHeight-750, 60, 60);
}