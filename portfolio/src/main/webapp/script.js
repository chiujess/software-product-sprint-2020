// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

function getComment() {
    fetch('/data').then(response=>response.json()).then((comment) => {
        const commentBox = document.getElementById("nature-comments");
        console.log(comment);
        commentBox.appendChild(createComment(comment.name, comment.text));
    });
}

function createComment(nameIn, textIn) {
    const liElement = document.createElement('li');
    var fullComment = nameIn.concat(": ", textIn);
    liElement.innerText = fullComment;
    return liElement;
}

/**
 * Gets a greeting message to the page.
 */
async function getGreeting() {
    const response = await fetch('/data');
    const greeting = await response.text();
    document.getElementById('hello-button').innerText = greeting;
}

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}
