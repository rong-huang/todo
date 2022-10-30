const db = require("../models");
const schedule = db.schedule;
var data = {};

const getAllSchedule = (req,res) => {
    const scheduleId = req.body.id;
    schedule.findAll().then(data=>{
        res.json({
            "message" : "success",
            "data" : data,
            "status" : 200,
        });
    }).catch(err=>{
        res.status(400).send({
            "message" : err.message,
            "data" : data,
            "status" : 400,
        });
    });
}

const createSchedule = (req,res) => {
    const scheduleData = {
        title: req.body.title,
    };
    schedule.create(scheduleData).then(data=>{
        res.json({
            "message" : "success",
            "data" : data,
            "status" : 201
        })
    }).catch(err=>{
        res.status(400).send({
            "message" : err.message,
            "data" : data,
            "status" : 400,
        });
    });
}

const updateSchedule = (req,res) =>{
    const scheduleId = req.params.id;
    schedule.update(req.body, {
        where: { id: scheduleId }
    }).then(title=>{
        res.json({
            "message" : "success",
            "data" : req.body,
            "status" : 201
        })
    }).catch(err=>{
        res.status(400).send({
            "message" : err.message,
            "status" : 400,
        });
    });
}

const deleteSchedule = (req,res) => {
    const scheduleId = req.params.id;
    schedule.destroy({
        where: { id: scheduleId }
    }).then(title=>{
        res.json({
            "message" : "success",
            "data" : req.body,
            "status" : 201
        })
    }).catch(err=>{
        res.status(400).send({
            "message" : err.message,
            "status" : 400,
        });
    });
}

const getSchedule = (req,res) => {
    const scheduleId = req.params.id;
    schedule.findAll({
        where: {id:scheduleId}
    }).then(data=>{
        res.json({
            "message" : "success",
            "data" : data,
            "status" : 200,
        });
    }).catch(err=>{
        res.status(400).send({
            "message" : err.message,
            "data" : data,
            "status" : 400,
        });
    });
}

module.exports = {
    getAllSchedule,
    createSchedule,
    updateSchedule,
    deleteSchedule,
    getSchedule
}