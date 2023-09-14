import axios from 'axios';

export const mountains = axios.create({
    baseURL: 'http://api.forest.go.kr/openapi/service/trailInfoService/getforeststoryservice',
    params: { api_key: 'Llk2zeP1Zkj6ug84JZ9hTWrlniSPhbADkmb492ayGdVZrWLh9tCdhMkaFttTtlt%2F1VTZ1gQZm%2Fg4wNaB4KIpEg%3D%3D' }
    })

export const mnt = async function (str,n) {
        console.log(str,n);
        return await mountains.get(str, { params: {pageNo:n} })
    }

