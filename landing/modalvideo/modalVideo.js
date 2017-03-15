/**
 * Created by Алина on 09.03.2017.
 */
$(document).ready(function(){
    /* Get iframe src attribute value i.e. YouTube video url
     and store it in a variable */
    var url = $("#cartoonModalVideo").attr('src');

    /* Assign empty url value to the iframe src attribute when
     modal hide, which stop the video playing */
    $("#myModalVideo").on('hide.bs.modal', function(){
        $("#cartoonModalVideo").attr('src', '');
    });

    /* Assign the initially stored url back to the iframe src
     attribute when modal is displayed again */
    $("#myModalVideo").on('show.bs.modal', function(){
        $("#cartoonModalVideo").attr('src', url);
    });
});