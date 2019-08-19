module.exports = {
    html: function(){
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Web notice board</title>
        </head>
        <body>
            <table>
                <tr>
                    <td>글번호</td>
                    <td>제목</td>
                    <td>작성자</td>
                    <td>작성일자</td>
                </tr>

            </table> 
            <style>
                table{
                    border-collapse:collapse;
                }
                td{
                    border: 1px solid;
                }
            </style>
        </body>
        </html>
        `
    },boardTable: function(board){
        var list = '<tr>';
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
        list +='</tr>'
        return list
    }

};
