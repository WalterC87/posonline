var models = require('../../models');

exports.postTipoActividad= function(req, res, next){
	models.tipoActividad.create({
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
				data: "Area de Empresa se Agrego exitosamente..."
			});
		};
	});
};

exports.getTipoActividad = function(req, res, next){
	models.tipoActividad.findOne({
		where: {
			id: req.params.id
		}
	}).then(function (res){
		if(!res){
			res.status(500);
			res.json({
				type: false,
				data: "Area de Empresa no encontrada: " + res
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

exports.putTipoActividad = function(req, res, next){
	models.tipoActividad.findOne({
		where: {
			id: req.params.id
		}
	}).then(function (res){
		if(!res){
			res.status(500);
			res.json({
				type: false,
				data: "Area de Empresa no encontrado."
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
						data: "Error al actualizar Area de Empresa: " + _res.descripcion
					});
				}else{
					res.status(200);
					res.json({
						type: true,
						data: "Area de Empresa Actualizado exitosamente ..."
					});
				};
			});
		};
	});
};

exports.deleteTipoActividad = function (req, res, next){
	models.tipoActividad.findOne({
		where: {
			id: req.body.id
		}
	}).then(function (res){
		if(!res){
			res.status(500);
			res.json({
				type: false,
				data: "Area de Empresa no encontrado."
			})
		}else{
			res.update({
				status: false
			}).then(function (_res){
				if(!_res){
					res.status(500);
					res.json({
						type: false,
						data: "Error al eliminar el Area de Empresa: " + _res.descripcion
					});
				}else{
					res.status(200);
					res.json({
						type: true,
						data: "Area de Empresa Eliminado exitósamente ..."
					});
				};
			});
		}
	})
};

exports.getTiposActividad = function (req, res, next){
	models.tipoActividad.findAll({
		where: {
			status: 1
		}
	}).then(function (tiposActividad){
		if(!tiposActividad){
			res.status(500);
			res.json({
				type: false,
				data: "no se pudieron encontrar las Areas de Empresa: " + tiposActividad
			});
		}else{
			res.status(200);
			res.json({
				type: true,
				data: tiposActividad
			});
		};
	});
};