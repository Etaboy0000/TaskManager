const Sequelize = require('sequelize');
const sequelize = new Sequelize('tasks', 'root', '', {
  dialect: 'mysql',
  host: 'localhost'
});

const Task = sequelize.define('task', {
  title: Sequelize.STRING,
  description: Sequelize.STRING
});

module.exports = Task;
