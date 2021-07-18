let testString = "aaaaaaoa";

function regexVar() {
  let re = "";
  let start = testString.match(/\b[aeiou]/g);
  let startString = start.join("");
  let regex = new RegExp(startString + "$");
  let end = testString.match(regex);
  let endString = "";
  if (end !== null) {
    endString = end.join("");
  }
  if (startString === endString) {
    re = true;
  } else {
    re = false;
  }
  return re;
}
