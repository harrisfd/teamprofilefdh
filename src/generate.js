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
</head>
<body>
    <h1>My Team</h1>
    `;

    for (let i = 0; i < employees.length; i++) {
        const element = employees[i];
        switch (element.role) {
            case "Intern":
                html += `<div class="card" style="width: 18rem;">
<h2>${element.name}</h2>
<h3>${element.role}</h3>
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${element.id}</h5>
  <h5 class="card-title">${element.school}</h5>
  <h5 class="card-title">${element.email}</h5>  
</div>
</div>`
                break;
            case "Manager":
                html += `<div class="card" style="width: 18rem;">
                <h2>${element.name}</h2>
                <h3>${element.role}</h3>
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${element.id}</h5>
                  <h5 class="card-title">${element.officenumber}</h5>
                  <h5 class="card-title">${element.email}</h5>  
                </div>
                </div>`
                break;
            case "Engineer":
                html += `<div class="card" style="width: 18rem;">
                <h2>${element.name}</h2>
                <h3>${element.role}</h3>
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${element.id}</h5>
                  <h5 class="card-title">${element.github}</h5>
                  <h5 class="card-title">${element.email}</h5>  
                </div>
                </div>`
                break;
            default:
                break;
        }

    }
    html += `</body>
    </html>`
    return html
}

module.exports = generateHtml