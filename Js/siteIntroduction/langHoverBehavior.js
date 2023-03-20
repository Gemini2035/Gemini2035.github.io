const langRatePersontage = document.querySelectorAll('.lang-rate-box span');
const langExplanation = document.querySelectorAll('.lang-explanation-box>div');

langRatePersontage.forEach((everyLangRatePersontage, index) => {
    everyLangRatePersontage.addEventListener('mouseover', () => {
        langExplanation[index].classList.add('isChoosen');
    })
    everyLangRatePersontage.addEventListener('mouseout', () => {
        langExplanation[index].classList.remove('isChoosen');
    })
})