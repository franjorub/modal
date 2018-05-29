let $activarModal = document.getElementById('activarModal')
let $overlay = document.querySelector('.overlay');
let $modal = document.querySelector('.modal');
let $modalButton = document.querySelector('.modal-button');

$activarModal.addEventListener('click', function(event) {
    $overlay.classList.add('active');
    $modal.style.animation = 'modalIn 1s forwards';
})

$overlay.addEventListener('click', function(event) {

    if (event.target == $overlay || event.target == $modalButton) {
        $modal.style.animation = 'modalOut 1s forwards';
        $overlay.classList.remove('active');
    }
})