var modal = document.querySelector(".modal");
// var negativeModal = document.querySelector('.modal__action--negative')
var modalNoButton = document.querySelector(".modal__action--negative")
var selectPlans__buttons = document.querySelectorAll(".plans__button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

// console.dir(selectPlans__buttons)

for (var i = 0; i < selectPlans__buttons.length; i++ ) {
    selectPlans__buttons[i].addEventListener('click', function(){
        modal.style.display = 'block';

    })
}
backdrop.addEventListener("click", function() {
    mobileNav.style.display = 'none';
    this.closeModal();
});

modalNoButton.addEventListener("click", closeModal);

function closeModal() {
 
  modal.style.display = "none";
}

toggleButton.addEventListener('click', function() {
    mobileNav.style.display = 'block';
    
});
