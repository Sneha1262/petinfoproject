const apiUrl = "http://35.173.214.218:8000/api/pets/";

async function loadPets() {
    const response = await fetch(apiUrl);
    const pets = await response.json();
    const petContainer = document.getElementById("pets");
    petContainer.innerHTML = "";

    pets.forEach(pet => {
        const petDiv = document.createElement('div');
        petDiv.className = 'pet-card';
        petDiv.innerHTML = `
            <img src="${pet.image_url}" alt="${pet.name}">
            <h3>${pet.name}</h3>
            <p>Type: ${pet.pet_type}</p>
            <p>Breed: ${pet.breed}</p>
            <p>Age: ${pet.age}</p>
        `;
        petContainer.appendChild(petDiv);
    });
}

document.getElementById('loadMoreBtn').addEventListener('click', loadPets);

window.onload = loadPets;
