function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };

  function wrapAdjective(adjective = "*") {
    return function(parameter = "special") {
        return `You are ${adjective}${parameter}${adjective}!`;
    }
  }
