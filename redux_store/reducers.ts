import { combineReducers } from "redux"

export const sanityData = (state = [], action: {type: string, data: any[]}) =>{
    // console.log(`reducer data is: ${action.data}`)
    switch(action.type){
        case "SAVE_SANITY_DATA":
            return action.data
        default:
            return state
    }
}

export const customerAddress = (state = "", action: {type: string, address: string})=>{
    switch(action.type){
        case "SAVE_CUSTOMER_ADDRESS":
            return action.address
        default:
            return state
    }
}

export const allReducers = combineReducers({
    sanityData,
    customerAddress
})