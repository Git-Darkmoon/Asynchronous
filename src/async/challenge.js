class APIService {
  BASE_API_URL = "https://rickandmortyapi.com/api"

  async getCharacters() {
    try {
      const response = await fetch(`${this.BASE_API_URL}/character`)

      if (response.status === 200) {
        const data = await response.json()

        data.results.map((eachCharacter) => {
          console.log(`
            Name: ${eachCharacter.name}\n
            Status: ${eachCharacter.status}\n
            Origin: ${eachCharacter.origin.name}\n
            Picture: ${eachCharacter.image}\n
          `)
        })
      } else if (response.status === 404) {
        console.log(
          "The query that you are looking for was not found in the API."
        )
      } else {
        console.log(
          "Something gone wrong...\nCommunicate it to the developer. "
        )
      }
    } catch (error) {
      alert("Could not fetch the data.")
    }
  }

  async getLocations() {
    try {
      const response = await fetch(`${this.BASE_API_URL}/location`)

      if (response.status === 200) {
        const data = await response.json()

        data.results.map((eachLocation) => {
          console.log(`
            Name: ${eachLocation.name}\n
            Type: ${eachLocation.type}\n
            Dimension: ${eachLocation.dimension}\n
          `)
        })
      } else if (response.status === 404) {
        console.log(
          "The location that you are looking for was not found in the API."
        )
      } else {
        console.log(
          "Something gone wrong...\nCommunicate it to the developer. "
        )
      }
    } catch (error) {
      alert("Could not fetch the data.")
    }
  }
}

const charactersQuery = new APIService()

charactersQuery.getCharacters()
charactersQuery.getLocations()
