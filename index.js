// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

// mondayWork('work from home')
function mondayWork(activity = 'go to the office') {
    return "This Monday, I will " + activity + ".";
}
mondayWork()

function wrapAdjective(makeNice = '*') {
    return function(par = 'special'){
        return `You are ${makeNice}${par}${makeNice}!`
    }
}
wrapAdjective()