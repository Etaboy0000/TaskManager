const Sequelize = require('sequelize');
const sequelize = new Sequelize('tasks', 'root', '', {
  dialect: 'mysql',
  host: 'localhost'
});

const Task = sequelize.define('task', {
  title: Sequelize.STRING,
  description: Sequelize.STRING
});

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});

module.exports = { Task };
