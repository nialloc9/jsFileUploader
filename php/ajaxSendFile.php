<?php
//files check

if(isset($_FILES['file']) && !empty($_FILES['file'])){
    //error check
    if ( 0 < $_FILES['file']['error'] ) {
        echo 0; //error
    }
    else {
        //move image
        move_uploaded_file($_FILES['file']['tmp_name'], '../res/' . $_FILES['file']['name']);
        echo 'res/' . $_FILES['file']['name']; //file uploaded
    }
}else{ //no file sent
    echo 2;
}
?>