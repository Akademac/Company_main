<?php
	$message_sent = false;
	if( filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ) {
		$name = $_POST['name'];
		$email = $_POST['email'];
		$text = $_POST['text'];
	
		$to = "webeldes2020@gmail.com";
	
		$body = "";
	
		$body .= "From: ".$name. "\r\n";
		$body .= "Email: ".$email. "\r\n";
		$body .= "Text: ".$text. "\r\n";
	
		mail($to, $text, $body);
		$message_sent = true;
	}



?>


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
	<?php
		if($message_sent):
	?>

			<!-- <h2 id='mail_sent'>Thank's we will be in touch</h2> -->
			<img src='Images/mail_sent.png' alt='Not Found!' id='mail_sent'/>
			<p id='mail_sent_p'>Thank you for your message, we will contact you soon!</p>
	<?php
		else:
	?>

<!-- header -->
	
	<img src="Images/background_cloud.png" alt='Not Found' id='con_top_left_cloud' />
	<div id='header'>
		<img src="Images/logo.png" alt='Not Found' id='main_logo' />
		<ul id='main_nav'>
			<li class='main_nav'><a href='index.html'>Home</a></li>
			<li class='main_nav'><a href='index.html#second_div_h'>What to expect</a></li>
			<li class='main_nav'><a href='portfolio.html'>Portfolio</a></li>
			<li class='main_nav'><a href='about_us.html'>About Us</a></li>
			<li class='main_nav'><a href="index.html#services_h">Services</a></li>
			<li class='main_nav'><a href='#footer'>Contact</a></li>
		</ul>
		<img src='Images/burger_2.png' id="fa-bars" />
	
	</div>
	<div id='mini_navigation' class='mini_navigation'>
		<ul id='mini_nav'>
			<li class='mini_nav'><a class='mini_nav_a' href='index.html'>Home</a></li>
			<li class='mini_nav'><a class='mini_nav_a' href='index.html#second_div_h'>What to expect</a></li>
			<li class='mini_nav'><a class='mini_nav_a' href='portfolio.html'>Portfolio</a></li>
			<li class='mini_nav'><a class='mini_nav_a' href='about_us.html'>About Us</a></li>
			<li class='mini_nav'><a class='mini_nav_a' href="index.html#services_h">Services</a></li>
			<li class='mini_nav'><a class='mini_nav_a' href='contact.php'>Contact</a></li>
		</ul>
    </div>

<!-- Main Div -->

    <div id='contact_div'>
        <div id='con_div'>
            <div id='con_first'>
                <h2>Contact Us</h2>
                <p id='con_desc'>We'd love to hear about your project.
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
            <div id='con_second'>
                <form id='con_form' method='POST' action='contact.php'>
                    <input type="text" required placeholder="Your Name" id='input_name' name='name' req>
                    <input type="email" required placeholder="Email Address" id='input_email' name='email'>
                    <textarea required cols="66" rows="12" placeholder="Your Message" id='textarea' name='text'd></textarea>
                    <button type="submit" id='con_submit'>SEND MESSAGE</button>
                </form>
            </div>
        </div>
    </div>

   
<!-- Footer -->

	<div id='footer'>
		<span>
			<img src="Images/footer_logo_2.png" alt='Not Found' id='footer_logo' />
		</span>
		<p>@ 2020 all rights reserved <strong>Webeldes</strong></p>
		<div id='footer_icons'>
			<i class="fab fa-facebook links" data-links='1'></i>
			<i class="fab fa-instagram links" data-links='2'></i>
			<i class="fab fa-linkedin links" data-links='3'></i>
			<i class="fab fa-twitter-square links" data-links='4'></i>
		</div>
		<div id='footer_div'>
			<span><a href='about_us.html'>About Us</a></span>
			<span><a href='contact.php'>Contact</a></span>
			<span><a href='portfolio.html'>Portfolio</a></span>
			<span><a href='index.html#services_h'>Services</a></span>
		</div>
	</div>
	<?php
		endif;
	?>

    <script src='contact.js'></script>    
</body>
</html>