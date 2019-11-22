$(window).on('load', function() {
    $("body").removeClass("preload");
});


$(document).ready(()=>{

    $('.project_text_left').on("click", (event) => {
        let id = event.target.id;

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

        $(event.target).parent().addClass('slide_box_selected')

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

})



