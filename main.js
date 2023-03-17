document.addEventListener('DOMContentLoaded', function() {
// print the initial document object
console.log(document);

let head = document.querySelector('head');

let h1 = document.querySelector('h1');
h1.parentNode.removeChild(h1);

document.title = 'Lab 7'



let body = document.querySelector('body');
let h99 = document.createElement('h1');
h99.textContent = 'Lab7 Assignment';
h99.style.color = 'blue';
body.appendChild(h99);

let hr1 = document.createElement('hr');
body.appendChild(hr1);

let h2_1 = document.createElement('h2');
h2_1.style.color = 'red';
h2_1.textContent = 'Task';
body.appendChild(h2_1);

let p5 = document.createElement("p");
p5.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";
body.appendChild(p5);


let p1 = document.createElement('p');
body.appendChild(p1);

let ul1 = document.createElement('ul');
body.appendChild(ul1);

let  li1 = document.createElement('li');
li1.classList.add('even');
li1.style.color = 'green';
li1.innerHTML = 'find elements in the DOM (<b>5 points</b>);';
ul1.appendChild(li1);

let li2 = document.createElement('li');
li2.classList.add('odd');
li2.style.color = 'purple';
li2.innerHTML = 'create/add/remove elements (<b>5 points</b>);';
ul1.appendChild(li2);

let li3 = document.createElement('li');
li3.classList.add('even');
li3.style.color = 'green';
li3.innerHTML = 'change content of the elements (<b>5 points</b>);';
ul1.appendChild(li3);

let li4 = document.createElement('li');
li4.classList.add('odd');
li4.style.color = 'purple';
li4.innerHTML = 'change styles of the elements (<b>5 points</b>);';
ul1.appendChild(li4);

let li5 = document.createElement('li');
li5.classList.add('even');
li5.style.color = 'green';
li5.innerHTML = 'change attributes of the elements (<b>5 points</b>);';
ul1.appendChild(li5);

let li6 = document.createElement('li');
li6.classList.add('odd');
li6.style.color = 'purple';
li6.innerHTML = 'change classes of the elements (<b>5 points</b>).';
ul1.appendChild(li6);

let p2 = document.createElement('p');
body.appendChild(p2);






let hr10 = document.createElement("hr");

let h10 = document.createElement("h2");
h10.textContent = "Submission";
h10.style.color = "red";

let p10 = document.createElement("p");
p10.textContent = "To submit your work, follow these instructions:";

let ul10 = document.createElement("ul");

var li10 = document.createElement("li");
li10.classList.add("even");
li10.style.color = "green";
li10.innerHTML = 'Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>).';

var li11 = document.createElement("li");
li11.classList.add("odd");
li11.style.color = "purple";
li11.textContent = "Clone this repository to your local machine and work inside it.";

var li12 = document.createElement("li");
li12.classList.add("even");
li12.style.color = "green";
li12.innerHTML = 'Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with "Hello, World!" message (<b>1 point</b>).';

var li13 = document.createElement("li");
li13.classList.add("odd");
li13.style.color = "purple";
li13.innerHTML = 'Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).';

var li14 = document.createElement("li");
li14.classList.add("even");
li14.style.color = "green";
li14.innerHTML= 'Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).';

var li15 = document.createElement("li");
li15.classList.add("odd");
li15.style.color = "purple";
li15.innerHTML = 'Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).';

var li16 = document.createElement("li");
li16.classList.add("even");
li16.style.color = "green";
li16.innerHTML = 'After you finish your work, submit it to the Github (<b>2 points</b>).';

ul10.appendChild(li10);
ul10.appendChild(li11);
ul10.appendChild(li12);
ul10.appendChild(li13);
ul10.appendChild(li14);
ul10.appendChild(li15);
ul10.appendChild(li16);


body.appendChild(hr10);
body.appendChild(h10);
body.appendChild(p10);
body.appendChild(ul10);

let  hr3 = document.createElement('hr');
body.appendChild(hr3);

console.log(document);
});






























