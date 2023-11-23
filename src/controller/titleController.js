import { returnSuccess, returnError } from "../errorHandler/errorHandler.js";
import axios from 'axios';

export default class titleController {
    find = async (req, res) => {
        try {
            const options = {
                method: 'GET',
                url: 'https://imdb8.p.rapidapi.com/title/find',
                params: {q: 'game of thr'},
                headers: {
                  'X-RapidAPI-Key': '70a92a2453mshc51a7f4f2168a0bp131a51jsn9e5605e8ada9',
                  'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
                }
              };

              const resposeData = await axios.request(options);
              res.json(returnSuccess(200, "Successfully data fetched", resposeData.data));
        }
        catch(err) {
            res.json(returnError(404, "Something went wrong"));
        }
    }

    v2TitleFind = async (req, res) => {
        try {
            const options = {
                method: 'GET',
                url: 'https://imdb8.p.rapidapi.com/title/v2/find',
                params: {
                  title: 'game of',
                  limit: '20',
                  sortArg: 'moviemeter,asc'
                },
                headers: {
                  'X-RapidAPI-Key': '70a92a2453mshc51a7f4f2168a0bp131a51jsn9e5605e8ada9',
                  'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
                }
              };

              const resposeData = await axios.request(options);
              res.json(returnSuccess(200, "Successfully data fetched", resposeData.data));
        }
        catch(err) {
            res.json(returnError(404, "Something went wrong"));
        }
    }

    getVideos = async (req, res) => {
        try {
            const options = {
                method: 'GET',
                url: 'https://imdb8.p.rapidapi.com/title/get-videos',
                params: {
                  tconst: 'tt0944947',
                  limit: '25',
                  region: 'US'
                },
                headers: {
                  'X-RapidAPI-Key': '70a92a2453mshc51a7f4f2168a0bp131a51jsn9e5605e8ada9',
                  'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
                }
              };

              const resposeData = await axios.request(options);
              res.json(returnSuccess(200, "Successfully data fetched", resposeData.data));
        }
        catch(err) {
            res.json(returnError(404, "Something went wrong"));
        }
    }
}