const { SEARCH_FIND_REQUEST, SEARCH_FIND_SUCCESS, SEARCH_FIND_ERR } = require("../Constant/SearchConstant");

export const SearchCompanyReducer = (state=[], action)=>{
switch(action.type){
    case SEARCH_FIND_REQUEST:
        return {
            loading: true,
        }
        case SEARCH_FIND_SUCCESS:
            return {
                ...state,
                loading: false,
                searchData:action.payload,

            }
            case SEARCH_FIND_ERR:
                return {
                    loading: false,
                    error: action.payload
                }
            default:
                return state
}
}