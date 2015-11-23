module.exports = function (sequelize, DataTypes){
	var puesto = sequelize.define("puesto", {
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
		
		tableName: 'puesto'
	})

	return puesto;
}