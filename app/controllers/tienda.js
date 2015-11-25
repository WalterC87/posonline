var models = require('../../models');

exports.postTienda = function(req, res, next){
	models.tienda.create({
		nombre: req.body.nombre,
		direccion: req.body.direccion,
		telefono: req.body.telefono,
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
				data: "Tienda agregada exitosamente..."
			});
		};
	});
};

exports.getTienda = function(req, res, next){
	models.tienda.findOne({
		where: {
			id: req.params.id
		}
	}).then(function (res){
		if(!res){
			res.status(500);
			res.json({
				type: false,
				data: "Tienda no encontrada: " + res
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

exports.putTienda = function(req, res, next){
	models.tienda.findOne({
		where: {
			id: req.params.id
		}
	}).then(function (res){
		if(!res){
			res.status(500);
			res.json({
				type: false,
				data: "Tienda no encontrada..."
			})
		}else{
			res.update({
				nombre: req.body.nombre,
				direccion: req.body.direccion,
				telefono: req.body.telefono,
				status: req.body.status
			}).then(function (_res){
				if(!_res){
					res.status(500);
					res.json({
						type: false,
						data: "Error al actualizar la Tienda: " + _res.nombre
					});
				}else{
					res.status(200);
					res.json({
						type: true,
						data: "Tienda actualizada exitosamente ..."
					});
				};
			});
		};
	});
};

exports.deleteTienda = function (req, res, next){
	models.tienda.findOne({
		where: {
			id: req.body.id
		}
	}).then(function (res){
		if(!res){
			res.status(500);
			res.json({
				type: false,
				data: "Tienda no encontrada."
			})
		}else{
			res.update({
				status: false
			}).then(function (_res){
				if(!_res){
					res.status(500);
					res.json({
						type: false,
						data: "Error al eliminar la Tienda: " + _res.nombre
					});
				}else{
					res.status(200);
					res.json({
						type: true,
						data: "Tienda Eliminada exitósamente ..."
					});
				};
			});
		}
	})
};

exports.getTiendas = function (req, res, next){
	models.tienda.findAll({
		where: {
			status: true
		}
	}).then(function (res){
		if(!res){
			res.status(500);
			res.json({
				type: false,
				data: "no se pudieron encontrar las Tiendas: " + res
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
