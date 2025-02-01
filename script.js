const OPENAI_API_KEY = "your-api-key-here";

async function generateContent() {
    const prompt = document.getElementById('prompt').value;
    if (!prompt) {
        alert("Будь ласка, введіть тему!");
        return;
    }

    document.getElementById('output').textContent = "⏳ Генерація тексту...";

    const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 200
        })
    });

    const data = await response.json();
    document.getElementById('output').textContent = data.choices[0].text.trim();
}
