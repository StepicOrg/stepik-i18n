module.exports = {
  /**
   * Filter missing translations to ignore expected missing translations.
   */
  requiresTranslation(key, locale) {
    return locale === 'ru' || locale === 'en';
  }
};
