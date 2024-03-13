const modalForm = document.getElementById('modal-form');

modalForm.addEventListener('submit', e => {
    e.preventDefault();
    const userTel = document.getElementById('user-tel').value;
    const userComment = document.getElementById('user-comment').value;

    const formData = new FormData();
    formData.append('user-tel', userTel);
    formData.append('user-comment', userComment);

    fetch("/", {
        method: "POST",
        body: formData
    })
    .then(() => {
        console.log('Form submitted successfully!');
    })
    .catch((error) => console.log('Sending form failed'));
});
