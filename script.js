
//imports the data from the data.js file
import data from './data.js';

data.map((post) => {
    const postElement = document.createElement("section");
    postElement.classList.add("post");

    postElement.innerHTML = `
        <header class="post-header">
            <img src="${post.user.profilePicture}" alt="profile picture of ${post.user.name}">
            <span class="post-meta">
                <h4>${post.user.name}</h4>
                <p class="post-date">Posted on ${post.date}</p>
            </span>
        </header>
        <img class="post-image" src="${post.image}" alt="${post.caption}">
        <div class="post-actions">
            <i class="fa-regular fa-heart icon"></i>
            <i class="fa-regular fa-comment icon"></i>
            <i class="fa-regular fa-paper-plane icon"></i>
        </div>
        <div class="post-likes">
            <p><span id="like-count">${post.likes}</span> likes</p>
        </div>
        <div class="post-caption">
            <p><strong>${post.user.name}</strong> ${post.caption}</p>
        </div>
    `;

    
document.querySelector("body").appendChild(postElement);
});