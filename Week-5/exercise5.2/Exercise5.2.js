function isVowel(char) {
  return "aeiou".includes(char);
}

function vowelCounter(str) {
  const vMap = new Map();
  let vowel = str
    .split("")
    .map((e) => e.toLowerCase())
    .filter((e) => {
      if (isVowel(e)) {
        if (vMap.has(e)) {
          vMap.set(e, vMap.get(e) + 1);
        } else {
          vMap.set(e, 1);
        }
        return true;
      } else {
        return false;
      }
    });
  console.log(vMap);
  return vMap;
}

vowelCounter("samrat has enrolled in PESTO...");
