const botToken = '';

const chatId = '';

function sendMessageToTelegram(userData) {
    const url = 'https://api.telegram.org/bot' + botToken + '/sendMessage';
    const text = 'Новое сообщение из формы обратной связи:\nНомер: ' + userData['user-tel'] + '\nКомментарий: ' + userData['user-comment'];

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: text
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка отправки сообщения в Telegram');
        }
        console.log('Сообщение успешно отправлено в Telegram');
    })
    .catch(error => {
        console.error('Произошла ошибка:', error);
    });
}

document.getElementById('modal-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const tel = document.getElementById('user-tel').value;
    const comment = document.getElementById('user-comment').value;

    sendMessageToTelegram({ 'user-tel': tel, 'user-comment': comment });
});
