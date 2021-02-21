module.exports = (sequelize, DataTypes) => {
  const Mood = sequelize.define("Mood", {
    name: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true,
      validate: {
        isIn: [["excited", "happy", "neutral", "sad", "breakdown"]]
      }
    },
    icon: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
      validate: {
        isIn: [[
          "sentiment_very_satisfied",
          "sentiment_satisfied",
          "sentiment_neutral",
          "sentiment_dissatisfied",
          "sentiment_very_dissatisfied"
        ]]
      }
    }
  }, {
    timestamps: false // disable createAt and updateAt
  }
  );
  // Add associations
  Mood.associate = (models) => {
    // Associating Mood with UserData
    Mood.hasMany(models.UserData, {
      foreignKey: "moodId",
      targetKey: "id"
    });
  };
  return Mood;
};
