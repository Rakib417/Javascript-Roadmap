// DragEvent
// ondragstart
// ondrag
// ondragend
// ondragenter
// ondragleave
// ondragover
// ondrop

const div = document.querySelector("div");
const p = document.querySelector("div");


p.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData("Text", event.target.id);
});


div.addEventListener('dragover', function(event) {
    event.preventDefault();
});

div.addEventListener('drop', function(event) {
    let id = event.dataTransfer.getData("Txt");
    div.appendChild(document.getElementById(id));
    console.log(id);
})


NOT WORKING NEED DO AAIN