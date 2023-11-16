'use strict';

// So we don't have to keep re-finding things on page, find DOM elements once:

const $body = $('body');

const $storiesLoadingMsg = $('#stories-loading-msg');
const $allStoriesList = $('#all-stories-list');
//=================================================
//new => Suggest that the application has different sections or lists for displaying user-specific stories, favorited stroies and a general container for all stories
const $ownStories = $('#my-stories');
const $favoritedStories = $('#favorited-stories');
const $storiesContainer = $('#stories-container');
//=> Suggests a general class selector for all types of story lists in the application
const $storiesLists = $('.stories-list');
//=================================================
const $loginForm = $('#login-form');
const $signupForm = $('#signup-form');
//=================================================
//new => for submiting new stories
const $submitForm = $('#submit-form');
const $navSubmitStory = $('#nav-submit-story');
const $userProfile = $('#user-profie');
//=================================================
const $navLogin = $('#nav-login');
const $navUserProfile = $('#nav-user-profile');
const $navLogOut = $('#nav-logout');

/** To make it easier for individual components to show just themselves, this
 * is a useful function that hides pretty much everything on the page. After
 * calling this, individual components can re-show just what they want.
 */
///newwwww

function hidePageComponents() {
  const components = [
    $loginForm,
    $signupForm,
    $userProfile,
    $submitForm,
    $storiesLists,
  ];
  components.forEach((c) => c.hide());
}

/** Overall function to kick off the app. */

async function start() {
  console.debug('start');

  // "Remember logged-in user" and log in, if credentials in localStorage
  await checkForRememberedUser();
  await getAndShowStoriesOnStart();

  // if we got a logged-in user
  if (currentUser) updateUIOnUserLogin();
}

// Once the DOM is entirely loaded, begin the app

console.warn(
  'HEY STUDENT: This program sends many debug messages to' +
    " the console. If you don't see the message 'start' below this, you're not" +
    ' seeing those helpful debug messages. In your browser console, click on' +
    " menu 'Default Levels' and add Verbose"
);
$(start);
