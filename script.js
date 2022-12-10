class Counter {
  constructor() {
    this.count = 0;
    this.text = document.getElementById("text");
    this.word = document.getElementById("word");
    this.letter = document.getElementById("letter");
    this.sentence = document.getElementById("sentence");
  }

  getWordCount() {
    let arr = this.text.value.split(" ");
    let result = arr.filter((elem) => {
      return elem !== "" && elem.length >= 2;
    });
    return result.length;
  }
  getLetterCount() {
    let arr = this.text.value.split("");
    let result = arr.filter((elem) => {
      return elem !== " ";
    });
    return result.length;
  }
  getSentenceCount() {
    let arr = this.text.value.split(".");
    let result = arr.filter((elem) => {
      return elem !== "" && elem.length > 2;
    });

    return result.length;
  }
}

const counter = new Counter();

counter.text.addEventListener("keyup", () => {
  if (counter.text === "") {
    this.word.innerHTML = 0;
    this.letter.innerHTML = 0;
    this.sentence.innerHTML = 0;
  }
  this.word.innerHTML = counter.getWordCount();
  this.letter.innerHTML = counter.getLetterCount();
  this.sentence.innerHTML = counter.getSentenceCount();
});

const change_btn = document.getElementById("change_color");

change_btn.addEventListener("click", () => {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.background = randomColor;
});
