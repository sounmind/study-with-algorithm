var checkIfPangram = function(sentence) {
  const letter = sentence;
  const letterArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  for (let i = 0; i < letter.length; i++) {
    if (letterArr.indexOf(letter[i]) >= 0) {
      letterArr.splice(letterArr.indexOf(letter[i]), 1);
      i--;
    }
  }

  if (!letterArr.length){
    return true
  } else {
    return false;
  }
}