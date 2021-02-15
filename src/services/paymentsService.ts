import axios from '../api/api'
import { InputState } from '../Screens/AddPaymentScreen'

const BASE_PATH = '/api-v1-payments'
export class PaymentService {
  public static postPayments = async (data: InputState): Promise<void> => {
    return await axios.post(`${BASE_PATH}/`, { data })
  }
}
