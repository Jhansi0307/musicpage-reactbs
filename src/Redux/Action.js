const userdata={
    user:[],
    shopify:[],
}

export const reducer=(state=userdata, action)=>{
    switch(action.type){
        case "id":
            return{...state,user:action.payload}
     

        case "store":
            return{...state,shopify:action.payload}
            default:return state
    }

}