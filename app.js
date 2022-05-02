const button = document.querySelector('.send-button'); 

button.addEventListener('click', () => {
    const message = document.querySelector('#message-box');
    console.log(message.value);
});