var playerStats;

function updatePlayerHealthHtml() {
  $('#player-health').html('Health: ' + getPlayerHealth() + '/' + getPlayerMaxHealth());
}

function updatePlayerMoneyHtml() {
  $('#player-money').html('Silver Coins: ' + getPlayerMoney());
}

function updateWoodButtonHtml() {
  $('#wood-button').html('Woodcutting ' + getPlayerWoodSkill() + '/' + getPlayerMaxSkill());
}

function updateFightButtonHtml() {
  $('#fight-button').html('Fighting ' + getPlayerFightSkill() + '/' + getPlayerMaxSkill());
}

function updateThiefButtonHtml() {
  $('#thief-button').html('Thieving ' + getPlayerThiefSkill() + '/' + getPlayerMaxSkill());
}

function updateFishButtonHtml() {
  $('#fish-button').html('Fishing ' + getPlayerFishSkill() + '/' + getPlayerMaxSkill());
}

function savePlayerStats() {
  playerStats.ps.dateSaved = new Date();
  $.ajax({
    url: 'PlayerController',
    data: JSON.stringify(playerStats),
    headers: {
      'Content-type': 'application/json'
    },
    method: 'PUT',
    success: function (responseText) {
      updateTaskOutcome(responseText);
    }
  });
}

function saveProfilePicture() {
  playerStats.ps.profilePicture = $('.carousel-item.active').find('img').attr('src');
  updateAllProfilePics();
  savePlayerStats();
}

function handlePlayerDeath() {
  playAudio('death.mp3');
  secondsRemaining = 29;
  updateTaskOutcome(secondsRemaining + 1 + ' seconds until resurrection!');
  $('#side-nav').hide();
  hideAllPages();
  updateTaskInfo('#death-screen');
  var resurrectionTimer = setInterval(function () {
    if (secondsRemaining <= 0) {
      playerStats.ps.health = 1;
      updatePlayerHealthHtml();
      clearInterval(resurrectionTimer);
      homePage();
      updateTaskOutcome('Congratulations you were resurrected!');
      playAudio('resurrection.mp3');
    } else {
      updateTaskOutcome(secondsRemaining + ' seconds until resurrection!');
    }
    secondsRemaining -= 1;
  }, 1000);
}

function handleThiefLevelUp() {
  if (playerStats.psk.thiefSkill < 99) {
    playerStats.psk.thiefSkill++;
    xpOverflow = playerStats.psk.thiefXp - playerStats.psk.thiefMaxXp;
    playerStats.psk.thiefMaxXp = Math.round(playerStats.psk.thiefMaxXp * 1.25);
    playerStats.psk.thiefXp = 0;
    setPlayerThiefXp(xpOverflow);
    updateThiefButtonHtml();
    playAudio('levelup.mp3');
  }
}

function handleFightLevelUp() {
  if (playerStats.psk.fightSkill < 99) {
    playerStats.psk.fightSkill++;
    xpOverflow = playerStats.psk.fightXp - playerStats.psk.fightMaxXp;
    playerStats.psk.fightMaxXp = Math.round(playerStats.psk.fightMaxXp * 1.1);
    playerStats.psk.fightXp = 0;
    setPlayerFightXp(xpOverflow);
    updateFightButtonHtml();
    playAudio('levelup.mp3');
  }
}

function handleWoodLevelUp() {
  if (playerStats.psk.woodSkill < 99) {
    playerStats.psk.woodSkill++;
    xpOverflow = playerStats.psk.woodXp - playerStats.psk.woodMaxXp;
    playerStats.psk.woodMaxXp = Math.round(playerStats.psk.woodMaxXp * 1.1);
    playerStats.psk.woodXp = 0;
    setPlayerWoodXp(xpOverflow);
    updateWoodButtonHtml();
    playAudio('levelup.mp3');
  }
}

function handleFishLevelUp() {
  if (playerStats.psk.fishSkill < 99) {
    playerStats.psk.fishSkill++;
    xpOverflow = playerStats.psk.fishXp - playerStats.psk.fishMaxXp;
    playerStats.psk.fishMaxXp = Math.round(playerStats.psk.fishMaxXp * 1.1);
    playerStats.psk.fishXp = 0;
    setPlayerFishXp(xpOverflow);
    updateFishButtonHtml();
    playAudio('levelup.mp3');
  }
}

// Player Getters
function getPlayerMoney() {
  return playerStats.ps.money;
}

function getPlayerHealth() {
  return playerStats.ps.health;
}

function getPlayerMaxHealth() {
  return playerStats.ps.maxHealth;
}

function getPlayerName() {
  return playerStats.p.name;
}

function getPlayerWoodSkill() {
  return playerStats.psk.woodSkill;
}

