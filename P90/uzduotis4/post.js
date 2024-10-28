document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('postForm');
    const postContainer = document.getElementById('postContainer');

    const apiUrl = 'http://your-server-url/posts';

    // Fetch and render posts
    function fetchPosts() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(posts => {
                postContainer.innerHTML = '';
                posts.forEach(post => renderPost(post));
            });
    }

    // Render a single post
    function renderPost(post) {
        const postCard = document.createElement('div');
        postCard.classList.add('post-card');
        postCard.dataset.id = post.id;

        const titleElement = document.createElement('h3');
        titleElement.textContent = post.title;
        postCard.appendChild(titleElement);

        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;
        postCard.appendChild(contentElement);

        const updateButton = document.createElement('button');
        updateButton.textContent = 'Update';
        updateButton.addEventListener('click', () => updatePost(post.id));
        postCard.appendChild(updateButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deletePost(post.id));
        postCard.appendChild(deleteButton);

        postContainer.appendChild(postCard);
    }

    // Add a new post
    postForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const title = document.getElementById('postTitle').value;
        const content = document.getElementById('postContent').value;

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, content })
        })
        .then(response => response.json())
        .then(post => {
            renderPost(post);
            postForm.reset();
        });
    });

    // Update a post
    function updatePost(id) {
        const newTitle = prompt('Enter new title:');
        const newContent = prompt('Enter new content:');

        fetch(`${apiUrl}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: newTitle, content: newContent })
        })
        .then(response => response.json())
        .then(updatedPost => {
            const postCard = document.querySelector(`.post-card[data-id='${id}']`);
            postCard.querySelector('h3').textContent = updatedPost.title;
            postCard.querySelector('p').textContent = updatedPost.content;
        });
    }

    // Delete a post
    function deletePost(id) {
        fetch(`${apiUrl}/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            const postCard = document.querySelector(`.post-card[data-id='${id}']`);
            postContainer.removeChild(postCard);
        });
    }

    // Initial fetch of posts
    fetchPosts();
});