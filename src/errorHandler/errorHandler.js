import { response } from "express"

export const returnSuccess = (statusCode, message, data) => {
    const returnResponse = {
        statusCode,
        response: {
            status: true,
            message, 
            data
        }
    }
    return returnResponse;
}

export const returnError = (statusCode, message, data) => {
    const returnResponse = {
    statusCode, 
    response: {
        status: false,
        message
    }
}
return returnResponse;
}