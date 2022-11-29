exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('auth0_id')
    table.string('name')
    table.string('email')
    table.int('draft')
    table.int('complete')
    table.date('dob')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
