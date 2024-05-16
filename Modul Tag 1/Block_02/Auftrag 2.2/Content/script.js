let AddItems = document.getElementById('add');
let AlbumBody = document.getElementById('latest');
let firstDiv = document.getElementsByClassName('albums')[0];

AddItems.addEventListener('click', function AddNewItems() {
    let clone = firstDiv.cloneNode(true);
    AlbumBody.appendChild(clone);
});

let removeButton = document.getElementById('remove');
removeButton.addEventListener('click', function () {
    firstDiv = document.getElementsByClassName('albums')[0];
    if (firstDiv) {
        firstDiv.remove();
    }
});