<?php
				
				$name = $_REQUEST["name"];
				$email = $_REQUEST["email"];
				$text = $_REQUEST["text"];
				$headers = "From: $email ";
				
				mail("k.m.mahin69@gmail.com",$name,$text,$headers) . "\r\n" .
"CC: somebodyelse@example.com";
				// mail($to,$subject,$txt,$headers);
?>