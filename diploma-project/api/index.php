<?php
// Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: GET');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
    try {
        $db = json_decode(file_get_contents('./db.json'));
    }
    catch(Exception $e) {
        http_response_code(404);
        echo 'Error: ', $e->getMessage(), '\n';
    }

    if (isset($db)) {
        if (isset($_GET['coffee'])) {
            echo (json_encode($db->coffee));
        }
        elseif (isset($_GET['goods'])) {
            echo (json_encode($db->goods));
        }
        elseif (isset($_GET['bestsellers'])) {
            echo (json_encode($db->bestsellers));
        } 
        else {
            http_response_code(404);
        }
    }
    else {
        http_response_code(404);
    }
