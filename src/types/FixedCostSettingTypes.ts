export type FixedCostSettings =
  | 'beginningOfMonth' // 月初
  | 'middleOfMonth' // フロント上では15日で選択する
  | 'endOfMonth' // 月末
  | 'none'
