// List of all enemies and their statistics
var enemiesObject = [
  {
    levelRequired: 1,
    type: 'sunflower',
    maxDamage: 15,
    xpGain: 50,
    health: 100
  },
  {
    levelRequired: 20,
    type: 'mushroom',
    maxDamage: 60,
    xpGain: 100,
    health: 200
  },
  {
    levelRequired: 30,
    type: 'cockerel',
    maxDamage: 180,
    xpGain: 200,
    health: 300
  },
  {
    levelRequired: 40,
    type: 'cow',
    maxDamage: 360,
    xpGain: 400,
    health: 400
  },
  {
    levelRequired: 50,
    type: 'goblin',
    maxDamage: 720,
    xpGain: 500,
    health: 500
  },
  {
    levelRequired: 60,
    type: 'bandit',
    maxDamage: 1440,
    xpGain: 600,
    health: 600
  },
  {
    levelRequired: 70,
    type: 'orc',
    maxDamage: 2880,
    xpGain: 700,
    health: 700
  },
  {
    levelRequired: 80,
    type: 'fishman',
    maxDamage: 5760,
    xpGain: 800,
    health: 800
  },
  {
    levelRequired: 90,
    type: 'bear',
    maxDamage: 11520,
    xpGain: 900,
    health: 900
  },
  {
    levelRequired: 99,
    type: 'penguin',
    maxDamage: 15000,
    xpGain: 0,
    health: 1000
  }
];

function checkPlayerFightSkill(enemyTier) {
  if (getEnemyType(enemyTier)) {
    updateTaskOutcome('');
    alternateFightPages(true);
    beginFight(enemyTier);
  } else {
    updateTaskOutcome('Your fighting skill is too low.');
  }
}

function beginFight(enemyTier) {
  var enemyObject = getEnemyType(enemyTier);
  updateFightStatistics(enemyObject.health);
  $('#fighting').attr('src', './img/enemies/' + enemyObject.type + '.png');
  var fightTimer = setInterval(function () {
    damageReceived = Math.round(getRandomInt(enemyObject.maxDamage));
    damageGiven = Math.round(getRandomInt(25) * (enemyTier + 1));
    setPlayerHealth(-damageReceived);
    enemyObject.health -= damageGiven;
    updateFightStatistics(enemyObject.health);
    if (getPlayerHealth() <= 0) {
      updateTaskOutcome('');
      clearInterval(fightTimer);
    } else if (enemyObject.health <= 0) {
      clearInterval(fightTimer);
      setPlayerFightXp(enemyObject.xpGain);
      updateTaskInfo('#fight-div');
      alternateFightPages(false);
      updateTaskOutcome(
        'Congratulations you beat the ' + enemyObject.type + '!<br><br> +' + enemyObject.xpGain + ' Fighting XP.'
      );
      playAudio('victory.mp3');
    } else {
      playAudio('fighting.mp3');
      $('#task-outcome').append(
        ' ' +
          enemyObject.type +
          ' walloped ' +
          getPlayerName() +
          ' for ' +
          damageReceived +
          ' DMG! <br> ' +
          getPlayerName() +
          ' smacked ' +
          enemyObject.type +
          ' for ' +
          damageGiven +
          ' DMG!<br><br>'
      );
    }
  }, 2000);
}

function getEnemyType(enemyTier) {
  if (getPlayerFightSkill() >= enemiesObject[enemyTier].levelRequired) {
    return {
      type: enemiesObject[enemyTier].type,
      maxDamage: enemiesObject[enemyTier].maxDamage,
      xpGain: enemiesObject[enemyTier].xpGain,
      health: enemiesObject[enemyTier].health
    };
  } else {
    return false;
  }
}

function alternateFightPages(playerIsFighting) {
  if (playerIsFighting) {
    $('#fight-div').hide();
    $('#side-nav').hide();
    $('#ongoing-fight').show();
  } else {
    $('#ongoing-fight').hide();
    $('#side-nav').show();
    $('#fight-div').show();
  }
}

function updateFightStatistics(enemyHealth) {
  $('#player-fight-health').html('Health: ' + getPlayerHealth());
  $('#enemy-health').html('Health: ' + enemyHealth);
}
