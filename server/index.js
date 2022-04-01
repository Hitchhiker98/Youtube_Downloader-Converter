const express = require("express");
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const ytdl = require("ytdl-core");
const app = express();

app.use(cors());
app.listen(4000, () => {
  console.log("server works !! at post 4000");
});

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../index.html"))
//   console.log(path.join(__dirname, "index.html"))
// })

app.use(express.urlencoded({ extended: true }));
app.use("/", express.static(path.join(__dirname, "../public")));

app.get("/download", (req, res) => {
  let URL = req.query.URL;

  //   res.header("Content-Disposition", 'attachment; filename="video.mp4"');
  //   ytdl(URL, {format: "mp4"}).pipe(res);
  console.log(URL);

  // ytdl(URL)
  //   .pipe(fs.createWriteStream('video.mp4'));
  //

  console.log(ytdl.getInfo(URL));
});

app.post("/youtube", (req, res) => {
  const url = req.body.url;
  console.log(req.body);
  ytdl
    .getBasicInfo(url)
    .then( info => {
      console.log(info.videoDetails.title)
      const title = info.videoDetails.title
      res.header(`Content-Disposition`,`attachement; filename=${title}.mp4` );

      ytdl(url, {
        quality: "96",
        format: "mp4"
      }).pipe(res)
    })
    .catch((err) => console.log(err));
});
