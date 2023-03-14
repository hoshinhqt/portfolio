var triggerBtn = document.querySelectorAll('.modal-trigger');
var btnReadMore = document.querySelector('.btn-more');
var btnReadLess = document.querySelector('.btn-less');
var aboutFirst = document.querySelector('.modal-about--first-page');
var aboutSecond = document.querySelector('.modal-about--second-page');



for (let i = 0; i < triggerBtn.length; i++) {

    triggerBtn[i].addEventListener("click", function (e) {
        e.preventDefault()
        const id = this.dataset.modal
        const modal = document.getElementById(id)
        modal.classList.add("modal-show")
    })

}

var btnClose = document.querySelectorAll(".modal__close")

for (let i = 0; i < btnClose.length; i++) {
    btnClose[i].addEventListener('click', function () {
        var openedModal = document.querySelector('.modal-show')
        openedModal.classList.remove('modal-show')

    })

}


