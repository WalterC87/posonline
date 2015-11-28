var models = require('../../models');

exports.postProducto= function(req, res, next){
	models.producto.create({
		idDistribuidor: req.body.distribuidor,
		idCategoriaProducto: req.body.categoriaProducto,
		nombre: req.body.nombre,
		precioCosto: req.body.precioCosto,
		precioVenta: req.body.precioVenta,
		fechaVencimiento: req.body.fechaVencimiento
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
				data: "Producto Agreado exitosamente..."
			});
		};
	});
};

exports.getProducto = function(req, res, next){
	models.producto.findOne({
		where: {
			id: req.params.id
		},
		include: [
			{
				model: 'distribuidor',
				as: 'distribuidor'
			}, 
			{
				model: 'categoria_producto',
				as: 'categoriaProducto'
			}
		]
	}).then(function (res){
		if(!res){
			res.status(500);
			res.json({
				type: false,
				data: "Producto no encontrado: " + res
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

exports.putProducto = function(req, res, next){
	models.producto.findOne({
		where: {
			id: req.params.id
		}
	}).then(function (res){
		if(!res){
			res.status(500);
			res.json({
				type: false,
				data: "Producto no encontrado."
			})
		}else{
			res.update({
				idDistribuidor: req.body.distribuidor,
				idCategoriaProducto: req.body.categoriaProducto,
				nombre: req.body.nombre,
				precioCosto: req.body.precioCosto,
				precioVenta: req.body.precioVenta,
				fechaVencimiento: req.body.fechaVencimiento
			}).then(function (_res){
				if(!_res){
					res.status(500);
					res.json({
						type: false,
						data: "Error al actualizar Producto: " + _res.nombre
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

exports.deleteProducto = function (req, res, next){
	models.producto.findOne({
		where: {
			id: req.body.id
		}
	}).then(function (res){
		if(!res){
			res.status(500);
			res.json({
				type: false,
				data: "Producto no encontrado."
			})
		}else{
			res.update({
				status: false
			}).then(function (_res){
				if(!_res){
					res.status(500);
					res.json({
						type: false,
						data: "Error al eliminar el Producto: " + _res.nombre
					});
				}else{
					res.status(200);
					res.json({
						type: true,
						data: "Producto Eliminado exitósamente ..."
					});
				};
			});
		}
	})
};

exports.getProductos = function (req, res, next){
	models.producto.findAll({
		where: {
			status: 1
		},
		include: [
			{
				model: 'distribuidor',
				as: 'distribuidor'
			}, 
			{
				model: 'categoria_producto',
				as: 'categoriaProducto'
			}
		]
	}).then(function (productos){
		if(!productos){
			res.status(500);
			res.json({
				type: false,
				data: "no se pudieron encontrar los Productos: " + productos
			});
		}else{
			res.status(200);
			res.json({
				type: true,
				data: productos
			});
		};
	});
};