exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      name: 'Jane Doe',
      email: 'janedoe@gmaily.com',
      draft: 3,
      complete: 4,
    },
  ])
}
// table.increments('id').primary()
// table.string('name')
// table.string('email')
// table.int('draft')
// table.int('complete')
