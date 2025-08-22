import fetch from "node-fetch"; // ES Module import

async function submitUrls() {
  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: "caratterispeciali10.it",
      key: "a185741da28c4b7a9ed494dcaec7bb29",
      keyLocation: "https://caratterispeciali10.it/a185741da28c4b7a9ed494dcaec7bb29.txt",
      urlList: [
 "https://www.caratterispeciali10.it/caratteri-speciali",
    "https://www.caratterispeciali10.it/chi-siamo",
    "https://www.caratterispeciali10.it/contattaci",
    "https://www.caratterispeciali10.it/disclaimer",
    "https://www.caratterispeciali10.it/emojis",
    "https://www.caratterispeciali10.it/font-corsivo",
    "https://www.caratterispeciali10.it/generatore-testo-corsivo",
    "https://www.caratterispeciali10.it/lista-de-atalhos-do-teclado-para",
    "https://www.caratterispeciali10.it/nomi-speciale",
    "https://www.caratterispeciali10.it",
    "https://www.caratterispeciali10.it/privacy",
    "https://www.caratterispeciali10.it/social/generatore-di-caratteri-per-facebook",
    "https://www.caratterispeciali10.it/social/generatore-di-caratteri-per-instagram",
    "https://www.caratterispeciali10.it/social/generatore-di-caratteri-per-nickname",
    "https://www.caratterispeciali10.it/social/generatore-di-caratteri-per-tumblr",
    "https://www.caratterispeciali10.it/social/generatore-di-caratteri-per-twitter",
    "https://www.caratterispeciali10.it/social/generatore-di-caratteri-per-whatsapp",
    "https://www.caratterispeciali10.it/special-character-table-in-html",
    "https://www.caratterispeciali10.it/termini-e-condizioni",
    "https://www.caratterispeciali10.it/text-characters-emoticons",
    "https://www.caratterispeciali10.it/unicode-tavoli"
      ]
    })
  });

  console.log("Status:", response.status);
  console.log("Response:", await response.text());
}

// Run the async function
submitUrls().catch(err => console.error(err));
