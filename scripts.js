const bookSelector = document.getElementById("bibleBooks");
const bibleVerseAndChapter = document.getElementById("bibleVerseAndChap");
const verseName = document.getElementById("verseName");
const verseText = document.getElementById("verseText");
const findButton = document.getElementById("findButton");
const darklight = document.getElementById("darklight");
const translations = document.getElementById("translations");
const randomButton = document.getElementById("randomButton");

async function findVerse() {
  const bookvalue = bookSelector.value;
  const chapnversevalue = bibleVerseAndChapter.value.trim();
  const translationvalue = translations.value;

  try {
    let bibleverse = {};
    const response = await fetch(
      `https://bible-api.com/${bookvalue}+${chapnversevalue}?translation=${translationvalue}`,
    );

    const data = await response.json();

    bibleverse = data;
    verseName.textContent = data.reference;
    verseText.textContent = data.text;

    if (bibleverse.error) {
      verseName.textContent = `"${bookvalue} ${chapnversevalue}" is invalid!`;
      verseText.textContent = "";
      return;
    }
  } catch (error) {
    console.log(error);
  }
}

findButton.addEventListener("click", findVerse);

async function randomVerse() {
  try {
    let randomverse = {};
    const response = await fetch("https://bible-api.com/?random=verse");

    const data = await response.json();

    randomverse = data;
    verseName.textContent = data.reference;
    verseText.textContent = data.text;
  } catch (error) {
    console.log(error);
  }
}

randomButton.addEventListener("click", randomVerse);

// Dark / Light Mode Toggle //
const button = document.getElementById("toggleBtn");

const html = document.documentElement;

function toggleTheme() {
  let currentThemeSetting = html.getAttribute("data-theme") || light;

  let newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  document.querySelector("html").setAttribute("data-theme", newTheme);

  if (currentThemeSetting === "dark") {
    button.textContent = "🕶️";
  } else {
    button.textContent = "💡";
  }
}

button.addEventListener("click", toggleTheme);

// Share Button

const shareBtn = document.getElementById("shareBtn");

async function share() {
  try {
    await navigator.share({
      title: "versearch",
      text: `"${verseText.textContent} - ${verseName.textContent} "   https://bible.versear.ch`,
    });
  } catch (error) {
    console.log(error);
  }
}

shareBtn.addEventListener("click", share);

// Copy Button

const copyBtn = document.getElementById("copyBtn");

async function copyVerse() {
  const copiedVerse = `${verseText.textContent} - ${verseName.textContent}`;
  try {
    await navigator.clipboard.writeText(copiedVerse);
  } catch (error) {
    console.log(error);
  }
}

copyBtn.addEventListener("click", copyVerse);
