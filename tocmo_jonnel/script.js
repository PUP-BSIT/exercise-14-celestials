function buttonToggle() {
    let nameInput = document.querySelector("#name").value.trim();
    let commentBox = document.querySelector("#comment").value.trim();
    let commentButton = document.querySelector("#comment_button");

    if(nameInput.length && commentBox.length) {
        commentButton.disabled = false;
    } else {
        commentButton.disabled = true;
    }
}

function addComment() {
    let onInputName = document.querySelector('#name').value;
    let onInputMessage = document.querySelector('#comment').value;
    let commentSection = document.querySelector('.comment-section');
    const commentBox = document.createElement('span');
    const comment = document.createElement('p');

    comment.textContent = `${onInputName}: ${onInputMessage}`;

    commentBox.appendChild(comment);
    commentSection.appendChild(commentBox);

    document.querySelector('#name').value = '';
    document.querySelector('#comment').value = '';
}



