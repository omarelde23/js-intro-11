function isDigit(char) {
    return /^\d$/.test(char);
  }


  function isLowerCase(char) {
    return /^[a-z]$/.test(char);
  }


  function isUpperCase(char) {
    return /^[A-Z]$/.test(char);
  }

  function isLetter(char) {
    return /^[a-z]$/i.test(char)
  }
  

  function isSpace(char) {
    return char === ' '
  }


  function isDigitOrLetter(char) {
    return isLetter(char) || isDigit(char)
  }



function isSpecial(char) {
    return !isDigitOrLetter(char) && !isSpace(char);
    // return /^[^a-zA-Z0-9\s]$/.test(char);
}


function isVowel(char) {
    return /^[aeoui]$/i.test(char);
}


const CharacterHelper = {
    isDigit,
    isUpperCase,
    isLowerCase,
    isLetter,
    isSpace,
    isDigitOrLetter,
    isSpecial,
    isVowel,
};

module.exports.CharacterHelper = CharacterHelper;


