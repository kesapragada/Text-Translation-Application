// const fromText = document.querySelector(".from-text"),
//       toText = document.querySelector(".to-text"),
//       selectTag = document.querySelectorAll("select"),
//       translateBtn = document.getElementById("translateBtn"),
//       exchangeIcon = document.querySelector(".exchange .fa-exchange-alt"),
//       fromSpeechIcon = document.querySelectorAll(".row.from .fas.fa-volume-up")[0],
//       toSpeechIcon = document.querySelectorAll(".row.to .fas.fa-volume-up")[0],
//       copyFromTextIcon = document.querySelectorAll(".row.from .fas.fa-copy")[0],
//       copyToTextIcon = document.querySelectorAll(".row.to .fas.fa-copy")[0],
//       characterCountDisplay = document.querySelector(".character-count");

// let characterLimit = 5000;

// // Populate language options
// selectTag.forEach((tag, index) => {
//     for (const country_code in countries) {
//         let isSelected = false;
//         if ((index === 0 && country_code === "en-GB") || (index === 1 && country_code === "hi-IN")) {
//             isSelected = true;
//         }
//         let option = `<option value="${country_code}"${isSelected ? " selected" : ""}>${countries[country_code]}</option>`;
//         tag.insertAdjacentHTML("beforeend", option);
//     }
// });

// // Update character count
// function updateCharacterCount() {
//     const currentLength = fromText.value.length;
//     characterCountDisplay.textContent = `${currentLength} / ${characterLimit} characters`;
    
//     if (currentLength > characterLimit) {
//         fromText.value = fromText.value.slice(0, characterLimit);
//     }
    
//     // Detect language
//     const detectedLanguage = franc(fromText.value);
//     if (detectedLanguage) {
//         // Suggest the detected language
//         const languageName = countries[detectedLanguage] || "Unknown language";
//         alert(`There is a high possibility the entered language is ${languageName}.`);
//     }
// }

// // Translate button click event
// translateBtn.addEventListener("click", () => {
//     let text = fromText.value.trim();
//     if (!text) {
//         toText.value = "Empty Text";
//         return;
//     }
//     let translateFrom = selectTag[0].value,
//         translateTo = selectTag[1].value;
//     let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;

//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             const translation = data.responseData.translatedText;
//             toText.value = translation || "Empty Text";
//         })
//         .catch(error => console.error('Error:', error));
// });

// // Exchange icon click event
// exchangeIcon.addEventListener("click", () => {
//     const tempLang = selectTag[0].value;
//     selectTag[0].value = selectTag[1].value;
//     selectTag[1].value = tempLang;

//     // Swap text in the textareas
//     const tempText = fromText.value;
//     fromText.value = toText.value;
//     toText.value = tempText;
// });

// // Speech functionality
// fromSpeechIcon.addEventListener("click", () => {
//     const utterance = new SpeechSynthesisUtterance(fromText.value);
//     speechSynthesis.speak(utterance);
// });

// toSpeechIcon.addEventListener("click", () => {
//     const translation = toText.value.trim();
//     if (translation) {
//         const utterance = new SpeechSynthesisUtterance(translation);
//         speechSynthesis.speak(utterance);
//     } else {
//         alert("No translation available to speak");
//     }
// });

// // Copy functionality
// copyFromTextIcon.addEventListener("click", () => {
//     if (fromText.value) {
//         navigator.clipboard.writeText(fromText.value);
//     } else {
//         alert("No text to copy");
//     }
// });

// copyToTextIcon.addEventListener("click", () => {
//     if (toText.value) {
//         navigator.clipboard.writeText(toText.value);
//     } else {
//         alert("No text to copy");
//     }
// });

const fromText = document.querySelector(".from-text"),
      toText = document.querySelector(".to-text"),
      selectTag = document.querySelectorAll("select"),
      translateBtn = document.getElementById("translateBtn"),
      exchangeIcon = document.querySelector(".exchange .fa-exchange-alt"),
      fromSpeechIcon = document.querySelectorAll(".row.from .fas.fa-volume-up")[0],
      toSpeechIcon = document.querySelectorAll(".row.to .fas.fa-volume-up")[0],
      copyFromTextIcon = document.querySelectorAll(".row.from .fas.fa-copy")[0],
      copyToTextIcon = document.querySelectorAll(".row.to .fas.fa-copy")[0],
      characterCountDisplay = document.querySelector(".character-count");

let characterLimit = 5000;

// Populate language options
selectTag.forEach((tag, index) => {
    for (const country_code in countries) {
        let isSelected = false;
        if ((index === 0 && country_code === "en-GB") || (index === 1 && country_code === "hi-IN")) {
            isSelected = true;
        }
        let option = `<option value="${country_code}"${isSelected ? " selected" : ""}>${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
    }
});

// Update character count
function updateCharacterCount() {
    const currentLength = fromText.value.length;
    characterCountDisplay.textContent = `${currentLength} / ${characterLimit} characters`;
    
    if (currentLength > characterLimit) {
        fromText.value = fromText.value.slice(0, characterLimit);
    }
    
    // Detect language
    const detectedLanguage = franc(fromText.value);
    if (detectedLanguage) {
        // Suggest the detected language
        const languageName = countries[detectedLanguage] || "Unknown language";
        alert(`There is a high possibility the entered language is ${languageName}.`);
    }
}

// Translate button click event
translateBtn.addEventListener("click", () => {
    let text = fromText.value.trim();
    if (!text) {
        toText.value = "Empty Text";
        return;
    }
    let translateFrom = selectTag[0].value,
        translateTo = selectTag[1].value;
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const translation = data.responseData.translatedText;
            toText.value = translation || "Empty Text";
        })
        .catch(error => console.error('Error:', error));
});

// Exchange icon click event
exchangeIcon.addEventListener("click", () => {
    const tempLang = selectTag[0].value;
    selectTag[0].value = selectTag[1].value;
    selectTag[1].value = tempLang;

    // Swap text in the textareas
    const tempText = fromText.value;
    fromText.value = toText.value;
    toText.value = tempText;
});

// Speech functionality
fromSpeechIcon.addEventListener("click", () => {
    const utterance = new SpeechSynthesisUtterance(fromText.value);
    speechSynthesis.speak(utterance);
});

toSpeechIcon.addEventListener("click", () => {
    const translation = toText.value.trim();
    if (translation) {
        const utterance = new SpeechSynthesisUtterance(translation);
        speechSynthesis.speak(utterance);
    } else {
        alert("No translation available to speak");
    }
});

// Copy functionality
copyFromTextIcon.addEventListener("click", () => {
    if (fromText.value) {
        navigator.clipboard.writeText(fromText.value);
    } else {
        alert("No text to copy");
    }
});

copyToTextIcon.addEventListener("click", () => {
    if (toText.value) {
        navigator.clipboard.writeText(toText.value);
    } else {
        alert("No text to copy");
    }
});
