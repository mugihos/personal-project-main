exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      name: 'Jane Doe',
      email: 'janedoe@gmaily.com',
      draft: [],
      complete: [],
    },
  ])
}
// table.increments('id').primary()
// table.string('name')
// table.string('email')
// table.int('draft')
// table.int('complete')
