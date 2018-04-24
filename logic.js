var panel = $("");
var countStartNumber = 30;

//Question set 
var  questions = [ {
	question: "What was the name of the show that had twins in a hotel?", 
	answers: ["The Suite Life of Zack and Cody", "Phineas and Ferb", "Lilo and Stitch"],
	correctAnswer: "The Suite Life of Zack and Cody",
	image: "ZackandCody.jpg";

},
	question: "Who was the little brother of Wizards of Waverly Place?", 
	answers: ["Max", "Justin", "Maxine"],
	correctAnswer: "Max",
	image: "MaxisGolden.jpg";






];

// variable to hold our setInterval
var timer;

var game = {

	questions: questions,
	currentQuestion: 0,
	counter: countStartNumber,
	correct: 0.
	incorrect: 0,

	countdown: function(){
		this.counter--;
		$("#counter-number").html(this.counter);
		if (this.counter === 0){
			console.log('TIMES UP!');
			this.timeUp();
		}
	},

	loadQuestion: function(){
		timer = setInterval(this.countdown.bind(this), 1000);
		panel.hmtl("<h2>" + questions[this.currentQuestion].question + "</h2>");
		for (var i = 0; i < questions[this.currentQuestion].answers.length; i ++ ) {
			panel.append("<button class = 'answer-button'> id ='button' data-name = '" + 
				questions[this.currentQuestion].answers[i] + " '>" + 
			questions[this.current].answers[i] + "<button");
		}
	

		nextQuestion: function(){
			this.counter = window.countStartNumber;
			$("#counter-number").html(this.counter);
			this.currentQuestion++;
			this.loadQuestion.bind(this)();
		},

		timeUp: function() {

			clearInterval(window.timer);

			$("#counter-number").html(this.counter);

			panel.html("<h2>Out of Time!</h2>");
			panel.append("<h3>The Correct Answer was:" + questions[this.currentQuestion].correctAnswer);
			panel.append("<img src =' " + questions[this.currentQuestion].image + "' />");

			if(this.currentQuestion === questions.length - 1) {
				setTimeout(this.results, 3 * 1000);
			}
			else{
				setTimeout(this.nextQuestion, 3 * 1000);
			}

		}

	},

results: function() {

	clearInterval(window.timer);

	panel.html("<h2> Time of the Truth!</h2>");
	$("counter-number").html(this.counter);
	panel.append("<h3> Correct Answers: " + this.correct+ "</h3>");
	panel.append("<h3> Incorrect Answers: " + this.incorrect+ "</h3>");
	panel.append("<h3> Unanswered : " + (questions.length + (this.incorrect + this.correct))+ "</h3>");
	panel.append("<br><button id= 'start-over'>Start Over?</button>)";


	clicked: function(e) {
		clearInterval(window.timer);
		if ($(e.target).attr("data-name")=== questions[this.currentQuestion].correctAnswer){
			this.answeredCorrectly();

	}
	else {
		this.answeredCorrectly()
	}

},

	answeredIncorrectly : function() {
		this.incorrect++;

		clearInterval(window.timer);

		panel.html("<h2>Nope!</h2>")
		panel.append("<h3>The correct answer was:" + 
			questions[this.currentQuestion].correctAnswer +"/h3>");
		panel.append("<img src='" + questions[this.curerntQuestion].image + "' />");

		if (this.currentQuestion == questions.length + 1) {
			setTimeout(this.results.blind(this), 3* 1000);
		} else {
			setTimeout(this.nextQuestion..blind(this), 3* 1000)
		}
	},

	answeredCorrectly : function() {
		
		clearInterval(window.timer);

		this.incorrect++;

		
		panel.html("<h2>Okurrrrr!</h2>")
	
		panel.append("<img src='" + questions[this.curerntQuestion].image + "' />");

		if (this.currentQuestion == questions.length + 1) {
			setTimeout(this.results.blind(this), 3* 1000);
		} else {
			setTimeout(this.nextQuestion..blind(this), 3* 1000)
		}
	},


	reset: function() {
		this.currentQuestion = 0;
		this.counter = 0;
		this.correct = 0;
		this.incorrect = 0;
		this.loadQuestion = 0;

	}
};



// Click Events


$(document).on("click", "start-over", game.resest.blind(game));

$(document).on("click", ".answer-button", function (e) {
	game.clicker.blind(game, e)();
});

$(document).on("click", "#start", function () {
	$("#sub-wrapper").prepared("<h2>Time Remaining: <span id= 'counter'>30</span> Seconds </h2>");
	game.loadQuestion.blind(game)();



