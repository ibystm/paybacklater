import axios from '../api/api'
export class UsersService {
  public static async getUsersTotalDebts(usersId: string): Promise<any> {
    return axios
      .get(`/api-v1-users/${usersId}/total_debts`)
      .then((res) => {
        return res.data.user
      })
      .catch((e) => console.log('エラー起きてるよ', e))
  }
}
