<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contact Form</title>
</head>
<body>
<h1 class="hidden">Contact Me</h1>
<form id="contactForm" action="data/contact.php" method="post">
			<div class="formName">
                <div class="wrapper">
                <label for="name">Name</label>
                <input type="text" required id="name"  size="32" placeholder="" name="name">
                </div>
			</div>
			<div id="formEmail">
                <div class="wrapper">
                <label for="email">Email</label>	
                <input type="email" required id="email" size="32" placeholder="" name="email">
                </div>
			</div>
            <div id="formSubject">
                <div class="wrapper">
                <label for="subject">Subject</label>	
                <input type="text" required id="subject" size="32" placeholder="" name="subject">
                </div>
			</div>
			<div id="formMessage">
                <div class="wrapper">
                <label for="message">Message</label>	 
				<textarea id="message" rows="5"
                cols="25" required placeholder="" name="message"></textarea>
                </div>
			</div>
			<div id="formButton">
                <button type="submit" class="send"  name="button">send</button>
			</div>

</form>
            
    
</body>
</html>
