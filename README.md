# jsFileUploader
This is a javascript plugin that uses ajax to take a file that the user wants to upload and puts it in a folder of your choice. It is designed to be dynamic and re-usable.


# Instructions
1. Make sure jQuery is available to the project.
2. Add the file ajaxSendFile.utilities.js to your project.
3. Add the file ajaxSendFile.php to your project.
4. When you want to move a file call function sendFile(pathToStatusServerScript, fileId, callBackFunction)
5. Set where you want the file to move to in ajaxSendFile.php. Also change the echo location to point to the folder it is being sent to.

*sendFile() Param*

pathToStatusServerScript: Path to ajaxSendFile.php in your file.

fileId: The id of the file input

callBackFunction: Optional callback to hangle the data

*Callback data returned:*

0: error

2: server did not receive a file

If neither 0 or 2 then it will return the location the file was returned to.


#Example:
    $(document).ready(function(){

      $('#imageChangeBtn').click(function(e){
  
          e.preventDefault();
          console.log('Image change button clicked.. ');
          sendFile('php/ajaxSendFile.php', 'imageFile', fileSendDataHandler);
  
      });

    });
