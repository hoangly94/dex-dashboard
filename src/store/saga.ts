
import { all } from '@redux-saga/core/effects';
import tuVanCoPhieu from './modules/tuVanCoPhieu/saga'

export default function* rootSaga() {
    yield all([
        tuVanCoPhieu()
    ]);
  }