$(window).on('load', function() {
    $("body").removeClass("preload");
});


$(document).ready(()=>{

    $('.project_text_left').on("click", (event) => {
        let id = event.target.id;
        let projectIndex = Number(id.split('').pop()) - 1;
        appendContent(projectIndex);

        $('.slide_box_stay').each((index, el) => {
            let idclose = $(el).parent().attr('id').split('_').shift();
            if(id !== idclose){
                $(el).removeClass('slide_box_stay').addClass('slide_box_stay_back')
            }
        });

        $('.slide_box').each((index, el) => {
            if ($(el).hasClass('slide_box_selected')) {
                $(el).removeClass('slide_box_selected')
            }
        });

        $(event.target).parent().addClass('slide_box_selected');

        $('#'+id+'_output > div').removeClass('slide_box_stay_back').addClass('slide_box_stay');

        $('.cell-center').css('width', '0');
        $('.cell-center').css('opacity', '0');
        $('.text-project').css('opacity', '0');
        $('.title-project-container > h2').css('opacity', '0');

        setTimeout(() => {
            $('.cell-center').css('width', '55vw');
            $('.cell-center').css('opacity', '1');
        }, 400)

        setTimeout(() => {
            $('.text-project').css('opacity', '1');
            $('.title-project-container > h2').css('opacity', '1');
        }, 1000)

    });
});

function appendContent(index) {
    let contentDisplay = document.querySelector('.cell-wrapper');
    let title = contentDisplay.querySelector('h2');
    let imageDisplayed = contentDisplay.querySelector('.image-project');
    let description = contentDisplay.querySelector('.text-project > p');

    let contentWrapper = document.querySelector('.project_' + (index + 1));

    title.innerText = contentWrapper.querySelector('.title').innerText;
    imageDisplayed.src = "images/" + contentWrapper.getElementsByClassName('image-link')[0].innerText;
    description.innerText = contentWrapper.querySelector('.description').innerText;

    let specSvg = Array.from(contentWrapper.getElementsByClassName('spec-svg'));
    let specsToShow = Array.from(document.getElementsByClassName('image-spec'));

    specsToShow.forEach((v, i) => {
        v.src = "";
        if (specSvg[i]) {
            v.src = "images/specs/" + specSvg[i].innerText;
        }
    });

    let projectImages = Array.from(contentWrapper.getElementsByClassName('image-link')).map(el => el.innerText);
    let arrowRight = document.querySelector('.arrow-right');

    let imageIndex = 0;

    arrowRight.addEventListener('click', (e) => {
        e.preventDefault();
        imageIndex ++;
        if(imageIndex > projectImages.length-1) {
            imageIndex = 0;
        }
        imageDisplayed.src = "images/" + projectImages[imageIndex];
    })
}



