/**
 * Created by Niall on 13/09/2016.
 */
$(document).ready(function(){

    $('#imageChangeBtn').click(function(e){

        e.preventDefault();
        console.log('Image change button clicked.. ');
        sendFile('php/ajaxSendFile.php', 'imageFile', fileSendDataHandler);

    });

});

//callack function
function fileSendDataHandler(data, jImageAreaId){
    switch  (data) {

        //file received by server had error
        case data == 0:
            console.log("ERROR: File had an error in ajaxSendFile.php");
            break;

        //server did not receive a file
        case data == 2:
            console.log("ERROR: No file sent to ajaxSendFile.php");
            break;

        //else do this
        default:
            console.log("SUCCESS: Adding image to screen");
            $('#image').attr('src', data); //add image to image area
            break;
    } //switch
}