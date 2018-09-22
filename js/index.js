// your code here

function displayRepositories() {
    let repos = JSON.parse(this.responseText);
    const repoList = `<ul>${repos.map(r => '<li>' + '/' +
        r.name + '/' + r.owner.login +'/' + ' - <a href="#" data-repo="' +
        r.name + '" onclick="getCommits(this)">' + r.html_url + '</a></li>').join('')}</ul>`;
    document.getElementById('repositories').innerHTML = repoList;

}

function getRepositories() {
    let username = document.getElementById('username').value;

    const req = new XMLHttpRequest();
    req.addEventListener('load', displayRepositories);
    req.open('GET', `https://api.github.com/users/${username}/repos`);
    req.send();
}

function displayCommits() {
    let commits = JSON.parse(this.responseText);
    const commitsList = `<ul>${commits.map( commit =>
        '<li>' + '/' +
       commit.commit.author.name + '/' + commit.author.login
       + '/' + commit.commit.message +
       + '/' + '<a href="${commit.url}">/Master/</a>' + '/master/' + '</li>').join('')}</ul>`;

  document.getElementById('details').innerHTML = commitsList;


}

function getCommits(element){
    const name = element.dataset.repo
    const req = new XMLHttpRequest();
    
    req.addEventListener('load', displayCommits);
    req.open('GET', 'https://api.github.com/repos/' + this.username.value + '/' + 'Spoon-Knife' + '/commits');
    req.send();
}

function getBranches() {
    const req = new XMLHttpRequest();
}
function displayBranches() {

}
