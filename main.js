let form = document.getElementById('form');
let input = document.getElementById('input');
let msg = document.getElementById('msg');
let post = document.getElementById('post');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formValidation();
})

let formValidation = () => {
    if (input.value === '') {
        msg.innerHTML = "post cant be blank";
    }
    else {
        msg.innerHTML = "";
        console.log('success!');
        console.log(input.value);
        acceptedData();
        input.value = '';
    }
}

let acceptedData = () => {
    post.innerHTML += `
    <div>
        <p>${input.value}</p>
        <span class="options">
            <i onClick="editPost(this)" class="fas fa-edit"></i>
            <i onClick="deletePost(this)" class="fas fa-trash"></i>
        </span>
    </div>
    `
    
}

let deletePost = (e) =>{
    e.parentElement.parentElement.remove();
}

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}