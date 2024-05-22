function getRandomEvent() {
  outcome = {
    moneyGained: 0,
    outcomeText: ''
  };

  switch (getRandomInt(6)) {
    case 0:
      outcome.moneyGained = 0;
      outcome.outcomeText = 'Nothing happened while you were away!';
      break;
    case 1:
      outcome.moneyGained = 250;
      outcome.outcomeText = 'A bag of silver showed up while you were away!';
      break;
    case 2:
      outcome.moneyGained = 500;
      outcome.outcomeText = 'Your villagers went to retrieve some silver for you!';
      break;
    case 3:
      outcome.moneyGained = 1000;
      outcome.outcomeText = 'A friend dropped some silver off while you were away!';
      break;
    case 4:
      outcome.moneyGained = -1000;
      outcome.outcomeText = 'Orcs raided the village while you were away!';
      break;
    case 5:
      outcome.moneyGained = 5000;
      outcome.outcomeText = 'While you were away a good samaritan came and donated to your fort.';
      break;
  }

  // If money is < 0 don't add a + sign
  outcome.outcomeText += (outcome.moneyGained < 0 ? ' ' : ' +') + outcome.moneyGained + ' Silver coins.';
  return outcome;
}
