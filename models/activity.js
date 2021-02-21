module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define("Activity", {
    name: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true,
      validate: {
        isIn: [[
          "chores",
          "exercise",
          "family",
          "friends",
          "games",
          "home",
          "meal",
          "music",
          "reading",
          "travel",
          "tv/movies",
          "work"
        ]]
      }
    },
    icon: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true,
      validate: {
        isIn: [[
          "delete",
          "directions_run",
          "child_friendly",
          "group",
          "casino",
          "home",
          "free_breakfast",
          "album",
          "book",
          "directions_car",
          "tv",
          "domain"
        ]]
      }
    }
  }, {
    timestamps: false // disable createAt and updateAt
  }
  );
  // Add associations
  Activity.associate = (models) => {
    // Associating Activity with UserData
    Activity.hasMany(models.UserData, {
      foreignKey: "activityId",
      targetKey: "id"
    });
  };
  return Activity;
};