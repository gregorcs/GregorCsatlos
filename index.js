// JavaScript source code

function getRepositories() {
    const request = new XMLHttpRequest();
    let arrayOfRepositories;
    request.open("GET", "https://api.github.com/users/gregorcs/repos")
    request.send();
    request.onload = () => {
        if (request.status == 200) {
            console.log(JSON.parse(request.response));
            arrayOfRepositories = JSON.parse(request.response);
        }
        arrayOfRepositories = sortRepositoriesAscending(arrayOfRepositories);
        makeRepositoriesInDivs(arrayOfRepositories);
    }
    return arrayOfRepositories;
}

function makeRepositoriesInDivs(arrayOfRepositories) {
    var container = document.getElementById('projectsContainer');
    var smallDiv;

    for (let i = 0; i < arrayOfRepositories.length; i++) {
        smallDiv = document.createElement("div");
        var attr = document.createAttribute("id");
        var name = document.createElement("h3");
        var description = document.createElement("p");

        attr.value = "project";
        smallDiv.setAttributeNode(attr);
        name.innerHTML = arrayOfRepositories[i].name;
        description.innerHTML = arrayOfRepositories[i].description;

        smallDiv.appendChild(name);
        smallDiv.appendChild(description);
        container.appendChild(smallDiv);
    }
}

function sortRepositoriesAscending(arrayOfRepositories) {
    arrayOfRepositories.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at); // oldest to newest date
    })
    return arrayOfRepositories;
}