import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const request = await req.json();
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '465',
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const contactString = `Abertura de Chamado - ${request.nome}`;
  let msg = `
  Nome do cliente: ${request.nome}<br/>
  Orgão: ${request.orgao}<br/>
  <br/>
  Email: ${request.email}<br/>
  Telefone: ${request.phone}<br/>
  <br/>
  Número da licitação: ${request.licitacao}<br/>
  Número do contrato: ${request.contrato}<br/>
  <br/>
  Mensagem:<br/>
  ${request.msg}
  `;

  const mailOptions = {
    from: 'mtbrookbrampa@gmail.com',
    to: 'pedrodaia.c@gmail.com',
    subject: contactString,
    text: request.msg,
    html: msg,
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
