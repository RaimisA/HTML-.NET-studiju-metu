document.addEventListener('DOMContentLoaded', function() {
    const BASE_URL = 'https://localhost:7280/api/Smartphones';

    document.getElementById('fetch-smartphones').addEventListener('click', fetchSmartphones);
    document.getElementById('add-smartphone-form').addEventListener('submit', addSmartphone);
    document.getElementById('update-smartphone-form').addEventListener('submit', updateSmartphone);

    function fetchSmartphones() {
        fetch(BASE_URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const list = document.getElementById('smartphones-list');
                list.innerHTML = '';
                data.forEach(smartphone => {
                    const div = document.createElement('div');
                    div.className = 'smartphone';
                    div.innerHTML = `
                        <p>ID: ${smartphone.id}</p>
                        <p>Model: ${smartphone.model}</p>
                        <p>Brand: ${smartphone.brand}</p>
                        <p>Release Year: ${smartphone.releaseYear}</p>
                        <button onclick="populateUpdateForm(${smartphone.id}, '${smartphone.model}', '${smartphone.brand}', ${smartphone.releaseYear})">Update</button>
                        <button onclick="deleteSmartphone(${smartphone.id})">Delete</button>
                    `;
                    list.appendChild(div);
                });
            })
            .catch(error => console.error('Error fetching smartphones:', error));
    }

    function addSmartphone(event) {
        event.preventDefault();
        const model = document.getElementById('add-model').value;
        const brand = document.getElementById('add-brand').value;
        const releaseYear = document.getElementById('add-release-year').value;

        const newSmartphone = {
            model: model,
            brand: brand,
            releaseYear: parseInt(releaseYear)
        };

        fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newSmartphone)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(() => {
            document.getElementById('add-smartphone-form').reset();
            fetchSmartphones();
        })
        .catch(error => console.error('Error adding smartphone:', error));
    }

    function updateSmartphone(event) {
        event.preventDefault();
        const id = document.getElementById('update-id').value;
        const model = document.getElementById('update-model').value;
        const brand = document.getElementById('update-brand').value;
        const releaseYear = document.getElementById('update-release-year').value;

        const updatedSmartphone = {
            model: model,
            brand: brand,
            releaseYear: parseInt(releaseYear)
        };

        fetch(`${BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedSmartphone)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(() => {
            document.getElementById('update-smartphone-form').reset();
            fetchSmartphones();
        })
        .catch(error => console.error('Error updating smartphone:', error));
    }

    window.deleteSmartphone = function(id) {
        fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(() => {
            fetchSmartphones();
        })
        .catch(error => console.error('Error deleting smartphone:', error));
    }

    window.populateUpdateForm = function(id, model, brand, releaseYear) {
        document.getElementById('update-id').value = id;
        document.getElementById('update-model').value = model;
        document.getElementById('update-brand').value = brand;
        document.getElementById('update-release-year').value = releaseYear;
    }
});