let backdropElement = document.getElementById('pop-up');
let popupBtn = document.querySelector('.user-nav__link');
let infoForm;


let toggleBackdrop = (event) => {
    backdropElement.classList.toggle('visible');
}

let presentInfoModal = (event) => {
    toggleBackdrop();
    infoForm = document.createElement('div');
    infoForm.classList.add('form');
    infoForm.innerHTML = `
        <h2>More Details</h2>
    `;
    let closeButton = document.createElement('button');
    closeButton.classList.add('user-nav__link');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', hideInfoForm);
    infoForm.appendChild(closeButton);
    document.body.appendChild(infoForm);

}

let hideInfoForm = () => {
    toggleBackdrop();
    document.body.removeChild(infoForm);
}

popupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    presentInfoModal();
});
// popupBtn.addEventListener('click', presentInfoModal);