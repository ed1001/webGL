let rotationSpeedZ = 0.0;
let rotationSpeedY = 0.0;
let numOfVertices = 36;
let distance = 6;
let oscillateColors = false;
let faceColors = [
  [1.0,  1.0,  1.0,  1.0],    // Front face: white
  [1.0,  0.0,  0.0,  1.0],    // Back face: red
  [0.0,  1.0,  0.0,  1.0],    // Top face: green
  [0.0,  0.0,  1.0,  1.0],    // Bottom face: blue
  [1.0,  1.0,  0.0,  1.0],    // Right face: yellow
  [1.0,  0.0,  1.0,  1.0],    // Left face: purple
];

const baseColors = [
  [1.0,  1.0,  1.0,  1.0],    // Front face: white
  [1.0,  0.0,  0.0,  1.0],    // Back face: red
  [0.0,  1.0,  0.0,  1.0],    // Top face: green
  [0.0,  0.0,  1.0,  1.0],    // Bottom face: blue
  [1.0,  1.0,  0.0,  1.0],    // Right face: yellow
  [1.0,  0.0,  1.0,  1.0],    // Left face: purple
];

const verticesSelect = document.getElementById("vertices");
const rotationZ = document.getElementById("rotation-z");
const rotationY = document.getElementById("rotation-y");
const viewDistance = document.getElementById("distance");
const color = document.getElementById("color");

function oscillateFaceColors(colors, rates) {
  return colors.map((fc) => {
    return fc.map((val, i) => {
      return i < 3 ? Math.abs((val - rates[i]) % 1) : 1;
    });
  });
}

for (let i = 0; i <= numOfVertices; i++) {
  var option = document.createElement("option");
  option.text = i.toString();
  verticesSelect.add(option);
}

verticesSelect.value = numOfVertices;

verticesSelect.addEventListener("input", (e) => {
  numOfVertices = e.target.value;
});

rotationZ.addEventListener("input", (e) => {
  rotationSpeedZ = e.target.value / 1000;
});

rotationY.addEventListener("input", (e) => {
  rotationSpeedY = e.target.value / 1000;
});

viewDistance.addEventListener("input", (e) => {
  distance = e.target.value;
});

viewDistance.value = distance;

color.addEventListener("change", (e) => {
  if (e.target.checked) {
    oscillateColors = true;
  } else {
    oscillateColors = false;
    faceColors = baseColors;
  }
});

