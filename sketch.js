function preload() {
  lapiz = loadImage("lapiz.png");
  goma = loadImage("goma.png");
  mas = loadImage("mas.png");
  menos = loadImage("menos.png");
  cabecera = loadImage("cabecera.jpg");
  colores = loadImage("colores.jpg");
  state = 0;
  cirweight = 10;
  pencolor = color(200,200,0);
}

function setup() {
  createCanvas(900, 600);
  background(255);
}

function draw() {  
  dibujarMarco();
  if (mouseIsPressed) {
    if (mouseX > 53 && mouseY > 40 && mouseY < height-50) {
      noStroke();
      if (state == 1) {
        fill(pencolor);
        ellipse(mouseX,mouseY,cirweight,cirweight);
      } else {
        fill(255);
        ellipse(mouseX,mouseY,cirweight,cirweight);
      }
    } else {
      if (mouseX > 10 && mouseX < 40) {
        if (mouseY > 50 && mouseY < 80) {
          state=1;  
        }
        if (mouseY > 90 && mouseY < 120) {
          state=2;  
        }
        if (mouseY > 136 && mouseY < 158) {
          if(cirweight<99) cirweight+=1;  
        }
        if (mouseY > 188 && mouseY < 200) {
          if(cirweight>10) cirweight-=1;  
        }
      }
    }
    if (mouseY>550 && mouseY<565) {
      if(mouseX>95 && mouseX<110) pencolor=color(0);
      if(mouseX>114 && mouseX<128) pencolor=color(128,130,129);      
      if(mouseX>132 && mouseX<146) pencolor=color(127,4,0);      
      if(mouseX>150 && mouseX<164) pencolor=color(128,130,3);
      if(mouseX>169 && mouseX<182) pencolor=color(4,130,4);
      if(mouseX>188 && mouseX<200) pencolor=color(6,124,124);
      if(mouseX>205 && mouseX<220) pencolor=color(4,2,127);
      if(mouseX>224 && mouseX<238) pencolor=color(124,5,123);
      if(mouseX>242 && mouseX<255) pencolor=color(126,125,68);
      if(mouseX>260 && mouseX<274) pencolor=color(2,67,61);
      if(mouseX>278 && mouseX<292) pencolor=color(5,132,249);
      if(mouseX>296 && mouseX<310) pencolor=color(4,69,135);
      if(mouseX>315 && mouseX<328) pencolor=color(124,2,250);
      if(mouseX>332 && mouseX<346) pencolor=color(125,66,0);
    }
    if (mouseY>568 && mouseY<584) {
      if(mouseX>95 && mouseX<110) pencolor=color(255);
      if(mouseX>114 && mouseX<128) pencolor=color(196,190,192);      
      if(mouseX>132 && mouseX<146) pencolor=color(251,1,2);      
      if(mouseX>150 && mouseX<164) pencolor=color(251,251,29);
      if(mouseX>169 && mouseX<182) pencolor=color(21,244,15);
      if(mouseX>188 && mouseX<200) pencolor=color(15,248,252);
      if(mouseX>205 && mouseX<220) pencolor=color(2,3,244);
      if(mouseX>224 && mouseX<238) pencolor=color(254,0,255);
      if(mouseX>242 && mouseX<255) pencolor=color(254,252,129);
      if(mouseX>260 && mouseX<274) pencolor=color(3,251,129);
      if(mouseX>278 && mouseX<292) pencolor=color(130,254,252);
      if(mouseX>296 && mouseX<310) pencolor=color(128,128,248);
      if(mouseX>315 && mouseX<328) pencolor=color(247,4,132);
      if(mouseX>332 && mouseX<346) pencolor=color(255,130,63);
    }
  }
}

function dibujarMarco() {
  fill(240);
  strokeWeight(1);
  stroke(169,166,161);
  // Cabecera
  image(cabecera,0,0,width,40);
  
  // Banda izquierda
  rect(0,40,50,height-41);
  fill(236,233,216);
  rect(1,40,49,height-41);
  
  // Banda inferior
  fill(236,233,216);
  stroke(169,166,161);
  rect(51,height-60,width-52,59);
  image(colores,60,height-55,width-150,50);
  
  // Recuadro lápiz
  if (state == 1) {
    stroke(137,146,145);
	fill(249,255,253);
	rect(10,50,30,30);
  }
  image(lapiz,14,54,22,22);
  
  // Recuadro goma
  if (state == 2) {
	stroke(137,146,145);
	fill(249,255,253);
	rect(10,90,30,30);
  }
  image(goma,13,93,24,26);
  
  stroke(0);
  fill(0);
  image(mas,14,136,22,22);
  text(cirweight,18,180);  
  image(menos,15,188,22,22);
  
  // Recuadro interno
  noFill();
  stroke(112,110,95);
  rect(51,40,width-52,height-100);
  stroke(129,128,126);
  strokeWeight(2);
  rect(53,42,width-55,height-103);
}