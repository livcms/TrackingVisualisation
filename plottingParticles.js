

function plotfirst(){
    fill('#eea9b8');
    ellipse(particle_pos[0], particle_pos[1], 40, 40);
    particle_pos = [particle_pos[0] + windowWidth*0.009, particle_pos[1] - windowHeight*0.01];
    
    if (particle_pos[1] < windowHeight*0.5){ 
      fill('#eea9b8');
      ellipse(windowWidth*0.45, windowHeight*0.5, 20, 20); 
}
 
    if (particle_pos[1] < windowHeight*0.4){ 
      fill('#eea9b8');
      ellipse(windowWidth*0.55, windowHeight*0.4, 20, 20); 
}
    if (particle_pos[1] < windowHeight*0.3){ 
      fill('#eea9b8');
      ellipse(windowWidth*0.65, windowHeight*0.3, 20, 20); 
}
    
    if (particle_pos[1] < windowHeight*0.2){ 
      fill('#eea9b8');
      ellipse(windowWidth*0.75, windowHeight*0.2, 20, 20); 
}
}


function plotsecond(){

    
    fill('#70c2d8');
    ellipse(particle_pos2[0], particle_pos2[1], 40, 40);
    particle_pos2 = [particle_pos2[0] - windowWidth*0.004, particle_pos2[1] - windowHeight*0.01];
  
    if (particle_pos2[1] < windowHeight*0.5){ 
      fill('#70c2d8');
      ellipse(windowWidth*0.8, windowHeight*0.5, 20, 20); 
}
 
    if (particle_pos2[1] < windowHeight*0.4){ 
      fill('#70c2d8');
      ellipse(windowWidth*0.75, windowHeight*0.4, 20, 20); 
}
    if (particle_pos2[1] < windowHeight*0.3){ 
      fill('#70c2d8');
      ellipse(windowWidth*0.7, windowHeight*0.3, 20, 20); 
}
    
    if (particle_pos2[1] < windowHeight*0.2){ 
      fill('#70c2d8');
      ellipse(windowWidth*0.65, windowHeight*0.2, 20, 20); 
}
}



function plotthird(){

    
    fill('#009569');
    ellipse(particle_pos3[0], particle_pos3[1], 40, 40);
  
  // fix for curve 
      particle_pos3 = [particle_pos3[0] - 0.08*currsec + 5, particle_pos3[1] - windowWidth*0.001];

  
    if (particle_pos3[1] < windowHeight*0.5){ 
      fill('#009569');
      ellipse(windowWidth*0.5, windowHeight*0.5, 20, 20); 
}
 
    if (particle_pos3[1] < windowHeight*0.4){ 
      fill('#009569');
      ellipse(windowWidth*0.45, windowHeight*0.4, 20, 20); 
}
    if (particle_pos3[1] < windowHeight*0.3){ 
      fill('#009569');
      ellipse(windowWidth*0.4, windowHeight*0.3, 20, 20); 
}
    
    if (particle_pos3[1] < windowHeight*0.2){ 
      fill('#009569');
      ellipse(windowWidth*0.35, windowHeight*0.2, 20, 20); 
}
}




function plotfourth(){

    
    fill(' #F09E2E');
    ellipse(particle_pos4[0], particle_pos4[1], 40, 40);
      particle_pos4 = [particle_pos4[0], particle_pos4[1] - windowHeight*0.01];

  
    if (particle_pos4[1] < windowHeight*0.5){ 
      fill('#F09E2E');
      ellipse(windowWidth*0.2, windowHeight*0.5, 20, 20); 
}
 
    if (particle_pos4[1] < windowHeight*0.4){ 
      fill('#F09E2E');
      ellipse(windowWidth*0.2, windowHeight*0.4, 20, 20); 
}
    if (particle_pos4[1] < windowHeight*0.3){ 
      fill('#F09E2E');
      ellipse(windowWidth*0.2, windowHeight*0.3, 20, 20); 
}
    
    if (particle_pos4[1] < windowHeight*0.2){ 
      fill('#F09E2E');
      ellipse(windowWidth*0.2, windowHeight*0.2, 20, 20); 
}
}



function plotfifth(){

    
    fill('#4b0872');
    ellipse(particle_pos5[0], particle_pos5[1], 40, 40);
      particle_pos5 = [particle_pos5[0]-windowWidth*0.01, particle_pos5[1] - windowHeight*0.01];

  
    if (particle_pos5[1] < windowHeight*0.5){ 
      fill('#4b0872');
      ellipse(windowWidth*0.5, windowHeight*0.5, 20, 20); 
}
 
    if (particle_pos5[1] < windowHeight*0.4){ 
      fill('#4b0872');
      ellipse(windowWidth*0.4, windowHeight*0.4, 20, 20); 
}
    if (particle_pos5[1] < windowHeight*0.3){ 
      fill('#4b0872');
      ellipse(windowWidth*0.3, windowHeight*0.3, 20, 20); 
}
    
    if (particle_pos5[1] < windowHeight*0.2){ 
      fill('#4b0872');
      ellipse(windowWidth*0.2, windowHeight*0.2, 20, 20); 
}
}



function plotsixth(){
    fill('#888981');
    ellipse(particle_pos6[0], particle_pos6[1], 40, 40);
    particle_pos6 = [particle_pos6[0] + windowWidth*0.01, particle_pos6[1] - windowHeight*0.012];
    
    if (particle_pos6[1] < windowHeight*0.5){ 
      fill('#888981');
      ellipse(windowWidth*0.2, windowHeight*0.5, 20, 20); 
}
 
    if (particle_pos6[1] < windowHeight*0.4){ 
      fill('#888981');
      ellipse(windowWidth*0.3, windowHeight*0.4, 20, 20); 
}
    if (particle_pos6[1] < windowHeight*0.3){ 
      fill('#888981');
      ellipse(windowWidth*0.4, windowHeight*0.3, 20, 20); 
}
    
    if (particle_pos6[1] < windowHeight*0.2){ 
      fill('#888981');
      ellipse(windowWidth*0.5, windowHeight*0.2, 20, 20); 
}
}


function plotcollision(){
  if (col_particle_pos[0] < windowWidth/2 & col_particle_pos1[0] > windowWidth/2){
  col_particle_pos = [col_particle_pos[0] + windowWidth*0.01, col_particle_pos[1]]; 
  col_particle_pos1 = [col_particle_pos1[0] - windowWidth*0.01, col_particle_pos1[1]]; 
  fill('#a83236');
  ellipse(col_particle_pos[0], col_particle_pos[1], 40, 40);
  fill('#1f0203');
  ellipse(col_particle_pos1[0], col_particle_pos1[1], 40, 40);
}else{ 
  ellipse(col_particle_pos[0], col_particle_pos[1], 40, 40);
  ellipse(col_particle_pos1[0], col_particle_pos1[1], 40, 40);
  line(col_particle_pos[0], col_particle_pos[1], windowWidth*0.8, windowHeight*0.8); 
  line(col_particle_pos[0], col_particle_pos[1], windowWidth*0.2, windowHeight*0.7); 
  line(col_particle_pos[0], col_particle_pos[1], windowWidth*0.9, windowHeight*0.9); 
  ellipse(windowWidth*0.8, windowHeight*0.8, 20, 20); 
  ellipse(windowWidth*0.2, windowHeight*0.7, 20, 20); 
  ellipse(windowWidth*0.9, windowHeight*0.9, 20, 20); 
  
}
}