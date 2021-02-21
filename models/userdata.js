// eslint-disable-next-line no-unused-vars
module.exports = (sequelize, DataTypes) => {
  const UserData = sequelize.define("UserData", {});

  // Add associations
  UserData.associate = (models) => {
    // Associating UserData with Mood, Activity and User
    UserData.belongsTo(models.User, {
      foreignKey: "userId",
      targetKey: "id"
    });
    UserData.belongsTo(models.Mood, {
      foreignKey: "moodId",
      targetKey: "id"
    });
    UserData.belongsTo(models.Activity, {
      foreignKey: "activityId",
      targetKey: "id"
    });
  };

  return UserData;
};
