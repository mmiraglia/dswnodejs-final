require('dotenv').config()

module.exports = {
    PORT: process.env.PORT || 5000,
    DB_USER: process.env.DB_USER || "root",
    DB_PASS: process.env.DB_PASS || null,
    DB_NAME: process.env.DB_NAME || "mi_base"
}