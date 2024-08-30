const stateUrls = {
  'uttar pradesh': './popular_places/uttar-pradesh.html',
  'maharashtra': './popular_places/maharashtra.html',
  'bihar': './popular_places/bihar.html',
  'west bengal': './popular_places/west-bengal.html',
  'madhya pradesh': './popular_places/madhya-pradesh.html',
  'tamil nadu': './popular_places/tamil-nadu.html',
  'rajasthan': './popular_places/rajasthan.html',
  'karnataka': './popular_places/karnataka.html',
  'gujarat': './popular_places/gujarat.html',
  'andhra pradesh': './popular_places/andhra-pradesh.html',
  'odisha': './popular_places/odisha.html',
  'telangana': './popular_places/telangana.html',
  'kerala': './popular_places/kerala.html',
  'jharkhand': './popular_places/jharkhand.html',
  'assam': './popular_places/assam.html',
  'punjab': './popular_places/punjab.html',
  'chhattisgarh': './popular_places/chhattisgarh.html',
  'haryana': './popular_places/haryana.html',
  'jammu and kashmir': './popular_places/jammu-kashmir.html',
  'uttarakhand': './popular_places/uttarakhand.html',
  'himachal pradesh': './popular_places/himachal-pradesh.html',
  'tripura': './popular_places/tripura.html',
  'meghalaya': './popular_places/meghalaya.html',
  'manipur': './popular_places/manipur.html',
  'nagaland': './popular_places/nagaland.html',
  'goa': './popular_places/goa.html',
  'arunachal pradesh': './popular_places/arunachal-pradesh.html',
  'mizoram': './popular_places/mizoram.html',
  'sikkim': './popular_places/sikkim.html',
  'delhi': './popular_places/delhi.html',
  'puducherry': './popular_places/puducherry.html',
  'chandigarh': './popular_places/chandigarh.html',
  'andaman and nicobar islands': './popular_places/andaman-nicobar.html',
  'dadra and nagar haveli': './popular_places/dadra-nagar.html',
  'daman and diu': './popular_places/daman-diu.html',
  'lakshadweep': './popular_places/lakshadweep.html',
  'ladakh': './popular_places/ladakh.html',
};

function searchState() {
  const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
  const url = stateUrls[searchInput];
  if (url) {
    window.location.href = url;
  } else {
    alert('State not found. Please try again.');
  }
}

function showSuggestions() {
  const input = document.getElementById('searchInput').value.trim().toLowerCase();
  const suggestionsContainer = document.getElementById('suggestions');
  suggestionsContainer.innerHTML = '';

  if (input.length === 0) return;

  const suggestions = Object.keys(stateUrls).filter(state => state.startsWith(input));

  suggestions.forEach(state => {
    const suggestionItem = document.createElement('div');
    suggestionItem.textContent = state.charAt(0).toUpperCase() + state.slice(1);
    suggestionItem.classList.add('suggestion-item');
    suggestionItem.addEventListener('click', () => {
      document.getElementById('searchInput').value = state;
      searchState();
    });
    suggestionsContainer.appendChild(suggestionItem);
  });
}

const hamburger = document.getElementById('hamburger');
const dropdownMenu = document.getElementById('dropdownMenu');

hamburger.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});
