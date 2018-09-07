<?php

//API key
$key = "6627840568cd2172441fa18cacbccfaf";

//The location of the file to transmit
$file = $_POST['file'];

// URL on which we have to post data
$url = "http://www.3dtransform.com/api.php";

// Setting the Post variables
$post_data['key'] = $key;
$post_data['file'] = $file;

// Initialize cURL
$ch = curl_init();
// Set URL on which you want to post the Form and/or data
curl_setopt($ch, CURLOPT_URL, $url);
//???
curl_setopt($ch, CURLOPT_POST, 1);
// Data+Files to be posted
curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
// Pass TRUE or 1 if you want to wait for and catch the response against the request made
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
// For Debug mode; shows up any error encountered during the operation
curl_setopt($ch, CURLOPT_VERBOSE, 1);
//follow response
curl_setopt ($ch, CURLOPT_FOLLOWLOCATION, 1);
//return the contents of the call
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
// Execute the request
$response = curl_exec($ch);

//make it easy to parse the XML
$response = simplexml_load_string($response);

//close cURL
curl_close($ch);

//extract the variables from the XML
$results_detail = (string)$response->detail;
$results_status = (string)$response->status;

//show us the API call results
echo "The detail is: " . $results_detail . "<br>";
echo "The status is: " . $results_status . "<br>";

?>