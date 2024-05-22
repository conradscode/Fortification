function sellAllResources() {
  moneyUpdate = 0;
  moneyUpdate += getPlayerWood() * 50;
  moneyUpdate += getPlayerFish() * 50;
  moneyUpdate += getPlayerCopper() * 3;
  moneyUpdate += getPlayerIron() * 6;
  moneyUpdate += getPlayerGold() * 12;
  moneyUpdate += getPlayerTitanium() * 25;
  if (moneyUpdate > 0) {
    playerStats.r.wood = 0;
    playerStats.r.fish = 0;
    playerStats.r.copper = 0;
    playerStats.r.iron = 0;
    playerStats.r.gold = 0;
    playerStats.r.titanium = 0;
    updateForgeStatistics();
    setPlayerMoney(moneyUpdate);

    updateTaskOutcome('You sold all your resources and earned ' + moneyUpdate + ' Silver coins!');
    playAudio('money.mp3');
  } else {
    updateTaskOutcome('You have no resources to sell!');
  }
}

function upgradeMaxHealth() {
  if (getPlayerMoney() >= 10000) {
    setPlayerMoney(-10000);
    setPlayerMaxHealth(100);
    updateTaskOutcome('You spent 10000 silver and upgraded your max health to ' + getPlayerMaxHealth() + '!');
    playAudio('upgrade.mp3');
  } else {
    updateTaskOutcome('You cannot afford this!');
  }
}
