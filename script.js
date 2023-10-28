const editButton = document.getElementById('edit-button');
const userInfo = document.getElementById('user-info');
const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
const userAge = document.getElementById('user-age');

let isEditing = false;

editButton.addEventListener('click', () => {
    isEditing = !isEditing;
    if (isEditing) {
        editButton.textContent = 'Salvar';
        userName.contentEditable = true;
        userEmail.contentEditable = true;
        userAge.contentEditable = true;
    } else {
        editButton.textContent = 'Editar';
        userName.contentEditable = false;
        userEmail.contentEditable = false;
        userAge.contentEditable = false;
    }
});

