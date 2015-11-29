module.exports = function (sequelize, DataTypes){
	var empresa = sequelize.define("empresa", {
		
		NitEmpresa:{
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				len: [20, 150]
			}
		},
		nombreEmpresa:{
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				len: [20, 150]
			}
		},
		direccionEmpresa:{
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				len: [20, 150]
			}
		},
		mailEmpresa:{
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				len: [20, 50]
			}
		},
		contactoEmpresa:{
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				len: [20, 50]
			}
		},
		telefonoEmpresa:{
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				len: [20, 50]
			}
		},
			idResolucion:{
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'resolucionSat',
				key: 'id'
			}
		},
		status:{
			type: DataTypes.BOOLEAN,
			defaultValue: true
		}
	},{
		freezeTableName: true,
		tableName: 'empresa'
	})

	return empresa;
}