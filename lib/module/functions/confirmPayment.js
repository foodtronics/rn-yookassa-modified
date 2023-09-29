import { NativeModules } from 'react-native';
import { YooKassaError } from '../classes';
const RnYookassa = NativeModules.RnYookassa;
export function confirmPayment(params) {
  return new Promise((resolve, reject) => {
    RnYookassa.confirmPayment(params, (result, error) => {
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
//# sourceMappingURL=confirmPayment.js.map