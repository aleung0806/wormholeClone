const express = require("express");
const multer = require('multer')
const cors = require('cors')
const app = express();

// app.use(helmet());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(xss())
// app.use(compression());
app.use(cors());
app.options('*', cors());
app.use(express.static('build'))
// app.use(morgan)
// app.use(sessionHandler)
// // app.use(passport.initialize());
// // app.use(passport.session());
// // app.post('/v1/passport-login', passport.authenticate('local'));

// app.use('/v1', authRouter);
// app.use('/v1', userRouter);
// app.use('/v1', roleRouter);
// app.use('/v1', docsRouter);
// app.use('/v1', testRouter);

// app.use(errorHandler)
const storage = multer.diskStorage({
  destination: 'uploads/', // Specify the destination folder
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Use the original filename
  },
});

// Create the multer upload middleware
const upload = multer({ storage });
const fileMap = {}
app.post('/upload', [
  upload.single('uploaded_file'),
  (req, res) => { 
    if (req.file){
      fileMap[req.body.key] = req.file
      fileMap[req.body.key].downloads = 0
      fileMap[req.body.key].timeUploaded = new Date()

      fileMap[req.body.key].maxDownloads = 1000
      fileMap[req.body.key].maxTime = 60 * 60

      console.log('uploaded', req.file.originalname)
      res.status(200).json({ message: 'File uploaded successfully.' })
    }
  }, 
  ]
)

app.get('/file/:key', (req, res) => {
  const file = fileMap[req.params.key]
  console.log('downloading', file.originalname)
  res.download(`${__dirname}/uploads/${file.originalname}`)
  fileMap[req.params.key]

})

app.get('/info/:key', (req, res) => {
  const file = fileMap[req.params.key]
  console.log('file', file)
  res.status(200).send(file)
})

module.exports = app;