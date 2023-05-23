const palindromes = function (string) {
  characters = Array.from(string);
  letters = characters.filter(char => char.toUpperCase() !== char.toLowerCase());

  palindrome = true;
  for (let i = 0; i < Math.floor(letters.length / 2); i++) {
    if (letters[i].toLowerCase() !== letters[letters.length - 1 - i].toLowerCase()) {
      palindrome = false;
    }    
  }

  return palindrome;
};

// Do not edit below this line
module.exports = palindromes;
