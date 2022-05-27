const draggableElement = document.querySelector('#myDraggableElement');

draggableElement.addEventListener("dragstart", (e)=>{
    e.dataTransfer.setData("text/plain", draggableElement.id);

    for(const dropZone of document.querySelectorAll('.drop-zone')){
        dropZone.addEventListener('dragover', (e)=>{
            e.preventDefault();
            dropZone.classList.add('drop-zone--over');
        });


        dropZone.addEventListener('dragleave', (e)=>{
            e.preventDefault();
            dropZone.classList.remove('drop-zone--over');
        })

        dropZone.addEventListener('drop', (e)=>{
            e.preventDefault();

            const droppedElementId = e.dataTransfer.getData("text/plain");
            const droppedElement = document.getElementById(droppedElementId);
            dropZone.appendChild(droppedElement);

            dropZone.classList.remove('drop-zone--over');
        });
    }
})