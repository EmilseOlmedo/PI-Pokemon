const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'Pokemon', {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        // unique: true,
        // autoIncrement: true,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        // index: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [0, 23],
        },
      },
      image: {
        type: DataTypes.STRING(2000),
        allowNull: true,
        validate: { isUrl: true },
        defaultValue: "https://i.imgur.com/R1WxMTs.png",
      },
      life: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 100,
        },
      },
      attack: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 350,
        },
      },
      defense: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 350,
        },
      },
      speed: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 100,
        },
      },
      height: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 50, //El pokemon más alto es Eternatus (20m)
        },
      },
      weight: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 1000, //El pokemon más pesado es Cosmoem con 999kg.
        },
      },
      createdPokemon: {     //mi flag para saber que lo estoy creando yo y no que viene de la APi
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