function getPlayerThiefSkill() {
  return playerStats.psk.thiefSkill;
}

function getPlayerFightSkill() {
  return playerStats.psk.fightSkill;
}

function getPlayerFishSkill() {
  return playerStats.psk.fishSkill;
}

function getPlayerWoodXp() {
  return playerStats.psk.woodXp;
}

function getPlayerWoodMaxXp() {
  return playerStats.psk.woodMaxXp;
}

function getPlayerFightXp() {
  return playerStats.psk.fightXp;
}

function getPlayerFightMaxXp() {
  return playerStats.psk.fightMaxXp;
}

function getPlayerThiefXp() {
  return playerStats.psk.thiefXp;
}

function getPlayerThiefMaxXp() {
  return playerStats.psk.thiefMaxXp;
}

function getPlayerFishXp() {
  return playerStats.psk.fishXp;
}

function getPlayerFishMaxXp() {
  return playerStats.psk.fishMaxXp;
}

function getPlayerMaxSkill() {
  return playerStats.psk.maxSkill;
}
function getPlayerCopperForges() {
  return playerStats.r.copperForges;
}

function getPlayerIronForges() {
  return playerStats.r.ironForges;
}

function getPlayerGoldForges() {
  return playerStats.r.goldForges;
}
function getPlayerTitaniumForges() {
  return playerStats.r.titaniumForges;
}

function getPlayerForges() {
  return [
    ['copper', getPlayerCopperForges()],
    ['iron', getPlayerIronForges()],
    ['gold', getPlayerGoldForges()],
    ['titanium', getPlayerTitaniumForges()]
  ];
}

// Player Resource Getters

function getPlayerWood() {
  return playerStats.r.wood;
}

function getPlayerFish() {
  return playerStats.r.fish;
}

function getPlayerCopper() {
  return playerStats.r.copper;
}

function getPlayerIron() {
  return playerStats.r.iron;
}

function getPlayerGold() {
  return playerStats.r.gold;
}

function getPlayerTitanium() {
  return playerStats.r.titanium;
}

// Player Statistics Setters

function setPlayerHealth(updateAmount) {
  playerStats.ps.health += updateAmount;
  if (playerStats.ps.health > playerStats.ps.maxHealth) {
    playerStats.ps.health = playerStats.ps.maxHealth;
  } else if (playerStats.ps.health <= 0) {
    handlePlayerDeath();
  }
  updatePlayerHealthHtml();
}

function setPlayerMaxHealth(updateAmount) {
  playerStats.ps.maxHealth += updateAmount;
  updatePlayerHealthHtml();
}

function setPlayerMoney(updateAmount) {
  playerStats.ps.money += updateAmount;
  if (getPlayerMoney <= 0) {
    playerStats.ps.money = 0;
  }
  updatePlayerMoneyHtml();
}

// Player Skills Setters

function setPlayerThiefXp(updateAmount) {
  playerStats.psk.thiefXp += updateAmount;
  if (playerStats.psk.thiefXp >= playerStats.psk.thiefMaxXp) {
    handleThiefLevelUp();
  }
}

function setPlayerWoodXp(updateAmount) {
  playerStats.psk.woodXp += updateAmount;
  if (playerStats.psk.woodXp >= playerStats.psk.woodMaxXp) {
    handleWoodLevelUp();
  }
}

function setPlayerFightXp(updateAmount) {
  playerStats.psk.fightXp += updateAmount;
  if (playerStats.psk.fightXp >= playerStats.psk.fightMaxXp) {
    handleFightLevelUp();
  }
}

function setPlayerFishXp(updateAmount) {
  playerStats.psk.fishXp += updateAmount;
  if (playerStats.psk.fishXp >= playerStats.psk.fishMaxXp) {
    handleFishLevelUp();
  }
}

// Player Resources Setters

function setPlayerWood(updateAmount) {
  playerStats.r.wood += updateAmount;
}

function setPlayerCopper(updateAmount) {
  playerStats.r.copper += updateAmount;
}

function setPlayerIron(updateAmount) {
  playerStats.r.iron += updateAmount;
}

function setPlayerGold(updateAmount) {
  playerStats.r.gold += updateAmount;
}

function setPlayerTitanium(updateAmount) {
  playerStats.r.titanium += updateAmount;
}

function setPlayerFish(updateAmount) {
  playerStats.r.fish += updateAmount;
}

function setPlayerCopperForges(updateAmount) {
  playerStats.r.copperForges += updateAmount;
}

function setPlayerIronForges(updateAmount) {
  playerStats.r.ironForges += updateAmount;
}

function setPlayerGoldForges(updateAmount) {
  playerStats.r.goldForges += updateAmount;
}

function setPlayerTitaniumForges(updateAmount) {
  playerStats.r.titaniumForges += updateAmount;
}
