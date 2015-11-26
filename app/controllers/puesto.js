var models = require('../../models');

exports.postPuesto = function(req, res, next){
	models.puesto.create({
		descripcion: req.body.descripcion,
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
				data: "Puesto Agreado exitosamente..."
			});
		};
	});
};

exports.getPuesto = function(req, res, next){
	models.puesto.findOne({
		where: {
			id: req.params.id
		}
	}).then(function (res){
		if(!res){
			res.status(500);
			res.json({
				type: false,
				data: "Puesto no encontrada: " + res
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

exports.putPuesto = function(req, res, next){
	models.puesto.findOne({
		where: {
			id: req.params.id
		}
	}).then(function (res){
		if(!res){
			res.status(500);
			res.json({
				type: false,
				data: "Puesto no encontrado."
			})
		}else{
			res.update({
				descripcion: req.body.descripcion,
				status: req.body.status
			}).then(function (_res){
				if(!_res){
					res.status(500);
					res.json({
						type: false,
						data: "Error al actualizar Puesto: " + _res.descripcion
					});
				}else{
					res.status(200);
					res.json({
						type: true,
						data: "Puesto Actualizado exitosamente ..."
					});
				};
			});
		};
	});
};

exports.deletePuesto = function (req, res, next){
	models.puesto.findOne({
		where: {
			id: req.body.id
		}
	}).then(function (res){
		if(!res){
			res.status(500);
			res.json({
				type: false,
				data: "Puesto no encontrado."
			})
		}else{
			res.update({
				status: false
			}).then(function (_res){
				if(!_res){
					res.status(500);
					res.json({
						type: false,
						data: "Error al eliminar el Puesto: " + _res.descripcion
					});
				}else{
					res.status(200);
					res.json({
						type: true,
						data: "Puesto Eliminado exitósamente ..."
					});
				};
			});
		}
	})
};

exports.getPuestos = function (req, res, next){
	models.puesto.findAll({
		where: {
			status: true
		}
	}).then(function (res){
		if(!res){
			res.status(500);
			res.json({
				type: false,
				data: "no se pudieron encontrar los Puestos: " + res
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