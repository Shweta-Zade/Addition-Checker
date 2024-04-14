let firstnoEl = document.getElementById("firstno");
let secondnoEl = document.getElementById("secondno");
let resultnoEl = document.getElementById("resultno");
let commentEl = document.getElementById("comment");


firstnoEl.textContent = randomno();
secondnoEl.textContent = randomno();

function randomno(){
    return Math.ceil(Math.random()*100);
}

function checkvalue(){
    let firstno = parseInt(firstnoEl.textContent);
    let secondno = parseInt(secondnoEl.textContent);
    let resultno = parseInt(resultnoEl.value);
    let add = firstno + secondno;
    if(add === resultno){
        commentEl.textContent = "Congratulations! You got it right.";
        commentEl.style.background = "#09a01f";
    } else {
        commentEl.textContent = "Please try again.";
        commentEl.style.background = "#1c1774";
    }
}

function restartvalue(){
    firstnoEl.textContent = randomno();
    secondnoEl.textContent = randomno();
    resultnoEl.value = "";
    commentEl.textContent = "";
    commentEl.style.background = "none";
}