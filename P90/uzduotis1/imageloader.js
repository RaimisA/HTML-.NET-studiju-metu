document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById('image-container');
    const randomPage = Math.floor(Math.random() * 33) + 1;
    const apiUrl = `https://picsum.photos/v2/list?page=${randomPage}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = image.download_url;
                imgElement.classList.add('fetched-image');
                imageContainer.appendChild(imgElement);
            });
        })
        .catch(error => console.error('Error fetching images:', error));
});