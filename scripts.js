let inputText = document.getElementById("input-text");
let buttonUpperCase = document.getElementById("upper-case");
let buttonLowerCase = document.getElementById("lower-case");
let buttonProperCase = document.getElementById("proper-case");
let buttonSentenceCase = document.getElementById("sentence-case");
let buttonSaveText = document.getElementById("save-text-file");
let textArray = [];


buttonUpperCase.addEventListener("click", () => {
    inputText.value = inputText.value.toUpperCase();
    });

buttonLowerCase.addEventListener("click", () => {
   inputText.value = inputText.value.toLowerCase();
});

buttonProperCase.addEventListener("click", () => {
    textArray = inputText.value.toLowerCase().split(" ");
    for (let i=0; i < textArray.length; i++) {
        textArray[i] = textArray[i][0].toUpperCase() + textArray[i].slice(1);
    }
    inputText.value = textArray.join(" ");
});

buttonSentenceCase.addEventListener("click", () =>{
    textArray = inputText.value.toLowerCase().split(". ");
    for (let i=0; i < textArray.length; i++) {
        textArray[i] = textArray[i][0].toUpperCase() + textArray[i].slice(1);
    }
    inputText.value = textArray.join(". ");
});

buttonSaveText.addEventListener("click", () =>{
    function download(filename, text) {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }
// Start file download.
    document.getElementById("save-text-file")
    let text = document.getElementById("input-text").value;
    download("text.txt", text);
});
