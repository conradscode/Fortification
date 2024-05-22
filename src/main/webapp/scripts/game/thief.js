function thiefTask(thiefTier) {
  // Checks whether player level is able to complete the tier of quest sent, if not returns false.
  if (getThievingType(thiefTier)) {
    playAudio('stealing.mp3');
    thiefOutcome = getThievingType(thiefTier);
    updateTaskOutcome(thiefOutcome.outcomeText);
    setPlayerMoney(thiefOutcome.moneyGain);
    setPlayerThiefXp(thiefOutcome.xpGain);
    updateTaskInfo('#thief-div');
    setPlayerHealth(thiefOutcome.healthLoss);
  } else {
    updateTaskOutcome('Your thieving skill is too low.');
  }
}

function getThievingType(thiefTier) {
  var thiefOutcome = getRandomInt(9);
  thiefObject = [
    {
      levelRequired: 1,
      healthLoss: [-99, -85, -70, -60, -50, -40, -30, +10, +20],
      xpGain: [+0, +0, +0, +4, +8, +16, +32, +64, +90],
      moneyGain: [+0, +0, +0, +5, +10, +20, +40, +80, +160],
      outcomeText: [
        'You were almost killed by a magical force protecting the baby.',
        'You were intercepted by a beefcake of a good samaritan.',
        'You were beaten up by a group of thugs already robbing the baby.',
        'A random passerby attacked you with a sword, you barely managed to steal a lollipop.',
        'The baby fought back. You managed to steal a piece of bread.',
        'A violent grandma uppercutted you. You stole a bunch of food.',
        'A peasent tried attacking you. You stole a hamper of blueberries.',
        'You stole a bandage and an expensive looking stone.',
        'A doctor helped you with your crime. You stole rare family heirlooms.'
      ]
    },
    {
      levelRequired: 10,
      healthLoss: [-150, -85, -70, -60, -50, -40, -30, +10, +20],
      xpGain: [+100, +120, +140, +160, +180, +200, +220, +240, +260],
      moneyGain: [+1, +25, +45, +50, +100, +200, +400, +800, +1600],
      outcomeText: [
        'You narrowly escape, leaving behind a trail of destruction but manage to steal what you came for.',
        'You trigger a trap and get hit by poisoned darts, but still grab a valuable ring before retreating.',
        "You're ambushed by a rival family's enforcer and sustain cuts and bruises in a fight but manage to escape with your loot.",
        'You accidentally stumble into a secret chamber and barely escape with a small gemstone.',
        'You engage in a fierce battle with a rival thief, sustain wounds, but finally manage to overpower them and steal a valuable scroll.',
        'You narrowly escape a booby-trapped armory but manage to grab a set of enchanted arrows.',
        'You fight off loyal guards and sustain injuries, but grab a valuable antique sword.',
        'You steal a priceless heirloom but are attacked by your father, leaving you with a nasty scar.',
        "You're caught stealing by a family friend, but they agree to help you and together you steal valuable artifacts."
      ]
    },
    {
      levelRequired: 20,
      healthLoss: [-500, -300, -200, -100, -90, -80, -70, 0, 0],
      xpGain: [+260, +300, +340, +400, +480, +600, +700, +750, +1000],
      moneyGain: [+0, +0, +250, +500, +1550, +2550, +3000, +4000, +5107],
      outcomeText: [
        'An angry farmer catches you and beats you with a shovel.',
        'You accidentally trigger a beehive and get stung multiple times.',
        'You get chased by a pack of angry dogs and barely escape with a few carrots.',
        'A group of rowdy teenagers attack you and steal your loot.',
        'You get spotted by a nosy neighbor and have to bribe them to keep quiet.',
        'You successfully steal a variety of fresh vegetables without any issues.',
        'You impress a local chef with your loot and they offer you some silver.',
        'You manage to steal a rare and valuable vegetable that can be sold for a high price.',
        "You find a secret stash of the town's best vegetables and manage to take it all without getting caught."
      ]
    },
    {
      levelRequired: 30,
      healthLoss: [-1000, -750, -600, -500, -400, -250, -150, -100, 0],
      xpGain: [350, 400, 500, 600, 650, 700, 770, 800, 900],
      moneyGain: [0, 0, 250, 0, 2500, 5000, 10000, 12000, 14000],
      outcomeText: [
        "As you're fleeing the bakery, you trip and drop all the stolen goods, alerting the baker and the police.",
        'You steal some bread and pastries, but on your way out you accidentally bump into a police officer and he beats you senseless.',
        "You manage to steal some bread, but as you're leaving the bakery, a bystander recognizes you as a common thief and uses Maxwell's Silver Hammer to beat you down.",
        "As you're stealing from the bakery, the baker catches you in the act and you're forced to flee empty-handed.",
        'You steal bread, but on your way out you get chased by a dog who ravages your leg.',
        "You stole some bread and pastries, but you accidentally set off the bakery's alarm.",
        'You successfully steal a large amount of bread and pastries.',
        'You steal a gargantuan amount of bread, pizza & pastries.',
        "You not only steal a large amount of bread and pastries, but you also manage to rob the bakery's safe and escape without being caught."
      ]
    },
    {
      levelRequired: 40,
      healthLoss: [-1400, -1200, -800, -600, -500, -450, 0, 0, 0],
      xpGain: [400, 500, 700, 900, 950, 1000, 1200, 1400, 1600],
      moneyGain: [0, 0, 0, 3500, 5000, 7000, 11000, 16000, 28000],
      outcomeText: [
        'During the theft, you accidentally trigger a trap and are knocked unconscious by a falling boulder.',
        "You're caught in the act and the bandit is enraged.",
        'The bandit has a pet lion that attacks you during your escape.',
        'You manage to grab a few trinkets, but the bandit chases you down and takes them back aside from one.',
        'You successfully steal a valuable item, but the bandit puts a bounty on your head.',
        'You engage in a brutal fight with the bandit, but barely manage to escape with your life and the loot.',
        'You outsmart the bandit and steal a small fortune without any issue.',
        'The bandit turns out to be a former ally who offers to split his loot with you.',
        "You manage to steal the bandit's prized possession, a rare and valuable artifact, without alerting them."
      ]
    },
    {
      levelRequired: 50,
      healthLoss: [-2000, -1800, -1300, -1000, -900, -800, 0, 0, 0],
      xpGain: [600, 700, 850, 950, 1200, 1500, 1700, 1900, 2000],
      moneyGain: [0, 0, 0, 6000, 8000, 10000, 12000, 24000, 25000],
      outcomeText: [
        'The goblin alerts its tribe. You barely escape with your life.',
        'The goblin catches you and demands you return their possessions.',
        'The goblin demands blood. He beats you with a mechanical arm.',
        "You stole the goblin's mechanical arm, but it tracks you down and demands retribution. You barely escape with your life.",
        'You stole a gem from the goblin, but a passerby spots the theft and demands a share of the loot. You agree, but it leaves you with very little.',
        'You successfully steal from him and manage to make a clean getaway, but not before sustaining a few minor injuries.',
        "The goblin didn't know what hit him, you take a decent amount of valuable loot.",
        'The goblin was bamboozled and you take a valuable weapon or piece of equipment.',
        'You stole a rare family heirloom, how lucky!'
      ]
    },
    {
      levelRequired: 60,
      healthLoss: [-2500, -2000, -1700, -1500, -1000, 0, 0, 0, 0],
      xpGain: [800, 950, 1100, 1400, 1800, 1950, 2100, 2200, 2500],
      moneyGain: [0, 0, 0, 0, 10000, 20000, 30000, 40000, 50000],
      outcomeText: [
        'The orc catches you and beats you up, leaving you with nothing to show for your effort.',
        'The orc caught you and smashes your face with his axe.',
        'You steal from the orc, but he tracks you down and steals everything back plus smacks you silly.',
        'He curses your stolen goods, causing them to lose their value.',
        'While stealing you accidentally set fire to his home, causing him to come after you with a vengeance.',
        'You steal a boatload of goods. The orc is unaware.',
        'You make a clean getaway without any injuries.',
        'You take a large amount of valuable loot without any intervention.',
        "You steal the orc's favourite rare vinyl."
      ]
    },
    {
      levelRequired: 70,
      healthLoss: [-3250, -3000, -2656, -2400, -2251, -1900, 0, 0, 0],
      xpGain: [1200, 1400, 1600, 1800, 2400, 3100, 3400, 3600, 4000],
      moneyGain: [0, 0, 0, 12000, 14000, 22000, 34000, 45000, 55000],
      outcomeText: [
        "You're seized and forced to walk the plank.",
        "You're caught and thrown into the brig for the remainder of the voyage.",
        'The pirates are distraught when they catch you and beat you senseless.',
        'You manage to steal some loot, but the pirates track you down and beat you with peg legs.',
        'You successfully steal some loot, but in the process fall into the sea and fight a shark.',
        "You steal some of their goods but you're wounded in the process.",
        'You successfully steal some loot and make a clean getaway without any injuries.',
        'You fill your bag with lots of loot, but are discovered and chased by the pirates. You manage to outrun them and keep the loot.',
        'You escape with everything you could have hoped for (and a little more).'
      ]
    },
    {
      levelRequired: 80,
      healthLoss: [-4000, -3500, -3250, -3000, -2750, 0, 0, 0, 0],
      xpGain: [2000, 2500, 3000, 3250, 3600, 3750, 3900, 4000, 5000],
      moneyGain: [+0, +0, +0, +15000, 0, +30000, +40000, +50000, +60000],
      outcomeText: [
        'You are caught stealing and the villagers beat you severely before turning you over to the authorities.',
        'The villagers catch you and leave you chained in the streets for anyone to attack you.',
        'You manage to steal some valuables, but are later caught and forced to return them along with a substantial fine.',
        'You are witnessed by a fellow thief who blackmails you into giving him a split of the loot.',
        'You are chased out of the village and steal nothing.',
        'You successfully steal some valuables and make a clean getaway.',
        'Stealing a large wooden statue you escape sneakily.',
        'You steal their mayor, selling him back to the town for a hefty sum.',
        'You steal plenty of valuable items.'
      ]
    },
    {
      levelRequired: 90,
      healthLoss: [-5000, -4500, -4000, -3500, -3000, -2500, 0, 0, 0],
      xpGain: [3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000],
      moneyGain: [0, 0, 0, 18000, 24000, 35000, 46000, 57000, 67000],
      outcomeText: [
        'You are caught stealing and the tavern owner forces you to pay back what you stole and more.',
        'The tavern owner tracks you down and demands you return the stolen goods.',
        'You steal alcohol, but later discover that it was laced with poison and barely manage to survive.',
        'You accidentally drop and break a bottle while escaping, causing a commotion and drawing attention to yourself.',
        'You successfully steal some alcohol and make a clean getaway, but one of your friends gets caught and rats you out to the tavern owner.',
        "You steal plenty of silver from the Tavern's stores.",
        "You escape with lots of alcohol and become a notorious thief among the town's drunks, with some even admiring your skills.",
        'You steal as much as you can without leaving a trace.',
        'You successfully steal a large amount of alcohol, with tales of your daring heist spreading far and wide.'
      ]
    },
    {
      levelRequired: 99,
      healthLoss: [-6000, -5500, -5000, -4500, -4000, -3500, 0, 0, 0],
      xpGain: [4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000],
      moneyGain: [0, 0, 0, 0, 32000, 0, 60000, 80000, 90000],
      outcomeText: [
        "You're caught in the act and arrested by the guards, and as a punishment, your hand is broken to deter other thieves.",
        'You trigger a trap and suffer severe injuries. You manage to escape, but the silver is lost in the chaos.',
        "The bank had put dye packs in the bag and you're left with nothing but a ruined shirt.",
        'On your way out you trip and fall down the stairs, breaking several bones and losing consciousness. When you wake up, you find out that the silver is gone.',
        'You escape with some silver.',
        'The bank puts a bounty on your head, forcing you to give the silver back.',
        'Discovered by the bank and chased by the guards, you outrun them and keep the silver.',
        'You escape unharmed and with plenty of silver to show for it.',
        'You successfully steal a large amount of silver and become a legend among thieves, admired for your daring heist.'
      ]
    }
  ];
  if (getPlayerThiefSkill() >= thiefObject[thiefTier].levelRequired) {
    newThiefObject = {
      // Sets the outcome text using the selected thief task tier and the random roll.
      outcomeText:
        'You rolled ' +
        thiefOutcome +
        '.<br><br>' +
        thiefObject[thiefTier].outcomeText[thiefOutcome] +
        '<br><br>' +
        thiefObject[thiefTier].healthLoss[thiefOutcome] +
        'HP<br><br>+' +
        thiefObject[thiefTier].xpGain[thiefOutcome] +
        'XP<br><br>+' +
        thiefObject[thiefTier].moneyGain[thiefOutcome] +
        ' Silver Coins!',

      healthLoss: thiefObject[thiefTier].healthLoss[thiefOutcome],
      xpGain: thiefObject[thiefTier].xpGain[thiefOutcome],
      moneyGain: thiefObject[thiefTier].moneyGain[thiefOutcome]
    };
    return newThiefObject;
  } else {
    return false;
  }
}
