exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      auth0_id: 1,
      name: 'Jane Doe',
      email: 'janedoe@gmaily.com',
      draft: 3,
      complete: 4,
    },
    {
      id: 2,
      auth0_id: 2,
      name: 'Maggie Rogers',
      email: 'maggierogers@gmaily.com',
      draft: 0,
      complete: 3,
    },
    {
      id: 3,
      auth0_id: 3,
      name: 'Daniel Lynch',
      email: 'daniellynch@gmaily.com',
      draft: 13,
      complete: 2,
    },
    {
      id: 4,
      auth0_id: 4,
      name: 'Lisa Austin',
      email: 'lisaaustin@gmaily.com',
      draft: 3,
      complete: 1,
    },
  ])
}
