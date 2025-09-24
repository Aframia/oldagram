
//imports the data from the data.js file
import postData from './data.js';
import data from './data.js';

data.map((post) => {
    const postElement = document.createElement("section");
    postElement.classList.add("post");
    postElement.setAttribute("id", `post-${post.id}`);

    postElement.innerHTML = `
        <header class="post-header">
            <img src="${post.user.profilePicture}" alt="profile picture of ${post.user.name}">
            <span class="post-meta">
                <h4>${post.user.name}</h4>
                <p class="post-date">Posted on ${post.date}</p>
            </span>
        </header>
        <img class="post-image" src="${post.image}" alt="${post.caption}">
        <div class="post-actions" id="post-actions-${post.id}">
            <i class="fa-regular fa-heart icon" id="like-icon-${post.id}"></i>
            <i class="fa-regular fa-comment icon"></i>
            <i class="fa-regular fa-paper-plane icon"></i>
        </div>
        <div class="post-likes">
            <p><span id="like-count-${post.id}">${post.likes}</span> likes</p>
        </div>
        <div class="post-caption">
            <p><strong>${post.user.name}</strong> ${post.caption}</p>
        </div>
    `;

    
document.querySelector("body").appendChild(postElement);
});
document.querySelector("body").addEventListener("click", (e) => {
    console.log(
        e.target.id
    )
    if(e.target.id  === `like-icon-1`){
       toggleLike(1);
   } 
      if(e.target.id  === `like-icon-2`){
       toggleLike(2);
   } 
      if(e.target.id  === `like-icon-3`){
       toggleLike(3);
   } 
      if(e.target.id  === `like-icon-4`){
       toggleLike(4);
   } 
});

function toggleLike(postId) {
    let index = postId - 1;
    const likeIcon = document.querySelector(`#post-actions-${postId} .fa-heart`);
    if(postData[index].isLiked) {
        likeIcon.classList.remove("fa-solid", "liked");
        likeIcon.classList.add("fa-regular");
        postData[index].isLiked = false;
        console.log(postData[index].likes);
        postData[index].likes--;
        document.getElementById(`like-count-${postId}`).innerText = postData[index].likes;
    } else{
    likeIcon.classList.remove("fa-regular");
    likeIcon.classList.add("fa-solid", "liked");
    postData[index].isLiked = true;
    postData[index].likes++;
    document.getElementById(`like-count-${postId}`).innerText = postData[index].likes;
}}