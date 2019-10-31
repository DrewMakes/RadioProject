var imgDivs = ["a", "b", "c", "d", "e"];
function displayUi(imgList) {
  // clear img's
  imgDivs.forEach(div => {
    document.getElementsByClassName(div)[0].innerHTML = "";
  });

  // console.log("IMAGES: ", imgList);
  for (let [index, img] of imgList.entries()) {
    show_image(index, img.src, img.width, img.height);
  }
}
var getImgSize = function(divWidth, divHeight, imgWidth, imgHeight) {
  var imgAspectRatio = imgWidth / imgHeight;
  if (imgWidth > divWidth) {
    var imgWidth = divWidth;
    var imgHeight = divWidth / imgAspectRatio;
  }
  if (imgHeight > divHeight) {
    var imgHeight = divHeight;
    var imgWidth = divHeight * imgAspectRatio;
  }
  return { imgWidth, imgHeight };
};
function show_image(index, src, width, height) {
  var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = src;

  var divWidth = document.getElementsByClassName(imgDivs[index])[0].clientWidth;
  var divHeight = document.getElementsByClassName(imgDivs[index])[0]
    .clientHeight;

  var imgSize = getImgSize(divWidth, divHeight, img.width, img.height);
  console.log("old img", { width, height });
  console.log("new img", imgSize);
  console.log("div", divWidth, divHeight);

  // set img pixel size
  img.style.width = "" + imgSize.imgWidth + "px";
  img.style.height = "" + imgSize.imgHeight + "px";

  document.getElementsByClassName(imgDivs[index])[0].appendChild(img);
}
