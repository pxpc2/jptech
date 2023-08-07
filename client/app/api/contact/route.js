import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const request = await req.json();
  console.log('email: ' + process.env.NEXT_PUBLIC_EMAIL_USER);
  console.log('pass: ' + process.env.NEXT_PUBLIC_EMAIL_PASS);
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '465',
    secure: true,
    auth: {
      user: 'SEU_EMAIL@gmail.com',
      pass: 'SUA_SENHA',
    },
  });

  const contactString = `JPTECH - Mensagem de contato - ${request.nome} ${request.sobrenome}`;

  const mailOptions = {
    from: 'mtbrookbrampa@gmail.com',
    to: 'pedrodaia.c@gmail.com',
    subject: contactString,
    text: request.msg,
    html: `<div> email: ${request.email} <br / ><br / > ${request.msg} </div>`,
  };

  return await transporter
    .sendMail(mailOptions)
    .then((response) => {
      return NextResponse.json(
        { error: false, emailSent: true, errors: [], response },
        { status: 200 }
      );
    })
    .catch((error) => {
      return NextResponse.json(
        { error: true, emailSent: false, errors: [error] },
        { status: 500 }
      );
    });
}
