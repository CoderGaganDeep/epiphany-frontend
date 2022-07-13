var imgCount = 1;
var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
function changeImage() {
  if (imgCount !== images.length - 1) imgCount++;
  else imgCount = 0;
  var image = document.getElementById("image1");
  image.src = images[imgCount];
}
//export default changeImage;
