

function random_num(){
    var randomNumber = Math.floor(Math.random() * 101);
    return randomNumber;
}


let btnevent = document.querySelector(".submit-button");

let header = document.querySelector(".header");

btnevent.addEventListener('click', ()=>{
    findLove();

});

function findLove(){
    var randomNumber = random_num();
    header.innerHTML = `Your Love Percentage is : ${randomNumber} %`;
}

document.querySelector('#reload').addEventListener('click', function() {
    location.reload();
});