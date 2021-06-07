# Hello!

This is [Stepik](https://stepik.org)'s UI translations.

At this moment there are 7 locales:
* [🇺🇸 English](translations/en.yml)  (default, falls back here if some translation is missing)
* [🇷🇺 Russian](translations/ru.yml)
* [🇺🇦 Ukrainian](translations/uk.yml)
* [🇧🇾 Belarusian](translations/be.yml) [![Crowdin](https://badges.crowdin.net/stepik-be/localized.svg)](https://crowdin.com/project/stepik-be)
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

[ICU Message Syntax](https://formatjs.io/docs/core-concepts/icu-syntax/) is used.

### Testing & linting translations

- `pip install -r requirements.txt`
- `npm install`
- `npm test`

### Translation management
Tools like [Crowdin.com](https://crowdin.com/) might be used for creating and updating translations.

The workflow then might be the following:
1. Fork this repo 
2. Create a Crowdin project, choose language(s) you want to translate into.
3. Integrate Crowdin project with your forked repo (see [the manual](https://support.crowdin.com/github-integration/)). Note that in Crowdin config file ([crowdin.yml](crowdin.yml)) Russian is set to be the source language for the translations. Change it to another language you want to translate from.
4. Optionally, for better perfomance, you can integrate your Crowdin project with an auto translators of your choice like Google, Yandex, Amazon etc. (see [the manual](https://support.crowdin.com/configuring-machine-translation-engines/))
5. Start translating using Crowding and sync changes with your repo.
6. There is a `yamllint` integrated into the Stepik workflow which requires all the lines in a translation YML file to be less than 100 characters long. But Crowding automatically creates much longer lines. So to avoid linting errors you will need to wrap long lines. It could be easily done with [Prettier.io](https://prettier.io) — it is available as an online or command line tool or a plugin for popular editors (VS Code, Sublime, Emacs, JetBrains etc.)
7. Test you translation by running `npm test` as mentioned above
8. Create a pull request into the original repo


## Contributors

* Stepik Team (English and Russian translations; Spanish and Chinese rough auto-translation)
* [Андрій Красоткін](https://github.com/zimorodokan) (Ukrainian translation)
* [@ethnoby](https://github.com/ethnoby) team (Belarusian translation)
* [Maycon M. Kopelvski](https://github.com/mayconmk) (Brazilian Portuguese translation)
* add your name here
