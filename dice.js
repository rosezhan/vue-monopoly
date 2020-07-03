var dices = window.document.querySelectorAll('.dice');

var roll = () => {
    dices.forEach(dice => {
        const dots = Math.floor(Math.random() * 6) + 1;
        dice.setAttribute("data-dots", dots);
    })
};

roll();

//code referenced from: https://dev.to/ilonacodes/frontend-shorts-vue-js-vanilla-js-digital-dices-og