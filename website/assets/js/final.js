// CLICK 1
$(document).ready(function(){

    var questions = ['My name is Lisa','Why were you forced?','Oh, so you do not want to talk?','No need to sound so sassy.','Yes!','Well do you want to talk to me?', 'You are being sarcastic', 'So serious...', 'STOP YELLING','You are making fun of me...','I understand perfectly!','No I was just exclaiming?', 'You got me there...why are you mad?','You seem mad by your puncuation','But how would I know?','Why?'];
    var answers = ['I was forced','Because my classmate told me to do this','No','Was I being sassy?','No need to yell','I do','No I am not','I think you are being sarcastic with me!','I am not angry','You are not understanding anything I am saying','See now you are yelling.','That is the same thing.','I am not mad','But how would you know unless you heard my actual voice?','You would not know'];
    n = 0;

    $('#click1').click(function(){
        $('#responses').append('<div class="answer">'+answers[n]+'</div>');
        $('#responses').append('<div class="waiting">...</div>');
        $('#click1').html(answers[n+1]);
        setTimeout(function() {
            $('.waiting').remove();
            $('#responses').append('<div class="question">'+questions[n]+'</div>');
        }, 1500);
      n++;
      console.log(n);
    });
  });

// // CLICK 2
//   $(document).ready(function(){
//       $('#click2').click(function(){
//           $('#responses').append('I am not sure why');
//       });
//     });

// Send sound on click 1&2



// Message sound for michelleresponse
