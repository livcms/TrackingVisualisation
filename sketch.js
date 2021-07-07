let currsec; // global variables


function setup() {
	createCanvas(windowWidth, windowHeight);
    currsec = 0; 
    particle_pos = [30, windowHeight]; 
    particle_pos2 = [windowWidth, windowHeight]; 
    particle_pos3 = [windowWidth-500, windowHeight]; 
    particle_pos4 = [windowWidth-400, windowHeight]; 
    particle_pos5 = [windowWidth, windowHeight]; 
    particle_pos6 = [windowWidth-900, windowHeight-100]; 








}

function draw() {
  
  //setup background every time draw is called 
  background(220);
  line(windowWidth-100, windowHeight-400, 100, windowHeight-400 );
  line(windowWidth-100, windowHeight-500, 100, windowHeight-500 );
  line(windowWidth-100, windowHeight-600, 100, windowHeight-600 );
  line(windowWidth-100, windowHeight-700, 100, windowHeight-700 );
  currsec+=1; 

 //if(currsec < 150){
   // textSize(30);
    //text('These are layers of silicon in the inner part of the detector', 10, windowHeight-200);
  //}

  //if(currsec > 150 & currsec < 300){
    //textSize(30);
    //text('A particle leaves energy deposits (hits) in the silicon layers', 10, windowHeight-200);
  //}
  
  if(currsec > 0 & currsec < 200){
   textSize(30);
   fill('#253C47'); 
   text('When particles are collided, they collide in bunches. \n We are mainly interested in head on collissions', 10, windowHeight-200);
    
    //curve( windowWidth-100, windowHeight-400, windowWidth-200, windowHeight-500, windowWidth-300, windowHeight-600, windowWidth-400, windowHeight-700 )
  plotfirst(); 

    
  }
  
  if(currsec > 200 & currsec < 300){
   textSize(30);
   fill('#253C47'); 
   text('Several particles leave hits from any collission', 10, windowHeight-200);
   plotfirst();
   plotsecond();
}
  if (currsec > 250){ 
  fill('#FFFFFF'); 
  plotfirst(); 
  plotsecond(); 
  }
  
  if (currsec > 300 & currsec < 350){ 
   textSize(30);
   fill('#253C47'); 
   text('We see the hits, and need to reconstruct the tracks', 10, windowHeight-200); 
  kalmansetup(); 
  }
  
    
  if (currsec > 350 & currsec < 400){ 
   textSize(30);
   fill('#253C47'); 
   text('CMS reconstructs the tracks with a Kalman filter. \n This sequentially updates a track candidate \n by finding comapible candidate hits ', 10, windowHeight-200); 
  kalmansetup(); 
  kalmanplot1();
  }
  
    
  if (currsec > 400 &  currsec < 500){ 
   textSize(30);
   fill('#253C47'); 
   text('CMS reconstructs the tracks with a Kalman filter. \n This sequentially updates a track candidate \n by finding comapible candidate hits ', 10, windowHeight-200); 
  kalmansetup(); 
  kalmanplot1();
  kalmanplot2();
  kalmanplot3(); 
  kalmanplot4(); 

  }
  
  if (currsec > 500 & currsec < 550){ 
   textSize(30);
   fill('#253C47'); 
   text('CMS reconstructs the tracks with a Kalman filter. \n This sequentially updates a track candidate \n by finding comapible candidate hits ', 10, windowHeight-200); 
  plotfirst(); 
  plotsecond(); 
  plotthird(); 
  plotfourth(); 
  plotfifth(); 
  plotsixth();

  }
  
  if (currsec > 550 & currsec < 600){
    gnninitial(); 
  }
  
  if (currsec > 600){
    gnncuts(); 
    text("0", windowWidth-450, windowHeight-450); 
    text("1", windowWidth-410, windowHeight-450); 
    text("0", windowWidth-360, windowHeight-450); 
  }
}








