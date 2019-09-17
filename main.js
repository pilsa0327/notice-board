var express = require('express');
var app = express();
var qs = require('querystring');
var url = require('url');
var template = require('./lib/template.js');
var bodyParser = require('body-parser');
var path = require('path');
var db = require('./lib/db')


app.use(bodyParser.urlencoded({ extended: false }));

<<<<<<< HEAD

app.get('/', function(req, res){
    db.query(`select num, title, author, date_format(created, '%Y-%m-%d %H:%i:%s') as created from board order by num desc`, function(error, boards){
    var title ='게시판입니다.'
    var list = '<tr>';
=======
app.get('/', function(req, res){
    db.query("select num, title, description, author, date_format(created, '%Y-%m-%d %H:%i:%s') as created, count from board order by num desc", function(error, boards){
        
        var title ='게시판입니다.'
        var list = '<tr>';
>>>>>>> aa73b201b3667be46f1b0100765bd74e82e37422
        var i = 0;
        while(i<boards.length){
            list += `
                <tr>
                    <td>${boards[i].num}</td>
                    <td><a href='/page/${boards[i].num}'>${boards[i].title}</a></td>
                    <td>${boards[i].author}</td>
                    <td>${boards[i].created}</td>
                    <td>${boards[i].count}</td>
                </tr>
                `
            i++
        };
        list +='</tr>'
<<<<<<< HEAD

        var html =template.html(title, list, `<a href="/create"><input type='button' value='글쓰기'></a>`)
=======
        var html =
        `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>${title}</title>
            </head>
            <body>
                <h1>게시판</h1>
                <table>
                    <tr>
                        <td>글번호</td>
                        <td>제목</td>
                        <td>작성자</td>
                        <td>작성일자</td>
                        <td>조회수</td>
                    </tr>
                    ${list}     
                </table> 
                <a href="/create"><input type='button' value='글쓰기'></a>
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
>>>>>>> aa73b201b3667be46f1b0100765bd74e82e37422
        res.send(html);
        
    });
});

app.get('/page/:pageId', function(req, res){
    db.query('select * from board', function(error, boards){
        var pageId = req.params.pageId;
<<<<<<< HEAD
        db.query('select * from board where num=?', [pageId], function(error2, board){
            var html = template.html(board[0].title, `
                <tr>
                    <td>${board[0].num}</td>
                    <td>${board[0].title}</td>
                    <td>${board[0].author}</td>
                    <td>${board[0].created}</td>
                </tr>
                <tr>
                    <td colspan="4">${board[0].description}</td>
                </tr>`, 
            `
                <a href="/update/${board[0].num}"><input type='button' value='수정하기'></a>
                <a href="/"><input type='button' value='돌아가기'></a>
                <form action = '/delete_process/${pageId}' method = 'post'>
                    <input type='submit' value="삭제">
                </form>
            `)
       
        res.send(html);
                })
        db.query('update board set count = count +1 where num = ?', [pageId], function(error2, board3){

        });
        db.query("select num, title, description, author, date_format(created, '%Y-%m-%d %H:%i:%s') as created, count from board where num=?", [pageId], function(error3, board){
            var html =    
            `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>${board[0].title}</title>
                </head>
                <body>
                    <table>
                        <tr>
                            <td>글번호</td>
                            <td>제목</td>
                            <td>작성자</td>
                            <td>작성일자</td>
                            <td>조회수</td>
                        </tr>
                        <tr>
                            <td>${board[0].num}</td>
                            <td>${board[0].title}</td>
                            <td>${board[0].author}</td>
                            <td>${board[0].created}</td>
                            <td>${board[0].count}</td>
                        </tr>
                        <tr>
                            <td colspan ='5'>${board[0].description}</td>
                        </tr>
                    </table> 
                    <a href="/update/${board[0].num}"><input type='button' value='수정하기'></a>
                    <a href="/"><input type='button' value='돌아가기'></a>
                    <form action = '/delete_process/${pageId}' method = 'post'>
                        <input type='submit' value="삭제">
                    </form>
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
            res.send(html);
        });     
    });
});


app.get('/create', function(req, res){
    var title = '새 글쓰기'
    var html = template.html2(title, `

                <tbody>
                    <form action='/create_process' method='post'>
                        <tr>
                            <td><input type = 'text' name = 'title' placeholder = '제목'></td>
                            <td><input type = 'text' name = 'author' placeholder = '작성자'></td>
                        </tr>
                        <tr>
                            <td><textarea name = 'description' placeholder = '내용'></textarea></td>
                                
                        </tr>
                </tbody>
                </table>
                        <input type = 'submit' value = '작성'>
                        <a href="/"><input type='button' value='돌아가기'></a>
                    </form>
        `)
   
    res.send(html);
});
<<<<<<< HEAD

app.post('/create_process', function(req, res){ 

=======
//date_format(now(),'yy-mm-dd')
app.post('/create_process', function(req, res){
>>>>>>> aa73b201b3667be46f1b0100765bd74e82e37422
            var post = req.body;
            db.query("insert into board (title, description, author, created, count) values(?, ?, ?, now(), 0)",
            [post.title, post.description, post.author], function(error, result){
            res.redirect(`/page/${result.insertId}`);
            }); 
});

app.get('/update/:pageId', function(req, res){
    db.query('select * from board', function(error, boards){
        var pageId = req.params.pageId;
        db.query('select * from board where num=?',[pageId], function(error2, board){
            var title = '수정하기'
            var html = template.html2(title,`
                <tbody>
                    <form action='/update_process/${pageId}' method='post'>
                        <tr>
                            <td><input type = 'text' name = 'title' value=${board[0].title}></td>
                            <td><input type = 'text' name = 'author' value=${board[0].author}></td>
                        </tr> 
                        <tr>
                            <td><textarea name = 'description'>${board[0].description}</textarea></td>
                        </tr>
                </tbody>
                </table>        
                        <input type = 'submit' value = '수정하기'>
                        <a href="/"><input type='button' value='돌아가기'></a>
                    </form>
            `)
            
            res.send(html);
        })
    });
});

app.post('/update_process/:pageId', function(req, res){
        var pageId = req.params.pageId;
        var post = req.body;
        db.query(`update board set title=?, description = ?, author =? where num = ?`, 
        [post.title, post.description, post.author, pageId], function(error, result){
        res.redirect(`/page/${pageId}`);
    }); 
});

app.post('/delete_process/:pageId', function(req, res){
    var pageId = req.params.pageId;
    db.query(`delete from board where num = ?`, [pageId], function(error, result){
        res.redirect(`/`);
    }); 
});

app.listen(3000, function(){
    console.log('connected server');
});
