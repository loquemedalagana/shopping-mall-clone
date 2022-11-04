import * as appActions from 'src/actions/appActions';
import { appReducer, initialState } from 'src/stores/appStore';

describe('app reducer test', () => {
  it('should return initial state', () => {
    expect(appReducer(undefined, { type: undefined })).toEqual(initialState);
  });
});
