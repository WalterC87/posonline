var nodemailer = require('nodemailer');
var error;

exports.sentEmailRegister = function(req, res, next){
	var transport = nodemailer.createTransport("SMTP", {
		host: "mail2.saulmendez.com",
		secureConnection: true,
		port: 25,
		auth: {
			user: "registro@posenlinea.com",
			pass: "Privado$2015"
		}
	});

	var mailOptions = {
		from : "registro@posenlinea.com", //email variable
		to: req.body.email,
		subject: "Registro en POS en Linea",
		html: "aca el HTML que le vas asignar"
	};

	transport.sendMail(mailOptions, function(err, res){
		error = err;
		if(err){
			console.log(err);
		}else{
			console.log("Mensaje enviado a" + req.body.email);
		}
	});

	if(!error){
		res.data = "Se ha enviado un correo a su direccion de contacto para validar su informacion"
	}
}