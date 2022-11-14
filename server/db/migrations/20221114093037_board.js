exports.up = (knex) => {
  return knex.schema.createTable('board', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.string('mood')
    table.string('colour')
    table.string('imageUrl')
    table.string('story')
    table.integer('dateCreated')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('board')
}
