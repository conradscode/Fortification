var playerIsFishing = false;
var fishingInterval = 2.5;
var fishingSpeed = 0.5;
let fishingTimer;

function checkPlayerFishSkill(fishingTier) {
  if (getFishingType(fishingTier)) {
    fishingType = getFishingType(fishingTier);
    clearFishingTimer();
    playerIsFishing = !playerIsFishing;
    alternateFishingButtons(playerIsFishing);
    toggleFishing(fishingType);
  } else {
    updateTaskOutcome('You are not skilled enough.');
  }
}

function toggleFishing(fishingType) {
  percentage = 0;
  secondsRemaining = fishingInterval;
  fishingTimer = setInterval(function () {
    if (!playerIsFishing) {
      percentage = 0;
      secondsRemaining = fishingInterval;
    } else {
      if (secondsRemaining <= 0) {
        if (getRandomInt(10) === 9) {
          updateTaskOutcome(
            fishingType.outcomeText + '<br><br>LUCKY YOU, YOU FISHED UP A POT OF SILVER. +500 SILVER COINS.'
          );
          setPlayerMoney(500);
        } else {
          updateTaskOutcome(fishingType.outcomeText);
        }
        playAudio('fishing.mp3');
        setPlayerFish(fishingType.fishGained);
        setPlayerFishXp(fishingType.fishingXpGained);
        updateTaskInfo('#fish-div');
        percentage = 0;
        secondsRemaining = fishingInterval;
      } else {
        percentage += 100 / (fishingInterval / fishingSpeed);
        secondsRemaining -= fishingSpeed;
      }
    }
    $('#progress-bar-percent-fish').attr('style', 'width: ' + percentage + '%');
  }, fishingSpeed * 1000);
}

function clearFishingTimer() {
  clearInterval(fishingTimer);
  if (playerIsFishing) {
    $('#progress-bar-percent-fish').attr('style', 'width: 0%');
    alternateFishingButtons(false);
  }
}

function getFishingType(fishingTier) {
  var fishingTypes = [
    {
      levelRequired: 1,
      fishGained: 1,
      fishingXpGained: 50,
      outcomeText: 'You flail around aimlessly in the water.'
    },
    {
      levelRequired: 10,
      fishGained: 4,
      fishingXpGained: 100,
      outcomeText: 'You dance with your hands to catch fish.'
    },
    {
      levelRequired: 20,
      fishGained: 8,
      fishingXpGained: 500,
      outcomeText: 'You wave a bucket crazily to catch fish.'
    },
    {
      levelRequired: 30,
      fishGained: 16,
      fishingXpGained: 1000,
      outcomeText: 'You stab fish with a makeshift spear.'
    },
    {
      levelRequired: 40,
      fishGained: 32,
      fishingXpGained: 2000,
      outcomeText: 'You cast a wooden rod with no bait.'
    },
    {
      levelRequired: 50,
      fishGained: 40,
      fishingXpGained: 4000,
      outcomeText: 'You cast an iron rod with no bait.'
    },
    {
      levelRequired: 60,
      fishGained: 64,
      fishingXpGained: 8000,
      outcomeText: 'You cast an iron rod with a maggot.'
    },
    {
      levelRequired: 70,
      fishGained: 80,
      fishingXpGained: 16000,
      outcomeText: 'You cast an iron rod with a worm.'
    },
    {
      levelRequired: 80,
      fishGained: 90,
      fishingXpGained: 32000,
      outcomeText: 'You cast a gold rod with a worm.'
    },
    {
      levelRequired: 90,
      fishGained: 100,
      fishingXpGained: 64000,
      outcomeText: 'You cast a titanium rod with a shrimp.'
    },
    {
      levelRequired: 99,
      fishGained: 120,
      fishingXpGained: 0,
      outcomeText: 'You cast a titanium rod with a king prawn.'
    }
  ];
  if (getPlayerFishSkill() >= fishingTypes[fishingTier].levelRequired) {
    // Updates outcome text to include the statistics of fishGained and xpGained for modular code.
    fishingTypes[fishingTier].outcomeText +=
      ' +' + fishingTypes[fishingTier].fishGained + ' Fish +' + fishingTypes[fishingTier].fishingXpGained + 'XP';
    return fishingTypes[fishingTier];
  } else {
    return false;
  }
}

function alternateFishingButtons(playerIsFishing) {
  if (playerIsFishing) {
    $('#fish-button-stop').show();
    updateTaskOutcome('You started fishing.');
  } else {
    $('#fish-button-stop').hide();
    updateTaskOutcome('You stopped fishing.');
  }
}
