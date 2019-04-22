exports.up = knex => knex.schema
  .createTable('users', table => {
    table.increments();
    table.string('email', 255).notNullable().unique();
    table.string('username', 255).notNullable().unique();
    table.string('password', 255).notNullable();
    table.string('role', 50).defaultTo('student');
    table.timestamps(true, true);
  })
  

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
