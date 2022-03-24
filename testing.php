
<!DOCTYPE html>
<html>
<head>
	<title>Contact</title>
	<meta charset="utf-8" />
	<meta name="description" content="" />
	<meta name='keywords' content="" />
	<meta name='author' content="Webeldes" />
	<meta name='viewport' content='width=device-width, initial-scale=1.0' />
	<link rel='icon' type='img/png' href='Images/new_logo.jpg' />
<!-- Font Awesome -->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous" />
<!-- MAIN CSS -->
	<link rel='stylesheet' type='text/css' href='main.css' />
<!-- Google Font -->
	<link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
</head>
<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-176916746-1"></script>
	<script>
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	gtag('config', 'UA-176916746-1');
	</script>

<body>
    
<!-- header -->
	
	<img src="Images/background_cloud.png" alt='Not Found' id='con_top_left_cloud' />
		<div id='header'>
			<img src="Images/logo.png" alt='Not Found' id='main_logo' />
			<ul id='main_nav'>
				<li class='main_nav'><a class='trnsl_contact_nav go_back_from_con_page'>Home</a></li>
				<li class='main_nav'><a class='trnsl_contact_nav go_back_from_contact_wte'>What to expect</a></li>
				<li class='main_nav'><a class='trnsl_contact_nav go_from_con_to_port'>Portfolio</a></li>
				<li class='main_nav'><a class='trnsl_contact_nav go_from_con_to_about'>About Us</a></li>
				<li class='main_nav'><a class='trnsl_contact_nav go_back_from_contact_ser'>Services</a></li>
				<li class='main_nav'><a class='trnsl_contact_nav  stay_on_con_page'>Contact</a></li>
			</ul>
			<img src='Images/burger_2.png' id="fa-bars" />
		
		</div>
		<div id='mini_navigation' class='mini_navigation'>
			<ul id='mini_nav'>
				<li class='mini_nav'><a class='mini_nav_a trnsl_contact_mini_nav  go_back_from_con_page'>Home</a></li>
				<li class='mini_nav'><a class='mini_nav_a trnsl_contact_mini_nav go_back_from_contact_wte'>What to expect</a></li>
				<li class='mini_nav'><a class='mini_nav_a trnsl_contact_mini_nav go_from_con_to_port'>Portfolio</a></li>
				<li class='mini_nav'><a class='mini_nav_a trnsl_contact_mini_nav go_from_con_to_about'>About Us</a></li>
				<li class='mini_nav'><a class='mini_nav_a trnsl_contact_mini_nav go_back_from_contact_ser'>Services</a></li>
				<li class='mini_nav'><a class='mini_nav_a trnsl_contact_mini_nav  stay_on_con_page'>Contact</a></li>
			</ul>
		</div>

<!-- Main Div -->

    <div id='contact_div'>
        <div id='con_div'>
            <div id='con_first'>
                <h2 class='trnsl_main_h2'>Contact Us</h2>
                <p id='con_desc' class='trnsl_p'>We'd love to hear about your project.
					 Our team will get back to you in one working day max.
				</p>
				<div id='con_email_wraper'>
					<span id='con_email_span'>
						<i class="fas fa-envelope-square" id='con_email_icon'></i>
					</span>
				
					<div id='con_email_div'>
						<p id='con_email_address'>webeldes@gmail.com</p>				
					</div>
				</div>
				<div id='con_all_icons'>
					<i class="fab fa-facebook links" data-links='1'></i>
					<i class="fab fa-instagram links" data-links='2'></i>
					<i class="fab fa-linkedin links" data-links='3'></i>
					<i class="fab fa-twitter-square links" data-links='4'></i>
				</div>
			</div>
			<?php

if(isset($_POST['submit'])) {
	require 'PHPMailerAutoload.php';
	require 'credential.php';

	$mail = new PHPMailer;

	$mail->SMTPDebug = 4;                               // Enable verbose debug output

	$mail->isSMTP();                                      // Set mailer to use SMTP
	$mail->Host = 'smtp.gmail.com;';  // Specify main and backup SMTP servers
	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = EMAIL;                 // SMTP username
	$mail->Password = PASS;                           // SMTP password
	$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
	$mail->Port = 587;                                    // TCP port to connect to

	$mail->setFrom(EMAIL, 'Goran Djuric');
	$mail->addAddress($_POST['email'], 'Joe User');     // Add a recipient
	// $mail->addReplyTo('info@example.com', 'Information');


	// $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
	// $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
	$mail->isHTML(true);                                  // Set email format to HTML

	$mail->Subject = $_POST['name'];
	$mail->Body    = 'This is the HTML message body <b>in bold!</b>';
	$mail->AltBody = $_POST['text']

	if(!$mail->send()) {
		echo 'Message could not be sent.';
		echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
		echo 'Message has been sent';
	}

}

?>
            <div id='con_second'>
                <form id='con_form' method='POST' action='testing.php'>
                    <input type="text" required placeholder="Your Name" id='input_name' name='name' req>
                    <input type="email" required placeholder="Email Address" id='input_email' name='email'>
                    <textarea required cols="66" rows="12" placeholder="Your Message" id='textarea' name='text'></textarea>
                    <button type="submit" id='con_submit'>SEND MESSAGE</button>
                </form>
            </div>
        </div>
    </div>

<!-- Footer -->

	<div id='footer'>
		<span>
			<img src="Images/footer_logo_2.png" alt='Not Found' id='footer_logo' class='go_back_from_con_page' />
		</span>
		<p class='trnsl_footer_p'>@ 2020 all rights reserved <strong>Webeldes</strong></p>
		<div id='footer_icons'>
			<i class="fab fa-facebook links" data-links='1'></i>
			<i class="fab fa-instagram links" data-links='2'></i>
			<i class="fab fa-linkedin links" data-links='3'></i>
			<i class="fab fa-twitter-square links" data-links='4'></i>
		</div>
		<div id='footer_div'>
			<span><a class='trnsl_contact_footer go_from_con_to_about'>About Us</a></span>
			<span><a class='trnsl_contact_footer stay_on_con_page'>Contact</a></span>
			<span><a class='trnsl_contact_footer go_from_con_to_port'>Portfolio</a></span>
			<span><a class='trnsl_contact_footer go_back_from_contact_ser'>Services</a></span>
		</div>
	</div>

    <script src='contact.js'></script>    
</body>
</html>