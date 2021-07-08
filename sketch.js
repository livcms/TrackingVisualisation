let currsec; // global variables
let img; 

function setup() {
	createCanvas(windowWidth, windowHeight);
    currsec = 0; 
    img = loadImage('images/interactionNetwork.png'); // Load the image
    particle_pos = [0, windowHeight]; 
    particle_pos2 = [windowWidth, windowHeight]; 
    particle_pos3 = [0.5*windowWidth, windowHeight]; 
    particle_pos4 = [0.2*windowWidth, windowHeight]; 
    particle_pos5 = [windowWidth, windowHeight]; 
    particle_pos6 = [0-windowWidth*0.2, windowHeight]; 
    col_particle_pos = [0, windowHeight - 20];  
    col_particle_pos1 = [windowWidth, windowHeight -20]; 
  
    resetBtn = 
      createButton("Restart Animation");
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

 if(currsec < 150){
    textSize(30);
   fill('#253C47'); 
    text('These are layers of silicon in the inner \n part of a particle detector', 30, windowHeight*0.8);
  }

 if(currsec > 150 & currsec < 350){
    textSize(30);
   fill('#253C47'); 
    text('Protons are collided in the beamline \n and produce other particles', 30, windowHeight*0.8);
     plotcollision(); 
     //plotfirst(); 

  }
  
  if(currsec > 350 & currsec < 600){
   textSize(30);
   fill('#253C47'); 
    text('These particles pass through the silicon detector, \n leaving energy deposits (hits)', 30, windowHeight*0.8);
     plotfirst(); 
    

    
  }
  
  if(currsec > 600 & currsec < 850){
   textSize(30);
   fill('#253C47'); 
   text('Usually, there are many simultaneous \n proton-proton collisions. \n We see several tracks in the detector.', 0.1*windowWidth, windowHeight*0.8);
   plotfirst();
   plotsecond();
}
  //if (currsec > 750){ 
  //fill('#FFFFFF'); 
  //plotfirst(); 
  //plotsecond(); 
 // }
  
  if (currsec > 850 & currsec < 1050){ 
   textSize(30);
   fill('#253C47'); 
   text('To identify the particles and their momenta, \n  we need to reconstruct the tracks using the hits', 0.1*windowWidth, windowHeight*0.8); 
  kalmansetup(); 
  }
  
    
  if (currsec > 1050 & currsec < 1400){ 
   textSize(30);
   fill('#253C47'); 
   text('CMS reconstructs the tracks with a Kalman filter. \n This sequentially updates a track candidate \n by finding comapible hits ', 0.1*windowWidth, windowHeight*0.8); 
  kalmansetup(); 
  //kalmanplot1();
  }
  
    
  if (currsec > 1400 &  currsec < 2000){ 
   textSize(30);
   fill('#253C47'); 
   text('The track is extrapolated to the next layer, \n giving a window of compatability. \n The track parameters are then \n updated with a compatible hit. \n This repeats.', 0.1*windowWidth, windowHeight*0.8); 
  kalmansetup(); 
  kalmanplot1();
  if (currsec > 1500 &  currsec < 1600){
    kalmanplot1();
    kalmanplot2();
  }
  if (currsec > 1600 &  currsec < 1700){
    kalmanplot1();
    kalmanplot2();
    kalmanplot3(); 
  }
  if (currsec > 1700 &  currsec < 1800){
    kalmanplot1();
    kalmanplot2();
    kalmanplot3(); 
    kalmanplot4();
  }
  if (currsec > 1800 &  currsec < 2000){
    kalmanplot1();
    kalmanplot2();
    kalmanplot3(); 
    kalmanplot4(); 
    kalmanplot5();
}
    
  }
  
  if (currsec > 2000 & currsec < 2500){ 
   textSize(30);
   fill('#253C47'); 
   text('CMS is upgrading. There will be many more \n simultaneous collisions. \n Considering all the possible ways \n of constructing trakcs with these hits, \n we can see how this scales badly.', 0.1*windowWidth, windowHeight*0.8); 
  plotfirst(); 
  plotsecond(); 
 // plotthird(); 
  plotfourth(); 
  plotfifth(); 
  plotsixth();

  }
  
  if (currsec > 2500 & currsec < 2700){
       fill('#253C47'); 
   text('Let\'s consider another algorithm. \n Graph neural nets have shown promise \n with particle tracking', 0.1*windowWidth, windowHeight*0.8); 
  }
  
    if (currsec > 2700 & currsec < 3100){
       fill('#253C47'); 
   text('We create a graph. \n We can consider the hits as nodes \n and try to predict which nodes \n are connected.', 0.1*windowWidth, windowHeight*0.8); 
      gnninitial();
      
  }
  
  if (currsec > 3100 & currsec < 4000){
    //gnncuts(); 
    //fill('#253C47'); 
    text("0", windowWidth*0.4, windowHeight*0.45); 
    text("1", windowWidth*0.5, windowHeight*0.45); 
    text("0", windowWidth*0.6, windowHeight*0.45); 
    gnninitial();
    fill('#253C47'); 
   text('We use supervised machine learning. \n If the nodes are part \n of the same track, \n we label it as 1, otherwise 0.', 0.1*windowWidth, windowHeight*0.8); 
  }
  
    if (currsec > 4000 & currsec < 5000){
    //textSize(30);
    //text("Interaction network", windowWidth-700, windowHeight-360);  
    textSize(28);
    fill('#253C47'); 
    text("One popular method is an interaction network. \n The hit positions and relations between hits are used \n as features to create a latent representation of the graph. \n The edge weights are predicted, then a new node embedding is calculated. \n This is analogous to first computing the interaction, \n and then the effect of a moving object.",  0.1*windowWidth, windowHeight*0.7);   
      
    interactionnetwork(); 
    
  }
  
      if (currsec > 5000){
    //textSize(30);
    //text("Interaction network", windowWidth-700, windowHeight-360);  
    textSize(28);
    fill('#253C47'); 
    text("Thanks for watching! \n To restart the animation. \n Feel free to email l.vage19@imperial.ac.uk \n if you have questions",  0.1*windowWidth, windowHeight*0.8);   
      
    interactionnetwork(); 
    
  }
}








