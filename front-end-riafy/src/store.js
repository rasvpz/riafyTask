import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { SearchCompanyReducer } from "./Reducers/SearchReducer";

const appReducer = combineReducers({
    SearchCompany : SearchCompanyReducer
})

const Middleware = [thunk]

const store = createStore(appReducer, applyMiddleware(...Middleware))

export default store;