/**
 * Created by Niall on 13/09/2016.
 */
//UPDATE STATUS
function sendFile(pathToStatusServerScript, fileId, imageDisplayAreaId, callBackFunction) {

    //get element id's for jQuery
    var jFileId = '#' + fileId;
    var jImageAreaId = '#' + imageDisplayAreaId;

    //get element values
    var file = $(jFileId).prop('files')[0];

    //file check
    if (file != undefined) {

        var form = new FormData();
        form.append('file', file);

        $.ajax({
            url: pathToStatusServerScript, // send to server side script e.g 'php/auth/statusUpdate.auth.php'
            dataType: 'text',  // wxpect the server to return text
            cache: false, //do not cache the data. jQuery adds timestamp so each request is unique and not won't be cached.
            contentType: false, //forces jQuery not to add a content-type header
            processData: false, //jQuery won't try to process data to a string
            data: form, //pass the form to the server script
            type: 'post', //because it is an image we need to use post
            success: function (data) {
                console.log("SUCCESS: Image successfully uploaded... handling data");

                //DO SOME AWESOME STUFF HERE..
                if (callBackFunction != '') {
                    callBackFunction(data, jImageAreaId);
                } //callback check

            } //success
        }); //ajax
    }else{
        console.log("WARNING: No image set..")
    } //file check
}