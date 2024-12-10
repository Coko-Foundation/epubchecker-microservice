const multer = require('multer')
const path = require('path')

const { tempFolderPath } = require('@coko/server')

const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    return cb(null, tempFolderPath)
  },

  // By default, multer removes file extensions so let's add them back
  filename: (req, file, cb) =>
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`,
    ),
})

const fileFilter = (req, file, cb) => {
  // Accept EPUBs only
  if (!file.originalname.match(/\.(epub|EPUB)$/)) {
    req.fileValidationError = 'Only EPUB files are allowed!'
    return cb(null, false)
  }

  return cb(null, true)
}

const uploadHandler = multer({ storage, fileFilter }).single('epub')

module.exports = { uploadHandler }
