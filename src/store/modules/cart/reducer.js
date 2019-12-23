import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, draft => {
        const produtIndex = draft.findIndex(p => p.id === action.product.id);

        if (produtIndex >= 0) {
          draft[produtIndex].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
          });
        }
      });
    case 'REMOVE_FROM_CART':
      return produce(state, draft => {
        const produtIndex = draft.findIndex(p => p.id === action.id);

        if (produtIndex >= 0) {
          draft.splice(produtIndex, 1);
        }
      });
    default:
      return state;
  }
}
