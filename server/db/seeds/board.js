exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      title: 'Jane Doe',
      emmoodail: 'janedoe@gmaily.com',
      colour: [],
      imageUrl: [],
      story: '',
      dateCreated: '',
    },
  ])
}

// table.increments('id').primary()
// table.string('title')
// table.string('mood')
// table.string('colour')
// table.string('imageUrl')
// table.string('story')
// table.integer('dateCreated')