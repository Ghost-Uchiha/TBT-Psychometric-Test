const questions = [
	{ question: "I like to work on cars", value: "R" },
	{ question: "I like to do puzzles", value: "I" },
	{ question: "I am good at working independently", value: "S" },
	{ question: "I like to work in teams", value: "E" },
	{ question: "I am an ambitious person, I set goals for myself", value: "A" },
	{ question: "I like to organize things (files, desks/offices)", value: "C" },
	{ question: "I like to build things", value: "R" },
	{ question: "I like to read about art and music", value: "A" },
	{ question: "I like to have clear instructions to follow", value: "C" },
	{ question: "I like to try to influence or persuade people", value: "E" },
	{ question: "I like to do experiments", value: "I" },
	{ question: "I like to teach or train people", value: "S" },
	{ question: "I like trying to help people solve their problems", value: "E" },
	{ question: "I like to take care of animals", value: "R" },
	{ question: "I wouldn’t mind working 8 hours per day in an office", value: "C" },
	{ question: "I like selling things", value: "E" },
	{ question: "I enjoy creative writing", value: "A" },
	{ question: "I enjoy science", value: "I" },
	{ question: "I am quick to take on new responsibilities", value: "A" },
	{ question: "I am interested in healing people", value: "S" },
	{ question: "I enjoy trying to figure out how things work", value: "I" },
	{ question: "I like putting things together or assembling things", value: "R" },
	{ question: "I am a creative person", value: "A" },
	{ question: "I pay attention to details", value: "C" },
	{ question: "I like to do filing or typing", value: "C" },
	{ question: "I like to analyze things (problems/situations)", value: "I" },
	{ question: "I like to play instruments or sing", value: "A" },
	{ question: "I enjoy learning about other cultures", value: "S" },
	{ question: "I would like to start my own business", value: "E" },
	{ question: "I like to cook", value: "R" },
	{ question: "I like acting in plays", value: "A" },
	{ question: "I am a practical person", value: "R" },
	{ question: "I like working with numbers or charts", value: "I" },
	{ question: "I like to get into discussions about issues", value: "E" },
	{ question: "I am good at keeping records of my work", value: "C" },
	{ question: "I like to lead", value: "A" },
	{ question: "I like working outdoors", value: "R" },
	{ question: "I would like to work in an office", value: "C" },
	{ question: "I like helping people", value: "S" },
	{ question: "I like to draw", value: "A" },
	{ question: "I like to give speeches", value: "E" },
	{ question: "I’m good at math", value: "I" },
  ];
  
  
  const categories = [
	{ name: "R", description: "You are a Realistic person. You enjoy working with your hands and solving practical problems. You are independent, practical, and value efficiency and logic. You are often drawn to technical or mechanical fields, such as engineering or construction.'", image: "image/realistic.png",occupation:"Inspector (Supervisor),Agricultural Technician,Agricultural Operator,Aircraft Mechanic,Pilot,Driver,Animal Breeder,Animal Trainer,Athlete,Electronic Technician,Automobile Mechanic,Aviation Inspector,Baker,Carpenter,Machine Operators,Cook,Courier,Sales Worker,Farmer,Builder,Lifeguard,Maintenance ,Poultry farmer,Painter,Security Guards,Tailor,Surveyor" },
	{ name: "I", description: "You are an Investigative person. You enjoy learning and exploring new ideas. You are analytical, curious, and value knowledge and understanding. You are often drawn to scientific or research-oriented fields, such as medicine or psychology.", image: "image/investigative.png",occupation:"Engineer,Anesthesiologist,Scientist,Astronomer,Psychologist,Researcher,Programmer,Analyst,Architect,Economist,Dietician/Nutritionist,Doctor,Historian,Mathematician,Clinical Technician,Pharmacist,Biochemist,Software Tester,Urban Planner" },
	{ name: "A", description: "You are an Artistic person. You enjoy expressing yourself creatively and exploring new ideas. You are imaginative, sensitive, and value self-expression and individuality. You are often drawn to artistic or creative fields, such as writing or design.", image: "image/artistic.png",occupation:"Actor,Director,Choreographer,Designer,Craft Artist,Dancer,Editor,Influencer,Publisher,Fine Artist,Hairstylist,Cosmetologist,Translator,Makeup Artist,Model,Animator,Musician,Photographer,Creative Writer,Singer,Photographer,RJ/DJ/VJ" },
	{ name: "S", description: "You are a Social person. You enjoy helping and interacting with others. You are empathetic, supportive, and value relationships and collaboration. You are often drawn to social or service-oriented fields, such as education or healthcare.", image: "image/social.png",occupation:"Teacher,Instructor,Mentor,Trainer,Child Care Worker,Social Worker,Clergy,Coach,Emergency Management,Counselor,Nanny,Nurse,Therapist,Tour Guide,Waiter" },
	{ name: "E", description: "You are an Enterprising person. You enjoy taking charge and pursuing goals. You are assertive, confident, and value leadership and success. You are often drawn to business or management-oriented fields, such as sales or entrepreneurship.", image: "image/enterprising.png" ,occupation:"Judge,Manager,Agent,Bartender,Head Cook,Real Estate,CXO,Copy Writer,Curator,Flight Attendant,Host and Hostess,Lawyer,Detective,Producer,Captain,Travel"},
	{ name: "C", description: "You are a Conventional person. You enjoy following established procedures and systems. You are detail-oriented, reliable, and value organization and structure. You are often drawn to administrative or clerical-oriented fields, such as accounting or data entry.", image: "image/conventional.png",occupation:"Accountant,Auditor,Cashier,Computer Operator,Clerk,Data Entry,Dental Assistant,Underwriter,Librarian,Sales Representative,Teller,Typist" },
  ];
  
  const counts = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
  
  var currentQuestionIndex = 0;
  var currentQuestion = questions[currentQuestionIndex];
  var number = document.getElementById("number");
  var questionElement = document.getElementById("question");
  var resultsElement = document.getElementById("result");
  var score = 0; // initialize score variable to 0
  var falsecount = 0
 
  function changeQuestion(answer) {
	
	if (answer === "True") { // if the user clicked "True"
	  score += currentQuestion.value; // add the value of the current question to the score
	  counts[currentQuestion.value]++; // increment the count for the category of the current question
	  
	}
	if (answer === "False"){
		falsecount++
	}
	currentQuestionIndex++;
	const countsEle = document.getElementById('count')
	countsEle.innerHTML=""
	Object.entries(counts).forEach(([category,count])=>{
		const countEle =document.createElement("p")
		countEle.textContent= `${category} : ${count}`
		countsEle.appendChild(countEle)
	})
	
	if(currentQuestionIndex >= questions.length){
		document.getElementById('question').innerHTML=""
	  number.textContent = "";
	  document.getElementById('main-header').innerHTML="ENTER YOUR EMAIL AND PHONE NUMBER TO SEE YOUR RESULT  "
	  document.getElementById('detail').innerHTML=""
	  document.getElementById('bt').style.display="none";
	  document.getElementById('back').style.display="none";
	  document.getElementById('hid').classList.remove('hidden')
	  document.getElementById('number').classList.add('hidden')
	  document.getElementById('container').style.height="3px"
	  document.getElementById('container').style.backgroundColor="transparent"
		
		document.getElementById('count').classList.add('hidden')
		
	
}
currentQuestion = questions[currentQuestionIndex];
document.getElementById('number').innerHTML = `${currentQuestionIndex + 1} of ${questions.length}`;
document.getElementById('question').innerHTML = currentQuestion.question;
  }
  function goBack() {
	if (currentQuestionIndex === 0) {
	  // If the current question is the first question, do nothing
	  return;
	}
  
	// Decrement the current question index
	currentQuestionIndex--;
  
	// Retrieve the previous question
	const previousQuestion = questions[currentQuestionIndex];
  
	// Update the UI with the previous question
	number.textContent = `${currentQuestionIndex + 1} of ${questions.length}`;
	questionElement.textContent = previousQuestion.question;
  
	// Update the score and counts based on the previous question
	if (previousQuestion.value === "False") {
	  falsecount--;
	} else {
	  score -= previousQuestion.value;
	  counts[previousQuestion.value]--;
	}
	
  }

  
  function display() {
	const phInput = document.getElementById("ph");
	const gmailInput = document.getElementById("gmail");
	const ph = phInput.value.trim();
	const gmail = gmailInput.value.trim();
  
	// Remove any existing error messages
	removeErrorMessage(phInput);
	removeErrorMessage(gmailInput);
  
	if (ph === "" || gmail === "") {
	  alert("Please enter your phone number and email to see the results.");
	  return;
	}
  
	if (!isValidEmail(gmail)) {
	  displayErrorMessage(gmailInput, "Please enter a valid email address.");
	  return;
	}
  
	if (ph.length !== 10) {
	  displayErrorMessage(phInput, "Please enter a 10-digit phone number.");
	  return;
	}
  
	addPhoneNumber(ph);
	addEmail(gmail);
	displayResults();
  }
  
  function restrictPhoneNumberInput(event) {
	const input = event.target;
	const charCode = event.which ? event.which : event.keyCode;
  
	// Check if the entered character is a digit (0-9)
	if (charCode < 48 || charCode > 57) {
	  event.preventDefault(); // Prevent the input of non-digit characters
	  return;
	}
  
	const phoneNumber = input.value;
  
	// Remove any existing error message
	removeErrorMessage(input);
  
	// Check if the entered number is not empty and is exactly 10 digits
	if (phoneNumber.trim() !== "") {
	  if (phoneNumber.length > 9) {
		input.value = phoneNumber.slice(0, 9); // Trim the input to 10 digits
	  } else if (phoneNumber.length < 9) {
		displayErrorMessage(input, "Please enter a 10-digit phone number.");
	  }
	} else {
	  removeErrorMessage(input);
	}
  }
  
  function displayErrorMessage(input, message) {
	const errorSpan = document.createElement("span");
	errorSpan.classList.add("error-message");
	errorSpan.textContent = message;
  
	input.classList.add("error");
	input.parentNode.appendChild(errorSpan);
  }
  
  function removeErrorMessage(input) {
	const errorSpan = input.parentNode.querySelector(".error-message");
	if (errorSpan) {
	  errorSpan.remove();
	  input.classList.remove("error");
	}
  }
  
  // document.addEventListener("DOMContentLoaded", function() {
  //   document.getElementById("ph").addEventListener("focus", showDropdownph);
  //   document.getElementById("ph").addEventListener("blur", showDropdownph);
  //   document.getElementById("gmail").addEventListener("focus", showDropdownemail);
  //   document.getElementById("gmail").addEventListener("blur", showDropdownemail);
  // });
  
  // function showDropdownph() {
  //   const input = document.getElementById("ph");
  //   const dropdown = document.getElementById("previousPhoneNumbers");
  //   if (input.value.trim() !== "") {
  //     dropdown.style.display = "block";
  //   } else {
  //     dropdown.style.display = "none";
  //   }
  // }
  
  // function showDropdownemail() {
  //   const input = document.getElementById("gmail");
  //   const dropdown = document.getElementById("previousEmails");
  //   if (input.value.trim() !== "") {
  //     dropdown.style.display = "block";
  //   } else {
  //     dropdown.style.display = "none";
  //   }
  // }
  
  function addPhoneNumber(number) {
	let phoneNumbers = [number]; // Create a new array with the new number
  
	const selectPhone = document.getElementById("previousPhoneNumbers");
  
	// Remove all existing options
	selectPhone.innerHTML = "";
  
	// Add the new option
	const option = document.createElement("option");
	option.text = number;
	selectPhone.add(option);
  
	// Store the phone numbers in localStorage
	localStorage.setItem("phoneNumbers", JSON.stringify(phoneNumbers));
  }
  
  function addEmail(email) {
	let emails = [email]; // Create a new array with the new email
  
	const selectEmail = document.getElementById("previousEmails");
  
	// Remove all existing options
	selectEmail.innerHTML = "";
  
	// Add the new option
	const option = document.createElement("option");
	option.text = email;
	selectEmail.add(option);
  
	// Store the emails in localStorage
	localStorage.setItem("emails", JSON.stringify(emails));
  }
  
  function loadPreviousValues() {
	const phoneNumbers = getPhoneNumbers();
	const emails = getEmails();
  
	const selectPhone = document.getElementById("previousPhoneNumbers");
	const selectEmail = document.getElementById("previousEmails");
  
	// Clear previous options
	selectPhone.innerHTML = "";
	selectEmail.innerHTML = "";
  
	phoneNumbers.forEach((number) => {
	  const option = document.createElement("option");
	  option.text = number;
	  selectPhone.add(option);
	});
  
	emails.forEach((email) => {
	  const option = document.createElement("option");
	  option.text = email;
	  selectEmail.add(option);
	});
  
	// Automatically load single value if available
	if (phoneNumbers.length === 1) {
	  document.getElementById("ph").value = phoneNumbers[0];
	}
  
	if (emails.length === 1) {
	  document.getElementById("gmail").value = emails[0];
	}
  }
  
  
  function getPhoneNumbers() {
	const phoneNumbers = localStorage.getItem("phoneNumbers");
	return phoneNumbers ? JSON.parse(phoneNumbers) : [];
  }
  
  function getEmails() {
	const emails = localStorage.getItem("emails");
	return emails ? JSON.parse(emails) : [];
  }
  
  function isValidEmail(email) {
	// Add your email validation logic here
	// This is a basic email validation using regular expression
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailPattern.test(email);
  }
  
  // Function to fill phone number field
  function fillPhoneNumber() {
	var selectedPhoneNumber = document.getElementById("previousPhoneNumbers").value;
	if (selectedPhoneNumber !== "") {
	  document.getElementById("ph").value = selectedPhoneNumber;
	} else {
	  document.getElementById("ph").value = ""; // Clear the phone number field
	}
  }
  
  // Function to fill email field
  function fillEmail() {
	var selectedEmail = document.getElementById("previousEmails").value;
	if (selectedEmail !== "") {
	  document.getElementById("gmail").value = selectedEmail;
	} else {
	  document.getElementById("gmail").value = ""; // Clear the email field
	}
  }
  
  
  // Call the function to load previous values when the page loads
  window.addEventListener("load", loadPreviousValues);
  
  // Add event listeners to the dropdown menus
  document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("previousPhoneNumbers").addEventListener("change", fillPhoneNumber);
	document.getElementById("previousEmails").addEventListener("change", fillEmail);
  });
  



  
  
