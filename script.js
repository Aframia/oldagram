
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
            <i class="fa-regular fa-comment icon" id="comment-icon-${post.id}"></i>
            <i class="fa-regular fa-paper-plane icon"></i>
        </div>
        <div class="post-likes">
            <p><span id="like-count-${post.id}">${post.likes}</span> likes</p>
        </div>
        <div class="post-caption">
            <p><strong>${post.user.name}</strong> ${post.caption}</p>
        </div>
        <div class="comments-section" id="comments-section-${post.id}">
        </div>
    `;

    
document.querySelector("body").appendChild(postElement);
});
document.querySelector("body").addEventListener("click", (e) => {
    console.log(
        e.target.id
    )
    //refactor this code to make it dynamic
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
   if(e.target.id  === `comment-icon-1`){
       showComments(1);
   }
   if(e.target.id  === `comment-icon-2`){  
    showComments(2);
   }
   if(e.target.id  === `comment-icon-3`){  
    showComments(3);
   }
   if(e.target.id  === `comment-icon-4`){  
    showComments(4);
   }
});

//like button functionality
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

//comment button functionality
function showComments(postId) {
    let index = postId - 1;
    const post = postData[index];
    let commentsSection = document.getElementById(`comments-section-${postId}`);
    if (!commentsSection) {
        commentsSection = document.createElement('div');
        commentsSection.setAttribute('id', `comments-section-${postId}`);
        commentsSection.classList.add('comments-section');

        const addCommentDiv = document.createElement('div');
        addCommentDiv.classList.add('add-comment');
        addCommentDiv.innerHTML = `
            <input type="text" placeholder="Add a comment...">
            <button class="post-comment" id="post-comment-${postId}">Post</button>
        `;
        commentsSection.appendChild(addCommentDiv);

        post.comments.forEach(comment => {
            const commentElement = document.createElement('p');
            commentElement.innerHTML = `<strong>${comment.user.name}:</strong> ${comment.text}`;
            commentsSection.appendChild(commentElement);
        });
        document.getElementById(`post-${postId}`).appendChild(commentsSection);
    } else {
        commentsSection.remove();
    }
}
//post comment functionality
document.body.addEventListener('click', function(e) {
    if (e.target && e.target.id.startsWith('post-comment-')) {
        const postId = parseInt(e.target.id.split('-')[2]);
        const index = postId - 1;
        const inputField = e.target.previousElementSibling;
        const commentText = inputField.value.trim();
        if (commentText) {
            const newComment = {
                id: postData[index].comments.length + 1,
                user: {
                    id: 999, // Assuming a dummy user ID for the commenter
                    name: "You" // Assuming a dummy name for the commenter
                },
                text: commentText
            };
            postData[index].comments.push(newComment);
            const commentElement = document.createElement('p');
            commentElement.innerHTML = `<strong>${newComment.user.name}:</strong> ${newComment.text}`;
            document.getElementById(`comments-section-${postId}`).appendChild(commentElement);
            inputField.value = '';
        }
    }
});