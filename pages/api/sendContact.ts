import type { NextApiRequest, NextApiResponse } from 'next';
import { createTransport } from "nodemailer"

export default async function sendContact(req:NextApiRequest, res:NextApiResponse) {
    const transporter = createTransport({
        service: "gmail",
        port: 587,
        secure: true,
        auth: {
            user: process.env.GMAIL_USER_ACCOUNT,
            pass: process.env.GMAIL_APP_PASSWORD
        },
    });

    try {
        await transporter.sendMail({
            from: "no-reply@hayalab.me",
            to: "info@hayalab.me",
            subject: "【hayalab.me】お問い合わせ",
            text: req.body,
        });
    } catch (err) {
        return res.status(500).json({ message: `エラーが発生しました`, err })
    }
    res.status(200).json({
        success: true,
        message: "お問い合わせが送信されました"
    })
}