const cardWrapper = document.querySelector('.content-cards')
const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')

const films = [
  {
    id: 0,
    title: 'Криминальное чтиво 1',
    original: 'Pulp Fiction 1994',
    category: 'Криминал/Триллер',
    rating: 8.7,
    link: './film.html',
    image: './images/poster-film.png',
  },
  {
    id: 1,
    title: 'Криминальное чтиво 2',
    original: 'Pulp Fiction 1994',
    category: 'Криминал/Триллер',
    rating: 8.7,
    link: './film.html',
    image: './images/poster-film.png',
  },
  {
    id: 2,
    title: 'Криминальное чтиво 3',
    original: 'Pulp Fiction 1994',
    category: 'Криминал/Триллер',
    rating: 8.7,
    link: './film.html',
    image: './images/poster-film.png',
  },
]

const render = (array) => {
  cardWrapper.innerHTML = ''

  array.forEach((item) => {
    cardWrapper.insertAdjacentHTML(
      'beforeend',
      `
        <a href="${item.link}" class="content-cards__item">
          <div class="content-cards__item--img">
            <img src="${item.image}" alt="poster-film" />
          </div>
          <div class="content-cards__item--title">
            <h5>${item.title},</h5>
            <span>${item.original}</span>
          </div>
          <p class="content-cards__item--description">
            ${item.category}
          </p>
          <p class="content-cards__item--rating">${item.rating}</p>
        </a>
      `
    )
  })
}

searchButton.addEventListener('click', () => {
  render(films.filter((item) => item.title.includes(searchInput.value)))
})

render(films)
