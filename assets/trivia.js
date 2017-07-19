var question1 = ["Who was the first president?"];
var question2 = ["What is Nsync's most popular song on spotify?"];
var question3 = ["What Video game console Has the most Sales?"];
var question4 =["How did Marissa Cooper die on the OC?"];
var q1 = ["George Washington ", "Donald Trump ", "Richard Nixon ", "Barrack Obama"];
var q2 = ["It's Gonna Be Me ", "Bye Bye Bye ", "Pop ", "Tearin' up My Heart "]
var q3 =["Game Boy ", "PS2 ", "Nintendo DS ", "Xbox 360 " ]
var q4=["Shooting ", "Car Crash ", "Overdose ", "Downed "]
var incorrect = 0;
var correct = 0;
var unanswered = 0;

$('button').on('click', function(){
	
	quest1();
	quest2();
	quest3();
	quest4();


	$('button').hide();
});


function quest1(){
	$.each(question1, function(i){
		$('.content').append('<h2>' + question1[i] + '</h2>');
		$('.content').append('<form action="" class= "radio1"></form>');
	for (var i = 0; i < q1.length; i++) {
    	$('.radio1').append(q1[i] +'<input type= "radio" name ="choice" value="' + q1[i] + '" class="choice"> '  );
    	$('.choice').addClass('choice');
    };
	});
	
};
function quest2(){
	$.each(question2, function(i){
		$('.content').append('<h2>' + question2[i] + '</h2>');
		$('.content').append('<form action="" class= "radio2"></form>');
	for (var i = 0; i < q2.length; i++) {
    	$('.radio2').append(q2[i] +'<input type= "radio" name ="choice" value="' + q2[i] + '" class="choice"> '  );
    	$('.choice').addClass('choice');
    };
	});
	
};
function quest3(){
	$.each(question3, function(i){
		$('.content').append('<h2>' + question3[i] + '</h2>');
		$('.content').append('<form action="" class= "radio3"></form>');
	for (var i = 0; i < q3.length; i++) {
    	$('.radio3').append(q3[i] +'<input type= "radio" name ="choice" value="' + q3[i] + '" class="choice"> '  );
    	$('.choice').addClass('choice');
    };
	});
	
};
function quest4(){
	$.each(question4, function(i){
		$('.content').append('<h2>' + question4[i] + '</h2>');
		$('.content').append('<form action="" class= "radio4"></form>');
	for (var i = 0; i < q4.length; i++) {
    	$('.radio4').append(q4[i] +'<input type= "radio" name ="choice" value="' + q4[i] + '" class="choice"> '  );
    	$('.choice').addClass('choice');
    };
	});
	
};