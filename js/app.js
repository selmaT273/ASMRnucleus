console.log('hopefully this works');


// var preference = prompt('Which kind of ASMR would you like to experience? Visual or Audio?', 'I know its hard to choose').toLowerCase();
// if(preference == 'visual'){
//     alert('see link at the bottom of the page to be redirected to Visual ASMR');
// } else if(preference == 'audio'){
//     alert('you came to the right place! enjoy!');
// } else {
//     alert('your response is not valid...try again')
// }
function preference(){

    var stay = 'audio';
    var go = 'visual';
    var input = prompt('What type of ASMR do you prefer? Audio or Visual?');

    while (input !== stay && input !== go){
        input = prompt('Please enter a valid response. Audio or visual?');
    } 

    if(input == go){
    window.location.href = "https://jennifer4450.github.io/ASMRnucleus/";
    } else if (input == stay){
        input = prompt('How many videos would you like to choose from? The limit is 10')
    }

    while (input === '' || isNaN(input) || input >10) {
        input = prompt('please enter a valid number no higher than 10')
    }

    // parseInt changes string into integer
    var choices = parseInt(input);

    // searches the document for "content" element, return it then assign it to contentELement
    var contentElement = document.getElementById("content");
    var images = '';

    for (var i = 0; i < choices; i++){
        images += '<img src="http://placehold.it/250x250" ALIGN="right"/>';
    }

    // changing the "content" inside the div to the images 
    contentElement.innerHTML = images;
}



function printToday(){
    var today = new Date();
    document.write(today.toDateString())
}