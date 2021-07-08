

function plotfirst(){
    fill('#eea9b8');
    ellipse(particle_pos[0], particle_pos[1], 40, 40);
    particle_pos = [particle_pos[0] + 10, particle_pos[1] - 10];
    
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
    particle_pos2 = [particle_pos2[0] - 5, particle_pos2[1] - 10];
  
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
      particle_pos3 = [particle_pos3[0] - 0.08*currsec + 5, particle_pos3[1] - 10];

  
    if (particle_pos3[1] < windowHeight-400){ 
      fill('#009569');
      ellipse(windowWidth-480, windowHeight-400, 20, 20); 
}
 
    if (particle_pos3[1] < windowHeight-500){ 
      fill('#009569');
      ellipse(windowWidth-520, windowHeight-500, 20, 20); 
}
    if (particle_pos3[1] < windowHeight-600){ 
      fill('#009569');
      ellipse(windowWidth-620, windowHeight-600, 20, 20); 
}
    
    if (particle_pos3[1] < windowHeight-700){ 
      fill('#009569');
      ellipse(windowWidth-770, windowHeight-700, 20, 20); 
}
}




function plotfourth(){

    
    fill(' #F09E2E');
    ellipse(particle_pos4[0], particle_pos4[1], 40, 40);
      particle_pos4 = [particle_pos4[0], particle_pos4[1] - 10];

  
    if (particle_pos4[1] < windowHeight-400){ 
      fill('#F09E2E');
      ellipse(windowWidth-400, windowHeight-400, 20, 20); 
}
 
    if (particle_pos4[1] < windowHeight-500){ 
      fill('#F09E2E');
      ellipse(windowWidth-400, windowHeight-500, 20, 20); 
}
    if (particle_pos4[1] < windowHeight-600){ 
      fill('#F09E2E');
      ellipse(windowWidth-400, windowHeight-600, 20, 20); 
}
    
    if (particle_pos4[1] < windowHeight-700){ 
      fill('#F09E2E');
      ellipse(windowWidth-400, windowHeight-700, 20, 20); 
}
}



function plotfifth(){

    
    fill('#4b0872');
    ellipse(particle_pos5[0], particle_pos5[1], 40, 40);
      particle_pos5 = [particle_pos5[0]-10, particle_pos5[1] - 10];

  
    if (particle_pos5[1] < windowHeight-400){ 
      fill('#4b0872');
      ellipse(windowWidth-400, windowHeight-400, 20, 20); 
}
 
    if (particle_pos5[1] < windowHeight-500){ 
      fill('#4b0872');
      ellipse(windowWidth-500, windowHeight-500, 20, 20); 
}
    if (particle_pos5[1] < windowHeight-600){ 
      fill('#4b0872');
      ellipse(windowWidth-600, windowHeight-600, 20, 20); 
}
    
    if (particle_pos5[1] < windowHeight-700){ 
      fill('#4b0872');
      ellipse(windowWidth-700, windowHeight-700, 20, 20); 
}
}



function plotsixth(){
    fill('#888981');
    ellipse(particle_pos6[0], particle_pos6[1], 40, 40);
    particle_pos6 = [particle_pos6[0] + 8, particle_pos6[1] - 10];
    
    if (particle_pos6[1] < windowHeight-400){ 
      fill('#888981');
      ellipse(windowWidth-700, windowHeight-400, 20, 20); 
}
 
    if (particle_pos6[1] < windowHeight-500){ 
      fill('#888981');
      ellipse(windowWidth-600, windowHeight-500, 20, 20); 
}
    if (particle_pos6[1] < windowHeight-600){ 
      fill('#888981');
      ellipse(windowWidth-500, windowHeight-600, 20, 20); 
}
    
    if (particle_pos6[1] < windowHeight-700){ 
      fill('#888981');
      ellipse(windowWidth-400, windowHeight-700, 20, 20); 
}
}