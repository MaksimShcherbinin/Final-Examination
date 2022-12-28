const formEl = document.querySelector('.signup__form');
const ratingBtnsEl = formEl.querySelectorAll('.rating__sign__input');
const inputPasswordEl = formEl.querySelector('.form__input-password');
const inputReTypePasswordEl = formEl.querySelector('.form__input-re-type-password');

inputReTypePasswordEl.addEventListener('input', () => {
    if (inputReTypePasswordEl.value !== inputPasswordEl.value) {
        inputPasswordEl.classList.add('invalid');
        inputReTypePasswordEl.classList.add('invalid');
        inputPasswordEl.classList.remove('valid');
        inputReTypePasswordEl.classList.remove('valid');
    } else {
        inputPasswordEl.classList.add('valid');
        inputReTypePasswordEl.classList.add('valid'); inputPasswordEl.classList.remove('invalid');
        inputReTypePasswordEl.classList.remove('invalid');
    };
});

formEl.addEventListener('submit', (e) => {
    if (inputPasswordEl.classList.contains('invalid') || inputReTypePasswordEl.classList.contains('invalid')) {
        e.preventDefault();
    } else {
        inputPasswordEl.classList.remove('invalid');
        inputReTypePasswordEl.classList.remove('invalid');
        inputPasswordEl.classList.remove('valid');
        inputReTypePasswordEl.classList.remove('valid');
    };
});

ratingBtnsEl.forEach(elem => {
    elem.addEventListener('change', () => {
        checkedNumber = document.querySelector('.rating__sign__input:checked').value || undefined;
        ratingBtnsEl.forEach(item => {
            const currentLabel = item.previousElementSibling;
            (item.value <= checkedNumber) ? currentLabel.classList.add('check') : currentLabel.classList.remove('check');
        });
    });
});