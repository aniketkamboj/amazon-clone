export const initialState = {
  basket: [],
  user:null, 
};

// export const getBasketTotal = (basket)=>
// (basket?.reduce((amount,item)=> parseInt(item.price) + amount  ));

export const getBasketTotal = (basket)=> {
    let tot = 0;
    for(let i=0;i<basket.length;i++){
        tot+= parseFloat(basket[i].price);
    }
    return tot;
}

const reducer = (state, action)=>{
    console.log(action);

  switch (action.type) {
    case "ADD_TO_BASKET":
        return {
            ...state,
            basket:[...state.basket,action.item]
        };
      break;

    case "REMOVE_FROM_BASKET":
        let newBasket = [...state.basket];
        const index = state.basket.findIndex((basketItem)=> basketItem.id===action.id)

        if(index>=0){
            newBasket.splice(index,1);
        }else{
            console.warn('cant remove product with (id : ${action.id})')
        }

        return {...state,basket: newBasket}; 
      break;
    case "SET_USER":
        return {
            ...state,
            user:action.user    
        }
    default:
      return state;
  }
}

export default reducer; 
