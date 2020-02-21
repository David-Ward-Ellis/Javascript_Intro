function greeting(locale) {
  switch (locale) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
    case 'ko': return 'Anyoung!'
  }
}


function extractLanguage(locale) {
  return locale.slice(0, 2)
}

function extractRegion(locale) {
  return locale.slice(3, 5)
}


function localGreet(locale) {
  let language = extractLanguage(locale)
  let region = extractRegion(locale);
  if (language === 'en') {
    switch (region) {
      case 'US' : return 'Hi!';
      case 'GB' : return 'Hello!';
      case 'AU' : return 'Howdy!';
    }
  } else {
    return greeting(language);
  }
}


console.log(localGreet('en_US.UTF-8')); 
console.log(localGreet('en_GB.UTF-8')); 
console.log(localGreet('en_AU.UTF-8'));
console.log(localGreet('fr_FR.UTF-8'));
console.log(localGreet('ko_KR.UTF-16'));