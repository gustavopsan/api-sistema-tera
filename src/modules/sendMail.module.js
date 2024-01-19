const nodemailer = require('nodemailer');

const sendMail = async (email, subject, text, html) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            secure: true,
            auth: {
                user: 'no-reply@ibvidaemcristo.com.br',
                pass: 'editpro7@G'
            }
        });

        await transporter.sendMail({
            from: 'Mailer API',
            to: email,
            subject: subject,
            text: text,
            html: html
        });

        return {
            status: 'success',
            message: 'Message sent successfully'
        }
    } catch (error) {
        return {
            status: 'error',
            message: 'Email cannot be sent',
            error: error
        }
    }
}

module.exports = sendMail;