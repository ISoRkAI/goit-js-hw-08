import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector(".feedback-form input"),
    textarea: document.querySelector(".feedback-form textarea"),
}

refs.form.addEventListener("submit", throttle(onFormSubmit, 500));
refs.form.addEventListener("input", throttle(onTextareaInput, 500));

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

populateMessage()

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
}

function onTextareaInput(evt) {
    if (evt.target.value !== "") {
        formData[evt.target.name] = evt.target.value;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
}

function populateMessage() {
    const savedMessage = localStorage.getItem(STORAGE_KEY)
    
    if (savedMessage) {
        const savedMessagePars = JSON.parse(savedMessage);

        if (savedMessagePars['email'] !== undefined) {
            refs.input.value = savedMessagePars['email'];

        } else {
             refs.input.value = '';
        }
        if (savedMessagePars['message'] !== undefined) {
             refs.textarea.value = savedMessagePars['message'];

        } else {
             refs.textarea.value = '';
        }
    }
}