import { loadPets, savePet } from "./storage.js"


document.addEventListener("DOMContentLoaded", () => {
    const petInput = document.getElementById("petInput")
    const addPetButton = document.getElementById("addPetButton")
    const petList = document.getElementById("petList")

    const displayPets = () => {
        const pets = loadPets()
        pets.forEach(p => renderPet(p))
    }

    const addPet = () => {
        if (petInput) {
            savePet(petInput.value)
            let petName = petInput.value
            petInput.value = ""
            renderPet(petName)
        }
    }

    const renderPet = (petName) => {
        const li = document.createElement("li")
        li.textContent = petName
        petList.appendChild(li)
    }

    addPetButton.addEventListener("click", addPet)
    displayPets()
})
