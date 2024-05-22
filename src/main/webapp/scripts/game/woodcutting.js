var playerIsCutting = false;
var cuttingInterval = 2.5;
var cuttingSpeed = 0.5;
let cuttingTimer;

function checkPlayerWoodSkill(cuttingTier) {
  if (getWoodcuttingType(cuttingTier)) {
    woodcuttingType = getWoodcuttingType(cuttingTier);
    clearCuttingTimer();
    playerIsCutting = !playerIsCutting;
    alternateWoodButtons(playerIsCutting);
    toggleCutting(woodcuttingType);
  } else {
    updateTaskOutcome('You are not skilled enough.');
  }
}

function toggleCutting(woodcuttingType) {
  percentage = 0;
  secondsRemaining = cuttingInterval;
  cuttingTimer = setInterval(function () {
    if (!playerIsCutting) {
      percentage = 0;
      secondsRemaining = cuttingInterval;
    } else {
      if (secondsRemaining <= 0) {
        playAudio('woodcutting.mp3');
        updateTaskOutcome(woodcuttingType.outcomeText);
        setPlayerWood(woodcuttingType.woodGained);
        setPlayerWoodXp(woodcuttingType.woodcuttingXpGained);
        updateTaskInfo('#wood-div');
        percentage = 0;
        secondsRemaining = cuttingInterval;
      } else {
        percentage += 100 / (cuttingInterval / cuttingSpeed);
        secondsRemaining -= cuttingSpeed;
      }
    }
    $('#progress-bar-percent').attr('style', 'width: ' + percentage + '%');
  }, cuttingSpeed * 1000);
}

function clearCuttingTimer() {
  clearInterval(cuttingTimer);
  if (playerIsCutting) {
    $('#progress-bar-percent').attr('style', 'width: 0%');
    alternateWoodButtons(false);
  }
}

function getWoodcuttingType(cuttingTier) {
  var woodcuttingTypes = [
    {
      levelRequired: 1,
      woodGained: 1,
      woodcuttingXpGained: 50,
      outcomeText: 'You headbutt a tree.'
    },
    {
      levelRequired: 10,
      woodGained: 4,
      woodcuttingXpGained: 100,
      outcomeText: 'You punch a tree.'
    },
    {
      levelRequired: 20,
      woodGained: 8,
      woodcuttingXpGained: 500,
      outcomeText: 'You bash a tree with a stone.'
    },
    {
      levelRequired: 30,
      woodGained: 16,
      woodcuttingXpGained: 1000,
      outcomeText: 'You smack the tree with a sharpened stone.'
    },
    {
      levelRequired: 40,
      woodGained: 32,
      woodcuttingXpGained: 2000,
      outcomeText: 'You slice the tree with a wooden sword.'
    },
    {
      levelRequired: 50,
      woodGained: 40,
      woodcuttingXpGained: 4000,
      outcomeText: 'You chop a tree with a wooden axe.'
    },
    {
      levelRequired: 60,
      woodGained: 64,
      woodcuttingXpGained: 8000,
      outcomeText: 'You chop the tree using a stone axe.'
    },
    {
      levelRequired: 70,
      woodGained: 80,
      woodcuttingXpGained: 16000,
      outcomeText: 'You demolish a tree with an iron axe.'
    },
    {
      levelRequired: 80,
      woodGained: 90,
      woodcuttingXpGained: 32000,
      outcomeText: 'You cut the tree down with a carefully crafted titanium axe.'
    },
    {
      levelRequired: 90,
      woodGained: 100,
      woodcuttingXpGained: 64000,
      outcomeText: 'You bamboozle a tree with a titanium double axe.'
    },
    {
      levelRequired: 99,
      woodGained: 120,
      woodcuttingXpGained: 0,
      outcomeText: 'You use a titanium throwing axe to cut down plenty of trees.'
    }
  ];
  if (getPlayerWoodSkill() >= woodcuttingTypes[cuttingTier].levelRequired) {
    // Updates outcome text to include the statistics of woodGained and xpGained for modular code.
    woodcuttingTypes[cuttingTier].outcomeText +=
      ' +' +
      woodcuttingTypes[cuttingTier].woodGained +
      ' Wood +' +
      woodcuttingTypes[cuttingTier].woodcuttingXpGained +
      'XP';

    return woodcuttingTypes[cuttingTier];
  } else {
    return false;
  }
}

function alternateWoodButtons(playerIsCutting) {
  if (playerIsCutting) {
    $('#wood-button-stop').show();
    updateTaskOutcome('You began gathering wood.');
  } else {
    $('#wood-button-stop').hide();
    updateTaskOutcome('You stopped gathering wood.');
  }
}
