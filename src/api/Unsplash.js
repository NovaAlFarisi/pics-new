import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:
         'Client-ID d06164fbd23094555b6e437b028ded5705510414602729af836f10e98f4548f6'
    }
});