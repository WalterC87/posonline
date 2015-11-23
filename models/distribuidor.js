module.exports = function (sequelize, DataTypes){
	var distribuidor = sequelize.define("distribuidor", {
		nombre:{
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				len: [20, 150]
			}
		},
		direccion:{
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				len: [20, 200]
			}
		},
		telefono:{
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				len: [8, 15]
			}
		},
		contacto:{
			type: DataTypes.STRING,
			allowNull: false,
		},
		status:{
			type: DataTypes.BOOLEAN,
			defaultValue: true
		}
	},{
		freezeTableName: true,
		tableName: 'distribuidor'
	})

	return distribuidor;
}