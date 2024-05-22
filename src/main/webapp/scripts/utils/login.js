$(document).ready(function () {
  // If a user cookie exists then auto login
  if (Cookies.get('name')) {
    userObject = {
      name: Cookies.get('name'),
      password: 'b',
      type: 'cookie',
      dateSaved: new Date()
    };
    $.ajax({
      url: 'PlayerController',
      data: JSON.stringify(userObject),
      headers: {
        'Content-type': 'application/json'
      },
      method: 'POST',
      success: function (responseText) {
        playerStats = responseText;
        loginSuccess();
      }
    });
  } else {
    $('#login-page').show();
  }

  $('#login-button').click(function () {
    if (returnUserObject('login')) {
      $.ajax({
        url: 'PlayerController',
        data: returnUserObject('login'),
        headers: {
          'Content-type': 'application/json'
        },
        method: 'POST',
        success: function (responseText) {
          if (responseText.type) {
            $('#login-outcome').html(responseText.type);
          } else {
            playerStats = responseText;
            Cookies.set('name', playerStats.p.name);
            loginSuccess();
          }
        }
      });
    }
  });

  $('#register-button').click(function () {
    if (returnUserObject('register')) {
      $.ajax({
        url: 'PlayerController',
        data: returnUserObject('register'),
        headers: {
          'Content-type': 'application/json'
        },
        method: 'POST',
        success: function (responseText) {
          $('#login-outcome').html(responseText);
        }
      });
    }
  });
});

function returnUserObject(buttonClicked) {
  if ($('#username-input').val().length > 0 && $('#password-input').val().length > 0) {
    var dateSaved = new Date();
    return JSON.stringify(
      (userObject = {
        name: $('#username-input').val(),
        password: $('#password-input').val(),
        type: buttonClicked,
        dateSaved: dateSaved
      })
    );
  } else {
    $('#login-outcome').html('Invalid Input.');
    return false;
  }
}

function logout() {
  Cookies.remove('name');
  location.reload(true);
}

function loginSuccess() {
  var timeSinceSaved = Math.floor((new Date() - new Date(playerStats.ps.dateSaved)) / 1000);
  // Checks how many hours have passed since last save.
  interval = timeSinceSaved / 3600;
  if (interval >= 1) {
    randomEvent = getRandomEvent();
    setPlayerMoney(randomEvent.moneyGained);
    savePlayerStats();
    alert(randomEvent.outcomeText);
  }
  $('#player-name').html(playerStats.p.name);
  initialPlayerStatsUpdate();
  updateAllProfilePics();
  $('#login-page').hide();
  homePage();
  $('#side-nav').show();
  $('#current-task-div').show();
}

function initialPlayerStatsUpdate() {
  updatePlayerHealthHtml();
  updatePlayerMoneyHtml();
  updateWoodButtonHtml();
  updateFightButtonHtml();
  updateThiefButtonHtml();
  updateFishButtonHtml();
  updateForgeStatistics();
}
