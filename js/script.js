// navbar creation
let navBar = document.createElement('nav');
navBar.classList.add("navbar", "bg-body-tertiary","fixed");

// div tag with container fluid
let containerDiv = document.createElement('div');
containerDiv.classList.add('container-fluid');
navBar.appendChild(containerDiv);

// a tag using name create
let aTag = document.createElement('a');
aTag.classList.add('navbar-brand');
aTag.textContent = "YOUR POST";
containerDiv.appendChild(aTag);

// form creation
let formTag = document.createElement('form');
formTag.classList.add('d-flex');
containerDiv.appendChild(formTag);
// create input field for poster Name
let inputFieldName = document.createElement('input');
inputFieldName.classList.add("form-control", "me-2");
inputFieldName.setAttribute("type", "text");
inputFieldName.setAttribute("placeholder", "Write Your Name");
inputFieldName.setAttribute("id", "postName");
formTag.appendChild(inputFieldName);
// create input field for Our Post 
let inputFieldPost = document.createElement('input');
inputFieldPost.classList.add("form-control", "me-2");
inputFieldPost.setAttribute("type", "text");
inputFieldPost.setAttribute("placeholder", "Write Your Thoughts");
inputFieldPost.setAttribute("id", "postContent");
formTag.appendChild(inputFieldPost);

// post button create
let postButtonElements = document.createElement('button');
postButtonElements.classList.add("btn", "btn-outline-primary");
postButtonElements.setAttribute("type", "button");
postButtonElements.setAttribute("id", "addPost");
postButtonElements.textContent = "POST";
formTag.appendChild(postButtonElements);

// add navbar to the body of the HTML document
document.body.appendChild(navBar);

// input handlechange creations
const postContentElements = document.getElementById('postContent');
const postNameElements = document.getElementById('postName')

// post content to the body of the html document
const mainElements = document.getElementById('main');

// post button click function
const addPostButton = document.getElementById('addPost');

const PostData=[];

const addLike = (index) => {
    const { Likes, id } = PostData.reduce((accum, post, ind) => {
        if (post.number == Number(index)) {
            accum.Likes = post.Vote + 1;
            accum.id = ind;
        }
        return accum;
    }, {});
    PostData[id].Vote = Likes;
    BodyContent();
}

const deleteData = (index)=>{
    PostData[Number(index)-1].deleted=true;
    
    BodyContent();
}
const BodyContent = ()=>{
    const newCard =PostData.filter(data=>!data.deleted).map((data)=>{
        return `<div class="card text-bg-success mb-3" style="max-width: 18rem;">
        <div class="card-header bg-secondary">${data.postName}</div>
        <div class="card-body">
        <p class="card-title">Post - ${data.number}</p>
            <p class="card-title">${data.postText}</p>
            <p class="card-title">${data.createdAt}</p>
            <div class="d-flex justify-content-around">
            <button class="btn btn-outline-warning" onclick="addLike(${data.number})" > <svg
            xmlns="http://www.w3.org/2000/svg"
             width="16" height="16" fill="currentColor"
             class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
            <path
                d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"
           />
           </svg>
           <span>${data.Vote}</span>
        </button>
        <button class="btn btn-outline-danger " onclick="deleteData(${data.number})" >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive" viewBox="0 0 16 16">
        <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
        </svg>
        </button>
            </div>
          
        </div>`;
        })
        mainElements.innerHTML = newCard.join('');
}

addPostButton.addEventListener('click', (event) => {
    event.preventDefault();
    const postText = postContentElements.value;
    const postName = postNameElements.value; 
    const post={};
    if(postText.length>0 && postName.length>0)
    {
        post.postText=postText;
        post.postName=postName;
        post.Vote=0;
        post.number=(PostData[PostData.length-1]?.number||0)+1;
        post.deleted=false;
        post.createdAt = new Date().toLocaleDateString();
        PostData.push(post);
        console.log(PostData,"postData");
        BodyContent();
               postNameElements.value=""
               postContentElements.value=""

    }
   else{
    alert("must fill all field")
   }

});

