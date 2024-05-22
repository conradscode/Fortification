var forgeIsRunning = false;
var forgePrices = [
  ['copper', 25],
  ['iron', 50],
  ['gold', 100],
  ['titanium', 200]
];

var forgesTimer = null;

function toggleForges() {
  if (
    getPlayerCopperForges() == 0 &&
    getPlayerIronForges() == 0 &&
    getPlayerGoldForges() == 0 &&
    getPlayerTitaniumForges() == 0
  ) {
    updateTaskOutcome('You have no forges to run!');
  } else {
    forgeIsRunning = !forgeIsRunning;
    $('#toggle-forges').html(forgeIsRunning ? 'Stop forges' : 'Start forges');
    updateTaskOutcome(forgeIsRunning ? 'You turned on the forges.' : 'You turned off the forges.');
    if (forgeIsRunning) {
      playAudio('forges.mp3');
      forgesTimer = setInterval(function () {
        for (var i = 0; i < getPlayerForges().length; i++) {
          setPlayerResource(getPlayerForges()[i][0], getPlayerForges()[i][1]);
        }
      }, 5000);
    } else {
      clearInterval(forgesTimer);
    }
  }
}

function buyForge(forgeType) {
  if (getPlayerMoney() >= forgePrices[forgeType][1]) {
    setPlayerMoney(-forgePrices[forgeType][1]);
    if (forgeType == 0) {
      setPlayerCopperForges(1);
    } else if (forgeType == 1) {
      setPlayerIronForges(1);
    } else if (forgeType == 2) {
      setPlayerGoldForges(1);
    } else if (forgeType == 3) {
      setPlayerTitaniumForges(1);
    }
    updateTaskOutcome(
      'You bought a ' + forgePrices[forgeType][0] + ' forge for ' + forgePrices[forgeType][1] + ' silver coins!'
    );
    updateForgeStatistics();
  } else {
    updateTaskOutcome('You do not have enough silver coins to buy a ' + forgePrices[forgeType][0] + ' forge!');
  }
}

function setPlayerResource(forgeType, numForges) {
  switch (forgeType) {
    case 'copper':
      setPlayerCopper(numForges * 1);
      break;
    case 'iron':
      setPlayerIron(numForges * 1);
      break;
    case 'gold':
      setPlayerGold(numForges * 1);
      break;
    case 'titanium':
      setPlayerTitanium(numForges * 1);
      break;
  }
  updateForgeStatistics();
}

function updateForgeStatistics() {
  $('#forge-stats').html(
    'Copper Forges: ' +
      playerStats.r.copperForges +
      ' <br> Iron Forges: ' +
      playerStats.r.ironForges +
      ' <br> Gold Forges: ' +
      playerStats.r.goldForges +
      ' <br> Titanium Forges: ' +
      playerStats.r.titaniumForges +
      '<br> Copper: ' +
      playerStats.r.copper +
      '<br> Iron: ' +
      playerStats.r.iron +
      ' <br> Gold: ' +
      playerStats.r.gold +
      ' <br> Titanium: ' +
      playerStats.r.titanium
  );
  $('#player-materials-p').html(
    'Copper: ' +
      getPlayerCopper() +
      '</br>Iron: ' +
      getPlayerIron() +
      '<br>Gold: ' +
      getPlayerGold() +
      '</br>Titanium: ' +
      getPlayerTitanium()
  );
}
