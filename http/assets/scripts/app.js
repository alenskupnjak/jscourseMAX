const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button')
const postList = document.querySelector('ul');

function sendHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject)=>{
    // starije rijesenje ****************
    const httpData = new XMLHttpRequest();

    // httpData.setRequestHeader('Content-Type', 'application/json');
    
    httpData.open(method,url);
    
    httpData.responseType= 'json'
    
    httpData.onload = function() {
      if (httpData.status >=200 && httpData.status <300){
        resolve(httpData.response);
      } else {
        reject( new Error('Nesto nije u redu!'));
      }
    }

    httpData.onerror = function() {
      console.log(httpData.response);
      console.log(httpData.status);
      reject( new Error('Nesto nije u redu!'));
    }
    httpData.send(JSON.stringify(data));
  });
  return promise;
  
  // // novije rijesenje, nije podrzano u starijijim preglednicima
  //   return fetch(url, {
  //     method: method,
  //     body: JSON.stringify(data)
  //     // headers: {
  //     //   'Content-Type': 'application/json'
  //     //   // 'Access-Control-Allow-Credentials': 'no-cors',
  //     //  }
  //   }).then(res => {

  //     if(res.status >= 200 && res.status < 300){
  //       return res.json();
  //     } else {
  //       return res.json().then(errData => {
  //         console.log(errData)
  //         throw new Error('Ovdje nesto nije u redu')
  //       });
  //     }
  //   }).catch(error => {
  //     console.log(error);
  //   })



}



async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId
  }
    sendHttpRequest('POST','https://jsonplaceholder.typicode.com/posts', post)
}


// prvi način

try {
  function fetxhPosts() {
    sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts').then(
      responseData => {
        const listOfPost = responseData;
        for (const data of listOfPost) {
          const postEl = document.importNode(postTemplate.content, true)
          postEl.querySelector('h2').textContent = data.title.toUpperCase();
          postEl.querySelector('p').textContent = data.body;
          postEl.querySelector('li').id = data.id;
          listElement.append(postEl);
        }
      }
    );
  }
} catch (err) {
  alert('Nesto nije u redu')
}






// drugi nacin
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



fetchButton.addEventListener('click',fetxhPosts);

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event.currentTarget)
  const enteredTitle = event.currentTarget.querySelector('#title').value;
  const enteredContent = event.currentTarget.querySelector('#content').value;
  createPost(enteredTitle,enteredContent)
})

postList.addEventListener('click', event => {  
  if (event.target.tagName === 'BUTTON') {
    const postId = event.target.closest('li').id;
    sendHttpRequest('DELETE',`https://jsonplaceholder.typicode.com/posts/${postId}`)
    let obrisi = document.getElementById(postId)
    obrisi.remove()
  }
});


// fetxhPosts(); // istp kao i ispod, prvi način
// fetxhPostsAsync(); // isto kao i iznad,drugi nacin
// createPost('prvi text', 'drugi text');












// //
// const person = { // this is NOT JSON - it's a normal ("raw") JavaScript object!
//     name: 'Max',
//     age: 30,
//     hobbies: [
//         { id: 'h1', title: 'Sports' },
//         { id: 'h2', title: 'Cooking' }
//     ],
//     isInstructor: true
// };
 
// const jsonData = JSON.stringify(person); // convert raw JS data to JSON data string
// console.log(jsonData); // a string with machine-readable JSON data in it
// console.log(typeof jsonData); 

