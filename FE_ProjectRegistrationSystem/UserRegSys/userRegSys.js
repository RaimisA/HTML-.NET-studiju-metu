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
    const profilePicture = document.getElementById('profile-picture');

    let originalPersonInfo = {};

    logoutButton.addEventListener('click', function() {
        localStorage.removeItem('token');
        localStorage.removeItem('personId');
        localStorage.removeItem('username');
        window.location.href = '../index.html';
    });

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

        const reader = new FileReader();
        reader.onloadend = function() {
            const personInfo = {
                firstName,
                lastName,
                personalCode,
                phoneNumber,
                email,
                address: {
                    city,
                    street,
                    houseNumber,
                    apartmentNumber
                },
                profilePicture: {
                    fileName: profilePictureInput.name,
                    data: reader.result.split(',')[1],
                    contentType: profilePictureInput.type
                }
            };

            fetch(`${BASE_URL}/User/addPersonInfo`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(personInfo)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                errorMessage.style.display = 'none';
                alert('Person information added successfully');
                addPersonInfoForm.style.display = 'none';
                addPersonInfoHeader.style.display = 'none';
                updatePersonInfoForm.style.display = 'block';
                updatePersonInfoHeader.style.display = 'block';
                fetchPersonInfo();
            })
            .catch(error => {
                errorMessage.textContent = 'Error adding person information. Please try again.';
                errorMessage.style.display = 'block';
            });
        };
        if (profilePictureInput) {
            reader.readAsDataURL(profilePictureInput);
        } else {
            reader.onloadend();
        }
    });

    updatePersonInfoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const updatedPersonInfo = {};

        const firstName = document.getElementById('update-first-name').value;
        if (firstName !== originalPersonInfo.firstName) {
            updatedPersonInfo.firstName = firstName;
            updateField('updateFirstName', firstName);
        }

        const lastName = document.getElementById('update-last-name').value;
        if (lastName !== originalPersonInfo.lastName) {
            updatedPersonInfo.lastName = lastName;
            updateField('updateLastName', lastName);
        }

        const personalCode = document.getElementById('update-personal-code').value;
        if (personalCode !== originalPersonInfo.personalCode) {
            updatedPersonInfo.personalCode = personalCode;
            updateField('updatePersonalCode', personalCode);
        }

        const phoneNumber = document.getElementById('update-phone-number').value;
        if (phoneNumber !== originalPersonInfo.phoneNumber) {
            updatedPersonInfo.phoneNumber = phoneNumber;
            updateField('updatePhoneNumber', phoneNumber);
        }

        const email = document.getElementById('update-email').value;
        if (email !== originalPersonInfo.email) {
            updatedPersonInfo.email = email;
            updateField('updateEmail', email);
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

            fetch(`${BASE_URL}/User/updateProfilePicture?id=${personId}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                errorMessage.style.display = 'none';
                alert('Profile picture updated successfully');
                if (data.profilePicture && data.profilePicture.data) {
                    profilePicture.src = `data:${data.profilePicture.contentType};base64,${data.profilePicture.data}`;
                }
                fetchPersonInfo();
            })
            .catch(error => {
                errorMessage.textContent = 'Error updating profile picture. Please try again.';
                errorMessage.style.display = 'block';
            });
        }
    });

    function updateField(endpoint, data) {
        fetch(`${BASE_URL}/User/${endpoint}?id=${personId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            errorMessage.style.display = 'none';
            alert('Person information updated successfully');
            if (data.profilePicture && data.profilePicture.data) {
                profilePicture.src = `data:${data.profilePicture.contentType};base64,${data.profilePicture.data}`;
            }
            fetchPersonInfo();
        })
        .catch(error => {
            errorMessage.textContent = 'Error updating person information. Please try again.';
            errorMessage.style.display = 'block';
        });
    }

    function fetchPersonInfo() {
        fetch(`${BASE_URL}/User/${personId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => response.json())
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
            } else {
                addPersonInfoForm.style.display = 'block';
                addPersonInfoHeader.style.display = 'block';
                updatePersonInfoForm.style.display = 'none';
                updatePersonInfoHeader.style.display = 'none';
            }
        })
        .catch(error => {
            errorMessage.textContent = 'Error fetching person information. Please try again.';
            errorMessage.style.display = 'block';
        });
    }

    function deletePersonInfo() {
        fetch(`${BASE_URL}/User/${personId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            alert('Person information deleted successfully');
            addPersonInfoForm.style.display = 'block';
            addPersonInfoHeader.style.display = 'block';
            updatePersonInfoForm.style.display = 'none';
            updatePersonInfoHeader.style.display = 'none';
        })
        .catch(error => {
            errorMessage.textContent = 'Error deleting person information. Please try again.';
            errorMessage.style.display = 'block';
        });
    }

    fetchPersonInfo();
});