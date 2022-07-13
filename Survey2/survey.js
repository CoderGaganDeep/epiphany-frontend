var imgCount = 1;
var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
function changeImage() {
  if (imgCount !== 4) imgCount++;
  else image = "5.jpg";
  var image = document.getElementById("image1");
  image.src = images[imgCount];
}
//export default changeImage;
