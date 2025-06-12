<script>
  function updateLengthField() {
    const type = document.getElementById("length").value;
    const extra = document.getElementById("lengthExtra");
    if (type === "stichpunkte" || type === "wörter") {
      extra.classList.remove("hidden");
    } else {
      extra.classList.add("hidden");
    }
  }

  function changeLength(delta) {
    const input = document.getElementById("lengthValue");
    input.value = Math.max(1, parseInt(input.value) + delta);
  }

  function generatePrompt() {
    const instruction = document.getElementById("instruction").value;
    const inputText = document.getElementById("inputText").value;
    const lengthType = document.getElementById("length").value;
    const lengthValue = document.getElementById("lengthValue").value;
    const complexity = document.getElementById("complexity").value;

    let prompt = `"${instruction}"\n\n${inputText}\n\n`;

    if (lengthType === "stichpunkte") {
      prompt += `➡️ In ${lengthValue} Stichpunkten darstellen.\n`;
    } else if (lengthType === "wörter") {
      prompt += `➡️ Auf ca. ${lengthValue} Wörter begrenzen.\n`;
    } else if (lengthType === "kurz") {
      prompt += `➡️ Kurz und bündig formulieren.\n`;
    }

    if (complexity !== "keine") {
      prompt += `➡️ Komplexitätsgrad: ${complexity}.\n`;
    }

    document.getElementById("output").innerText = prompt.trim();
  }

  function addRecipe() {
    const name = prompt("Name des neuen Rezepts:");
    if (name) {
      const div = document.createElement("div");
      div.className = "recipe";
      div.innerText = name;
      div.onclick = () => alert(`Rezept "${name}" geladen (funktion optional ausbaubar).`);
      document.getElementById("recipes").appendChild(div);
    }
  }
</script>
</body>
</html>
