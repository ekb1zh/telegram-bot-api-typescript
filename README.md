# Description
This repositories include 5 files that help you fast and easy create bots for Telegram messenger.

<h3>1. types.ts</h3>
It's parsing of Telegram bot API <a href="https://core.telegram.org/bots/api">page</a> to the TypeScript code.

<h3>2. bot.ts</h3>
It's implementation of the types.ts and linkage to Google apps script as the server for bot.

<h3>3. log.ts</h3>
It's need for writing notes to the Google sheet as the log.

<h3>4. main.ts</h3>
The main file.

<h3>5. tsconfig.json</h3>
Basic file with parameters for TypeScript compiler.

# Manual
<p>1. Prepare the project as stated in the references below.</p>
<p>2. Open main.ts file and fill the variables:</p>
<strong>SPREADSHEET_URL</strong> - full URL to the Google sheet that will be used as the log-file.
<br><strong>SHEET_NAME</strong> - the name of sheet for writing. If the shett with this name is present, that it's will be used. If it's absent, that will be create a new sheet with this name.
<br><strong>TIMEZONE</strong> - timezone that will be used as the time of notes in log.
<br><strong>TELEGRAM_BOT_TOKEN</strong> - <a href="https://core.telegram.org/bots/api#authorizing-your-bot">token</a>.

<br><p>3. First launch.</p>
Open script in the browser, and execute an init function. It's need for the initialization script on the Telegram server.
<br>After this, you bot must working. Good luck!

# References
<a href="https://developers.google.com/apps-script/guides/typescript">Google apps script and TypeScript</a>
<br><a href="https://developers.google.com/apps-script/guides/clasp">Clasp overview</a>
<br><a href="https://github.com/google/clasp">Clasp commands</a>
<br><a href="https://www.typescriptlang.org/docs/handbook/compiler-options.html">Typescript</a>
