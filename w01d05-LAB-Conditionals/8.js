// Store a user message

var userMsg = prompt('Enter your message ');

// Print 'Sure.' if you ask a question (e.g. the message ends in ?).

if ( userMsg.endsWith('?')) {
    console.log('Sure');
}

// Print 'Woah, chill out!' if you yell (e.g. your message is in all capitals).

else if ( userMsg == userMsg.toUpperCase() && userMsg != '') {
        console.log('Woah, chill out')
}
// Print 'Fine. Be that way!' if you don't say anything (e.g. your message is empty).

else if ( userMsg == '') {
    console.log('Fine. Be that way!');
} 
// Print 'Whatever.' to anything else.
else {
    console.log('Whatever');
}

// Bonus: If the message is all spaces, also print "Fine. Be that way!"
