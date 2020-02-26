window.onload = main;

function main() {
  const canvas = document.getElementById("canvas");
  const gl = canvas.getContext("webgl");

  if (gl === null) {
    alert("Cannot init webGL");
    return;
  }

  const shaderProgram = initShaderProgram(gl, vShaderSrc, fShaderSrc);

  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
      vertexColor: gl.getAttribLocation(shaderProgram, "aVertexColor")
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix")
    }
  };

  const rotation = {z: 0, y:0}

  requestAnimationFrame(drawLoop);

  function drawLoop() {
    if (oscillateColors) faceColors = oscillateFaceColors(faceColors, 0.1);
    const buffers = initBuffers(gl, faceColors);
    drawScene(gl, programInfo, buffers, rotation, numOfVertices, distance);
    rotation.z += rotationSpeedZ;
    rotation.y += rotationSpeedY;
    requestAnimationFrame(drawLoop);
  }
}
