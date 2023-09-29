import { NativeModules } from 'react-native';
import { YooKassaError } from '../classes';
const RnYookassa = NativeModules.RnYookassa;
export function tokenize(params) {
  return new Promise((resolve, reject) => {
    RnYookassa.tokenize(params, (result, error) => {
      if (result) {
        resolve(result);
      } else {
        if (error) {
          reject(new YooKassaError(error.code, error.message));
        } else {
          reject();
        }
      }
    });
  });
}
//# sourceMappingURL=tokenize.js.map