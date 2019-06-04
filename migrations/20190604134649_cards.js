
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', (table) => {
      table.increments('id').primary()
      table.integer('categoryId')
      table.string('question')
      table.string('answer')
      table.integer('dateCreated')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards')
};
