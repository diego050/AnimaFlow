import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Configuración de CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { nombre, email, rol } = req.body;

    if (!nombre || !email || !rol) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // You should use a verified domain if you have one. Resend provides a testing domain.
      to: ['bazand25@gmail.com'], // Send to the user's gmail
      subject: `Nueva solicitud de Beta Privada: ${nombre}`,
      html: `
        <h2>Nueva solicitud para AnimaFlow Beta</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Rol:</strong> ${rol}</p>
      `,
    });

    return res.status(200).json(data);
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Error sending email' });
  }
}
