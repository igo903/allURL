const url = './urls.json';
const ul = document.getElementById('authors');

function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
}


//fetch('https://jsonplaceholder.typicode.com/users')

fetch(url)
  // .then(function(response){
  //   return response.json();
  // })
  .then(response => response.json())

  .then(function(data){
    console.log(data);
    let authors = data.sites;
    return authors.map(function(author){

      let li = createNode('li'),
      alink = createNode('a'),
      span = createNode('span');

      // var node = document.createElement("LI");                 // Create a <li> node
      // var textnode = document.createTextNode("Water");
      // node.appendChild(textnode);
      // document.getElementById("authors").appendChild(node);

      alink.innerHTML = `${author.name}`;
      alink.href = author.url;
      //span.innerHTML = `${author.name} + ${author.url}`;

      console.log(span.innerHTML);

      append(li, alink);
      //append(li, span);
      document.getElementById("authors").appendChild(li);

    })
  })

.catch(function(error){
  console.log('there was an error', error);
  //console.log(JSON.stringify(error));
})
