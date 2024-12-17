function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

const btncontinuar = document.querySelector("#continuar");
const btnvolver = document.querySelector("#volver");

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);

    // Verificar si el espacio está vacío antes de insertar
    if (event.target.classList.contains('ContentItem')) {
        event.target.appendChild(draggedElement);
        const allContentItems = document.querySelectorAll('.ContentItem');
        allContentItems.forEach(item => item.classList.remove('active'));
        event.target.classList.add('active');
    }
    if (event.target.classList.contains('true')) {
        btncontinuar.classList.add('active');
        btnvolver.classList.remove('active');
    } else {
        btncontinuar.classList.remove('active');
        btnvolver.classList.add('active');
    }
}

document.getElementById('volver').addEventListener('click', function () {
    const itemmodem = document.getElementById('item');
    const originalContainer = document.querySelector('.items');

    if (itemmodem.parentNode !== originalContainer) {
        originalContainer.appendChild(itemmodem);
    }
    const allContentItems = document.querySelectorAll('.ContentItem');
    allContentItems.forEach(item => item.classList.remove('active'));
});