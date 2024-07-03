function modifySpotifyPage() {
  // First image
  const firstClass = document.querySelector('.deomraqfhIAoSB3SgXpu');
  if (firstClass) {
    firstClass.innerHTML += '<img src="https://media0.giphy.com/media/UW1PqDNlTyNTVfiq3j/giphy.gif?cid=6c09b952we2ql20w5bd0tavndtbabbiyw28aotve3hx3jy18&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" style="height: 120px;">';
  }

  // Second image
  const secondClass = document.querySelector('.mwpJrmCgLlVkJVtWjlI1');
  if (secondClass) {
    secondClass.innerHTML += '<img src="https://media.tenor.com/KCR6uHAlphkAAAAj/hello-kitty.gif" style="height: 82px;margin-bottom: 140px;">';
  }
}

// Run the function when the page loads
modifySpotifyPage();

// Also run the function whenever the URL changes (for single-page applications)
let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    modifySpotifyPage();
  }
}).observe(document, {subtree: true, childList: true});
