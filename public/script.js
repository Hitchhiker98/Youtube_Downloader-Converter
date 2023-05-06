// Download Thumbnail
const inputThumb = document.getElementById("inputThumb");
const previewThumb = document.getElementById("preview-area-thumb");
const imageThumb = document.getElementById("imageThumb");
const downloadThumb = document.getElementById("downloadThumb");
// Download Video
const inputVideo = document.getElementById("inputVideo");
const previewVideo = document.getElementById("preview-area-video");
const imageVideo = document.getElementById("imageVideo");
const downloadVideo = document.getElementById("downloadVideo");
// Download Audio
const inputAudio = document.getElementById("inputAudio");
const previewAudio = document.getElementById("preview-area-audio");
const imageAudio = document.getElementById("imageAudio");
const downloadAuio = document.getElementById("downloadAuio");

// To use an alternate way of downlading thumbnails (opens in a new tab) use this method.

// const buttonThumb = document.getElementById("buttonThumb");
// let uri = "";
// buttonThumb.addEventListener("click", function () {
//   let link = document.createElement("a");
//   link.id = "download";
//   link.target = "_blank";
//   link.href = uri;
//   console.log(link);
//   if (uri !== "") {
//     document.body.appendChild(link);
//     link.click();
//     console.log("hey");
//   }
//   link.remove();
// });

function testUrl(url, preview, thumbnail, button) {
  let imgUrl = url.value;
  console.log("hello there");
  if (imgUrl.indexOf("https://www.youtube.com/watch?v=") != -1) {
    //if entered value is yt video url
    let vidId = imgUrl.split("v=")[1].substring(0, 11); //splitting yt video url from v= so we can get only video ID
    let ytThumbUrl = `https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`; //passing entred url video id inside
    thumbnail.src = ytThumbUrl;
    preview.classList.add("active");
    button.href = ytThumbUrl;
    button.disabled = false;
  } else if (imgUrl.indexOf("https://youtu.be") != -1) {
    //if video url looks like this
    let vidId = imgUrl.split("be/")[1].substring(0, 11);
    let ytImgUrl = `https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`;
    thumbnail.src = ytImgUrl;
    preview.classList.add("active");
    button.href = ytThumbUrl;
    button.disabled = false;
  } else {
    preview.classList.remove("active");
    button.disabled = true;
  }
}

// call this anytime thumbnail input is updated
inputThumb.onkeyup = function () {
  testUrl(inputThumb, previewThumb, imageThumb, downloadThumb);
  if (inputThumb.value.match(/\.(jpe?g|png|gif|bmp|webp)$/i)) {
    //if entered value is other image file url
    imageThumb.src = inputThumb.value; //passing user entered url inside img src
    previewThumb.classList.add("active");
    downloadThumb.href = inputThumb.value;
  }
};

//call this anytime video input is updated
inputVideo.onkeyup = function () {
  testUrl(inputVideo, previewVideo, imageVideo, downloadVideo);
};

//call this anytime audio input is updated
inputAudio.onkeyup = function () {
  testUrl(inputAudio, previewAudio, imageAudio, downloadAudio);
};
