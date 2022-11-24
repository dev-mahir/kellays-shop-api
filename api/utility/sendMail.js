import nodemailer from 'nodemailer'
import { accountActivateLink } from './emailTemplate.js';


/**
 * Send  activation link to user
 */

export const sendActivationLink = async(to, data) => {
    // create transport 
    let transport =  nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_ID ,
            pass: process.env.MAIL_PASS,
        }
    });

 try {
    await transport.sendMail({
        from: `Kellays <${process.env.MAIL_ID}>`,
        to: to,
        subject: "Account Activation",
        html: accountActivateLink(data.name, data.link)
    })
 } catch (error) {
    console.log(error);
    
 }


}