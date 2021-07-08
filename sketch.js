let currsec; // global variables
let img; 

function setup() {
	createCanvas(windowWidth, windowHeight);
    currsec = 0; 
    img = loadImage('images/interactionNetwork.png'); // Load the image
    particle_pos = [0, windowHeight]; 
    particle_pos2 = [windowWidth, windowHeight]; 
    particle_pos3 = [0.5*windowWidth, windowHeight]; 
    particle_pos4 = [0.4*windowWidth, windowHeight]; 
    particle_pos5 = [windowWidth, windowHeight]; 
    particle_pos6 = [0.1*windowWidth, windowHeight]; 
  
    resetBtn = 
      createButton("Reset Animation");
    resetBtn.position(0.12*windowWidth, windowHeight*0.05);
    resetBtn.mousePressed(resetAnimation);
  
      pauseBtn = 
      createButton("Pause");
    pauseBtn.position(windowWidth*0.045, windowHeight*0.05);
    pauseBtn.mousePressed(pause);
  
        playBtn = 
      createButton("Play");
    playBtn.position(0,windowHeight*0.05);
    playBtn.mousePressed(play);


}

function draw() {
  
  //setup background every time draw is called 
  background(220);
  line(windowWidth*0.9, windowHeight*0.5, windowWidth*0.1, windowHeight*0.5 );
  line(windowWidth*0.9, windowHeight*0.4, windowWidth*0.1, windowHeight*0.4 );
  line(windowWidth*0.9, windowHeight*0.3, windowWidth*0.1, windowHeight*0.3 );
  line(windowWidth*0.9, windowHeight*0.2, windowWidth*0.1, windowHeight*0.2);
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
   text('When particles are collided, they collide in bunches. \n We are mainly interested in head on collissions', 0.1*windowWidth, windowHeight*0.8);
    
    //curve( windowWidth-100, windowHeight-400, windowWidth-200, windowHeight-500, windowWidth-300, windowHeight-600, windowWidth-400, windowHeight-700 )
  plotfirst(); 

    
  }
  
  if(currsec > 200 & currsec < 300){
   textSize(30);
   fill('#253C47'); 
   text('Several particles leave hits from any collission', 0.1*windowWidth, windowHeight*0.8);
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
   text('We see the hits, and need to reconstruct the tracks', 0.1*windowWidth, windowHeight*0.8); 
  kalmansetup(); 
  }
  
    
  if (currsec > 350 & currsec < 400){ 
   textSize(30);
   fill('#253C47'); 
   text('CMS reconstructs the tracks with a Kalman filter. \n This sequentially updates a track candidate \n by finding comapible candidate hits ', 0.1*windowWidth, windowHeight*0.8); 
  kalmansetup(); 
  kalmanplot1();
  }
  
    
  if (currsec > 400 &  currsec < 500){ 
   textSize(30);
   fill('#253C47'); 
   text('CMS reconstructs the tracks with a Kalman filter. \n This sequentially updates a track candidate \n by finding comapible candidate hits ', 0.1*windowWidth, windowHeight*0.8); 
  kalmansetup(); 
  kalmanplot1();
  kalmanplot2();
  kalmanplot3(); 
  kalmanplot4(); 
  kalmanplot5();

  }
  
  if (currsec > 500 & currsec < 550){ 
   textSize(30);
   fill('#253C47'); 
   text('CMS reconstructs the tracks with a Kalman filter. \n This sequentially updates a track candidate \n by finding comapible candidate hits ', 0.1*windowWidth, windowHeight*0.8); 
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
  
  if (currsec > 600 & currsec < 650){
    gnncuts(); 
    text("0", windowWidth*0.5, windowHeight*0.5); 
    text("1", windowWidth*0.6, windowHeight*0.5); 
    text("0", windowWidth*0.7, windowHeight*0.5); 
  }
  
    if (currsec > 650){
    //textSize(30);
    //text("Interaction network", windowWidth-700, windowHeight-360);  
    textSize(28);
    fill('#253C47'); 
    text("The hit positions can relations between hits are used \n as features to create a latent representation of the graph. \n The edge weights are predicted, then a new node embedding is calculated. \n This is analogous to first computing the interaction, and then the effect of a moving object.", windowWidth*0.2, windowHeight*0.7);   
      
    interactionnetwork(); 
    
  }
}








