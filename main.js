eyepatch_status = "";
pirate_hat_status = "";
witch_hat_status = "";
wand_status = "";
parrot_status = "";
dinosaur_status = "";
dragon_status = "";
phoenix_status = "";
eyepatch_x = 0;
eyepatch_y = 0;
pirate_hat_x = 0;
pirate_hat_y = 0;
witch_hat_x = 0;
witch_hat_y = 0;
wand_x = 0;
wand_y = 0;
parrot_x = 0;
parrot_y = 0;
dinosaur_x = 0;
dinosaur_y = 0;
dragon_x = 0;
dragon_y = 0;
phoenix_x = 0;
phoenix_y = 0;
function preload() {
eyepatch = loadImage("https://i.postimg.cc/hPsvs8W8/Untitled-Artwork.png");
piratehat = loadImage("https://i.postimg.cc/D0kV1Nwv/Untitled-Artwork-1.png");
witchhat = loadImage("https://i.postimg.cc/pXk8rhCT/Untitled-Artwork-2.png");
wand_ = loadImage("https://i.postimg.cc/mkyDfC1t/Untitled-Artwork-3.png");
parrot_ = loadImage("https://i.postimg.cc/C5ShN5rY/Untitled-Artwork-1.png");
dinosaur_ = loadImage("https://i.postimg.cc/FFBC38YC/Untitled-Artwork-2.png");
dragon_ = loadImage("https://i.postimg.cc/0ygtHSdp/Untitled-Artwork-3.png");
phoenix_ = loadImage("https://i.postimg.cc/B6vN1B4G/Untitled-Artwork-4.png");
}
function setup() {
canvas = createCanvas(400, 400);
canvas.center();

video = createCapture(VIDEO);
video.size(400, 400);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', getPoses);
}
function draw() {
image(video, 0, 0, 400, 400);
if(eyepatch_status == true) {
image(eyepatch, eyepatch_x, eyepatch_y, 150, 200);
}
else if(pirate_hat_status == true) {
image(piratehat, pirate_hat_x, pirate_hat_y, 200, 100);
}
else if(witch_hat_status == true) {
image(witchhat, witch_hat_x, witch_hat_y, 280, 200);
}
else if(wand_status == true) {
image(wand_, wand_x, wand_y, 200, 200);
}
else if(parrot_status == true) {
image(parrot_, parrot_x, parrot_y, 80, 100);
}
else if(dinosaur_status == true) {
image(dinosaur_, dinosaur_x, dinosaur_y, 100, 160);
}
else if(dragon_status == true) {
image(dragon_, dragon_x, dragon_y, 160, 160);
}
else if(phoenix_status == true) {
image(phoenix_, phoenix_x, phoenix_y, 200, 200);
}
}
function take_snapshot() {
save('myFilterImage.png');
}
function modelLoaded() {
console.log("PoseNet is initialized");
}
function eye_patch() {
eyepatch_status = true;
pirate_hat_status = false;
witch_hat_status = false;
wand_status = false;
parrot_status = false;
dinosaur_status = false;
dragon_status = false;
phoenix_status = false;
}
function pirate_hat() {
eyepatch_status = false;
pirate_hat_status = true;
witch_hat_status = false;
wand_status = false;
parrot_status = false;
dinosaur_status = false;
dragon_status = false;
phoenix_status = false;
}
function witch_hat() {
eyepatch_status = false;
pirate_hat_status = false;
witch_hat_status = true;
wand_status = false;
parrot_status = false;
dinosaur_status = false;
dragon_status = false;
phoenix_status = false;
}
function wand() {
eyepatch_status = false;
pirate_hat_status = false;
witch_hat_status = false;
wand_status = true;
parrot_status = false;
dinosaur_status = false;
dragon_status = false;
phoenix_status = false;
}
function parrot() {
eyepatch_status = false;
pirate_hat_status = false;
witch_hat_status = false;
wand_status = false;
parrot_status = true;
dinosaur_status = false;
dragon_status = false;
phoenix_status = false;
}
function dinosaur() {
eyepatch_status = false;
pirate_hat_status = false;
witch_hat_status = false;
wand_status = false;
parrot_status = false;
dinosaur_status = true;
dragon_status = false;
phoenix_status = false;
}
function dragon() {
eyepatch_status = false;
pirate_hat_status = false;
witch_hat_status = false;
wand_status = false;
parrot_status = false;
dinosaur_status = false;
dragon_status = true;
phoenix_status = false;
}
function phoenix() {
eyepatch_status = false;
pirate_hat_status = false;
witch_hat_status = false;
wand_status = false;
parrot_status = false;
dinosaur_status = false;
dragon_status = false;
phoenix_status = true;
}
function getPoses(results) {
if(results.length > 0) {
console.log(results);
eyepatch_x = results[0].pose.leftEye.x - 75;
eyepatch_y = results[0].pose.leftEye.y - 125;
pirate_hat_x = results[0].pose.nose.x - 100;
pirate_hat_y = results[0].pose.nose.y - 200;
witch_hat_x = results[0].pose.nose.x - 140;
witch_hat_y = results[0].pose.nose.y - 280;
wand_x = results[0].pose.rightWrist.x - 60;
wand_y = results[0].pose.rightWrist.y - 310;
parrot_x = results[0].pose.leftShoulder.x - 40;
parrot_y = results[0].pose.leftShoulder.y - 120;
dinosaur_x = results[0].pose.leftWrist.x - 60;
dinosaur_y = results[0].pose.leftWrist.y - 210;
dragon_x = results[0].pose.leftWrist.x - 80;
dragon_y = results[0].pose.leftWrist.y - 210;
phoenix_x = results[0].pose.leftShoulder.x - 60;
phoenix_y = results[0].pose.leftShoulder.y - 240;
}
}