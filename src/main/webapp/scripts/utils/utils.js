function getRandomInt(maxInt) {
  return Math.floor(Math.random() * maxInt);
}

function updateTaskOutcome(newOutcome) {
  $('#task-outcome').html(newOutcome);
}

function updateAllProfilePics() {
  $('#sidebar-profile-pic').attr('src', playerStats.ps.profilePicture);
  $('#fight-profile-pic').attr('src', playerStats.ps.profilePicture);
}

function stopAllTimers() {
  clearCuttingTimer();
  clearFishingTimer();
  playerIsCutting = false;
  playerIsFishing = false;
}
