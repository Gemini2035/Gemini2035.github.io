const accountBox = document.querySelectorAll('.account-box div');

let Timer = [];

accountBox.forEach((everyAccount, index) => {
    everyAccount.addEventListener('mouseover', () => {
        if(!everyAccount.classList.contains('isHover')){
        everyAccount.classList.add('isHover');
    }
    // important!
        clearTimeout(Timer[index]);
    });
    everyAccount.addEventListener('mouseout', () => {
        Timer[index] = setInterval(() => {
            everyAccount.classList.remove('isHover');
        }, 3000);
    })
})