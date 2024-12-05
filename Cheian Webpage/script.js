function showImage(imageUrl) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImage.src = imageUrl;
    captionText.innerHTML = "Pizza Image"; // You can customize this caption

    // Change the button to show an image
    const orderButton = document.getElementById("orderButton");
    orderButton.innerHTML = `<img src="${imageUrl}" alt="Pizza" style="width: 50px; height: auto;">`; // Adjust size as needed
    orderButton.disabled = true; // Disable the button to prevent multiple clicks

    // Close the modal when the user clicks on the close button
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";

    // Reset the button to its original state
    const orderButton = document.getElementById("orderButton");
    orderButton.innerHTML = "Order Now"; // Reset button text
    orderButton.disabled = false; // Enable the button again
}