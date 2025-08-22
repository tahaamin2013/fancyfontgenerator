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
        "https://caratterispeciali10.it/chi-siamo"
      ]
    })
  });

  console.log("Status:", response.status);
  console.log("Response:", await response.text());
}

// Run the async function
submitUrls().catch(err => console.error(err));
