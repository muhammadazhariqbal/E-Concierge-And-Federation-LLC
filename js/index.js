//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//gallery js 
function imageGallery() {
    const highlight = document.querySelector(".gallery-hightlight");
    const previews = document.querySelectorAll(".room-preview img");

    previews.forEach(preview => {
        preview.addEventListener("click", function () {
            const smallSrc = this.src;
            const bigSrc = smallSrc.replace("small", "big");
            previews.forEach(preview => preview.classList.remove("room-active"));
            highlight.src = bigSrc;
            preview.classList.add("room-active");
        });
    });
}

imageGallery();

//LOGIN 