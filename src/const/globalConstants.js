require('dotenv').config()

module.exports = {
    PORT: process.env.PORT || 5000,
    DB_USER: process.env.DB_USER || "root",
    DB_PASS: process.env.DB_PASS || null,
    DB_NAME: process.env.DB_NAME || "mi_base",
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES_IN: '3d', // expira en 3 días, para mejor testing
    MAX_FILE_SIZE: 1024 * 1024 * 20,
    PATH_ESTUDIOS: 'uploads/archivos-estudios/'
}