const nodemailer = require('nodemailer');

const sendMail = async (email, subject, text, html) => {
    try {
        const transporter = nodemailer.createTransport({
            
        })
    } catch (error) {
        return {
            status: 'error',
            message: 'Email cannot be sent',
            error: error
        }
    }
}