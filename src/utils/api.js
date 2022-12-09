import axios from "axios";

const BASE_URL="https://www.googleapis.com/customsearch/v1"

const params={
    key:"AIzaSyDtoEi0oDSM-T2JPTP8RpZGCB729Rmx7gA",
    cx:"07cfa92f6729e4fd3"
}

export const fetchDataFromApi = async (payload) => {
    const {data}= await axios.get(BASE_URL,{
        params:{...params,...payload}
    })
    return data;
};
