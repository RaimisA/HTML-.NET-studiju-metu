document.addEventListener('DOMContentLoaded', function() {
    const BASE_URL = 'https://localhost:7171/api';
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        window.location.href = '../index.html';
        return;
    }

    document.getElementById('user-info').textContent = `Logged in as: ${user.userName}`;

    const logoutButton = document.getElementById('logout-button');
    const todoForm = document.getElementById('todo-form');
    const addTaskButton = document.getElementById('add-task-button');
    const todoList = document.getElementById('todo-list');
    const editForm = document.getElementById('edit-form');
    const editType = document.getElementById('edit-type');
    const editContent = document.getElementById('edit-content');
    const editEndDate = document.getElementById('edit-endDate');
    const errorMessage = document.getElementById('error-message');
    let currentEditTaskId = null;

    logoutButton.addEventListener('click', function() {
        localStorage.removeItem('user');
        window.location.href = '../index.html';
    });

    addTaskButton.addEventListener('click', function() {
        todoForm.style.display = 'block';
        editForm.style.display = 'none';
    });

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const type = document.getElementById('todo-type').value;
        const content = document.getElementById('todo-content').value;
        const endDate = document.getElementById('todo-endDate').value;

        if (!type && !content) {
            errorMessage.textContent = 'Please enter either a type or content.';
            errorMessage.style.display = 'block';
            return;
        }

        if (!endDate) {
            errorMessage.textContent = 'Please enter an end date.';
            errorMessage.style.display = 'block';
            return;
        }

        const endDateTime = new Date(endDate);
        const currentDateTime = new Date();

        if (endDateTime < currentDateTime) {
            errorMessage.textContent = 'End date cannot be earlier than the current time.';
            errorMessage.style.display = 'block';
            return;
        }

        const task = { type, content, endDate, userId: user.id };

        fetch(`${BASE_URL}/ToDo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(newTask => {
            displayTask(newTask);
            todoForm.reset();
            todoForm.style.display = 'none';
            errorMessage.style.display = 'none';
        })
        .catch(error => {
            console.error('Error adding task:', error);
        });
    });

    editForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const type = editType.value;
        const content = editContent.value;
        const endDate = editEndDate.value;

        if (!type && !content) {
            errorMessage.textContent = 'Please enter either a type or content.';
            errorMessage.style.display = 'block';
            return;
        }

        if (!endDate) {
            errorMessage.textContent = 'Please enter an end date.';
            errorMessage.style.display = 'block';
            return;
        }

        const endDateTime = new Date(endDate);
        const currentDateTime = new Date();

        if (endDateTime < currentDateTime) {
            errorMessage.textContent = 'End date cannot be earlier than the current time.';
            errorMessage.style.display = 'block';
            return;
        }

        const updatedTask = { id: currentEditTaskId, type, content, endDate, userId: user.id };

        fetch(`${BASE_URL}/ToDo/${currentEditTaskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
        .then(response => {
            if (response.ok) {
                fetchTasks();
                editForm.reset();
                editForm.style.display = 'none';
                errorMessage.style.display = 'none';
            } else {
                return response.json().then(errorData => {
                    console.error('Error updating task:', errorData);
                });
            }
        })
        .catch(error => {
            console.error('Error updating task:', error);
        });
    });

    function fetchTasks() {
        fetch(`${BASE_URL}/ToDo`)
            .then(response => response.json())
            .then(tasks => {
                todoList.innerHTML = '';
                const userTasks = tasks.filter(task => task.userId === user.id);
                userTasks.forEach(task => displayTask(task));
            })
            .catch(error => {
                console.error('Error fetching tasks:', error);
            });
    }

    function displayTask(task) {
        const li = document.createElement('li');
        const taskContent = document.createElement('div');
        taskContent.className = 'task-content';
        taskContent.textContent = `${task.type}: ${task.content} (End Date: ${formatDate(task.endDate)})`;

        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'button-container';

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function() {
            editTask(task);
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            deleteTask(task.id);
            todoList.removeChild(li);
        });

        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(deleteButton);

        li.appendChild(taskContent);
        li.appendChild(buttonContainer);
        todoList.appendChild(li);
    }

    function editTask(task) {
        currentEditTaskId = task.id;
        editType.value = task.type;
        editContent.value = task.content;
        editEndDate.value = task.endDate;
        editForm.style.display = 'block';
        todoForm.style.display = 'none';
    }

    function formatDate(dateString) {
        return dateString.replace('T', ' ').replace(' ', '\n');
    }

    function deleteTask(id) {
        fetch(`${BASE_URL}/ToDo/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            fetchTasks();
        })
        .catch(error => {
            console.error('Error deleting task:', error);
        });
    }

    fetchTasks();
});