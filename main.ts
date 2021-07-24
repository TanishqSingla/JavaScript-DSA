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
const arrayDiv = document.getElementById('array') as HTMLDivElement;

const elementClass = document.getElementsByClassName(
  "el"
) as HTMLCollectionOf<HTMLDivElement>;

let array: number[] = [];

function formArray(upperBound: number, lowerBound: number) {
  let str = "";
  for (let i = lowerBound; i < upperBound; i++) {
    array.push(i);
  }
  array = shuffle(array);

  arrayDiv.innerHTML = str;
}

function shuffle(array: number[]) {
  let currentIndex = array.length,  randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

function sort() {
  formArray(10, 1);
}
