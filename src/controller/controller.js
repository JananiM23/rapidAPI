import { response } from "express";
import { returnSuccess, returnError } from "../errorHandler/errorHandler.js";
import axios from 'axios';

export default class controller {
    app = async (req, res) => {
        try{
            res.json("App is running");
        } 
        catch(err) {
            res.json("Something went wrong");
        }    
    }

    findAll = async (req, res) => {
        try {
            const { q } = req.query;
            const options = {
                method: 'GET',
                url: 'https://imdb8.p.rapidapi.com/auto-complete',
                params: {q},
                headers: {
                  'X-RapidAPI-Key': '70a92a2453mshc51a7f4f2168a0bp131a51jsn9e5605e8ada9',
                  'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
                }
              };
              const responseData = await axios.request(options);
              res.json(returnSuccess(200, "Successfully Data fetched", responseData.data));
        }
        catch(err) {
            console.log(err);
            res.json(returnError(404, "Something went wrong"));
        }
    }
}