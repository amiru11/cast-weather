import { createAction } from 'typesafe-actions';
// Create Action Type
export const SET_COMMON_UNITS = 'common/SET_COMMON_UNITS';

export const setCommonUnits = createAction(SET_COMMON_UNITS)<string>();
