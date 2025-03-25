// pet.js
const petsApiUrl = "http://<YOUR-EC2-ELASTIC-IP>:8000/api/pets/";

async function loadPets() {
  try {
    const response = await fetch(petsApiUrl);
    const pets = await response.json();

    const petCardsContainer = document.getElementById('pet-cards');
    petCardsContainer.innerHTML = '';

    pets.forEach(pet => {
      // Create a card div
      const card = document.createElement('div');
      card.classList.add('pet-card');

      // If you have an image_url in your API data
      // else you can place a placeholder image
      const imageUrl = pet.image_url || 'https://via.placeholder.com/250';

      card.innerHTML = `
        <img src="${imageUrl}" alt="${pet.name}">
        <h3>${pet.name}</h3>
        <p>Type: ${pet.pet_type}</p>
        <p>Breed: ${pet.breed}</p>
        <button onclick="viewClothes('${pet.pet_type}', '${pet.breed}')">
          More Details
        </button>
      `;

      petCardsContainer.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading pets:', error);
  }
}

document.getElementById('load-more-pets').addEventListener('click', loadPets);

// Optionally call loadPets() on page load
window.onload = loadPets;
