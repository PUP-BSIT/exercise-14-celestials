function onTextChange() {
    let message = document.getElementById("message");
    let name = document.getElementById("name");
    let commentButton = document.getElementById("comment_button")

    if (message.value.length > 0 && name.value.length > 0) {
        commentButton.disabled = false;
    }
    else {
        commentButton.disabled = true;
    }
}

function addComment() {
    let onInputName = document.querySelector('#name').value;
    let onInputMessage = document.querySelector('#message').value;
    let commentSection = document.querySelector('.comments');
    const comment = document.createElement('p');

    comment.textContent = `${onInputName}: ${onInputMessage}`;

    commentSection.appendChild(comment);
}   