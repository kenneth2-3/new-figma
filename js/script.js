
// function togglePopover() {
//     var popover = document.getElementById("myPopover");
//         if (popover.style.display === "block") {
//             popover.style.display = "none";
//         } else {
//             popover.style.display = "block";
//         }
// }
var openButton = document.getElementById("openPopup");
var closeButton = document.getElementById("closePopup");
var popup = document.getElementById("popup");

openButton.addEventListener("click", function() {
    popup.style.display = "block";
});

closeButton.addEventListener("click", function() {
    popup.style.display = "none";
});



// const messageInput = document.getElementById("message-input");
// const sendButton = document.getElementById("send-button");
// const messageContainer = document.querySelector(".message-container");

// sendButton.addEventListener("click", function () {
//     const messageText = messageInput.value;
//     if (messageText) {
//     const message = document.createElement("div");
//     message.className = "message sent";
//     message.innerHTML = `<p>${messageText}</p>`;
//     messageContainer.appendChild(message);
//     messageInput.value = "";
//     }
// });


const copyLinkButton = document.getElementById('copyLinkButton');
const linkToCopy = document.getElementById('linkToCopy');

copyLinkButton.addEventListener('click', () => {
    linkToCopy.select();
    Document.execCommand('copy');
    alert('Link copied to clipboard');
});



const openModalButton = document.getElementById('openModalButton');
const closeModalButton = document.getElementById('closeModalButton');
const modal = document.getElementById('myModal');

openModalButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});


