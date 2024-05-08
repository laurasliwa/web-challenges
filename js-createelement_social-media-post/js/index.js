console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const websiteHeader = document.createElement("h1");
websiteHeading.textContent = "Social Media Post";

const websiteArticle = document.createElement("article");
newArticle.append(websiteArticle);

const articleContent = document.createElement("p");
articleContent.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
