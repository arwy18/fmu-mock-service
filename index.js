const express = require('express')
const port = process.env.PORT || 3000;
var cors = require('cors')
const app = express()

app.use(cors())
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/programs', function (req, res) {
    res.send({
        "data": [
            {
                "codigo": "019_B1",
                "descricao": "Ciencia da Computacao",
                "siglaIES": "FMU",
            },
            {
                "codigo": "026_B1",
                "descricao": "Ciencias Atuariais",
                "siglaIES": "FMU",
            },
            {
                "codigo": "093_B1",
                "descricao": "Ciencias Biologicas",
                "siglaIES": "FMU",
            },
            {
                "codigo": "311_B1",
                "descricao": "Ciencias Contabeis",
                "siglaIES": "FIAMFA",
            },
            {
                "codigo": "004_B1",
                "descricao": "Ciencias Economicas",
                "siglaIES": "FIAMFA",
            }
        ]
    })
})

app.get('/programcampuses', function (req, res) {
    res.send({
        "data": [
            {
                "programId": "019_B1",
                "campuses": [
                    {
                        "campusId": "FA",
                        "campusName": "Liberdade - Prédio 26",
                    },
                    {
                        "campusId": "FB",
                        "campusName": "Casa do Direito",
                    }
                ]
            },
            {
                "programId": "026_B1",
                "campuses": [
                    {
                        "campusId": "FC",
                        "campusName": "Ibirapuera",
                    },
                    {
                        "campusId": "FJ",
                        "campusName": "Vila Mariana II",
                    }
                ]
            },
            {
                "programId": "093_B1",
                "campuses": [
                    {
                        "campusId": "ND",
                        "campusName": "Nao definido",
                    },
                    {
                        "campusId": "FI",
                        "campusName": "Beneficência",
                    },
                ]
            },
            {
                "programId": "311_B1",
                "campuses": [
                    {
                        "campusId": "FL",
                        "campusName": "Morumbi",
                    },
                    {
                        "campusId": "FH",
                        "campusName": "Vila Mariana I",
                    },
                ]
            },
            {
                "programId": "004_B1",
                "campuses": [
                    {
                        "campusId": "FM",
                        "campusName": "Liberdade - Clínicas",
                    },
                    {
                        "campusId": "FN",
                        "campusName": "Ponte Estaiada / Hovet",
                    },
                ]
            }
        ]
    })
})

app.get('/campuses', function (req, res) {
    res.send({
        "data": [
            {
                "campusId": "FA",
                "campusName": "Liberdade - Prédio 26",
                "shifts": ["Matutino", "Vespertino", "Nocturno"]
            },
            {
                "campusId": "FB",
                "campusName": "Casa do Direito",
                "shifts": ["Matutino", "Vespertino", "Nocturno"]
            },
            {
                "campusId": "FC",
                "campusName": "Ibirapuera",
                "shifts": ["Matutino", "Vespertino", "Nocturno"]
            },
            {
                "campusId": "FJ",
                "campusName": "Vila Mariana II",
                "shifts": ["Matutino", "Vespertino", "Nocturno"]
            },
            {
                "campusId": "ND",
                "campusName": "Nao definido",
                "shifts": ["Matutino", "Vespertino", "Nocturno"]
            },
            {
                "campusId": "FI",
                "campusName": "Beneficência",
                "shifts": ["Matutino", "Vespertino", "Nocturno"]
            },
            {
                "campusId": "FL",
                "campusName": "Morumbi",
                "shifts": ["Matutino", "Vespertino", "Nocturno"]
            },
            {
                "campusId": "FH",
                "campusName": "Vila Mariana I",
                "shifts": ["Matutino", "Vespertino", "Nocturno"]
            },
            {
                "campusId": "FM",
                "campusName": "Liberdade - Clínicas",
                "shifts": ["Matutino", "Vespertino", "Nocturno"]
            },
            {
                "campusId": "FN",
                "campusName": "Ponte Estaiada / Hovet",
                "shifts": ["Matutino", "Vespertino", "Nocturno"]
            },
        ]
    })
})

app.get('/students', function (req, res) {
    res.send({
        "data": [
            {
                "studentID": "A00010568",
                "firstName": "Arthur",
                "lastName": "Fleck",
                "institution": "FMU",
                "campus": "Liberdade - Prédio 26",
            },
            {
                "studentID": "A00015087",
                "firstName": "Diana",
                "lastName": "Prince",
                "institution": "FMU",
                "campus": "Casa do Direito",
            },
            {
                "studentID": "A00027918",
                "firstName": "Steve",
                "lastName": "Rogers",
                "institution": "FIAMFA",
                "campus": "Ponte Estaiada / Hovet",
            },
            {
                "studentID": "A00027916",
                "firstName": "Carol",
                "lastName": "Danvers",
                "institution": "FIAMFA",
                "campus": "Ibirapuera",
            },
        ]
    })
})



app.get('/studentprograms/:id', function (req, res) {
    let stuPrograms = [
        {
            "studentID": "A00010568",
            "programs": [
                {
                    "codigo": "019_B1",
                    "descricao": "Ciencia da Computacao",
                    "periodo":"201910"
                },
                {
                    "codigo": "026_B1",
                    "descricao": "Ciencias Atuariais",
                    "periodo":"201920"
                }
            ]
        },
        {
            "studentID": "A00015087",
            "programs": [
                {
                    "codigo": "093_B1",
                    "descricao": "Ciencias Biologicas",
                    "periodo":"201920"
                },
            ]
        },
        {
            "studentID": "A00027918",
            "programs": [
                {
                    "codigo": "311_B1",
                    "descricao": "Ciencias Contabeis",
                    "periodo":"201910"
                }
            ]
        },
        {
            "studentID": "A00027916",
            "programs": [
                {
                    "codigo": "311_B1",
                    "descricao": "Ciencias Contabeis",
                    "periodo":"201920"
                },
                {
                    "codigo": "004_B1",
                    "descricao": "Ciencias Economicas",
                    "periodo":"201910"
                }
            ]
        },
    ]
    stuPrograms.forEach(element => {
        if (element.studentID == req.params.id) {
            res.send({element})
        }
    });
})

app.listen(port, function () {
    console.log(`App listening`)
})