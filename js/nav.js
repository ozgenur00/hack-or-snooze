'use strict';

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug('navAllStories', evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on('click', '#nav-all', navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug('navLoginClick', evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
  $storiesContainer.hide();
}

$navLogin.on('click', navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug('updateNavOnLogin');
  $('.main-nav-links').css('display', 'flex');
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

//new!!!
//================================================
//=> hides current page components, shows the list of all stories and the form to submit a new story
function navSubmitStoryClick(e) {
  console.debug('navSubmitStoryClick', e);
  hidePageComponents();
  $allStoriesList.show();
  $submitForm.show();
}

$navSubmitStory.on('click', navSubmitStoryClick);
//=>hide current components and display favorites or user's stories
function navFavoritesClick(e) {
  console.debug('navFavoriteClick', e);
  hidePageComponents();
  putFavoritesListOnPage();
}
$body.on('click', '#nav-favorites', navFavoritesClick);

function navMyStories(e) {
  console.debug('navMyStories', e);
  hidePageComponents();
  putUserStoriesOnPage();
  $ownStories.show();
}

$body.on('click', '#nav-my-stories', navMyStories);
//=> click event of the user profile navigation link
function navProfileClick(e) {
  console.debug('navProfileClick', e);
  hidePageComponents();
  $userProfile.show();
}

$navUserProfile.on('click', navProfileClick);
