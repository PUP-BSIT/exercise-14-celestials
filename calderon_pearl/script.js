function onTextChange() {
    let name = document.querySelector("#name").value;
    let comments = document.querySelector("#comments").value;
    let commentButton = document.querySelector("#comment_button");

    if (comments.length && name.length ) {
        commentButton.disabled = false;
    }
    else {
        commentButton.disabled = true;
    }
}

function addComment(event) {
    event.preventDefault();
    let onAddName = document.querySelector('#name').value;
    let onAddMessage = document.querySelector('#comments').value;
    let commentsSection = document.querySelector('.comments-section');
    let list = document.querySelector('#list');
    let li = document.createElement('li');
    li.textContent = `${onAddName}: ${onAddMessage}`;
    list.appendChild(li);
    commentsSection.append(list);

    document.querySelector('#name').value = '';
    document.querySelector('#comments').value = '';
    document.querySelector('#comment_button').disabled = true;
}

document.querySelector('#comment_form').addEventListener('submit', addComment);