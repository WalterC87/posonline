	var models = require('../../models');

exports.postPuesto = function(req, res, next){
	models.puesto.create({
		descripcion: req.body.descripcion,
		status: 1
	}).then(function (puesto){
		if(!puesto){
			res.status(500);
			res.json({
				type: false,
				data: "Ha ocurrido un error: " + puesto
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
	}).then(function (puesto){
		if(!puesto){
			res.status(500);
			res.json({
				type: false,
				data: "Puesto no encontrada: " + puesto
			});
		}else{
			res.status(200);
			res.json({
				type: true,
				data: puesto
			});
		};
	});
};

exports.putPuesto = function(req, res, next){
	models.puesto.findOne({
		where: {
			id: req.params.id
		}
	}).then(function (puesto){
		if(!puesto){
			res.status(500);
			res.json({
				type: false,
				data: "Puesto no encontrado."
			})
		}else{
			puesto.update({
				descripcion: req.body.descripcion,
				status: req.body.status
			}).then(function (puesto){
				if(!puesto){
					res.status(500);
					res.json({
						type: false,
						data: "Error al actualizar Puesto: " + puesto.descripcion
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
	}).then(function (puesto){
		if(!puesto){
			res.status(500);
			res.json({
				type: false,
				data: "Puesto no encontrado."
			})
		}else{
			puesto.update({
				status: false
			}).then(function (puesto){
				if(!puesto){
					res.status(500);
					res.json({
						type: false,
						data: "Error al eliminar el Puesto: " + puesto.descripcion
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
			status: 1
		}
	}).then(function (puestos){
		if(!puestos){
			res.status(500);
			res.json({
				type: false,
				data: "no se pudieron encontrar los Puestos: " + puestos
			});
		}else{
			res.status(200);
			res.json({
				type: true,
				data: puestos
			});
		};
	});
};