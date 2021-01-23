export type PaymentTypes = {
  price: number // 必ず数字で入力必須とする
  paidBy: string // 支払ったユーザーのid
  isAdjustmentComplete: boolean // 精算が完了しているかどうか
  category?: Category
  memo?: string
  fixedCostSetting?: FixedCostSettings // 固定費として追加するかどうか、追加するのであれば、月初め | 15日 | 月末
}
export type FixedCostSettings =
  | 'beginningOfMonth' // 月初
  | 'middleOfMonth' // フロント上では15日で選択する
  | 'endOfMonth' // 月末
  | 'none'
