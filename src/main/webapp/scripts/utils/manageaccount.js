function deleteAccount() {
  if ($('#current-password-input').val().length >= 1) {
    userObject = {
      name: Cookies.get('name'),
      password: $('#current-password-input').val(),
      type: '',
      dateSaved: 0
    };
    $.ajax({
      url: 'PlayerController',
      data: JSON.stringify(userObject),
      headers: {
        'Content-type': 'application/json'
      },
      method: 'DELETE',
      success: function (responseText) {
        if (responseText === 'success') {
          showLoginPage('Successfully deleted account.');
        } else {
          updateTaskOutcome('Password was incorrect.');
        }
      }
    });
  } else {
    updateTaskOutcome('Invalid current password input.');
  }
}

function changePassword() {
  if (
    $('#current-password-input').val().length >= 1 &&
    $('#new-password-input').val().length >= 1 &&
    $('#confirm-password-input').val().length >= 1
  ) {
    if ($('#new-password-input').val() === $('#confirm-password-input').val()) {
      userObject = {
        name: Cookies.get('name'),
        password: $('#current-password-input').val(),
        type: 'checkpassword',
        dateSaved: 0
      };
      $.ajax({
        url: 'PlayerController',
        data: JSON.stringify(userObject),
        headers: {
          'Content-type': 'application/json'
        },
        method: 'POST',
        success: function (responseText) {
          if (responseText.type === 'success') {
            userObject.type = 'changepassword';
            userObject.password = $('#new-password-input').val();
            userObject.dateSaved = new Date();
            playerStats.p = userObject;
            $.ajax({
              url: 'PlayerController',
              data: JSON.stringify(playerStats),
              headers: {
                'Content-type': 'application/json'
              },
              method: 'PUT',
              success: function (responseText) {
                if (responseText === 'success') {
                  showLoginPage('Successfully changed password.');
                } else {
                  updateTaskOutcome('Error changing password.');
                }
              }
            });
          } else {
            updateTaskOutcome('Password was incorrect.');
          }
        }
      });
    } else {
      updateTaskOutcome('New passwords do not match.');
    }
  } else {
    updateTaskOutcome('Invalid current password input.');
  }
}

function showLoginPage(outcome) {
  Cookies.remove('name');
  hideAllPages();
  $('#current-task-div').hide();
  $('#side-nav').hide();
  $('#login-outcome').html(outcome);
  $('#login-page').show();
}
