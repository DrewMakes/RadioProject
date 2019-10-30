function displayUi(imgList) {
  document.getElementById("root").innerHTML = "";
  console.log("IMAGES: ", imgList);
  for (var img of imgList) {
    show_image(img.src, img.width, img.height);
  }
}
function show_image(src, width, height) {
  var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = src;

  document.getElementById("root").appendChild(img);
}
