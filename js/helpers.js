var getRandomArrayItem = function(array) {
  return array[Math.floor(Math.random() * array.length)];
};
function consoleWarning(msg) {
  if (logWarnings) {
    console.warn("WARNING: " + msg);
  }
}
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function awaitAll(list, asyncFn) {
  const promises = [];

  list.forEach(x => {
    promises.push(asyncFn(x));
  });

  return Promise.all(promises);
}
async function adjustVolume(
  element,
  newVolume,
  { duration = 1000, easing = swing, interval = 13 } = {}
) {
  const originalVolume = element.volume;
  const delta = newVolume - originalVolume;
  if (!delta || !duration || !easing || !interval) {
    element.volume = newVolume;
    return Promise.resolve();
  }
  const ticks = Math.floor(duration / interval);
  let tick = 1;
  return new Promise(resolve => {
    const timer = setInterval(() => {
      element.volume = originalVolume + easing(tick / ticks) * delta;
      if (++tick === ticks) {
        clearInterval(timer);
        resolve();
      }
    }, interval);
  });
}
function swing(p) {
  return 0.5 - Math.cos(p * Math.PI) / 2;
}
