function displayUi(imgList) {
  var imgDivs = ["a", "b", "c", "d", "e"];

  var getBiggestImgLocation = function(imgWidth, imgHeight) {
    var imgAreas = [];
    imgDivs.forEach(div => {
      var divWidth = document.getElementsByClassName(div)[0].clientWidth;
      var divHeight = document.getElementsByClassName(div)[0].clientHeight;
      var imgSize = getImgSize(divWidth, divHeight, imgWidth, imgHeight);
      imgAreas.push({
        area: imgSize.imgWidth * imgSize.imgHeight,
        imgWidth: imgSize.imgWidth,
        imgHeight: imgSize.imgHeight,
        div: div
      });
    });
    let maxImgArea = imgAreas.reduce((max, imgArea) =>
      max.area > imgArea.area ? max : imgArea
    );
    return maxImgArea;
  };

  // clear img's
  imgDivs.forEach(div => {
    document.getElementsByClassName(div)[0].innerHTML = "";
  });

  for (let img of imgList) {
    var biggestImgLocation = getBiggestImgLocation(img.width, img.height);
    var div = biggestImgLocation.div;
    // remove div from list of options for next img
    var usedDivIndex = imgDivs.indexOf(div);
    imgDivs.splice(usedDivIndex, 1);
    // img size to display
    var newWidth = biggestImgLocation.imgWidth;
    var newHeight = biggestImgLocation.imgHeight;
    show_image(div, img.src, img.width, img.height, newWidth, newHeight);
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

function show_image(div, src, width, height, newWidth, newHeight) {
  var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = src;

  // set img pixel size
  img.style.width = "" + newWidth + "px";
  img.style.height = "" + newHeight + "px";

  document.getElementsByClassName(div)[0].appendChild(img);
}
