module.exports = function (sequelize, DataTypes){
	var tipoEmpleado = sequelize.define("tipoEmpleado", {
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
		tableName: 'tipo_empleado'
	})

	return tipoEmpleado;
}