console.log("Working")
const A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  function transpose(A) {
    // we need only swap upper triangle with lower
    let N = A.length;
    for (let i = 0; i < N - 1; i++) {
      for (let j = i + 1; j < N; j++) {
        swap(A, i, j, j, i);
      }
    }
  }
  function swap(A, i, j, k, l) {
    let temp = A[j][i];
    A[j][i] = A[l][k];
    A[l][k] = temp;
  }
  function exchangeCols(A) {
    //write this
    let cols = A[0].length //get length of one array so we know the # of columns
    let swaps = Math.floor(cols/2) // numebr of swaps we will need to do
    for(let i = 0; i < swaps; i++){
        for(let j = 0; j < cols; j++) { //cols also == rows since this onyl works for squares
            let heldVal = A[j][i];
            A[j][i] = A[j][(cols-1) -i];
            A[j][(cols-1) -i] = heldVal;
        }//WORKS!
    }
  }

function rotateMatrix(A) {
    transpose(A);
    exchangeCols(A);
  }
  transpose(A);
  exchangeCols(A);
  console.log(JSON.stringify(A));