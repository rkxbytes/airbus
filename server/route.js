const express = require('express');
const database = require('./database');
const router = express.Router();


router.get('/getAirports', (req, res) => {
    database.connection.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            return res.status(500).json({});
        }

        var query = `SELECT * FROM airports`;
        connection.query(query, (error, rows, fields) => {
            if (error) {
                console.log(error);
                return res.status(500).json({});
            }
            res.status(200).json({ data: rows });
        })
    })
});

router.post('/getSchedules', (req, res) => {
    database.connection.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            return res.status(500).json({});
        }

        var query = ` select s.id, f.name as flightName, a.name as source, s.departuretime, b.name as destination, s.arrivaltime, s.charges  
        from schedules s 
        join airports a on s.fromid = a.id  
        join airports b on s.toid = b.id  
        join flights f on f.id = s.flightid where 1=1 `;

        if (req.body.fromid) {
            query = query + ` and s.fromid = ${req.body.fromid}`;
        }

        if (req.body.toid) {
            query = query + ` and s.toid = ${req.body.toid}`;
        }

        connection.query(query, (error, rows, fields) => {
            if (error) {
                console.log(error);
                return res.status(500).json({});
            }
            console.log(query);
            console.log(rows);
            res.status(200).json({ data: rows });
        })
    })
});

router.post('/bookFlight', (req, res) => {
    database.connection.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            return res.status(500).json({});
        }
     var list = [];
     list  = req.body.passengerList.split(',');
     var query = ``;

   console.log("list " + req.body.passengerList);
   if(req.body.passengerList){

    list.forEach((passenger) => {
        query = query + ` insert into bookings (passenger, scheduleId, userId) values ('${passenger}', ${req.body.scheduleId}, ${req.body.userId});`;
    });

   }
       
        console.log(query);
        connection.query(query, (error, rows, fields) => {
            if (error) {
                console.log(error);
                return res.status(500).json({});
            }
            console.log(query);
            console.log(rows);
            res.status(200).json({ data: rows });
        })
    })
});


// router.get('/getBookings', (req, res) => {
//     database.connection.getConnection((err, connection) => {
//         if (err) {
//             console.log(err);
//             return res.status(500).json({});
//         }

//         var query = `SELECT * FROM airports`;
//         connection.query(query, (error, rows, fields) => {
//             if (error) {
//                 console.log(error);
//                 return res.status(500).json({});
//             }
//             res.status(200).json({ data: rows });
//         })
//     })
// });


module.exports = router