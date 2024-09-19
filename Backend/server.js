import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.post('/api/form', async (req, res) => {
    const data = req.body;
    const smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    let mailOptions = {
        from: `"${process.env.EMAIL_NAME}" <${process.env.EMAIL}>`,
        to: process.env.EMAIL,
        subject: `Contact form submission from ${data.name}`,
        text: data.message + ' | Sent from: ' + data.email,
    };

    try {
        await smtpTransport.sendMail(mailOptions);
        res.status(200).json({
            statusCode: 200,
            message: 'Message sent successfully!',
        });
    } catch (err) {
        res.status(500).json({
            statusCode: 500,
            message: 'Error sending email: ' + err.message,
        });
    }
});

app.listen(PORT, (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server running on port🚀☕ ${PORT}`);
    }
});