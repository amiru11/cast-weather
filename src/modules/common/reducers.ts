import { createReducer } from 'typesafe-actions';
import type { TCommonAction, TCommonState } from '@/modules/common/types';
import { SET_COMMON_UNITS } from '@/modules/common/actions';

const initialState: TCommonState = {
  units: 'metric', // units: metric / standard
};

const reducer = createReducer<TCommonState, TCommonAction>(initialState, {
  [SET_COMMON_UNITS]: (state, { payload: units }) => ({
    ...state,
    units,
  }),
});

export default reducer;
