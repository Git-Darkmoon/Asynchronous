const url = "https://rickandmortyapi.com/api/character"
const main = document.querySelector(".container")

const createCards = (character) => {
  main.innerHTML += `
    <div class="card" style="width: 18rem">
        <img src="${character.image}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${character.name}</h5>
          <p class="card-text">
            ${character.status}
          </p>
          <a href="#" class="btn btn-primary">More Details</a>
        </div>
      </div>
  `
}

const pullData = async () => {
  try {
    const response = await fetch(url)
    const data = await response.json()

    data.results.map((character) => {
      createCards(character)
    })
  } catch (error) {
    alert(error)
  }
}

pullData()

// CallStack - Pila de Ejecucion.

/* Bootstrap vs Tailwind: B, framework based in components
and T is based in utilities */
