const messages = [
    "Em chắc chứ?",
    "Thật à???",
    "Này em đang hơi tiêu cực đấy ?",
    "Đicùng anh đi mòaa...",
    "Nghĩ về cuộc vui đi:>> !",
    "Em không đi là anh buồn đấy ...",
    "Nài anh thực sự buồn đấy ...",
    "Nài anh sẽ thực sự rất rất rất buồn đếy...",
    "Được rồi :<, anh ko hỏi nữa ...",
    "Có cái nịt :))), nhấn có đi ! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.Yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}