const loadPets = () => {
    return JSON.parse(localStorage.getItem("pets")) || []
}

const savePet = (petName) => {
    const pets = loadPets()
    pets.push(petName)
    localStorage.setItem("pets", JSON.stringify(pets))
}

export {loadPets,savePet}
