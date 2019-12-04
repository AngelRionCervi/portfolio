document.addEventListener('DOMContentLoaded', () => {
    handleSwitch();
    initProject(0);
});

function initProject(index) {

    let projects = Array.from(document.getElementsByClassName('full-project'));

    let titleShow = document.querySelector('.title-project-container > h1');
    let idShow = document.querySelector('.title-project-container > p');
    let descriptionShow = document.querySelector('.project-description > p');
    let imageShow = document.querySelector('.image-nav-container > img');
    let specShow = Array.from(document.querySelectorAll('.skill-used > .icon-skill'));

    let project = projects[index];

    opacityZero(titleShow, idShow, descriptionShow);

    setTimeout(() => {
        opacityOne(titleShow, idShow, descriptionShow);

        titleShow.textContent = project.querySelector('.hid-p-title').textContent.trim();
        idShow.textContent = project.querySelector('.hid-p-id').textContent.trim() + '.';
        descriptionShow.textContent = project.querySelector('.hid-p-desc').textContent.trim();

    }, 300);

    imageShow.src = 'images/' + project.querySelectorAll('.hid-p-image')[0].innerText.trim();

    let projectSpecs = Array.from(project.getElementsByClassName('hid-p-spec'));

    specShow.forEach(v => {
        v.classList.add('display-none');
    });

    for (let i = 0; i < projectSpecs.length; i++) {
        specShow[i].classList.remove('display-none');
        specShow[i].src = 'images/specs/' + projectSpecs[i].innerText.trim();
    }

    handleCarousel(project);
}

function opacityZero(titleShow, idShow, descriptionShow) {
    titleShow.style.opacity = 0;
    idShow.style.opacity = 0;
    descriptionShow.style.opacity = 0;
}

function opacityOne(titleShow, idShow, descriptionShow) {
    titleShow.style.opacity = 1;
    idShow.style.opacity = 1;
    descriptionShow.style.opacity = 1;
}

function handleSwitch() {
    let projectsButton = Array.from(document.querySelectorAll('.bar, .project-bar'));

    projectsButton[0].classList.add('bar-active');
    projectsButton[0].querySelector('p').style.backgroundPosition = "unset";

    projectsButton.forEach((button, index) => {
        button.addEventListener('click', () => {
            projectsButton.forEach(disableButton => {
                if (disableButton.classList.contains('bar-active')) {
                    disableButton.classList.remove('bar-active');
                    disableButton.querySelector('p').style.backgroundPosition = "";
                }
            });
            button.classList.add('bar-active');
            button.querySelector('p').style.backgroundPosition = "unset";
            initProject(index);
        })
    })
}

function handleCarousel(project) {

    let projectImages = project.querySelectorAll('.hid-p-image');
    let imageShow = document.querySelector('.image-nav-container > img');
    let imageIndex = 0;
    let buttonFwd = document.querySelector('.chevron-right');
    let buttonBack = document.querySelector('.chevron-left');
    let cover = document.getElementsByClassName('image-transition-cover')[0];

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
            imageShow.src = 'images/' + projectImages[imageIndex].textContent.trim();
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