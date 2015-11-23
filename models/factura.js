module.exports = function (sequelize, DataTypes){
	var factura = sequelize.define("factura", {
		idTienda:{
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'tienda',
				key: 'id'
			}
		},
		idEmpleado:{
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'empleado',
				key: 'id'
			}
		},
		nombreCliente:{
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				len: [20, 150]
			}
		},
		NitCliente:{
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				len: [20, 150]
			}
		},
		direccionCliente:{
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				len: [20, 150]
			}
		},
		fechaEmision:{
			type: DataTypes.DATE,
			allowNull: false,
			validate: {
				isDate: true
			}
		},
		totalFactura:{
			type: DataTypes.DECIMAL(16,2),
			allowNull: false
		},
		status:{
			type: DataTypes.BOOLEAN,
			defaultValue: true
		}
	},{
		freezeTableName: true,
		tableName: 'factura'
	})

	return factura;
}