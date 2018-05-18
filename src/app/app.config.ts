export const APIConfig = {
    Header: {
        ContentType: {
            json: 'application/json',
            form_data: 'multipart/form-data',
            x_www_form_urlencoded: 'application/x-www-form-urlencoded'
        },
        ResponseType: {
            blob: 'application/octet-stream'
        },
        Url: {
            baseUrl: 'http://localhost:64622/api/'
        }
    }
};
