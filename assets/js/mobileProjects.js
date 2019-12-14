document.addEventListener('DOMContentLoaded', ()=>{
    $(".project-item-link").each(function() {
        $(this).animatedModal();
    });

    let projectModals = document.getElementsByClassName('project-modal');

    projectModals.forEach((project, index)=>{
        handleCarousel(index + 1)
    })

});

function handleCarousel(index) {

    let projectImages = Array.from(document.querySelectorAll('.rest-images')).map(el => el.textContent.split('\n').splice(1, 3))[index - 1];
    let imageShow = document.querySelector('.project-content-image_' + index);
    let imageIndex = 0;
    let buttonFwd = document.querySelector('.chevron-right_' + index);
    let buttonBack = document.querySelector('.chevron-left_' + index);
    let cover = document.getElementsByClassName('image-transition-cover_'+ index)[0];

    buttonFwd.addEventListener('click', () => {
        imageIndex++;
        changeImage('fwd')
    });

    buttonBack.addEventListener('click', () => {
        imageIndex--;
        changeImage('back')
    });

    function changeImage(direction) {
        if (direction === 'fwd') {
            cover.classList.add('animate-cover-right');
        } else {
            cover.classList.add('animate-cover-left');
        }

        setTimeout(() => {
            if (imageIndex < 0) {
                imageIndex = projectImages.length - 1;
            }
            if (imageIndex > projectImages.length - 1) {
                imageIndex = 0;
            }
            imageShow.src = 'images/' + projectImages[imageIndex].trim();
        }, 250);

        setTimeout(() => {
            if (direction === 'fwd') {
                cover.classList.remove('animate-cover-right');
            } else {
                cover.classList.remove('animate-cover-left');
            }
        }, 600)
    }
}



