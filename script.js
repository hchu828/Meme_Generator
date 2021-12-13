const form = document.getElementById("form");
const img = document.getElementById("img_url");

form.addEventListener("submit", function(e){   
    e.preventDefault();

    const topText= document.createElement("div");
    const botText = document.createElement("div");
    const img = document.createElement("img");
    const meme = document.createElement("div");
    const deleteButton = document.createElement("BUTTON");
    const bigMeme = document.createElement("div"); 

    img.classList.add("img");
    img.src = document.getElementById("img_url").value;

    topText.classList.add("topText");
    topText.innerHTML = document.getElementById("user_topText").value;

    botText.classList.add("botText");
    botText.innerHTML = document.getElementById("user_botText").value;
    
    deleteButton.innerHTML = "delete";
    meme.classList.add("meme");
    meme.appendChild(topText);
    meme.appendChild(botText);
    meme.appendChild(img);

    deleteButton.classList.add("deleteButton");
    // deleteMeme.addEventListener("click", function(event){
    //     this.parentNode.remove();
    // })
    bigMeme.classList.add("bigMeme");
    bigMeme.appendChild(meme);
    bigMeme.appendChild(deleteButton);

    let memeGallery = document.getElementById("container");
    memeGallery.addEventListener("click", function(event) {
        event.target.parentNode.remove();
    });
    memeGallery.appendChild(bigMeme);

    form.reset();
});

