module.exports = {
    html: function(title, list, control){
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
            <script src="http://code.jquery.com/jquery-latest.min.js"></script>
            <script type="text/javascript" src="/public/js/bootstrap.js"></script>
            <title>${title}</title>
        </head>
        <body>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">제목</th>
                        <th scope="col">작성자</th>
                        <th scope="col">작성일자</th>
                        <th scope="col">조회수</th>
                    </tr>
                    ${list}
                </thead>
            </table>
            ${control}
        </body>
        </html>
        `

    }, html2: function(title, body){
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
            <script src="http://code.jquery.com/jquery-latest.min.js"></script>
            <script type="text/javascript" src="/public/js/bootstrap.js"></script>
            <title>${title}</title>
        </head>
        <body>
            <div>
                ${title}
            </div> 
            <div>
                <table class="table">
                    <thead class="thead-dark">
                        <tr> 
                            <th scope="col">제목</th>
                            <th scope="col">작성자</th>
                        </tr>

                    </thead>
                ${body}
            </div>
        </body>
        </html>
        `

    }, boardTable: function(board){
        var list = '<tbody><tr>';
        var i = 0;
        while(i<board.length){
            list += `
                <tr>
                    <td>${board.num}</td>
                    <td><a href='/page/'>${board.title}</a></td>
                    <td>${board.author}</td>
                    <td>${board.created}</td>
                </tr>
                `
            i++
        };
        list +='</tr></tbody>'
        return list
    }

};
