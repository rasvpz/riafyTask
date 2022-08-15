import {SEARCH_FIND_ERR, SEARCH_FIND_REQUEST, SEARCH_FIND_SUCCESS} from "../Constant/SearchConstant"
import axios from "axios"
export const SearchCompanyAction =(searchData)=>async(dispatch, getState) => {
    console.log(searchData,"searchDatasearchDatasearchDatasearchDatasearchData");
    try{
        dispatch({type:SEARCH_FIND_REQUEST})
        let {data} = await axios.post("api/searchPost",{searchData})
        dispatch({type:SEARCH_FIND_SUCCESS,payload:data})
    }catch(e){
        dispatch({type:SEARCH_FIND_ERR,payload:e})

    }
}