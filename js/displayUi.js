var imgDivs = ["a", "b", "c", "d", "e"];
function displayUi(imgList) {
  // clear img's
  imgDivs.forEach(div => {
    document.getElementsByClassName(div)[0].innerHTML = "";
  });

  console.log("IMAGES: ", imgList);
  for (let [index, img] of imgList.entries()) {
    show_image(index, img.src, img.width, img.height);
  }
}
function show_image(index, src, width, height) {
  var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = src;

  document.getElementsByClassName(imgDivs[index])[0].appendChild(img);
}
