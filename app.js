const traerDatos = async () => {
  try {
    const response = await fetch(url)
    const data = await response.json()

    data.results.map((item) => {
      console.log(item)
    })
  } catch (error) {}
}
