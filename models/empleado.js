module.exports = function (sequelize, DataTypes){
	var empleado = sequelize.define("empleado", {
		
		idTipoEmpleado:{
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'tipo_empleado',
				key: 'id'
			}
		},
		idPuesto:{
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'puesto',
				key: 'id'
			}
		},
		idAreaEmpresa:{
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'area_empresa',
				key: 'id'
			}
		},
		idTienda:{
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'tienda',
				key: 'id'
			}
		},
		nombres:{
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				len: [20, 150]
			}
		},
		apellidos:{
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
				len: [20, 150]
			}
		},
		telefono:{
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				len: [8, 15]
			}
		},
		email: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				isEmail: true
			}
		},
		usuarioSistema: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		passwordSistema: {
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				len: [8, 15]
			}
		},
		fechaContratado:{
			type: DataTypes.DATE,
			allowNull: false,
			validate: {
				isDate: true
			}
		},
		fechaDespido:{
			type: DataTypes.DATE,
			allowNull: true,
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
		tableName: 'empleado'
	})

	return empleado;
}