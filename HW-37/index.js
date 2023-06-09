const API_ENDPOINT = "https://jsonplaceholder.typicode.com";

function apiCall(url) {
  return fetch(url).then((res) => res.json());
}

function getPostById(postId) {
  return apiCall(`${API_ENDPOINT}/posts/${postId}`);
}

function getCommentsByPostId(postId) {
  return apiCall(`${API_ENDPOINT}/posts/${postId}/comments`);
}

const getPostInput = document.querySelector("#getPostInput");
const searchBtn = document.querySelector("#search-btn");
const postTitle = document.querySelector(".post-title");
const postText = document.querySelector(".post-text");
const commentsBtn = document.querySelector("#commentsBtn");
const commentsList = document.querySelector("#commentsList");

searchBtn.addEventListener("click", handlePost);
commentsBtn.addEventListener("click", handleComments);

function renderPost(post) {
  postTitle.textContent = post.title;
  postText.textContent = post.body;

  document.querySelector("#postContainer").style.display = "block";
  document.querySelector("#commentsContainer").style.display = "none";
  document.querySelector("#errorContainer").style.display = "none";
}

function renderComments(comments) {
  commentsList.innerHTML = "";

  comments.forEach((comment) => {
    const commentItem = document.createElement("li");
    commentItem.classList.add("list-group-item");

    commentItem.innerHTML = `
      <h3>${comment.name}</h3>
      <p>${comment.email}</p>
      <p>${comment.body}</p>
    `;

    commentsList.appendChild(commentItem);
  });

  document.querySelector("#postContainer").style.display = "none";
  document.querySelector("#commentsContainer").style.display = "block";
  document.querySelector("#errorContainer").style.display = "none";
}

function showError(err) {
  const errorMessage = document.querySelector("#error-message");
  errorMessage.textContent = `Error while getting post: ${err}
    Enter a number in the range between 1 and 100`;

  document.querySelector("#postContainer").style.display = "none";
  document.querySelector("#commentsContainer").style.display = "none";
  document.querySelector("#errorContainer").style.display = "block";
}

function handlePost(event) {
  event.preventDefault();
  const postId = getPostInput.value;

  if (postId >= 1 && postId <= 100) {
    getPostById(postId)
      .then(renderPost)
      .catch((err) => showError(err));
  } else {
    showError("Invalid post ID");
  }
}

function handleComments(event) {
  event.preventDefault();
  const postId = getPostInput.value;

  if (postId >= 1 && postId <= 100) {
    getCommentsByPostId(postId)
      .then(renderComments)
      .catch((err) => showError(err));
  } else {
    showError("Invalid post ID");
  }
}
