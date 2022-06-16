import axios from "axios";
import {client} from '../index.js';



class CoordinateController{
    async getCoordinate(req, res){
        try {
            console.log('fetching data...');
           client.get("coordinate",(err,data)=>{
                if(err){
                    console.log('ERROR GETTING DATA REDIS!!!!!',err.message);
                    throw new Error(err.message);
                }
                if(data!==null)
                    res.status(200).send(data);
                else
                    res.status(200).send(null);
           });
           
        } catch (error) {
            console.log(error.message);
            res.status(500).json(error.message);
        }
    }
    async setCoordinate(req, res){
        try {
            const {x} = req.body;
            const {y} = req.body;
            await  client.setEx("coordinate",5000,JSON.stringify({x,y}))
            res.send({x,y})
        } catch (error) {
            console.log(error.message);
            res.status(500)
        }
    }
}

export default new CoordinateController()