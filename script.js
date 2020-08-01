// Creates an instance of the NeuralNetwork class in the net constant
const net = new brain.NeuralNetwork();
// all the data to use in the neural network
const data = [{"input":{"r":0,"g":0,"b":0},"output":[1]},{"input":{"r":1,"g":1,"b":1},"output":[0]},{"input":{"r":0.944808294257035,"g":0.6674782369918966,"b":0.5766399840934922},"output":[0]},{"input":{"r":0.5639948440377565,"g":0.7176485901155334,"b":0.09089889404108642},"output":[1]},{"input":{"r":0.1735805927844496,"g":0.055394078147760206,"b":0.5718893632998685},"output":[1]},{"input":{"r":0.9981576669053267,"g":0.5599753720355853,"b":0.14004222444100312},"output":[0]},{"input":{"r":0.19516320408209298,"g":0.19675137123292608,"b":0.6611291964504313},"output":[1]},{"input":{"r":0.6164834530502397,"g":0.8040215937551165,"b":0.8850111600872357},"output":[0]},{"input":{"r":0.3041418057844665,"g":0.44672594827873735,"b":0.2457621104163552},"output":[1]},{"input":{"r":0.9700762875730256,"g":0.04347977676242154,"b":0.48983830868727063},"output":[0]},{"input":{"r":0.5208315789104343,"g":0.7362065633265635,"b":0.7122939301003071},"output":[0]},{"input":{"r":0.23520758286480792,"g":0.9557008141546155,"b":0.11014352211423728},"output":[0]},{"input":{"r":0.589232622786013,"g":0.6262382467772079,"b":0.22068417769342719},"output":[1]},{"input":{"r":0.4974235182026916,"g":0.06800405227377082,"b":0.6991588905288477},"output":[1]},{"input":{"r":0.014012292032445028,"g":0.8366939310719097,"b":0.7852317228157895},"output":[0]},{"input":{"r":0.6034691954439091,"g":0.995582899847562,"b":0.07976036555452626},"output":[0]},{"input":{"r":0.3954203797322433,"g":0.9691389246293933,"b":0.5340578656677233},"output":[0]},{"input":{"r":0.597573150116294,"g":0.6469698799143129,"b":0.14327503451373547},"output":[0]},{"input":{"r":0.03137390761585168,"g":0.6714730771317701,"b":0.526269930102498},"output":[1]},{"input":{"r":0.4060610880542337,"g":0.8395520707830146,"b":0.9519617868006716},"output":[0]},{"input":{"r":0.09937849463297255,"g":0.998567114295779,"b":0.7305857380072192},"output":[0]},{"input":{"r":0.19658225353968817,"g":0.34243367565320626,"b":0.6907903948687992},"output":[1]},{"input":{"r":0.14183816462521293,"g":0.5768425498165213,"b":0.20904833189001226},"output":[1]},{"input":{"r":0.1304525766950142,"g":0.15770748106098176,"b":0.1513780578868713},"output":[1]},{"input":{"r":0.08233178944743225,"g":0.13330341221297903,"b":0.9740919835995931},"output":[1]},{"input":{"r":0.6679568819262076,"g":0.2572629537807716,"b":0.056641327982522194},"output":[1]},{"input":{"r":0.9775544056225354,"g":0.6484034439721735,"b":0.35002088833074785},"output":[0]},{"input":{"r":0.4379821477793624,"g":0.8012236229142786,"b":0.9807309238569026},"output":[0]},{"input":{"r":0.1903408797077648,"g":0.8217165591038438,"b":0.7168542544342942},"output":[1]},{"input":{"r":0.3493291422243354,"g":0.7156906546326169,"b":0.8432935745081787},"output":[1]},{"input":{"r":0.9105963156497519,"g":0.9959716499017874,"b":0.38457267991993893},"output":[0]},{"input":{"r":0.5939915201365638,"g":0.2869215845407964,"b":0.6197160854239552},"output":[1]},{"input":{"r":0.8855809221913826,"g":0.7989923584284897,"b":0.0923202306111528},"output":[0]}];
// trains the neural network
net.train(data);
// gets all the elements using the DOM
const colorEl = document.getElementById('color');
const guessEl = document.getElementById('guess');
const whiteButton = document.getElementById('white-button');
const blackButton = document.getElementById('black-button');
const printButton = document.getElementById('print-button');
// creates the color variable and gives it a random rgb value
let color;
setRandomColor();
// listens for clicks on all buttons
whiteButton.addEventListener('click', () => {
  chooseColor(1);
})

blackButton.addEventListener('click', () => {
  chooseColor(0);
})

printButton.addEventListener('click', print);
// writes a function that pushes data to the neural network data 
function chooseColor(value) {
  setRandomColor();
  // if the value is 0 the output would be mean black otherwise it would be mean white
  data.push({
    input: color,
    output: [value]
  });
}
// prints the data as a string
function print() {
  console.log(JSON.stringify(data));
}
// sets a random rgb value for color and runs the first item in the neural network array and changes the color of the text depending on the output and also sets the background to be the color rgb value
function setRandomColor() {
  color = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  }
  const guess = net.run(color)[0];
  guessEl.style.color = guess > .5 ? '#FFF' : '#000';
  colorEl.style.backgroundColor = 
    `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255})`
}