function displayResults() {
	const sortedCounts = Object.entries(counts).sort((a, b) => b[1] - a[1]);

	const resultsContainer = document.getElementById('results-container');
	resultsContainer.innerHTML = '';

	const resultElement = document.createElement('div');
resultElement.className = 'result-container';

for (let i = 0; i < 3 && i < sortedCounts.length; i++) {
  const [category, count] = sortedCounts[i];
  const categoryInfo = categories.find((cat) => cat.name === category);
  document.addEventListener('DOMContentLoaded', function() {
	const categoryInfoElement = document.querySelector('.category-info');
	if (categoryInfoElement) {
	  const contentHeight = categoryInfoElement.scrollHeight;
	  categoryInfoElement.style.height = `${contentHeight}px`;
	}
  });
  
  if (categoryInfo) {
    const categoryItem = document.createElement('div');
    categoryItem.className = 'result-item';
	categoryItem.innerHTML = `
	<div class="category">
	<img src="${categoryInfo.image}" alt="${categoryInfo.description}">
	<h3>${categoryInfo.name}</h3>
	<p>${categoryInfo.description}</p>
	</div>
	<div class="category-info">
	<br>
	<h5>Majors to consider</h5>
	<br>
	<ul>
	  ${categoryInfo.occupation.split(',').map(occupation => `<li>${occupation.trim()}</li>`).join('')}
	</ul>
	</div>
  `;
  
    resultElement.appendChild(categoryItem);
  } else {
    const invalidCategory = document.createElement('div');
    invalidCategory.className = 'result-item';
    invalidCategory.textContent = 'Invalid category entered.';
    resultElement.appendChild(invalidCategory);
  }
}

resultsContainer.appendChild(resultElement);

  
	// Modify styles and hide/show elements if needed
	document.getElementById("main-header").innerHTML = "Your Pschometric Test Result....";
	
	document.getElementById("count").style.display = "none";
	document.getElementById('container').classList.add('hidden')
	document.getElementById("hid").classList.add("hidden");
	document.getElementById("container").style.height = "0px";
	document.getElementById("main-header").style.top="-150px"
	document.getElementById("results-container").style.top="-150px"
	document.getElementById('hero').style.margin="0"
	document.getElementById('hero').style.height = "180vh";
	const mobileMediaQuery = window.matchMedia("(max-width: 576px)");
	if(mobileMediaQuery.matches){
		document.getElementById('hero').style.height = "450vh";
	document.getElementById("main-header").style.top="-100px"
	document.getElementById("results-container").style.top="-150px"
	}
	const resultDivs = document.querySelectorAll("#results-container > div");
	resultDivs.forEach((div) => {
	  div.style.backgroundColor = "#253444";
	  div.style.color="#fff"
	  div.style.borderRadius = "10px";
	  div.style.padding = "1rem";
	  div.style.textAlign = "center";
	  div.style.width = "100%";
	});
  }
  
  
  loadPreviousValues()
    
 
	