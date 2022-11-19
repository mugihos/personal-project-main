exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('board').del()
  await knex('board').insert([
    {
      id: 1,
      board_title: 'Rainy Sunday',
      movie_id: 'tt5990474',
      movie_info: 'Columbus',
      movie_image:
        'https://m.media-amazon.com/images/M/MV5BNWJiNzBlNjAtYjgwOC00YjZmLWI0YzItNTI1MzY4NmE4ZGI1XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg',
      // maybe need to save the api call request?
      // movie_info: {
      //   title: 'Columbus',
      //   year: 2018,
      //   director: 'Kogonada',
      //   image:
      //     'https://m.media-amazon.com/images/M/MV5BNWJiNzBlNjAtYjgwOC00YjZmLWI0YzItNTI1MzY4NmE4ZGI1XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg',
      // },
      creator_id: 1,
      mood: 'melancholic',
      colour: 'green',
      story: 'Losing way and finding yourself again in the same place.',
      createde_at: null,
      status: 'draft',
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
