function displayUi(imgList, track) {
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

  function displayImg(img) {
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

  var imgDivs = ["a", "b", "c", "d", "e"];
  // clear img's
  imgDivs.forEach(div => {
    document.getElementsByClassName(div)[0].innerHTML = "";
  });
  if (track.type === "song") {
    // Display first img quickly
    setTimeout(() => {
      if (imgList[0] !== undefined) {
        displayImg(imgList[0]);
        imgList.shift();
      }
    }, randomIntFromInterval(300, 600));

    //delay second and third img display
    (function theLoop(data, i) {
      setTimeout(() => {
        let img = imgList[i - 1];
        if (img !== undefined) {
          displayImg(img);
        }
        if (--i) {
          // If i > 0, keep going
          theLoop(data, i); // Call the loop again
        }
      }, randomIntFromInterval(2000, 4000));
    })(imgList, imgList.length);
  } else {
    // display one img for non-song track
    var img = getRandomArrayItem(imgList);
    setTimeout(() => displayImg(img), randomIntFromInterval(300, 600));
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
function sleep(millisecondsToWait) {
  var now = new Date().getTime();
  while (new Date().getTime() < now + millisecondsToWait) {}
}
