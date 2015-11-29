module.exports = function (sequelize, DataTypes){
	var areaEmpresa = sequelize.define("areaEmpresa", {
		descripcion:{
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				len: [20, 150]
			}
		},
		status:{
			type: DataTypes.BOOLEAN,
			defaultValue: true
		}
	},{
		freezeTableName: true,
		underscored: true,
		tableName: 'area_empresa'
	})

	return areaEmpresa;
}