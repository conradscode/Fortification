function healPlayer(healTier) {
  healType = getHealType(healTier);
  if (getPlayerHealth() >= getPlayerMaxHealth()) {
    outcome = "Get outta here, you're wasting my time.";
  } else if (getPlayerMoney() >= healType.moneySpent) {
    outcome = healType.outcomeText;
    playAudio(healType.audio);
    setPlayerHealth(healType.healthGain);
    setPlayerMoney(-healType.moneySpent);
  } else {
    outcome = 'You cannot afford this treatment.';
  }
  updateTaskOutcome(outcome);
}

function getHealType(healTier) {
  healTypes = [
    {
      healthGain: 100,
      moneySpent: 500,
      outcomeText: 'You rubbed aloe vera on yourself.',
      audio: 'heal1.mp3'
    },
    {
      healthGain: 500,
      moneySpent: 1000,
      outcomeText: 'A back alley healer did something questionable.',
      audio: 'heal2.mp3'
    },
    {
      healthGain: 1000,
      moneySpent: 2000,
      outcomeText: 'An apprentice treated your wounds.',
      audio: 'heal3.mp3'
    },
    {
      healthGain: 2000,
      moneySpent: 4000,
      outcomeText: 'A dark sorceror performed black magic on you.',
      audio: 'heal4.mp3'
    },
    {
      healthGain: 4000,
      moneySpent: 8000,
      outcomeText: 'An elderly shaman treated your wounds.',
      audio: 'heal5.mp3'
    },
    {
      healthGain: 8000,
      moneySpent: 16000,
      outcomeText: 'A man you suspected to be a fraud muttered some words.',
      audio: 'heal5.mp3'
    },
    {
      healthGain: 16000,
      moneySpent: 32000,
      outcomeText: 'Of all things a sunflower radiated positive vibes and healed you.',
      audio: 'heal5.mp3'
    },
    {
      healthGain: 32000,
      moneySpent: 64000,
      outcomeText: 'You drank some mysterious liquid.',
      audio: 'heal5.mp3'
    },
    {
      healthGain: 64000,
      moneySpent: 128000,
      outcomeText: 'You read ancient scrolls.',
      audio: 'heal5.mp3'
    }
  ];

  healTypes[healTier].outcomeText +=
    ' +' + healTypes[healTier].healthGain + 'HP -' + healTypes[healTier].moneySpent + ' Silver Coins.';
  return healTypes[healTier];
}
