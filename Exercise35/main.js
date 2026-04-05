//  i wanna create code that asks the user how the image will be like, img link, width, height boder and boder radius

function createImage() {
    let imgLink = prompt("Enter the image link:");
    let imgWidth = prompt("Enter the image width (in pixels):");
    let imgHeight = prompt("Enter the image height (in pixels):");
    let imgBorder = prompt("Enter the image border (e.g., '2px solid black'):");
    let imgBorderRadius = prompt("Enter the image border radius (in pixels):");
    let img = document.createElement("img");
    img.src = imgLink;
    img.style.width = imgWidth + "px";
    img.style.height = imgHeight + "px";
    img.style.border = imgBorder;
    img.style.borderRadius = imgBorderRadius + "px";
    document.body.appendChild(img);
}


// dellete the image that i created
// function deleteImage() {
//     let img = document.querySelector("img");}
//     if (img) {
//         img.remove();
//     } else {
//         alert("No image to delete!");
//     };