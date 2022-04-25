let regularArr = [];
 
  let pan1
  let pan2
  let pan3
  let pan4

function preload() {
  
  panel1 = loadImage ('p1.png');
  panel2 = loadImage ('p2.png');
  panel3 = loadImage ('p3.png');
  panel4 = loadImage ('p4.png')
  
  regularArr = [panel1, panel2, panel3, panel4];
 
}

function setup() {
 
  print(regularArr);
  shuffle(regularArr, true); 
  print(regularArr);

  let newArr = shuffle(regularArr);
  print(regularArr);
  print(newArr);
  
  pan1= newArr[0]
  pan2= newArr[1]
  pan3= newArr[2]
  pan4= newArr[3]
  
}

function draw() {
  createCanvas (1250, 400);
  background (GRAY)
  
  fill ('white')
  text('Refresh page to shuffle the panels', 20, 40)
  
  image(pan1, 20, 60);
  image(pan2, 320, 60);
  image(pan3, 620, 60);
  image(pan4, 920, 60)
  
  
}









