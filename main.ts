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

const visual = document.getElementById('visual') as HTMLDivElement;
const sorts = document.getElementById("sorts");

const elementClass = document.getElementsByClassName(
  "el"
) as HTMLCollectionOf<HTMLDivElement>;


function snap(arr: number[]): void {
  const arrayDiv = document.createElement('div');
  arrayDiv.classList.add('array');
  visual.appendChild(arrayDiv);

  arr.forEach(el => {
    let element = document.createElement('div');
    element.textContent = `${el}`;
    element.classList.add('el');
    element.style.backgroundColor = spectrum[el];
    arrayDiv.appendChild(element);
  })
}

function bubbleSort(array: number[]) {
  for(let i = 0; i < array.length - 1; i++) {
    for(let j = 0; j < array.length - i - 1; j++) {
      if(array[j] > array[j + 1]) {
        const temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
      snap(array);
    } 
  } 
}

function insertionSort(array: number[]) {
  for(let i = 1; i < array.length; i++) {
    let j = i;
    while(j > 0 && (array[j] < array[j - 1] )) {
      const temp = array[j - 1];
      array[j - 1] = array[j];
      array[j] = temp;

      j--;
      snap(array);
    }
  }
}

function formArray(mode: string) {
  let array: number[] = [...Array(9).keys()];
  let str = "";
  array = shuffle(array);
  visual.innerHTML = "";

  const arrayDiv =  document.querySelector('.array') as HTMLDivElement;
  
  array.forEach(element => {
    str += `<div class="el" style="background: ${spectrum[element]};">${element}</div>\n`;
  })
  arrayDiv.innerHTML = str; 
  
  if(mode === "bubble") {
    bubbleSort(array);
  } else if (mode === "insertion"){
    insertionSort(array);
  } else {
    return; 
  }
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
  const sortSelect = document.getElementById('sorts') as HTMLSelectElement;
  const sortType = sortSelect.value;
  formArray(sortType);
}
