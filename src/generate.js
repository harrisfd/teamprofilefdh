function generateHtml(employees) {
    var html = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="../lib/style.css">
    <link rel="stylesheet" type="text/css" href="../lib/style.css">
    </head>
<body>
    <h1>Meet The Team</h1>
       <div class="row">
    <div class="container" id="team">
    <div class="row">
        <div class="col-12 text-center bg-info my-5 py-5 display-4 text-Black">Team Profile Generator</div>
    </div>
       <div class="row" id="cards">
        

    </div>


</div>
    `;

    for (let i = 0; i < employees.length; i++) {
        const element = employees[i];
        switch (element.role) {
            case "Intern":
                // <div class="col-4"></div>
                html += `<div class="card mx-auto text-dark bg-info mb-3" style="width: 18rem;">
<h2>${element.name}</h2>
<h3>${element.role}</h3>
<img src="../Images/Intern.jpg" class="card-img-top" alt="...">
<div class="card-body">
<h5>ID:<h5><h6 class="card-title">${element.id}</h6>
<h5>School:<h5><h6 class="card-title">${element.school}</h6>
<h5>Email:<h5><h6 class="card-title"><a href="mailto:${element.email}">${element.email}</a></h6>  
</div>
</div>`
                break;
            case "Manager":
                // <div class="col-4"></div>
                html += `<div class="card mx-auto text-dark bg-info mb-3" style="width: 18rem;">
                <h2>${element.name}</h2>
                <h3>${element.role}</h3>
                <img src="../Images/Manager.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                <h5>ID:<h5><h6 class="card-title">${element.id}</h6>
                <h5>Office Number:<h5><h6 class="card-title">${element.officenumber}</h6>
                  <h5>Email:<h5><h6 class="card-title"><a href="mailto:${element.email}">${element.email} </a></h6>  
                </div>
                </div>`
                break;
            case "Engineer":
                // <div class="col-4"></div>
                html += `<div class="card mx-auto text-dark bg-info mb-3" style="width: 18rem;">
                <h2>${element.name}</h2>
                <h3>${element.role}</h3>
                <img src="../Images/Engineer.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                <h5>ID:<h5> <h6 class="card-title">${element.id}</h6>
                <h5>Github:<h5><h6 class="card-title"> <a href="http://www.github.com/${element.github}">${element.github}</a></h6>
                <h5>Email:<h5><h6 class="card-title"><a href="mailto:${element.email}">${element.email} </a></h6>  
                </div>
                </div>`
                break;
            default:
                break;
        }

    }
    html += `</div>
    </body>
    </html>`
    return html
}

module.exports = generateHtml