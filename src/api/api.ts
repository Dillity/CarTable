import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://table-test-car.herokuapp.com/'
});

export const tableAPI = {
    getTableData(page: number) {
        return instance.get(`/table?page=${page}`);
    },
    addTableData(values: object) {
        return instance.post(`/table`, {values});
    }

}
