var restify = require('restify');
var fs = require('fs');
var models = require('./models');

var controllers = {},
	controllers_path = process.cwd() + '/app/controllers';

fs.readdirSync(controllers_path).forEach(function (file){
	if(file.indexOf('.js') != -1){
		controllers[file.split('.')[0]] = require(controllers_path + '/' + file)
	}
})


var server = restify.createServer();
server.use(restify.fullResponse());
server.use(restify.bodyParser());

//Areas Empresa
server.get("/areasEmpresa", controllers.areaEmpresa.getAreasEmpresa);
server.get("/areaEmpresa/:id", controllers.areaEmpresa.getAreaEmpresa);
server.post("/areaEmpresa", controllers.areaEmpresa.postAreaEmpresa);
server.put("/areaEmpresa", controllers.areaEmpresa.putAreaEmpresa);
server.delete("/areaEmpresa", controllers.areaEmpresa.deleteAreaEmpresa);

//Categorias Producto
server.get("/categoriasProducto", controllers.categoriaProducto.getCategoriasProducto);
server.get("/categoriaProducto/:id", controllers.categoriaProducto.getCategoriaProducto);
server.post("/categoriaProducto", controllers.categoriaProducto.postCategoriaProducto);
server.put("/categoriaProducto", controllers.categoriaProducto.putCategoriaProducto);
server.delete("/categoriaProducto", controllers.categoriaProducto.deleteCategoriaProducto);

//Distribuidores
server.get("/distribuidores", controllers.distribuidor.getDistribuidores);
server.get("/distribuidor/:id", controllers.distribuidor.getDistribuidor);
server.post("/distribuidor", controllers.distribuidor.postDistribuidor);
server.put("/distribuidor", controllers.distribuidor.putDistribuidor);
server.delete("/distribuidor", controllers.distribuidor.deleteDistribuidor);

//Empleados
server.get("/empleados", controllers.empleado.getEmpleados);
server.get("/empleado/:id", controllers.empleado.getEmpleado);
server.post("/empleado", controllers.empleado.postEmpleado);
server.put("/empleado", controllers.empleado.putEmpleado);
server.delete("/empleado", controllers.empleado.deleteEmpleado);

//Productos
server.get("/productos", controllers.producto.getProductos);
server.get("/producto/:id", controllers.producto.getProducto);
server.post("/producto", controllers.producto.postProducto);
server.put("/producto", controllers.producto.putProducto);
server.delete("/producto", controllers.producto.deleteProducto);

//Puestos
server.get("/puestos", controllers.puesto.getPuestos);
server.get("/puesto/:id", controllers.puesto.getPuesto);
server.post("/puesto", controllers.puesto.postPuesto);
server.put("/puesto", controllers.puesto.putPuesto);
server.delete("/puesto", controllers.puesto.deletePuesto);

//Tiendas
server.get("/tiendas", controllers.tienda.getTiendas);
server.get("/tienda/:id", controllers.tienda.getTienda);
server.post("/tienda", controllers.tienda.postTienda);
server.put("/tienda", controllers.tienda.putTienda);
server.delete("/tienda", controllers.tienda.deleteTienda);

//Tipos de Actividad
server.get("/tiposActividad", controllers.tipoActividad.getTiposActividad);
server.get("/tipoActividad/:id", controllers.tipoActividad.getTipoActividad);
server.post("/tipoActividad", controllers.tipoActividad.postTipoActividad);
server.put("/tipoActividad", controllers.tipoActividad.putTipoActividad);
server.delete("/tipoActividad", controllers.tipoActividad.deleteTipoActividad);

//Tipos de Empleado
server.get("/tiposEmpleado", controllers.tipoEmpleado.getTiposEmpleado);
server.get("/tipoEmpleado/:id", controllers.tipoEmpleado.getTipoEmpleado);
server.post("/tipoEmpleado", controllers.tipoEmpleado.postTipoEmpleado);
server.put("/tipoEmpleado", controllers.tipoEmpleado.putTipoEmpleado);
server.delete("/tipoEmpleado", controllers.tipoEmpleado.deleteTipoEmpleado);

models.sequelize.sync();

var port = process.env.PORT || 3000;

server.listen(port, function(err){
	if(err){
		console.error(err);
	}else{
		console.log('%s listening at %s', server.name, server.url);
	}
})
