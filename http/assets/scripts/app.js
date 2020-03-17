const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

function sendHttpRequest(method, url) {
  const promise = new Promise((resolve, reject)=>{
    const httpData = new XMLHttpRequest();
    
    httpData.open(method,url);
    
    httpData.responseType= 'json'
    
    httpData.onload = function() {
      resolve(httpData.response);
    }

    httpData.send();
  })
  return promise;
}


// jedan način
function fetxhPosts() {
  sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts').then(
    responseData => {
      const listOfPost = responseData;
      for (const data of listOfPost) {
        const postEl = document.importNode(postTemplate.content, true)
        postEl.querySelector('h2').textContent = data.title.toUpperCase();
        postEl.querySelector('p').textContent = data.body;
        listElement.append(postEl);
      }
    }
  );
}

fetxhPosts();


// isto kao i gore  način
async function fetxhPostsAsync() {
  const responseData = await sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts');
      const listOfPost = responseData;
      for (const data of listOfPost) {
        const postEl = document.importNode(postTemplate.content, true)
        postEl.querySelector('h2').textContent = data.title.toUpperCase();
        postEl.querySelector('p').textContent = data.body;
        listElement.append(postEl);
      }
}

fetxhPostsAsync()












//
const person = { // this is NOT JSON - it's a normal ("raw") JavaScript object!
    name: 'Max',
    age: 30,
    hobbies: [
        { id: 'h1', title: 'Sports' },
        { id: 'h2', title: 'Cooking' }
    ],
    isInstructor: true
};
 
const jsonData = JSON.stringify(person); // convert raw JS data to JSON data string
console.log(jsonData); // a string with machine-readable JSON data in it
console.log(typeof jsonData); 

