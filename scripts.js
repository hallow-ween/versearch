const bookSelector = document.getElementById("bibleBooks");
const bibleVerseAndChapter = 
document.getElementById("bibleVerseAndChap");
const verseName =
document.getElementById("verseName");
const verseText =
document.getElementById("verseText");

function findVerse() {
const bookvalue = 
bookSelector.value.trim();
const chapnversevalue =
bibleVerseAndChapter.value.trim();

let bibleverse = {};
fetch(`https://bible-api.com/${bookvalue}+${chapnversevalue}`)
.then (response => response.json())
.then (data => { bibleverse = data;
if (data.error) {
verseName.textContent = `${bookvalue} ${chapternversevalue} is invalid!`
return;
}
console.log(data);
verseName.textContent = data.reference;
verseText.textContent = data.text;
})

.catch(err => console.error(err));
};

let dark = false;

function darkOrLight() {
if (!dark) {
document.body.style.backgroundColor = "black";
document.body.style.color = "white";
document.select.backgroundColor = "black";
document.button.backgroundColor = "black";
dark = true;
} else {
document.body.style.backgroundColor = "white";
document.body.style.color = "black";
document.select.backgroundColor = "white";
document.button.backgroundColor = "white";
dark = false;
}
};
