module.exports = function (sequelize, DataTypes){
	var actividadTienda = sequelize.define("actividadTienda", {
		idTienda:{
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'tienda',
				key: 'id'
			}
		},
		idTipoActividad:{
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'tipo_actividad',
				key: 'id'
			}
		},
		idProducto:{
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'producto',
				key: 'id'
			}
		},
		cantidadProducto:{
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		fechaActividad:{
			type: DataTypes.DATE,
			allowNull: false,
			validate: {
				isDate: true
			}
		}
	},{
		freezeTableName: true,
		underscored: true,
		tableName: 'actividad_tienda'
	})

	return actividadTienda;
}