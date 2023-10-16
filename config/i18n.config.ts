import pl from '~/lang/pl.json'
import en from '~/lang/en.json'
export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'pl',
  messages: {
    pl,
    en
  },
  pluralizationRules: {
    pl (choice, choicesLength) {
      if (choice === 0) {
        return 0
      }

      if (choice === 1) {
        return 1
      }

      const teen = choice > 10 && choice < 20
      const endsWithOne = choice % 10 === 1

      if (choicesLength < 4) {
        return !teen && endsWithOne ? 1 : 2
      }
      if (!teen && endsWithOne) {
        return 3
      }
      if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
        return 2
      }

      return choicesLength < 4 ? 2 : 3
    }
  }
}))
