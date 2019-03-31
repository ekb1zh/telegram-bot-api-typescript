# Description
This repositories include 5 files that help fast and easy create bots for Telegram messenger.

<h2>1. types.ts</h2>
It's parse of Telegram bot API <a href="https://core.telegram.org/bots/api">page</a> to the TypeScript code.

<h2>2. bot.ts</h2>
It's implementation of the types.ts and linkage to Google apps script as the server for bot.

<h2>3. log.ts</h2>
It's need for writing notes to the Google sheet as the log.

<h2>4. main.ts</h2>
The main file.

<h2>5. tsconfig.json</h2>
Basic file with parameters for TypeScript compiler.

# Manual
<p>1. Open main.ts file and fill the variables:</p>
<p><strong>SPREADSHEET_URL</strong> - full URL to the Google sheet that will be used as the log-file.</p>
<p><strong>SHEET_NAME</strong> - the name of sheet for writing. If the shett with this name is present, that it's will be used. If it's absent, that will be create a new sheet with this name.</p>
<p><strong>TIMEZONE</strong> - timezone that will be used as the time of notes in log.</p>
<p><strong>TELEGRAM_BOT_TOKEN</strong> - <a href="https://core.telegram.org/bots/api#authorizing-your-bot">token</a>.
<p>2. First launch.</p>
<p>Open script in browser, and execute an init function. It's need for the initialization script on the Telegram server.</p> 

# For beginners
<p><a href="https://developers.google.com/apps-script/guides/typescript">Google apps script and TypeScript</a></p>
<p><a href="https://developers.google.com/apps-script/guides/clasp">Clasp overview</a></p>
<p><a href="https://github.com/google/clasp">Clasp commands</a></p>
<p><a href="https://www.typescriptlang.org/docs/handbook/compiler-options.html">Typescript</a></p>
