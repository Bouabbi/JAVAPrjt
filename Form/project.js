




n1.addEventListener("click", function() {
    modalContact.style.display = "block";
});

document.getElementsByClassName("close")[0].addEventListener("click", function() {
    modalContact.style.display = "none";
});






document.getElementById("playVideoButton").addEventListener("click", function() {
    document.getElementById("videoModal").style.display = "block";
});

function closeVideoModal() {
    document.getElementById("videoModal").style.display = "none";
}




document.getElementById("viewPhotosButton").addEventListener("click", function() {
    document.getElementById("photoModal").style.display = "block";
});

function closePhotoModal() {
    document.getElementById("photoModal").style.display = "none";
}



document.getElementById("viewCVButton").addEventListener("click", function() {
    document.getElementById("cvModal").style.display = "block";
});

function closeCVModal() {
    document.getElementById("cvModal").style.display = "none";
}






