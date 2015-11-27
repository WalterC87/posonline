var models = require('../../models');

exports.postDistribuidor = function(req, res, next){
	models.distribuidor.create({
		nombre: req.body.nombre,
		direccion: req.body.direccion,
		telefono: req.body.telefono,
		contacto: req.body.contacto,
		status: true
	}).then(function (res){
		if(!res){
			res.status(500);
			res.json({
				type: false,
				data: "Ha ocurrido un error: " + res
			});
		}else{
			res.status(200);
			res.json({
				type: true,
				data: "Distribuidor agregado exitosamente..."
			});
		};
	});
};

exports.getDistribuidor = function(req, res, next){
	models.distribuidor.findOne({
		where: {
			id: req.params.id
		}
	}).then(function (res){
		if(!res){
			res.status(500);
			res.json({
				type: false,
				data: "Distribuidor no encontrado: " + res
			});
		}else{
			res.status(200);
			res.json({
				type: true,
				data: res
			});
		};
	});
};

exports.putDistribuidor = function(req, res, next){
	models.distribuidor.findOne({
		where: {
			id: req.params.id
		}
	}).then(function (res){
		if(!res){
			res.status(500);
			res.json({
				type: false,
				data: "Distribuidor no encontrado."
			})
		}else{
			res.update({
				nombre: req.body.nombre,
				direccion: req.body.direccion,
				telefono: req.body.telefono,
				contacto: req.body.contacto,
				status: req.body.status
			}).then(function (_res){
				if(!_res){
					res.status(500);
					res.json({
						type: false,
						data: "Error al actualizar el Distribuidor: " + _res.nombre
					});
				}else{
					res.status(200);
					res.json({
						type: true,
						data: "Distribuidor actualizado exitosamente ..."
					});
				};
			});
		};
	});
};

exports.deleteDistribuidor = function (req, res, next){
	models.distribuidor.findOne({
		where: {
			id: req.body.id
		}
	}).then(function (res){
		if(!res){
			res.status(500);
			res.json({
				type: false,
				data: "Distribuidor no encontrado."
			})
		}else{
			res.update({
				status: false
			}).then(function (_res){
				if(!_res){
					res.status(500);
					res.json({
						type: false,
						data: "Error al eliminar el Distribuidor: " + _res.nombre
					});
				}else{
					res.status(200);
					res.json({
						type: true,
						data: "Distribuidor Eliminado exitósamente ..."
					});
				};
			});
		}
	})
};

exports.getDistribuidores = function (req, res, next){
	models.distribuidor.findAll({
		where: {
			status: 1
		}
	}).then(function (distribuidores){
		if(!distribuidores){
			res.status(500);
			res.json({
				type: false,
				data: "no se pudieron encontrar los Distribuidores: " + distribuidores
			});
		}else{
			res.status(200);
			res.json({
				type: true,
				data: distribuidores
			});
		};
	});
};
