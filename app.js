let url = "https://rickandmortyapi.com/api/character"

const pullData = async () => {
  try {
    const response = await fetch(url)
    console.log(response)

    const data = await response.json()
    console.log(data)

    data.results.map((character) => {
      console.log(character)
    })
  } catch (error) {
    console.log(error)
  }
}

pullData()

// CallStack - Pila de Ejecucion.

/*
const traerDatos = async () => {
  try {
    const response = await fetch(url)
    const data = await response.json()

    data.results.map((item) => {
      console.log(item)
    })
  } catch (error) {}
}
*/
