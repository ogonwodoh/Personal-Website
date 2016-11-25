<?php
	$name =$_POST['name'];
	$vistor_email=$_POST['email'];
	$message = $_POST['message'];
	$email_subject="New form submission";
	$email_body = "You have received a new message from the user $name.\n".
                            "Here is the message:\n $message".
	
	$to = "ocn2000@barnard.edu";
	$email_from = "ocn2000@barnard.edu";	
 
 	$headers = "From: $email_from \r\n";
 
 	$headers .= "Reply-To: $visitor_email \r\n";
 
  	mail($to,$email_subject,$email_body,$headers);
?>