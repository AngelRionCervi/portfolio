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
    let specShow = document.querySelectorAll('.skill-used > .icon-skill');

    console.log(imageShow);
    let defaultProject = projects[0];

    titleShow.textContent = defaultProject.querySelector('.hid-p-title').textContent.trim();
    idShow.textContent = defaultProject.querySelector('.hid-p-id').textContent.trim() + '.';
    descriptionShow.textContent = defaultProject.querySelector('.hid-p-desc').textContent.trim();


}