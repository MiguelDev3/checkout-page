(() => {
    let d = document
    // Selectors
    const $plusButtons = d.querySelectorAll('.q-plus');
    const $minusButtons = d.querySelectorAll('.q-minus');
    const $listProducts = d.querySelector('.list-products');
    const $buttonContinue = d.querySelector('#btn-continue');
    const $alertBack = d.querySelector('.alert-bg');
    const $alertForm = d.querySelector('.form-alert');
    const $buttonAlert = d.querySelector('#btn-reload');

    $listProducts.addEventListener('click', function(e){
        $plusButtons.forEach(button => {
            if(e.target === button){
                button.parentElement.children[1].value++;
            }
        });
        $minusButtons.forEach(button => {
            if(e.target === button){
                button.parentElement.children[1].value--;
            }
        });        
    })
    $buttonContinue.addEventListener('click', function(e){
        e.preventDefault();
        $alertBack.classList.remove('hide');
        $alertForm.classList.remove('hide');
    })
    $buttonAlert.addEventListener('click', function(){
        $alertBack.classList.add('hide');
        $alertForm.classList.add('hide');
        location.reload();
    })
})(document);