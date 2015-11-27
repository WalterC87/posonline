module.exports = function (sequelize, DataTypes){
	var producto = sequelize.define("producto", {
		idDistribuidor:{
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'distribuidor',
				key: 'id'
			}
		},
		idCategoriaProducto:{
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'categoriaProducto',
				key: 'id'
			}
		},
		nombre:{
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				len: [20, 150]
			}
		},
		precioCosto:{
			type: DataTypes.DECIMAL(16,2),
			allowNull: true
		},
		precioVenta:{
			type: DataTypes.DECIMAL(16,2),
			allowNull: false
		},
		fechaVencimiento:{
			type: DataTypes.DATE,
			allowNull: false,
			validate: {
				isDate: true
			}
		},
		status:{
			type: DataTypes.BOOLEAN,
			defaultValue: true
		}
	},{
		freezeTableName: true,
		tableName: 'producto'
	})

	return producto;
}