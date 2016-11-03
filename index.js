function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`;
}

function nowServing(katzDeliLine) {
  var person = katzDeliLine.shift()
  if (person) {
    return `Currently serving ${person}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var people = [];
    for (let i = 0; i < katzDeliLine.length; i++) {
      people.push(`${i + 1}. ${katzDeliLine[i]}`);
    }
    return "The line is currently: " + people.join(", ")
  } else {
    return "The line is currently empty."
  }
}
