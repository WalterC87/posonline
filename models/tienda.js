module.exports = function (sequelize, DataTypes){
	var tienda = sequelize.define("tienda", {
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
		status:{
			type: DataTypes.BOOLEAN,
			defaultValue: true
		}
	},{
		freezeTableName: true,
		tableName: 'tienda'
	})

	return tienda;
}