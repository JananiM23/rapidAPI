import { returnSuccess, returnError } from "../errorHandler/errorHandler.js";
import axios from 'axios';

export default class actorsController {
    bornToday = async (req, res) => {
        try {
            const options = {
                method: 'GET',
                url: 'https://imdb8.p.rapidapi.com/actors/list-born-today',
                params: {
                  month: '7',
                  day: '27'
                },
                headers: {
                  'X-RapidAPI-Key': '70a92a2453mshc51a7f4f2168a0bp131a51jsn9e5605e8ada9',
                  'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
                }
              };

              const responseData = await axios.request(options);
              res.json(returnSuccess(200, "Sucessfully data fetched", responseData.data)); 
        }
        catch(err) {
            res.json(returnError(404, "Something went wrong"));
        }
    }

    mostPopular = async (req, res) => {
        try {
            const options = {
                method: 'GET',
                url: 'https://imdb8.p.rapidapi.com/actors/list-most-popular-celebs',
                params: {
                  homeCountry: 'US',
                  currentCountry: 'US',
                  purchaseCountry: 'US'
                },
                headers: {
                  'X-RapidAPI-Key': '70a92a2453mshc51a7f4f2168a0bp131a51jsn9e5605e8ada9',
                  'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
                }
              };

              const responseData = await axios.request(options);
              res.json(returnSuccess(200, "Sucessfully data fetched", responseData.data)); 
        }
        catch(err) {
            res.json(returnError(404, "Something went wrong"));
        }
    }

    getBio = async (req, res) => {
        try {
            const options = {
                method: 'GET',
                url: 'https://imdb8.p.rapidapi.com/actors/get-bio',
                params: {
                  nconst: 'nm0001667'
                },
                headers: {
                  'X-RapidAPI-Key': '70a92a2453mshc51a7f4f2168a0bp131a51jsn9e5605e8ada9',
                  'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
                }
              };

              const responseData = await axios.request(options);
              res.json(returnSuccess(200, "Sucessfully data fetched", responseData.data)); 
        }
        catch(err) {
            res.json(returnError(404, "Something went wrong"));
        }
    }
}