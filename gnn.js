function gnninitial(){
  fill('#FFFFFF');
  plotfirst(); 
  plotsecond(); 
  plotthird(); 
  plotfourth(); 
  plotfifth(); 
  plotsixth();
  
  line(windowWidth-550, windowHeight-300, windowWidth-450, windowHeight-400);
  line(windowWidth-450, windowHeight-400, windowWidth-350, windowHeight-500);
  line(windowWidth-450, windowHeight-400, windowWidth-250, windowHeight-500);
  line(windowWidth-450, windowHeight-400, windowWidth-520, windowHeight-500);
  line(windowWidth-450, windowHeight-400, windowWidth-400, windowHeight-500);
  line(windowWidth-450, windowHeight-400, windowWidth-500, windowHeight-500);
  line(windowWidth-450, windowHeight-400, windowWidth-600, windowHeight-500);
}


function gnncuts(){
  fill('#FFFFFF');
  plotfirst(); 
  plotsecond(); 
  plotthird(); 
  plotfourth(); 
  plotfifth(); 
  plotsixth();
  
  line(windowWidth-550, windowHeight-300, windowWidth-450, windowHeight-400);
  line(windowWidth-450, windowHeight-400, windowWidth-350, windowHeight-500);
  line(windowWidth-450, windowHeight-400, windowWidth-250, windowHeight-500);
  line(windowWidth-450, windowHeight-400, windowWidth-400, windowHeight-500);

}


function interactionnetwork(){ 
  img.resize(900, 330);
  image(img, windowWidth-870, windowHeight-720);
  
}