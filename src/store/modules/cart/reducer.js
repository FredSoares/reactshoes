import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const { product } = action;

        draft.push(product);
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const produtIndex = draft.findIndex(p => p.id === action.id);

        if (produtIndex >= 0) {
          draft.splice(produtIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, draft => {
        const produtIndex = draft.findIndex(p => p.id === action.id);

        if (produtIndex >= 0) {
          draft[produtIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}
