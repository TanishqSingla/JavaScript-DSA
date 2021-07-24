const spectrum = [
  "#11FF00",
  "#B4FF24",
  "#E2FF47",
  "#FCFF2D",
  "#F1A72D",
  "#FF7438",
  "#FF531D",
  "#FF3A2A",
  "#FF0000",
];

const sorts = document.getElementById("sorts");

const elementClass = document.getElementsByClassName(
  "el"
) as HTMLCollectionOf<HTMLDivElement>;

const el = Array.from(elementClass);

let array: number[] = [];

function formArray(upperBound: number, lowerBound: number) {
  for (let i = lowerBound; i < upperBound; i++) {
    array.push(i);
  }
}

function snap() {
  el.forEach((element) => {
    let spectrumIndex: number = (+element.textContent! - 1) | 0;
    element.style.backgroundColor = spectrum[spectrumIndex];
  });
}

function sort() {
  formArray(1, 10);
}
