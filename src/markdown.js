function generatePage() {

    return `<!DOCTYPE html>
    <html lang="en-US">
<head>
<link rel="stylesheet" href="./dist/style.css">
</head>
<header class="team-heading">
<h1>My New Team</h1>
</header>
<body>
<main class="team-area">
`
}

function generateManager(payload) {
    return `<div class="employee-card"><h3>${payload.constructor.name}</h3> <h3>${payload.name}</h3>
    
    <div class="card-body">
    <ul class="list-group-item">
        <li>ID: ${payload.id}</li>
        <li>Email: <a href="mailto:${payload.email}">${payload.email}</a></li>
        <li>Office Number: ${payload.officeNumber}</li>
    </ul>
    </div>
    </div>
`
}

function generateEngineer(payload) {
    return `<div class="employee-card"><h3>${payload.constructor.name}</h3> <h3>${payload.name}</h3>
    
    <div class="card-body">
    <ul class="list-group-item">
        <li>ID: ${payload.id}</li>
        <li>Email: <a href="mailto:${payload.email}">${payload.email}</a></li>
        <li>Github: <a class="link-style" href="https://github.com/${payload.gitHub}" target="_blank" rel="noopener noreferrer">${payload.gitHub}</a></li>
    </ul>
    </div>
    </div>
`
}

function generateIntern(payload) {
    return `<div class="employee-card"><h3>${payload.constructor.name}</h3> <h3>${payload.name}</h3>
    
    <div class="card-body">
    <ul class="list-group-item">
        <li>ID: ${payload.id}</li>
        <li>Email: <a href="mailto:${payload.email}">${payload.email}</a></li>
        <li>School: ${payload.school}</li>
    </ul>
    </div>
    </div>
`
}

function generateEnd() {
    return `
</main>
</body>
</html>`

}
module.exports = {
    generatePage,
    generateManager,
    generateEngineer,
    generateIntern,
    generateEnd
};
