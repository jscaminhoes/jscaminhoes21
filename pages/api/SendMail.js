import nodemailer from 'nodemailer';

export default function sendMail(req, res) {
  const trasporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL,
      pass: process.env.PASSWORD,
    },
  });
  if (req.body.titulo && req.body.caminhaoId) {
    trasporter
      .sendMail({
        from: 'jscaminhoes <jscaminhoes21@gmail.com>',
        to: 'jscaminhoes21@gmail.com',
        subject: req.body.titulo,
        text: `${req.body.cliente} | ${req.body.contato} | jscaminhoes.com.br/estoque/${req.body.caminhaoId} /n ${req.body.mensagem}`,
        html: ` <b>${req.body.cliente}</b> | <b>${req.body.contato}</b>  | jscaminhoes.com.br/estoque/${req.body.caminhaoId} <p>${req.body.mensagem}</p>`,
      })
      .then(() => {
        res.send('sucesso');
      })
      .catch(() => {
        res.send('erro');
      });
  } else {
    res.send('envie os parametros');
  }
}
