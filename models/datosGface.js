module.exports = function (sequelize, DataTypes){
	var datosGface = sequelize.define("datosGface", {
		idfactura:{
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'factura',
				key: 'id'
			}
		},
		Nitgface:{
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				len: [20, 150]
			}
		},
		direcciongface:{
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				len: [20, 150]
			}
		},
		estadogface:{
			type: DataTypes.BOOLEAN,
			defaultValue: true
		}
	},
	{
		freezeTableName: true,
		underscored: true,
		tableName: 'datos_gface'
	})

	return datosGface;
}