module.exports = function (sequelize, DataTypes){
	var resolucionSat = sequelize.define("resolucionSat", {
		idfactura:{
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'factura',
				key: 'id'
			}
		},
		resolucionSat:{
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				len: [10, 25]
			}
		},
		fechaEmision:{
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
		underscored: true,
		tableName: 'resolucion_sat'
	})

	return resolucionSat;
}