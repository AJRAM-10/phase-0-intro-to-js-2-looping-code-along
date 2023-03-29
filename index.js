function writeCards(thanks, event) {
        const newMessage = [];
        for (let t = 0; t < thanks.length; t++) {
        if(t >= 0 ) {
            newMessage.push(`Thank you, ${thanks[t]}, for the wonderful ${event} gift!`);
    };
    };

    return newMessage;
};

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(count) {
    while (count >= 0) {
        console.log(count--)
    };
};

countDown(10)