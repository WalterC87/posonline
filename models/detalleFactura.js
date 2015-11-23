module.exports = function (sequelize, DataTypes){
	var detalleFactura = sequelize.define("detalleFactura", {
		idFactura:{
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'factura',
				key: 'id'
			}
		},
		idProducto:{
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'producto',
				key: 'id'
			}
		},
		cantidad:{
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		subTotal:{
			type: DataTypes.DECIMAL(16,2),
			allowNull: false
		},
	},{
		freezeTableName: true,
		underscored: true,
		tableName: 'detalle_factura'
	})

	return detalleFactura;
}