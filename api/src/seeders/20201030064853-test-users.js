"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert(
      "users",
      [
        {
          loginId: "cork01",
          authorize_token: "swing1",
          name: "st1",
          createdAt: now,
          updatedAt: now,
        },
        {
          loginId: "cork02",
          authorize_token: "swing2",
          name: "st2",
          createdAt: now,
          updatedAt: now,
        },
        {
          loginId: "cork03",
          authorize_token: "swing3",
          name: "st3",
          createdAt: now,
          updatedAt: now,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
