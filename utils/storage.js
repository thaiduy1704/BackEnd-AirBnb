import multer from 'multer'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, process.cwd() + "/public/img");
  },
  filename: (req, file, cb) => {

    const fileNewName = Date.now() + "_" + file.originalname;
    cb(null, fileNewName);
  }
})

export { storage }