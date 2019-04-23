var modal = document.querySelector('.modal');
var negativeModal = document.querySelector('.modal__action--negative')
var selectPlans__buttons = document.querySelectorAll('.plans__button');

console.dir(selectPlans__buttons)
for (var i = 0; i < selectPlans__buttons.length; i++ ) {
    selectPlans__buttons[i].addEventListener('click', function(){
        modal.style.display = 'block';

    })
}
negativeModal.addEventListener('click',function(){
    modal.style.display = 'none';

})