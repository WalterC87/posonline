module.exports = function (sequelize, DataTypes){
	var cliente = sequelize.define("cliente", {
		
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
		mailCliente:{
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				len: [20, 50]
			}
		},
		status:{
			type: DataTypes.BOOLEAN,
			defaultValue: true
		}
	},{
		freezeTableName: true,
		tableName: 'cliente'
	})

	return cliente;
}