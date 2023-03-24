const siteBox = document.querySelectorAll('.website-box>div');

siteBox.forEach(everySite => {
    everySite.addEventListener('click', () => {
        window.open(everySite.querySelector('h4').innerHTML, '_blank');
    })
    let Timer = null;
    let downDirection = true;
    everySite.addEventListener('mouseover', () => {
        Timer = setInterval(() => {
            let container = everySite.querySelector('div');
            let distance = container.scrollHeight - container.clientHeight;
            if(container){
                if(downDirection){
                    container.scrollTop += 1;
                    if (container.scrollTop == distance - 1) {
                        downDirection = !downDirection;
                    }
                } else {
                    container.scrollTop -= 1;
                    if (container.scrollTop == 0) {
                        downDirection = !downDirection;
                    }
            }
        }
        }, 25);
    })
    everySite.addEventListener('mouseout', () => {
        clearInterval(Timer);
    })
})