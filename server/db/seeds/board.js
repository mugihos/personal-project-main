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
      creator_id: 3,
      mood: 'melancholic',
      colour: 'green',
      story: 'Losing way and finding yourself again in the same place.',
      createde_at: null,
      status: 'draft',
    },
    {
      id: 2,
      board_title: 'Summer vacation',
      movie_id: 'tt5990474',
      movie_info: 'Aftersun',
      movie_image:
        'https://superstarsbio.com/wp-content/uploads/2022/09/Aftersun.jpg',
      // maybe need to save the api call request?
      // movie_info: {
      //   title: 'Columbus',
      //   year: 2018,
      //   director: 'Kogonada',
      //   image:
      //     'https://m.media-amazon.com/images/M/MV5BNWJiNzBlNjAtYjgwOC00YjZmLWI0YzItNTI1MzY4NmE4ZGI1XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg',
      // },
      creator_id: 1,
      mood: 'summer vacation',
      colour: 'blue',
      story: 'Re-visting memories of warmth and sadness.',
      createde_at: null,
      status: 'draft',
    },
    {
      id: 3,
      board_title: 'City runner',
      movie_id: 'tt5990474',
      movie_info: 'Drive',
      movie_image: 'https://tinyurl.com/65j6s6w4',
      // maybe need to save the api call request?
      // movie_info: {
      //   title: 'Columbus',
      //   year: 2018,
      //   director: 'Kogonada',
      //   image:
      //     'https://m.media-amazon.com/images/M/MV5BNWJiNzBlNjAtYjgwOC00YjZmLWI0YzItNTI1MzY4NmE4ZGI1XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg',
      // },
      creator_id: 1,
      mood: 'lonley city',
      colour: 'dark blue and neon pink',
      story: 'Visual story telling at its greatest.',
      createde_at: null,
      status: 'draft',
    },
    {
      id: 4,
      board_title: 'Near future',
      movie_id: 'tt5990474',
      movie_info: 'After Yang',
      movie_image: 'https://tinyurl.com/4r5hwnc7',
      // maybe need to save the api call request?
      // movie_info: {
      //   title: 'Columbus',
      //   year: 2018,
      //   director: 'Kogonada',
      //   image:
      //     'https://m.media-amazon.com/images/M/MV5BNWJiNzBlNjAtYjgwOC00YjZmLWI0YzItNTI1MzY4NmE4ZGI1XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg',
      // },
      creator_id: 1,
      mood: 'quietly sad',
      colour: 'green',
      story: 'Thinking about things we lost in the process of progress',
      createde_at: null,
      status: 'draft',
    },
    {
      id: 5,
      board_title: 'Literally everything',
      movie_id: 'tt5990474',
      movie_info: 'Everything Everywhere All at Once',
      movie_image: 'https://tinyurl.com/57mbzcz4',
      // maybe need to save the api call request?
      // movie_info: {
      //   title: 'Columbus',
      //   year: 2018,
      //   director: 'Kogonada',
      //   image:
      //     'https://m.media-amazon.com/images/M/MV5BNWJiNzBlNjAtYjgwOC00YjZmLWI0YzItNTI1MzY4NmE4ZGI1XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg',
      // },
      creator_id: 1,
      mood: 'energetic and chaos',
      colour: 'orange',
      story: 'When everyting feels like its too much.',
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
