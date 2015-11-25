var models = require('../../models');

exports.postTipoEmpleado = function(req, res, next){
	models.tipoEmpleado.create({
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
				data: "Tipo Empleado Agreado exitosamente..."
			});
		};
	});
};

exports.getTipoEmpleado = function(req, res, next){
	models.tipoEmpleado.findOne({
		where: {
			id: req.params.id
		}
	}).then(function (res){
		if(!res){
			res.status(500);
			res.json({
				type: false,
				data: "Tipo Empleado no encontrada: " + res
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

exports.putTipoEmpleado = function(req, res, next){
	models.tipoEmpleado.findOne({
		where: {
			id: req.params.id
		}
	}).then(function (res){
		if(!res){
			res.status(500);
			res.json({
				type: false,
				data: "Tipo Empleado no encontrado."
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
						data: "Error al actualizar Tipo Empleado: " + _res.descripcion
					});
				}else{
					res.status(200);
					res.json({
						type: true,
						data: "Tipo Empleado Actualizado exitosamente ..."
					});
				};
			});
		};
	});
};

exports.deleteTipoEmpleado = function (req, res, next){
	models.tipoEmpleado.findOne({
		where: {
			id: req.body.id
		}
	}).then(function (res){
		if(!res){
			res.status(500);
			res.json({
				type: false,
				data: "Tipo Empleado no encontrado."
			})
		}else{
			res.update({
				status: false
			}).then(function (_res){
				if(!_res){
					res.status(500);
					res.json({
						type: false,
						data: "Error al eliminar el Tipo Empleado: " + _res.descripcion
					});
				}else{
					res.status(200);
					res.json({
						type: true,
						data: "Tipo Empleado Eliminado exitósamente ..."
					});
				};
			});
		}
	})
};

exports.getTiposEmpleado = function (req, res, next){
	models.tipoEmpleado.findAll({
		where: {
			status: true
		}
	}).then(function (res){
		if(!res){
			res.status(500);
			res.json({
				type: false,
				data: "no se pudieron encontrar los Tipos de Empleado: " + res
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