module.exports = function (sequelize, DataTypes){
	var categoriaProducto = sequelize.define("categoriaProducto", {
		descripcion:{
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				len: [20, 150]
			}
		},
		status:{
			type: DataTypes.BOOLEAN,
			defaultValue: true
		}
	},{
		freezeTableName: true,
		underscored: true,
		tableName: 'categoria_producto'
	})

	return categoriaProducto;
}