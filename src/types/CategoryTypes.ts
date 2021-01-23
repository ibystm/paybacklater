export type Category =
  | 'food' // 食費
  | 'living' //生活用品
  | 'transportation' // 交通費
  | 'furnitureAndAppliances' //　家具家電
  | 'utility' //　光熱費
  | 'hobbyAndCulture' //趣味教養
  | 'leisure' // レジャー
  | 'rent' // 家賃
  | 'communication' //　通信費

export const inputCategoryToText = (category: Category) => {
  switch (category) {
    case 'communication':
      return '通信費'
    case 'food':
      return '食費'
    case 'furnitureAndAppliances':
      return '家具家電'
    case 'hobbyAndCulture':
      return '趣味教養'
    case 'leisure':
      return 'レジャー'
    case 'living':
      return '生活用品'
    case 'rent':
      return '家賃'
    case 'transportation':
      return '交通費'
    case 'utility':
      return '光熱費'
    default:
      throw new Error('please select right category')
  }
}
