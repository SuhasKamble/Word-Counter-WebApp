const textArea = document.getElementById("text");
const letterEl  = document.getElementById("letter");
const wordEle  = document.getElementById("word");
const sentenceEl  = document.getElementById("sentence");
const formatBtn = document.getElementById('formatBtn');
const clearBtn = document.getElementById('clearBtn');
const copyBtn = document.getElementById('copyBtn');

formatBtn.addEventListener('click',()=>{
    
    let text = textArea.value;
    if(text){
    // remove unwanted whitespace
    text = text.replace(/\s+/g, " ");
    console.log(text)
    textArea.value = text;
    
}
})

clearBtn.addEventListener('click',()=>{
    textArea.value="";
    sentenceEl.innerHTML = "0";
    wordEle.innerHTML = "0";
    letterEl.innerHTML = "0";
    // alert("Suhas")
})



textArea.addEventListener('input',()=>{
    calculateText()
})

function calculateText(){
    let text = textArea.value;
    if(text){
    // remove unwanted whitespace
    text = text.replace(/\s+/g, " ");
    
       
    // Word Count 
    calculateLetter(text)
    calculateWord(text)
    calculateSentence(text)

    }

}




function calculateLetter(text){
    const letterCount = text.length;

    // display the letter count 
    letterEl.innerHTML = letterCount;
}


function calculateWord(text){
    let wordCount = 1;
    for(let i=0;i<text.length;i++){
        if(text[i]===" "){
            wordCount++;
        }
    }
    wordEle.innerHTML = wordCount;
}

function calculateSentence(text){
    let sentenceCount = 1;
    for(let i=0;i<text.length;i++){
        if(text[i]=="."){
            if(text[i+1]===" "){

                sentenceCount++;
            }
        }
    }

   
    sentenceEl.innerHTML = sentenceCount;
}




copyBtn.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const myText = textArea.value;

    if (!myText) {
        return;
    }

    textarea.value = myText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Text copied to clipboard");
});

