const data = {
    "text": "MIT License \n Copyright (c) 2021 MythicalSouls. \n  NONE OF THE USERS VIEWING THIS SITE HAVE ACCESS TO COPY THIS WEBSITE OR EDIT IT. DOING SO WILL FORCE ME PUTTING A COPYRIGHT STRIKE ON THE USER. THIS SITE IS PUBLIC TO VIEW AND CANNOT BE EDITED OR STOLE"}

document.getElementById("text").innerText += data.text;

function back(){
    history.back();
}