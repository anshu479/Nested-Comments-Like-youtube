function addComment(event) {
  var comment = event.target.parentNode.firstElementChild.value;
  if (comment) {
    event.target.insertAdjacentHTML(
      "afterend",
      `<div class='commentDiv'>
        <div class='commentPara'>
            <h3>${comment}</h3>
        </div>
        <div class='commentLikes'>
            <p>Likes: 0</p>
        </div>
        <div class='commentBtn'>
            <button class='likeBtn' onclick="like(event)">Like</button>
            <button class='delBtn' onclick='del(event)'>Delete</button>
            <div id='reply'>
            <button class='replyBtn' style='margin: 10px' onclick='reply(event)'>Reply</button>
            </div>

        </div>

    </div>`
    );
    if (event.target.textContent !== "Add Comment") {
      console.log(event.target.previousElementSibling);
      console.log(event.target.previousElementSibling.previousElementSibling);
      event.target.previousElementSibling.previousElementSibling.remove();
      event.target.previousElementSibling.remove();
      event.target.remove();
    } else {
      event.target.parentNode.firstElementChild.value = "";
    }
  }
}

function like(event) {
  console.log(event);
  var likeEle =
    event.target.parentNode.previousElementSibling.firstElementChild.textContent.split(
      " "
    )[1];
  var newLikes = parseInt(likeEle) + 1;
  event.target.parentNode.previousElementSibling.firstElementChild.textContent = `Likes: ${newLikes}`;
}

function del(event) {
  console.log(event);
  var rem = event.target.parentNode.parentNode;
  console.log(rem);
  rem.remove();
}

function reply(event) {
  event.target.insertAdjacentHTML(
    "afterend",
    `
    <div class='comReply' style='margin: 15px'>
        <input id='repInput' placeholder='reply here...'>
        <button class='delBtn' onclick='repDel(event)'>Delete</button>
        <button class='replyBtn' onclick='addComment(event)'>Reply</button>
    <div>`
  );
}

function repDel(event) {
  event.target.parentNode.remove();
}
