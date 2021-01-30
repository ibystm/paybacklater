import { Category } from '../../types/CategoryTypes'
import { FixedCostSettings } from '../../types/FixedCostSettingTypes'

export type PaymentTypes = {
  price: number // 必ず数字で入力必須とする
  paidBy: string // 支払ったユーザーのid
  isAdjustmentComplete: boolean // 精算が完了しているかどうか
  category?: Category
  memo?: string
  fixedCostSetting?: FixedCostSettings // 固定費として追加するかどうか、追加するのであれば、月初め | 15日 | 月末
}
