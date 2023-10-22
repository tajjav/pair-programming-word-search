const wordSearch = (letters, word) => {

  const horizontalJoin = letters.map(ls => ls.join(''));
  console.log(horizontalJoin);
  let verticalJoin = transpose(horizontalJoin);
  verticalJoin = verticalJoin.map(ls => ls.join(''));
  console.log(verticalJoin);
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  for (l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};

//create variable containing a transposed array
function transpose(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  // Initialize an empty transposed matrix
  const transposed = [];

  // Iterate over columns (new rows in transposed matrix)
  for (let j = 0; j < numCols; j++) {
    const newRow = [];

    // Iterate over rows (new columns in transposed matrix)
    for (let i = 0; i < numRows; i++) {
      newRow.push(matrix[i][j]);
    }

    transposed.push(newRow);
  }
  return transposed;
};
//
// Additional Tests
//
const letters = [
  [
    'A', 'W', 'C',
    'F', 'Q', 'U',
    'A', 'L'
  ],
  [
    'S', 'E', 'I',
    'N', 'F', 'E',
    'L', 'D'
  ],
  [
    'Y', 'F', 'C',
    'F', 'Q', 'U',
    'A', 'L'
  ],
  [
    'H', 'M', 'J',
    'T', 'E', 'V',
    'R', 'G'
  ],
  [
    'W', 'H', 'C',
    'S', 'Y', 'E',
    'R', 'L'
  ],
  [
    'B', 'F', 'R',
    'E', 'N', 'E',
    'Y', 'B'
  ],
  [
    'U', 'B', 'T',
    'W', 'A', 'P',
    'A', 'I'
  ],
  [
    'O', 'D', 'C',
    'A', 'K', 'U',
    'A', 'S'
  ],
  [
    'E', 'Z', 'K',
    'F', 'Q', 'U',
    'A', 'L'
  ]];

//should return false  
word = "ASYHWBUOED";
console.log(wordSearch(letters, word));

//should return true
word = "ASYHWBUOE";
console.log(wordSearch(letters, word));

module.exports = wordSearch;


