document.addEventListener('DOMContentLoaded', function() {
    const BASE_URL = 'https://localhost:7117/api';
    const token = localStorage.getItem('token');
    const personId = localStorage.getItem('personId');
    const username = localStorage.getItem('username');

    if (!token || !personId || !username) {
        window.location.href = '../index.html';
        return;
    }

    document.getElementById('user-info').textContent = `Logged in as: ${username}`;

    const logoutButton = document.getElementById('logout-button');
    const addPersonInfoForm = document.getElementById('add-person-info-form');
    const updatePersonInfoForm = document.getElementById('update-person-info-form');
    const addPersonInfoHeader = document.getElementById('add-person-info-header');
    const updatePersonInfoHeader = document.getElementById('update-person-info-header');
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');
    const profilePicture = document.getElementById('profile-picture');
    const adminFunctionsContainer = document.getElementById('admin-functions-container');
    const adminSuccessMessage = document.getElementById('admin-success-message');
    const allUsersTableContainer = document.getElementById('all-users-table-container');
    const deleteUserForm = document.getElementById('delete-user-form');
    const updateUserRoleForm = document.getElementById('update-user-role-form');

    let originalPersonInfo = {};

    logoutButton.addEventListener('click', function() {
        localStorage.removeItem('token');
        localStorage.removeItem('personId');
        localStorage.removeItem('username');
        window.location.href = '../index.html';
    });

    function parseJwt(token) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    }

    const decodedToken = parseJwt(token);
    const userRole = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

    if (userRole === 'Admin') {
        adminFunctionsContainer.style.display = 'block';
    }

    addPersonInfoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const personalCode = document.getElementById('personal-code').value;
        const phoneNumber = document.getElementById('phone-number').value;
        const email = document.getElementById('email').value;
        const city = document.getElementById('city').value;
        const street = document.getElementById('street').value;
        const houseNumber = document.getElementById('house-number').value;
        const apartmentNumber = document.getElementById('apartment-number').value;
        const profilePictureInput = document.getElementById('profile-picture-input').files[0];

        const formData = new FormData();
        formData.append('FirstName', firstName);
        formData.append('LastName', lastName);
        formData.append('PersonalCode', personalCode);
        formData.append('PhoneNumber', phoneNumber);
        formData.append('Email', email);
        formData.append('Address.City', city);
        formData.append('Address.Street', street);
        formData.append('Address.HouseNumber', houseNumber);
        formData.append('Address.ApartmentNumber', apartmentNumber);
        if (profilePictureInput) {
            formData.append('profilePicture', profilePictureInput);
        }

        fetch(`${BASE_URL}/User/addPersonInfo?userId=${personId}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                return response.text().then(text => { throw new Error(text) });
            }
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                return response.json();
            } else {
                return response.text();
            }
        })
        .then(data => {
            if (typeof data === 'string') {
                successMessage.textContent = data;
            } else {
                successMessage.textContent = 'Person information added successfully';
            }
            errorMessage.style.display = 'none';
            successMessage.style.display = 'block';
            setTimeout(() => {
                window.location.reload();
            }, 1000); // Refresh the page after 1 second
        })
        .catch(error => {
            console.error('Error adding person information:', error);
            if (error.message.includes('Personal code already exists')) {
                errorMessage.textContent = 'Personal code already exists.';
            } else if (error.message.includes('Email already exists')) {
                errorMessage.textContent = 'Email already exists.';
            } else if (error.message.includes('Phone number already exists')) {
                errorMessage.textContent = 'Phone number already exists.';
            } else {
                errorMessage.textContent = 'Error adding person information. Please try again.';
            }
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
        });
    });

    updatePersonInfoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const updatedPersonInfo = {};

        const firstName = document.getElementById('update-first-name').value;
        if (firstName !== originalPersonInfo.firstName) {
            updatedPersonInfo.firstName = firstName;
            updateField('updateFirstName', { firstName }); // Updated to use the correct endpoint and format
        }

        const lastName = document.getElementById('update-last-name').value;
        if (lastName !== originalPersonInfo.lastName) {
            updatedPersonInfo.lastName = lastName;
            updateField('updateLastName', { lastName }); // Updated to use the correct endpoint and format
        }

        const personalCode = document.getElementById('update-personal-code').value;
        if (personalCode !== originalPersonInfo.personalCode) {
            updatedPersonInfo.personalCode = personalCode;
            updateField('updatePersonalCode', { personalCode }); // Updated to use the correct endpoint and format
        }

        const phoneNumber = document.getElementById('update-phone-number').value;
        if (phoneNumber !== originalPersonInfo.phoneNumber) {
            updatedPersonInfo.phoneNumber = phoneNumber;
            updateField('updatePhoneNumber', { phoneNumber }); // Updated to use the correct endpoint and format
        }

        const email = document.getElementById('update-email').value;
        if (email !== originalPersonInfo.email) {
            updatedPersonInfo.email = email;
            updateField('updateEmail', { email }); // Updated to use the correct endpoint and format
        }

        const city = document.getElementById('update-city').value;
        const street = document.getElementById('update-street').value;
        const houseNumber = document.getElementById('update-house-number').value;
        const apartmentNumber = document.getElementById('update-apartment-number').value;
        if (city !== originalPersonInfo.address.city || street !== originalPersonInfo.address.street || houseNumber !== originalPersonInfo.address.houseNumber || apartmentNumber !== originalPersonInfo.address.apartmentNumber) {
            updatedPersonInfo.address = {
                city,
                street,
                houseNumber,
                apartmentNumber
            };
            updateField('updateAddress', updatedPersonInfo.address);
        }

        const profilePictureInput = document.getElementById('update-profile-picture-input').files[0];
        if (profilePictureInput) {
            const formData = new FormData();
            formData.append('profilePicture', profilePictureInput);

            fetch(`${BASE_URL}/User/updateProfilePicture?userId=${personId}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                    return response.text().then(text => { throw new Error('Network response was not ok: ' + text) });
                }
                return response.text(); // Changed to response.text() to handle non-JSON response
            })
            .then(data => {
                errorMessage.style.display = 'none';
                successMessage.textContent = 'Profile picture updated successfully';
                successMessage.style.display = 'block';
                profilePicture.src = URL.createObjectURL(profilePictureInput); // Refresh the image
                fetchPersonInfo();
            })
            .catch(error => {
                console.error('Error updating profile picture:', error);
                if (error.message.includes('The provided image format is not supported')) {
                    errorMessage.textContent = 'The provided image format is not supported.';
                } else {
                    errorMessage.textContent = 'Error updating profile picture. Please try again.';
                }
                errorMessage.style.display = 'block';
                successMessage.style.display = 'none';
            });
        }
    });

    function updateField(endpoint, data) {
        fetch(`${BASE_URL}/User/${endpoint}?userId=${personId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                return response.text().then(text => { throw new Error(text) });
            }
            return response.text(); // Changed to response.text() to handle empty response body
        })
        .then(() => {
            errorMessage.style.display = 'none';
            successMessage.textContent = 'Person information updated successfully';
            successMessage.style.display = 'block';
            fetchPersonInfo();
        })
        .catch(error => {
            console.error('Error updating person information:', error);
            try {
                const errorObj = JSON.parse(error.message);
                if (errorObj.errors) {
                    if (errorObj.errors.PersonalCode) {
                        errorMessage.textContent = errorObj.errors.PersonalCode.join(', ');
                    } else if (errorObj.errors.Email) {
                        if (errorObj.errors.Email.includes('Invalid top-level domain')) {
                            errorMessage.textContent = 'Invalid top-level domain.';
                        } else {
                            errorMessage.textContent = errorObj.errors.Email.join(', ');
                        }
                    } else if (errorObj.errors.PhoneNumber) {
                        errorMessage.textContent = errorObj.errors.PhoneNumber.join(', ');
                    } else {
                        errorMessage.textContent = 'Error updating person information. Please try again.';
                    }
                } else if (error.message.includes('Personal code already exists')) {
                    errorMessage.textContent = 'Personal code already exists.';
                } else if (error.message.includes('Email already exists')) {
                    errorMessage.textContent = 'Email already exists.';
                } else if (error.message.includes('Phone number already exists')) {
                    errorMessage.textContent = 'Phone number already exists.';
                } else {
                    errorMessage.textContent = 'Error updating person information. Please try again.';
                }
            } catch (e) {
                errorMessage.textContent = 'Error updating person information. Please try again.';
            }
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
        });
    }

    function fetchPersonInfo() {
        fetch(`${BASE_URL}/User/getPersonInfo?userId=${personId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            if (response.status === 404) {
                addPersonInfoForm.style.display = 'block';
                addPersonInfoHeader.style.display = 'block';
                updatePersonInfoForm.style.display = 'none';
                updatePersonInfoHeader.style.display = 'none';
                return;
            }
            return response.json();
        })
        .then(data => {
            if (data) {
                document.getElementById('update-first-name').value = data.firstName;
                document.getElementById('update-last-name').value = data.lastName;
                document.getElementById('update-personal-code').value = data.personalCode;
                document.getElementById('update-phone-number').value = data.phoneNumber;
                document.getElementById('update-email').value = data.email;
                document.getElementById('update-city').value = data.address.city;
                document.getElementById('update-street').value = data.address.street;
                document.getElementById('update-house-number').value = data.address.houseNumber;
                document.getElementById('update-apartment-number').value = data.address.apartmentNumber;

                if (data.profilePicture && data.profilePicture.data) {
                    profilePicture.src = `data:${data.profilePicture.contentType};base64,${data.profilePicture.data}`;
                }

                originalPersonInfo = data;

                addPersonInfoForm.style.display = 'none';
                addPersonInfoHeader.style.display = 'none';
                updatePersonInfoForm.style.display = 'block';
                updatePersonInfoHeader.style.display = 'block';

                // Check if the user has the "Admin" role
                if (userRole === 'Admin') {
                    adminFunctionsContainer.style.display = 'block';
                }
            }
        })
        .catch(error => {
            if (error.message === 'Network response was not ok' && error.response.status === 404) {
                console.log('User not found, this is normal.');
                addPersonInfoForm.style.display = 'block';
                addPersonInfoHeader.style.display = 'block';
                updatePersonInfoForm.style.display = 'none';
                updatePersonInfoHeader.style.display = 'none';
            } else {
                console.error('Error fetching person information:', error);
                errorMessage.textContent = 'Error fetching person information. Please try again.';
                errorMessage.style.display = 'block';
            }
        });
    }

    window.deletePersonInfo = function() {
        const userId = document.getElementById('delete-user-id').value;
        fetch(`${BASE_URL}/User/deleteUser?userId=${userId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            adminSuccessMessage.textContent = 'User deleted successfully'; // Updated to use adminSuccessMessage
            adminSuccessMessage.style.display = 'block';
            fetchPersonInfo(); // Fetch the updated person info after deletion
        })
        .catch(error => {
            console.error('Error deleting person information:', error);
            errorMessage.textContent = 'Error deleting person information. Please try again.';
            errorMessage.style.display = 'block';
            adminSuccessMessage.style.display = 'none';
        });
    }

    window.getAllUsers = function() {
        fetch(`${BASE_URL}/User/getAllUsers`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const tbody = document.getElementById('all-users-table').getElementsByTagName('tbody')[0];
            tbody.innerHTML = ''; // Clear existing rows
            data.forEach(user => {
                const row = tbody.insertRow();
                const cellUsername = row.insertCell(0);
                const cellUserId = row.insertCell(1);
                const cellRole = row.insertCell(2);
                cellUsername.textContent = user.username;
                cellUserId.textContent = user.id;
                cellRole.textContent = user.role;
            });
            allUsersTableContainer.style.display = 'block';
            deleteUserForm.style.display = 'none';
            updateUserRoleForm.style.display = 'none';
        })
        .catch(error => {
            console.error('Error fetching all users:', error);
        });
    }

    window.updateUserRole = function() {
        const userId = document.getElementById('update-user-id').value;
        const newRole = document.getElementById('new-role').value;
        const roleData = { role: newRole };

        fetch(`${BASE_URL}/User/updateRole?userId=${userId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(roleData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(() => {
            adminSuccessMessage.textContent = 'User role updated successfully'; // Updated to use adminSuccessMessage
            adminSuccessMessage.style.display = 'block';
            allUsersTableContainer.style.display = 'none';
            updateUserRoleForm.style.display = 'none';
        })
        .catch(error => {
            console.error('Error updating user role:', error);
            errorMessage.textContent = 'Error updating user role. Please try again.';
            errorMessage.style.display = 'block';
            adminSuccessMessage.style.display = 'none';
        });
    }

    window.showDeleteUserForm = function() {
        allUsersTableContainer.style.display = 'none';
        deleteUserForm.style.display = 'block';
        updateUserRoleForm.style.display = 'none';
    }

    window.showUpdateUserRoleForm = function() {
        allUsersTableContainer.style.display = 'none';
        deleteUserForm.style.display = 'none';
        updateUserRoleForm.style.display = 'block';
    }

    fetchPersonInfo();
});