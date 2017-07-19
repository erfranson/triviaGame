var question1 = ["Who was the first president?"];
var question2 = ["What is Nsync's most popular song on spotify?"];
var question3 = ["What Video game console Has the most Sales?"];
var question4 =["How did Marissa Cooper die on the OC?"];
var q1 = ["George Washington ", "Donald Trump ", "Richard Nixon ", "Barrack Obama"];
var q2 = ["It's Gonna Be Me ", "Bye Bye Bye ", "Pop ", "Tearin' up My Heart "];
var q3 =["Game Boy ", "PS2 ", "Nintendo DS ", "Xbox 360 " ];
var q4=["Shooting ", "Car Crash ", "Overdose ", "Downed "];
var count=45;
var incorrect = 0;
var correct = 0;
var unanswered = 0;

$('#trivia').click( function(){
	$('button').hide();
	var counter =setInterval(timer, 1000);
	function timer() {
	count = count-1;
	if (count <= 0) {
		clearInterval(counter);
		$('.content').empty();
		$('.content').append('<p> incorrect: '+ incorrect + '<p>' + '<p> correct: '+ correct +'<p>' + '<p> unanswered: '+ unanswered +'<p>');
	}
	$('.timer').html('<h3>'+ count + 'secs </h3>');
}
	timer();
	quest1();
	quest2();
	quest3();
	quest4();


	
});


function quest1(){
	$.each(question1, function(i){
		$('.content').append('<h2>' + question1[i] + '</h2>');
		$('.content').append('<form action="" class= "radio1"></form>');
	for (var j = 0; j < q1.length; j++) {
    	$('.radio1').append(q1[j] +'<input type= "radio" name ="choice" value="' + q1[j] + '" class="choice"> '  );
    	$('.choice').addClass('choice');
    }
	});
	
}
function quest2(){
	$.each(question2, function(i){
		$('.content').append('<h2>' + question2[i] + '</h2>');
		$('.content').append('<form action="" class= "radio2"></form>');
	for (var j = 0; j < q2.length; j++) {
    	$('.radio2').append(q2[j] +'<input type= "radio" name ="choice" value="' + q2[j] + '" class="choice"> '  );
    	$('.choice').addClass('choice');
    }
	});
	
}
function quest3(){
	$.each(question3, function(i){
		$('.content').append('<h2>' + question3[i] + '</h2>');
		$('.content').append('<form action="" class= "radio3"></form>');
	for (var j = 0; j < q3.length; j++) {
    	$('.radio3').append(q3[j] +'<input type= "radio" name ="choice" value="' + q3[j] + '" class="choice"> '  );
    	$('.choice').addClass('choice');
    }
	});
	
}
function quest4(){
	$.each(question4, function(i){
		$('.content').append('<h2>' + question4[i] + '</h2>');
		$('.content').append('<form action="" class= "radio4"></form>');
	for (var j = 0; j < q4.length; j++) {
    	$('.radio4').append(q4[j] +'<input type= "radio" name ="choice" value="' + q4[j] + '" class="choice"> '  );
    	$('.choice').addClass('choice');
    }
	});
	
}

