import axios from '../api/api'

const BASE_PATH = '/api-v1-users'
export class UsersService {
  public static async getUsersTotalDebts(usersId: string): Promise<any> {
    return axios
      .get(`${BASE_PATH}/${usersId}/total_debts`)
      .then((res) => {
        return res.data.user
      })
      .catch((e) => console.log('エラー起きてるよ', e))
  }
}
