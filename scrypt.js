const messages = [
    "U chắc chưa?",
    "Chắc chắn chưa??",
    "+ 1 máy suy nghĩ lại đi?",
    "Đi mà...",
    "Hãy nghĩ lại đi!",
    "Lần này thì anh chịu thua e rồi...",
    "Tôi đã khóc...",
    "Mà cũng chưa khóc lắm...",
    "Oke, tôi đã bỏ cuộc...",
    "Đùa thôi, đồng ý đi mà! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes-page.html";
}