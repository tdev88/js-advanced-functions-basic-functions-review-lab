function saturdayFun(satActivity='roller-skate') {
  return(`This Saturday I want to ${satActivity}!`);
}

function mondayWork(monActivity='go to office') {
  return (`This Monday, I will ${monActivity}`)
}

function wrapAdjective(flair='*') {
  return function (compliment='special') {
    return (`${flair}You are ${compliment}${flair}`)
  }
}