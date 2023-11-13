function onTextChange() {
    let name = document.querySelector("#name").value.trim();
    let message = document.querySelector("#message").value.trim();
    let commentButton = document.querySelector("#comment_button");

    if (message.length && name.length) {
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
    const commentBox = document.createElement('span');
    const comment = document.createElement('p');

    comment.textContent = `${onInputName}: ${onInputMessage}`;

    commentBox.appendChild(comment);

    commentSection.append(commentBox);
}




