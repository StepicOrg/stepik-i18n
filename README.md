# Hello!

This is [Stepik](https://stepik.org)'s UI translations.

At this moment there are 6 locales:
* [🇺🇸 English](translations/en.yml)  (default, falls back here if some translation is missing)
* [🇷🇺 Russian](translations/ru.yml)
* [🇺🇦 Ukrainian](translations/uk.yml) 
* [🇨🇳 Chinese](translations/zh-hans.yml)
* [🇪🇸 Spanish](translations/es.yml)
* [🇩🇪 Deutsch](translations/de.yml)

## How To Contribute

Create a pull request to this repo. [Learn more about pull requests](https://help.github.com/articles/about-pull-requests/) if you're new to GitHub.

Both minor fixes and major changes are welcome! You can even add a new language.

All accepted changes here will be live on https://stepik.org within 2 weeks.

<details>
  <summary>:bulb: <b>ProTip:</b> to associate UI elements with translations, run <code>i18nDebugKeys()</code> in the browser console when you are at https://stepik.org. Execute this command again to hide the translation keys. Expand this section to watch a demo.</summary>
  
 ![i18nDebugKeys demo](https://user-images.githubusercontent.com/4932134/72613438-4fab9300-3951-11ea-95cc-24d996f6193d.gif)
</details>

<details>
  <summary>:bulb: <b>ProTip:</b> to find out missing translations in your locale you are working on, add the locale into <code>requiresTranslation</code> function in <a href="test-config.js"><code>test-config.js</code></a>.</summary>
  
 ```js
requiresTranslation(key, locale) {
   return locale === 'ru' || locale === 'en' || locale === 'YOUR_LOCALE';
}
 ```
</details>

### Translations Format

[ICU Message Syntax](https://formatjs.io/guides/message-syntax) is used.

### Testing & linting translations

- `pip install -r requirements.txt`
- `npm install`
- `npm test`

## Contributors

* Stepik Team (English and Russian translations; Spanish and Chinese rough auto-translation)
* Андрій Красоткін (Ukrainian translation)
* add your name here
