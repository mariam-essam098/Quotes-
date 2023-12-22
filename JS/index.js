
var quotes = [

  '“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”— Eleanor Roosevelt',
  '“When you change your thoughts, remember to also change your world.”—Norman Vincent Peale',
  '“If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.” — Steve Jobs',
  '“When a woman becomes her own best friend life is easier.” – Diane Von Furstenberg',
  '“The standard you walk past, is the standard you accept.” —David Hurley',
  '“Success is stumbling from failure to failure with no loss of enthusiasm.” ―Winston Churchill',
  '“When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.” — Henry Ford',
  '"Change will not come if we wait for some other person or some other time. We are the ones we’ve been waiting for. We are the change that we seek." ― Barack Obama',
  '"There are two types of people: The ones who give you 50 reasons it can’t be done ... and the ones who just do it."― Hoda Kotb',
  '"Keep your face always toward the sunshine — and shadows will fall behind you."―Walt Whitman',
  '"How wonderful it is that nobody need wait a single moment before starting to improve the world." — Anne Frank',

];


function displayQuote() {

  var index = Math.floor(Math.random() * quotes.length);
  var div = document.querySelector('#quote');
  var quote = `<div class="card">
<p>${quotes[index]}</p>
</div>

`;
  div.innerHTML = quote;

}