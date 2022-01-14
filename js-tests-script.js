let randomNumber = Math.floor(Math.random() * 10) + 1;

let randomRedValue = Math.floor(Math.random() * 255) + 1;
let randomGreenValue = Math.floor(Math.random() * 255) + 1;
let randomBlueValue = Math.floor(Math.random() * 255) + 1;

let chairButton = document.querySelector('.chair-button');
let chairText = document.querySelector('.chair-text');

let ovenButton = document.querySelector('.oven-button');
let ovenText = document.querySelector('.oven-text');
let ovenName = document.querySelector('.oven-name')

let fridgeButton = document.querySelector('.fridge-button');
let fridgeText = document.querySelector('.fridge-text');

let dogButton = document.querySelector('.dog-button');
let dogText = document.querySelector('.dog-text');
let dogName = document.querySelector('.dog-name');

let otherHouseDoorButton = document.querySelector('.other-house-door-button');
let otherHouseGrenadeButton = document.querySelector('.other-house-grenade-button');
let otherHouseText = document.querySelector('.other-house-text');

let ovenTimer = document.querySelector('.oven-timer');

let backgroundColor = document.body;

let eggsCount = 6;
let petCount = 0;

otherHouseGrenadeButton.disabled = true;

chairButton.addEventListener('click', sitOnChair);
ovenButton.addEventListener('click', turnOvenOn);
fridgeButton.addEventListener('click', useFridge);
dogButton.addEventListener('click', petDoggo)

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

function useFridge() {
    if (eggsCount !== 0) {
        eggsCount--;
        fakeEggsCount = eggsCount + 1;
        fridgeText.textContent = 'Il y a ' + fakeEggsCount + ' oeufs dans le frigo';
    } else if (eggsCount === 0 && fridgeText.textContent === 'Il y a 1 oeufs dans le frigo') {
        fridgeText.textContent = 'Vous avez pris tous les oeufs !';
        fridgeButton.textContent = 'Faire une omelette';
    } else if (fridgeButton.textContent === 'Faire une omelette') {
        fridgeButton.textContent = 'O___O';
        fridgeButton.disabled = true;
        ovenButton.textContent = "Ahaha wtf";
        ovenButton.disabled = true;
        ovenText.textContent = "Le four s'est transformé en écrevisse et est devenu inutilisable";
        ovenName.textContent = 'Écrevisse'
    }
}

function petDoggo() {
    dogButton.textContent += "!";
    petCount++;

    if (petCount >= 10 && petCount < 25) {
        dogText.textContent = 'Gaël a besoin de plus de caresses.';
        dogName.style.fontSize = '24px';
    } else if (petCount >= 25 && petCount < 50) {
        dogText.textContent = "Gaël grandit à vue d'oeil, mais il a toujours besoin de plus de caresses.";
        dogName.style.fontSize = '32px';
    } else if (petCount >= 50 && petCount < 100) {
        dogText.textContent = "Gaël fait désormais la taille d'une remorque, mais il n'a pas fini de vouloir des caresses.";
        dogName.style.fontSize = '42px';
    } else if (petCount >= 100 && petCount < 250) {
        dogText.textContent = "Gaël est compressé contre le plafond, mais il réclame encore des caresses.";
        dogName.style.fontSize = '54px';
    } else if (petCount >= 250 && petCount < 500) {
        dogText.textContent = "Vous ne voyez plus la tête de Gaël et ne pouvez qu'atteindre ses pattes, mais il semble ne pas vouloir arrêter d'être caressé.";
        dogName.style.fontSize = '68px';
    } else if (petCount >= 500 && petCount < 1000) {
        dogText.textContent = "Vous devriez peut-être arrêter maintenant, même si Gaël n'est toujours pas satisfait (il ne le sera jamais).";
        dogName.style.fontSize = '84px';
    } else if (petCount > 1000) {
        dogText.textContent = "Gaël est devenu tellement gros qu'il a généré assez de gravité pour détruire la planète. Bravo, maintenant la page est encore plus moche qu'avant";
        dogName.style.fontSize = '999px';
        dogButton.textContent = 'Pas trop mal au doigt ?'
        chairButton.disabled = true;
        ovenButton.disabled = true;
        fridgeButton.disabled = true;
        dogButton.disabled = true;
        otherHouseDoorButton.disabled = true;
        otherHouseGrenadeButton.disabled = true;
    }

    function randomBackgroundColor() {

    }

}