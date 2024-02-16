const { DataTypes, UUIDV4 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Type",
    {
      id: {
        type: DataTypes.UUID, //identificador universal UUIDV4 (VER)
        allowNull: false,
        // unique: true,
        // autoIncrement: true,
        primaryKey: true,
        defaultValue: UUIDV4,
        // index: true,
      },
      name: {
        type: DataTypes.STRING,
        defaultValue: "This data was not found.",
      },
    },
    { timestamps: false }
  );
  {
  }
};