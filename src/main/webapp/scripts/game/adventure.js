var currentlyAdventuring = false;
var currentAdventureObject = null;
var adventureObject = [
  {
    adventureQuestion: 'You come across an empty camp plentiful with supplies...',
    moneyChange: [0, 250],
    healthChange: [0, 0],
    woodChange: [0, 20],
    fishChange: [0, 15],
    choices: ['Leave the camp as it is.', 'Steal as much as your cart will carry.'],
    outcomes: ['You left the camp without taking anything.', 'You stole a whole bunch of stuff.']
  },
  {
    adventureQuestion: 'You come across a lone wanderer starved...',
    moneyChange: [0, 500],
    healthChange: [25, 0],
    woodChange: [0, 0],
    fishChange: [0, 0],
    choices: ['Feed him what you can.', 'Beat him up and take his stuff.'],
    outcomes: ['You taught him how to fish. He healed some of your wounds.', 'You stole a whole bunch of silver.']
  },
  {
    adventureQuestion: 'You come across a magical being that appears to be sleeping...',
    moneyChange: [250, 0],
    healthChange: [0, -50],
    woodChange: [0, 0],
    fishChange: [0, 0],
    choices: ['Do nothing and head onwards.', 'Kill the magical being.'],
    outcomes: [
      'The being telepathically sent you to a supply crate.',
      'The being sent you temporarily insane. You hit your head on a rock.'
    ]
  },
  {
    adventureQuestion: 'You stumble upon a group of bandits holding a merchant captive...',
    moneyChange: [500, 0],
    healthChange: [-25, -50],
    woodChange: [25, 0],
    fishChange: [5, 0],
    choices: ['Help the merchant and save him.', 'Join in with the bandits.'],
    outcomes: [
      'You save the merchant and he tells you about a secret stash.',
      'The bandits go along with it then turn on you and beat you up.'
    ]
  },
  {
    adventureQuestion: 'You discover a hidden cave with a treasure chest guarded by traps...',
    moneyChange: [0, 1000],
    healthChange: [-75, 0],
    woodChange: [0, 0],
    fishChange: [0, 0],
    choices: ['Attempt to disable the traps.', 'Infiltrate the cave but dodge the traps as needed.'],
    outcomes: [
      'They were rigged to blow with any tampering, ouch.',
      'Due to your ninja skills you managed to dodge them all and escape with the treasure.'
    ]
  },
  {
    adventureQuestion: 'You encounter a wounded animal that seems to be in pain...',
    moneyChange: [1500, 0],
    healthChange: [-10, +100],
    woodChange: [0, 0],
    fishChange: [0, 0],
    choices: ['Treat his wounds and give him some blood.', 'Kill him of course, it is free meat.'],
    outcomes: [
      'The animal held magical powers and transported you to a region of riches.',
      'You eat him up and feel strong.'
    ]
  },
  {
    adventureQuestion: 'You come across a village in distress with a monster attacking...',
    moneyChange: [0, 2500],
    healthChange: [0, -35],
    woodChange: [0, 0],
    fishChange: [0, 0],
    choices: ['Forget it, it is not your problem.', 'Infiltrate the village and kill the monster.'],
    outcomes: [
      'Onwards you head, not a guilty thought in your mind.',
      'The villagers crown you as a true warrior.'
    ]
  },
  {
    adventureQuestion: 'You spot a lost child wandering in the woods...',
    moneyChange: [0, 0],
    healthChange: [-75, 0],
    woodChange: [0, 0],
    fishChange: [0, 0],
    choices: ['Attempt to talk to him.', 'Avoid making contact at all costs.'],
    outcomes: [
      'He attacks you brutally. This was no child but a mimic.',
      'Lucky you, you spot another traveller being attacked by the so-called child.'
    ]
  },
  {
    adventureQuestion: 'You see a group of travelers being attacked by a swarm of insects...',
    moneyChange: [500, 0],
    healthChange: [25, 0],
    woodChange: [0, 0],
    fishChange: [0, 0],
    choices: ['Attempt to catch the insects with a giant net.', 'Shoot your bow and arrow into the craze.'],
    outcomes: [
      'The net catches all the insects in one fell swoop.',
      'What were you thinking, you killed everybody.'
    ]
  },
  {
    adventureQuestion: 'You stumble upon a mysterious portal that leads to an unknown world...',
    moneyChange: [0, 1000],
    healthChange: [-50, 0],
    woodChange: [0, 0],
    fishChange: [0, 0],
    choices: ['This is stupid, of course leave it alone.', 'Jump right on in.'],
    outcomes: [
      'You stare in to the portal not knowing it is hypnotising you.',
      'You go in voluntarily and the portal shows you everything you need to know.'
    ]
  },
  {
    adventureQuestion:
      'You come across a riddle-obsessed sphinx who blocks your path...<br>He says slowly: What is the sister of the sun, though made for the night? The fire causes her tears to fall, and when she is near dying they cut off her head.',
    moneyChange: [10000, 0],
    healthChange: [0, -90],
    woodChange: [0, 0],
    fishChange: [0, 0],
    choices: ['Candle.', 'Kill the sphinx.'],
    outcomes: ['Of course it was.', 'An idiotic choice, he dodges your attack and clobbers you down.']
  }
];
function toggleAdventure() {
  currentlyAdventuring = !currentlyAdventuring;
  if (currentlyAdventuring) {
    $('#toggle-adventure').html('Head Home');
    alternateButtons(true);
    chooseScenario();
    playAudio('adventure.mp3');
  } else {
    $('#toggle-adventure').html('Begin Adventure');
    $('#adventure-mode').hide();
    $('#adventure-button-next').hide();
  }
}

function chooseScenario() {
  alternateButtons(false);
  var int = getRandomInt(adventureObject.length);
  currentAdventureObject = adventureObject[int];
  updateTaskOutcome(currentAdventureObject.adventureQuestion);
  $('#adventure-option-0').html(currentAdventureObject.choices[0]);
  $('#adventure-option-1').html(currentAdventureObject.choices[1]);
}

function selectChoice(playerChoice) {
  alternateButtons(true);
  // Creates an organised message for the player to see his results.
  $('#task-outcome').html(
    currentAdventureObject.outcomes[playerChoice] +
      '<br>' +
      // If money is < 0 don't add a + sign
      (currentAdventureObject.moneyChange[playerChoice] < 0 ? '' : '+') +
      currentAdventureObject.moneyChange[playerChoice] +
      ' Silver Coins<br> ' +
      (currentAdventureObject.healthChange[playerChoice] < 0 ? '' : '+') +
      currentAdventureObject.healthChange[playerChoice] +
      ' HP<br> ' +
      (currentAdventureObject.woodChange[playerChoice] < 0 ? '' : '+') +
      currentAdventureObject.woodChange[playerChoice] +
      ' Wood<br> ' +
      (currentAdventureObject.fishChange[playerChoice] < 0 ? '' : '+') +
      currentAdventureObject.fishChange[playerChoice] +
      ' Fish'
  );
  setPlayerMoney(currentAdventureObject.moneyChange[playerChoice]);
  setPlayerHealth(currentAdventureObject.healthChange[playerChoice]);
  setPlayerWood(currentAdventureObject.woodChange[playerChoice]);
  setPlayerFish(currentAdventureObject.fishChange[playerChoice]);
}

// Shows particular buttons based on whether player is currently making a decision.
function alternateButtons(scenarioIsComplete) {
  if (scenarioIsComplete) {
    $('#adventure-button-next').show();
    $('#adventure-mode').hide();
  } else {
    $('#adventure-mode').show();
    $('#adventure-button-next').hide();
  }
}
