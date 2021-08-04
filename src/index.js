const toReadable = function(convert_number) {
  let converted = "";
  if (convert_number.toString().length == 1) {
    return(define(convert_number));
  } else {
    converted = defineSecond(Math.floor((convert_number % 100) / 10), convert_number);
  }
  convert_number = Math.floor((convert_number / 100));
  if (convert_number == 0) {
    return converted;
  }

  if (converted == "") {
    converted = `${define(convert_number % 10)} hundred`;
  } else {
    converted = `${define(convert_number % 10)} hundred ${converted}`;
  }
  
  convert_number = Math.floor((convert_number / 10));
  if (convert_number.toString().length == 0) {
    return converted;
  }

  if (convert_number == 1) {
    converted = `one thousand ${converted}`;
  }
  
  return converted;
};

function defineSecond(define_num, convert_number) {
  if (define_num == 1) {
    switch(define(convert_number % 10)) {
      case "zero":
        return "ten";
      case "one":
        return "eleven";
      case "two":
        return "twelve";
      case "three":
        return "thirteen";
      case "four":
        return "fourteen";
      case "five":
        return "fifteen";
      case "six":
        return "sixteen";
      case "seven":
        return "seventeen";
      case "eight":
        return "eighteen";
      case "nine":
        return "nineteen";
    }
  }
  let secondNum = "";
  switch (define_num) {
    case 2:
      secondNum = `twenty`;
      break;
    case 3:
      secondNum = `thirty`;
      break;
    case 4:
      secondNum = `forty`;
      break;
    case 5:
      secondNum = `fifty`;
      break;
    case 6:
      secondNum = `sixty`;
      break;
    case 7:
      secondNum = `seventy`;
      break;
    case 8:
      secondNum = `eighty`;
      break;
    case 9:
      secondNum = `ninety`;
      break;
  }
  if ((convert_number % 10) != 0) {
    if (secondNum == "") {
      return `${secondNum}${define(convert_number % 10)}`;
    } else {
      return `${secondNum} ${define(convert_number % 10)}`;
    }
    
  } else {
    return secondNum;
  }
}

function define(define_num) {
  switch (define_num) {
    case 0:
      return "zero";
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
    case 4:
      return "four";
    case 5:
      return "five";
    case 6:
      return "six";
    case 7:
      return "seven";
    case 8:
      return "eight";
    case 9:
      return "nine";
  }
}

module.exports = toReadable;