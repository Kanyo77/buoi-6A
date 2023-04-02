const express = require('express');
const app = express();
const port = 3000;

const dssv = [
    {
        "Masv": "21662008",
        "Hoten": "Tran ngoc khoa",
        "Lop": "17CSI01"
    },
    {
        "Masv": "21662009",
        "Hoten": "Boy 1",
        "Lop": "17CSI01"
    },
    {
        "Masv": "21662010",
        "Hoten": "Boy 2",
        "Lop": "17CSI01"
    }
];

app.get('/student', (req, res) => {
    res.send(Object.values(dssv));
});

app.get('/student/:Masv', (req, res) => {
    //res.send(dssv[req.params.Masv]);
    let i = 0;
    for (i = 0; i < dssv.length; i++) {
        if (dssv[i].Masv == req.params.Masv)
            break;
    }
    if (i < dssv.length) {
        res.send(dssv[i]);
    }
    else {
        res.send("NOT FIND !!!");
    }
});



app.get('/student', (req, res) => {
    res.send(" Xin chao")
});

app.get('/student', (req, res) => {
    res.send(" Xin chao")
});

app.post('/student', (req, res) => {
    res.send(" Post student")
});

app.put('/student', (req, res) => {
    res.send(" Put  student")
});

app.delete('/student', (req, res) => {
    res.send(" Delete  student")
});
app.listen(port, () => console.log(`App is running ${port}`))