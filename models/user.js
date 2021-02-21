
// Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows
const bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING(50),
      allowNull: true,
      validate: {
        is: /^[a-z\s\-]+$/i
      },
    },
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      },
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  // Can unhashed password entered by user be compared to hashed password stored in our database?
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", (user) => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null,
    );
  });
  // Add associations
  User.associate = (models) => {
    // Associating User with Theme
    User.belongsTo(models.Theme, {
      foreignKey: {
        allowNull: false,
        defaultValue: 1
      }
    });
    User.hasMany(models.UserData, {
      foreignKey: "userId",
      targetKey: "id"
    });
  };

  return User;
};
