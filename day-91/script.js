
// function addText() {
//     let div = document.getElementById("myDiv");
//     div.innerHTML += " დამატებული ტექსტი!";
// }

// done



// function removeText() {
//     var div = document.getElementById("myDiv");
//     div.innerHTML = "";
// }

// done

function removeText() {
    var articleContent = document.getElementById("articleContent");
    articleContent.style.opacity = "0";
    setTimeout(() => articleContent.innerHTML = "", 1000);
}
// function addText() {
//     let textContainer = document.getElementById("textContainer");
//     textContainer.innerHTML = "გამოჩენილი ტექსტი! ";
// }

// function removeText() {
//     let textContainer = document.getElementById("textContainer");
//     textContainer.innerHTML = "";
// }

// done