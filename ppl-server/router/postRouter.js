const router = require("express").Router();
const postApi = require("../api/postApi");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

router.get("/fetchcategories", (req, res) => {
  postApi
    .fetchCategory()
    .then(response => res.send(response))
    .catch(err => console.error(err.stack));
});

router.post("/postcategory", upload.single("filedata"), (req, res) => {
  req.body.filedata = req.file;
  console.log("post route..", req.body, req.file);
  postApi
    .saveCategory(req.body)
    .then(response => {
      postApi
        .fetchCategory()
        .then(response => res.send(response))
        .catch(err => {
          console.error(err.stack);
          res.send({ categoryUniqueness: false });
        });
    })
    .catch(err => console.error(err.stack));
});

router.post("/uploadpost", upload.single("filedata"), (req, res) => {
  postApi
    .savePost(req.body)
    .then(response => console.log(response))
    .catch(err => console.error(err.stack));
});

module.exports = router;
