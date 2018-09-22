// your code here

function showRepos() {
    let repos = JSON.parse(this.responseText);
    const repoList = `<ul>${repos.map(r => '<li>' +
        r.name + ' - <a href="#" data-repo="' +
        r.name + '" onclick="getCommits(this)">Get Commits</a></li>').join('')}</ul>`;
    document.getElementById('repositories').innerHTML = repoList;

}

function getRepositories() {
    let userName = document.getElementById('username').value;

    const req = new XMLHttpRequest();
    req.addEventListener('load', showRepos);
    req.open('GET', `https://api.github.com/users/${userName}/repos`);
    req.send();
}

function displayCommits() {

}

function getCommits(){

}
