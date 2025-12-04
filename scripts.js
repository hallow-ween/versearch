const bookSelector = document.getElementById("bibleBooks");
const bibleVerseAndChapter = 
document.getElementById("bibleVerseAndChap");
const verseName =
document.getElementById("verseName");
const verseText =
document.getElementById("verseText");
const findButton =
document.getElementById("findButton");
const darklight =
document.getElementById("darklight");
const translations = 
document.getElementById("translations");

function findVerse() {
const bookvalue = 
bookSelector.value;
const chapnversevalue =
bibleVerseAndChapter.value.trim();
const translationvalue = 
translations.value;

let bibleverse = {};
fetch(`https://bible-api.com/${bookvalue}+${chapnversevalue}?translation=${translationvalue}`)
.then (response => response.json())
.then (data => { bibleverse = data;
if (data.error) {
verseName.textContent = `"${bookvalue} ${chapnversevalue}" is invalid!`
verseText.textContent = "";
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
findButton.style.backgroundColor = "black";
  findButton.style.color = "white";
darklight.style.backgroundColor = "black";
  darklight.style.color = "white";
bibleVerseAndChapter.style.backgroundColor = "black";
  bibleVerseAndChapter.style.color = "white";
bookSelector.style.backgroundColor = "black";
  bookSelector.style.color = "white";
  translations.style.backgroundColor = "black";
  translations.style.color = "white";
dark = true;
} else {
document.body.style.backgroundColor = "white";
document.body.style.color = "black";
findButton.style.backgroundColor = "white";
    findButton.style.color = "black";
darklight.style.backgroundColor = "white";
    darklight.style.color = "black";
bibleVerseAndChapter.style.backgroundColor = "white";
    bibleVerseAndChapter.style.color = "black";
bookSelector.style.backgroundColor = "white";
      bookSelector.style.color = "black";
    translations.style.backgroundColor = "white";
  translations.style.color = "black";
dark = false;
}
};
