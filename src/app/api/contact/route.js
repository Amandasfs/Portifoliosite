import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, location, product, description } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.MAIL_USER,
      subject: `Novo Contato: ${product}`,
      html: `
        <h2>Novo pedido de orçamento</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Localização:</strong> ${location}</p>
        <p><strong>Produto:</strong> ${product}</p>
        <p><strong>Descrição:</strong><br>${description}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return new Response(JSON.stringify({ error: 'Erro ao enviar e-mail' }), { status: 500 });
  }
}
