module.exports = function (sequelize, DataTypes){
	var inventarioTienda = sequelize.define("inventarioTienda", {
		idProducto:{
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'producto',
				key: 'id'
			}
		},
		idTienda:{
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'tienda',
				key: 'id'
			}
		},
		existencia:{
			type: DataTypes.INTEGER,
			allowNull: false,
		}
	},{
		freezeTableName: true,
		underscored: true,
		tableName: 'inventario_tienda'
	})

	return inventarioTienda;
}