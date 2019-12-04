document.addEventListener('DOMContentLoaded', () => {
    initProject()
});

function initProject() {

    let index  = 0;

    let projects = Array.from(document.getElementsByClassName('full-project'));

    let titleShow = document.querySelector('.title-project-container > h1');
    let idShow = document.querySelector('.title-project-container > p');
    let descriptionShow = document.querySelector('.project-description > p');
    let imageShow = document.querySelector('.image-nav-container > img');
    let specShow = Array.from(document.querySelectorAll('.skill-used > .icon-skill'));

    let defaultProject = projects[0];

    titleShow.textContent = defaultProject.querySelector('.hid-p-title').textContent.trim();
    idShow.textContent = defaultProject.querySelector('.hid-p-id').textContent.trim() + '.';
    descriptionShow.textContent = defaultProject.querySelector('.hid-p-desc').textContent.trim();
    imageShow.src = 'images/' + defaultProject.querySelectorAll('.hid-p-image')[0].innerText.trim();
    let projectSpecs = Array.from(defaultProject.getElementsByClassName('hid-p-spec'));

    specShow.forEach(v => {
        v.classList.add('display-none');
    });


    for (let i = 0; i < projectSpecs.length; i++) {
        specShow[i].classList.remove('display-none');
        specShow[i].src = 'images/specs/' + projectSpecs[i].innerText.trim();
    }


}