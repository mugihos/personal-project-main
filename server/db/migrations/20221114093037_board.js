exports.up = (knex) => {
  return knex.schema.createTable('board', (table) => {
    table.increments('id').primary()
    table.string('board_title')
    table.string('movie_id')
    table.string('movie_title')
    table.int('movie_year')
    table.string('movie_image')
    table.integer('auth0_id') //creator_id?
    table.string('mood')
    table.string('colour')
    table.string('story')
    table.integer('createde_at')
    table.string('status')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('board')
}
