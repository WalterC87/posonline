var models = require('../../models');

exports.postCategoriaProducto = function(req, res, next){
	models.categoriaProducto.create({
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
				data: "Categoria de Producto agregada exitosamente..."
			});
		};
	});
};

exports.getCategoriaProducto = function(req, res, next){
	models.categoriaProducto.findOne({
		where: {
			id: req.params.id
		}
	}).then(function (res){
		if(!res){
			res.status(500);
			res.json({
				type: false,
				data: "Categoria no encontrada: " + res
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

exports.putCategoriaProducto = function(req, res, next){
	models.categoriaProducto.findOne({
		where: {
			id: req.params.id
		}
	}).then(function (res){
		if(!res){
			res.status(500);
			res.json({
				type: false,
				data: "Categoria de Producto no encontrada."
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
						data: "Error al actualizar la Categoria: " + _res.descripcion
					});
				}else{
					res.status(200);
					res.json({
						type: true,
						data: "Categoria actualizada exitosamente ..."
					});
				};
			});
		};
	});
};

exports.deleteCategoriaProducto = function (req, res, next){
	models.categoriaProducto.findOne({
		where: {
			id: req.body.id
		}
	}).then(function (res){
		if(!res){
			res.status(500);
			res.json({
				type: false,
				data: "Categoria no encontrada."
			})
		}else{
			res.update({
				status: false
			}).then(function (_res){
				if(!_res){
					res.status(500);
					res.json({
						type: false,
						data: "Error al eliminar el Categoria: " + _res.descripcion
					});
				}else{
					res.status(200);
					res.json({
						type: true,
						data: "Categoria Eliminada exitósamente ..."
					});
				};
			});
		}
	})
};

exports.getCategoriasProducto = function (req, res, next){
	models.categoriaProducto.findAll({
		where: {
			status: 1
		}
	}).then(function (categorias){
		if(!categorias){
			res.status(500);
			res.json({
				type: false,
				data: "no se pudieron encontrar las Categorias: " + categorias
			});
		}else{
			res.status(200);
			res.json({
				type: true,
				data: categorias
			});
		};
	});
};