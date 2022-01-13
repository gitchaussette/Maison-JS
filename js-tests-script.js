let randomNumber = Math.floor(Math.random() * 10) + 1;

let chairButton = document.querySelector('.chair-button');
let chairText = document.querySelector('.chair-text');

let ovenButton = document.querySelector('.oven-button');
let ovenText = document.querySelector('.oven-text');

let fridgeButton = document.querySelector('.fridge-button');
let fridgeText = document.querySelector('.fridge-text');

let dogButton = document.querySelector('.dog-button');
let dogText = document.querySelector('.dog-text');

let otherHouseDoorButton = document.querySelector('.other-house-door-button');
let otherHouseGrenadeButton = document.querySelector('.other-house-grenade-button');
let otherHouseText = document.querySelector('.other-house-text');

let ovenTimer = document.querySelector('.oven-timer');

let eggsCount = 6;

otherHouseGrenadeButton.disabled = true;

chairButton.addEventListener('click', sitOnChair);
ovenButton.addEventListener('click', turnOvenOn);

function sitOnChair() {
    if (randomNumber === 10 && chairText.textContent === 'Vous êtes debout') {
        chairButton.textContent = 'x_x';
        chairText.textContent = 'Vous avez pété la chaise !';
        chairButton.disabled = true;
    } else if (chairText.textContent === 'Vous êtes assis sur la chaise') {
        chairButton.textContent = "S'asseoir sur la chaise";
        chairText.textContent = 'Vous êtes debout';
    } else if (chairText.textContent === 'Vous êtes debout') {
        chairButton.textContent = 'Se lever de la chaise';
        chairText.textContent = 'Vous êtes assis sur la chaise';
    }

    randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
}

function turnOvenOn() {
    let time = 600;

    if (ovenText.textContent === 'Le four est éteint') {
        let userRecipe = prompt('Que voulez-vous cuisiner ?');
        ovenText.textContent = userRecipe + ' est en train de cuire !';
        ovenButton.textContent = "Ne pas toucher, c'est chaud !";
        ovenTimer.style.visibility = 'visible';
    } else if (ovenButton.textContent === "Ne pas toucher, c'est chaud !") {
        ovenButton.disabled = true;
        ovenButton.textContent = 'RIP';
        ovenText.textContent = 'Vous avez cramé :/';
        ovenTimer.style.visibility = 'hidden';
    }

    function decrementTime() {
        let minutes = parseInt(time / 60, 10);
        let seconds = parseInt(time % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        ovenTimer.textContent = minutes + ':' + seconds;
        time = time <= 0 ? 0 : time - 1;

        if (ovenTimer.textContent === '00:00') {
            ovenButton.textContent = "Le four n'a plus de piles et la nourriture est toujours froide";
            ovenButton.disabled = true;
            ovenText.textContent = "J'espère que ça valait le coup d'attendre";
        }
    }

    setInterval(decrementTime, 1000);
}