const express = require("express");
const multer = require('multer')
const cors = require('cors')
const app = express();
// app.use(helmet());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(xss());
// app.use(compression());
app.use(cors());
app.options('*', cors());

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

app.post('/upload', upload.single('file'), (req, res) => {
  console.log('upload: ', req.file)
  console.log('Uploaded file:', req.file);
  res.status(200).json({ message: 'File uploaded successfully.' });
})

module.exports = app;