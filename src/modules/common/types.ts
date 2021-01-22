import type { ActionType } from 'typesafe-actions';
import type * as actions from '@/modules/common/actions';

export type TCommonAction = ActionType<typeof actions>;

export type TCommonState = {
  units: string;
};
