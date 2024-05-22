function homePage() {
  hideAllPages();
  $('#current-task-info').html('Homepage');
  $('#home-page').show();
  $('#player-skills-p').html(
    'Woodcutting: ' +
      getPlayerWoodXp() +
      '/' +
      getPlayerWoodMaxXp() +
      '<br>Fighting: ' +
      getPlayerFightXp() +
      '/' +
      getPlayerFightMaxXp() +
      '<br>Thieving: ' +
      getPlayerThiefXp() +
      '/' +
      getPlayerThiefMaxXp() +
      '<br>Fishing: ' +
      getPlayerFishXp() +
      '/' +
      getPlayerFishMaxXp()
  );
  $('#player-resources-p').html(
    'Silver Coins: ' + getPlayerMoney() + '<br>Wood: ' + getPlayerWood() + '<br>Fish: ' + getPlayerFish()
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
  $('#side-nav').show();
}

function showPage(div) {
  hideAllPages();
  updateTaskInfo(div);
  $(div).show();
}

function hideAllPages() {
  stopAllTimers();
  $('#home-page').hide();
  $('#task-page').hide();
  $('#wood-div').hide();
  $('#hospital-div').hide();
  $('#fight-div').hide();
  $('#ongoing-fight').hide();
  $('#thief-div').hide();
  $('#fish-div').hide();
  $('#forge-div').hide();
  $('#adventure-div').hide();
  $('#store-div').hide();
  $('#profile-pic-div').hide();
  $('#account-div').hide();
  $('#credits-div').hide();
}

function updateTaskInfo(div) {
  // Updates the heading to show relevant skill relating to current page.
  switch (div) {
    case '#wood-div':
      $('#current-task-info').html(
        'Woodcutting ~ Level: ' +
          getPlayerWoodSkill() +
          ' ~ XP: ' +
          getPlayerWoodXp() +
          '/' +
          getPlayerWoodMaxXp() +
          '<br>Wood: ' +
          getPlayerWood()
      );
      break;
    case '#fight-div':
      $('#current-task-info').html(
        'Fighting ~ Level: ' + getPlayerFightSkill() + ' ~ XP: ' + getPlayerFightXp() + '/' + getPlayerFightMaxXp()
      );
      break;
    case '#thief-div':
      $('#current-task-info').html(
        'Thieving ~ Level: ' + getPlayerThiefSkill() + ' ~ XP: ' + getPlayerThiefXp() + '/' + getPlayerThiefMaxXp()
      );
      break;
    case '#fish-div':
      $('#current-task-info').html(
        'Fishing ~ Level: ' +
          getPlayerFishSkill() +
          ' ~ XP: ' +
          getPlayerFishXp() +
          '/' +
          getPlayerFishMaxXp() +
          '<br>Fish: ' +
          getPlayerFish()
      );
      break;
    case '#forge-div':
      $('#current-task-info').html('Forging');
      break;
    case '#hospital-div':
      $('#current-task-info').html('Visit a healer');
      break;
    case '#adventure-div':
      $('#current-task-info').html('Adventure mode');
      break;
    case '#death-screen':
      $('#current-task-info').html('You died...');
      break;
    case '#store-div':
      $('#current-task-info').html('Player Shop');
      break;
    case '#profile-pic-div':
      $('#current-task-info').html('Select your profile picture');
      break;
    case '#account-div':
      $('#current-task-info').html('Manage account');
      break;
    case '#credits-div':
      $('#current-task-info').html('Fortification Credits');
      break;
    default:
      $('#current-task-info').html('Oops something went wrong!');
  }
}
