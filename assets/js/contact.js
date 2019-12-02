document.addEventListener('DOMContentLoaded', () => {

    let line1 = document.getElementsByClassName('small-line-1')[0];
    let line2 = document.getElementsByClassName('small-line-2')[0];
    let sendButton = document.getElementsByClassName('send-button')[0];

    sendButton.addEventListener('mouseover', () => {
        line1.classList.remove('toggleOnSlideTopBack');
        line2.classList.remove('toggleOnSlideBottomBack');
        line1.classList.add('toggleOnSlideTop');
        line2.classList.add('toggleOnSlideBottom');
    });
    sendButton.addEventListener('mouseleave', () => {
        line1.classList.remove('toggleOnSlideTop');
        line2.classList.remove('toggleOnSlideBottom');
        line1.classList.add('toggleOnSlideTopBack');
        line2.classList.add('toggleOnSlideBottomBack');
    })
});