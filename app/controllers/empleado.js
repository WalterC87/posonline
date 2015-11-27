var models = require('../../models');

exports.postEmpleado= function(req, res, next){
	models.empleado.create({
		idTipoEmpleado: req.body.tipoEmpleado,
		idPuesto: req.body.puesto,
		idAreaEmpresa: req.body.areaEmpresa,
		idTienda: req.body.tienda,
		nombres: req.body.nombres,
		apellidos: req.body.apellidos,
		direccion: req.body.direccion,
		telefono: req.body.telefono,
		direccion: req.body.telefono,
		email: req.body.email,
		usuarioSistema: req.body.usuarioSistema,
		passwordSistema: req.body.passwordSistema,
		fechaContratado: req.body.fechaContratado,
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
				data: "Empleado Agreado exitosamente..."
			});
		};
	});
};

exports.getEmpleado = function(req, res, next){
	models.empleado.findOne({
		where: {
			id: req.params.id
		},
		include: [
			{
				model: 'tipo_empleado',
				as: 'TipoEmpleado'
			}, 
			{
				model: 'puesto',
				as: 'puesto'
			}, 
			{
				model: 'area_empresa',
				as: 'areaEmpresa'
			},
			{
				model: 'tienda',
				as: 'tienda'
			}
		]
	}).then(function (res){
		if(!res){
			res.status(500);
			res.json({
				type: false,
				data: "Empleado no encontrado: " + res
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

exports.putEmpleado = function(req, res, next){
	models.empleado.findOne({
		where: {
			id: req.params.id
		}
	}).then(function (res){
		if(!res){
			res.status(500);
			res.json({
				type: false,
				data: "Empleado no encontrado."
			})
		}else{
			res.update({
				idTipoEmpleado: req.body.tipoEmpleado,
				idPuesto: req.body.puesto,
				idAreaEmpresa: req.body.areaEmpresa,
				idTienda: req.body.tienda,
				nombres: req.body.nombres,
				apellidos: req.body.apellidos,
				direccion: req.body.direccion,
				telefono: req.body.telefono,
				direccion: req.body.telefono,
				email: req.body.email,
				usuarioSistema: req.body.usuarioSistema,
				passwordSistema: req.body.passwordSistema,
				fechaContratado: req.body.fechaContratado,				
				status: req.body.status
			}).then(function (_res){
				if(!_res){
					res.status(500);
					res.json({
						type: false,
						data: "Error al actualizar Empleado: " + _res.nombre
					});
				}else{
					res.status(200);
					res.json({
						type: true,
						data: "Empleado Actualizado exitosamente ..."
					});
				};
			});
		};
	});
};

exports.deleteEmpleado = function (req, res, next){
	models.empleado.findOne({
		where: {
			id: req.body.id
		}
	}).then(function (res){
		if(!res){
			res.status(500);
			res.json({
				type: false,
				data: "Empleado no encontrado."
			})
		}else{
			res.update({
				fechaDespido: Date.now(),
				status: false
			}).then(function (_res){
				if(!_res){
					res.status(500);
					res.json({
						type: false,
						data: "Error al eliminar el Empleado: " + _res.nombres + ' ' + _res.apellidos
					});
				}else{
					res.status(200);
					res.json({
						type: true,
						data: "Empleado Eliminado exitósamente ..."
					});
				};
			});
		}
	})
};

exports.getEmpleados = function (req, res, next){
	models.empleado.findAll({
		where: {
			status: true
		},
		include: [
			{
				model: 'tipo_empleado',
				as: 'TipoEmpleado'
			}, 
			{
				model: 'puesto',
				as: 'puesto'
			}, 
			{
				model: 'area_empresa',
				as: 'areaEmpresa'
			},
			{
				model: 'tienda',
				as: 'tienda'
			}
		]
	}).then(function (empleados){
		if(!empleados){
			res.status(500);
			res.json({
				type: false,
				data: "no se pudieron encontrar los Empleados: " + empleados
			});
		}else{
			res.status(200);
			res.json({
				type: true,
				data: empleados
			});
		};
	});
};