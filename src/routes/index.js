const { Router } = require('express');
const { Users, Datos } = require('../modelos/db.Schema.js');
const router = Router();
const nodemailer = require('nodemailer');


// inicio programa buscardb =======================


router.get('/buscar', async (req, res) => {
    const { correo, clave } = req.query; 
  try {
    const usuarioCorreo = await Users.findOne({ email: correo }).select('email').exec();
    const usuarioClave = await Users.findOne({ clave: clave }).select('clave').exec();

    const UsersS = { correo: usuarioCorreo ? usuarioCorreo.email : null, clave: usuarioClave ? usuarioClave.clave : null };
     res.json({ mensaje: UsersS});
  } catch (error) {
    console.error('Error al consultar el usuario:', error);
    throw error;
  }
});

// gabrar registros de historico

router.post('/grabar', async (req, res) => {
  const UsersI = req.body; 
  const UsersUsuario = {
    email: UsersI.correo,
    clave: UsersI.clave,
    whatsapp:UsersI.whatsapp,
    razonSocial: UsersI.razonSocial,
    ciudad: UsersI.ciudad,
  }

  try {
    let result = await Users.findOne({ email: UsersUsuario.email }).exec();
    if (result) {
    } else {
      const nuevoDato = new Users(UsersUsuario);
      const resultado = await nuevoDato.save();
      result = null
    }
    res.json({ mensaje: result });
  } catch (error) {
    return error;
  }
});

// gabar historicos desde fronted

router.post('/datos', async (req, res) => {
  const datosC = req.body; 
  const  historico = {
    email:datosC.correoC,
    producto: datosC.productoC,
    fecha: datosC.fechaC,
  }
  try {
     if (historico) {
      const nuevoDato = new Datos(historico);
      const result = await nuevoDato.save();
     res.json({ mensaje: resultado });

    } else {
      const resultado="null"
    }
    res.json({ mensaje: result });
  } catch (error) {
    return error;
  }
});

// envio de correo a del formato de la pagina
//
router.post('/email-web', async (req, res) => {
  const { name, email, phone, message } = req.body;
  contentHTML = `
      <h1>User Information</h1>
      <ul>
          <li>Username: ${name}</li>
          <li>User Email: ${email}</li>
          <li>PhoneNumber: ${phone}</li>
      </ul>
      <p>${message}</p>
  `;

  let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "laboratoriodelcaribeweb@gmail.com",
        pass: process.env.CLAVECORREO,
      },
      tls: {
          rejectUnauthorized: false
      }
  });

  let info = await transporter.sendMail({
    from: `${name} <${email}>`,
    to: `comercial@laboratoriodelcaribe.com`,
    subject: 'Solicitud Cliente Web',
    html: contentHTML
})
 
  res.json({ message: 'ok' });
});

// envio de correo a clave olvidada 

router.post('/email_clave', async (req, res) => {
  const correo = req.body.email;
  let claveU = null;
  try {
    const resultado = await Users.find({ email: correo }).select('clave').exec();
    if (resultado.length > 0) {
      claveU = resultado[0].clave;
      }
  } catch (error) {
    console.error(error);
  }

  contentHTML = `
      <h1>Informacion de clave correo</h1>
      <ul>
          <li>User Email: ${correo}</li>
      </ul>
      <p>clave del correo es = <strong style="width: 20px; color: red;">${claveU}</strong>, trate de recordarla y se evitara retrasos</p>
  `;

  let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "laboratoriodelcaribeweb@gmail.com",
        pass: process.env.CLAVECORREO,
      },
      tls: {
          rejectUnauthorized: false
      }
  });
  let info = await transporter.sendMail({
    from: `laboratoriodelcaribeweb@gmail.com`,
    to: `${correo}`,
      subject: 'Servicio de clave',

      html: contentHTML
  })
  res.json({ message: claveU });
});


module.exports = router;