console.log('hopefully this works');


var preference = prompt('Which kind of ASMR would you like to experience? Visual or Audio?', 'I know its hard to choose').toLowerCase();
if(preference == 'visual'){
    alert('see link at the bottom of the page to be redirected to Visual ASMR');
} else if(preference == 'audio'){
    alert('you came to the right place! enjoy!');
} else {
    alert('your response is not valid...try again')
}


function printToday(){
    var today = new Date();
    document.write(today.toDateString())
}