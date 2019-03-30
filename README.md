# Description
This repositories include 5 files that help fast and easy create bots for Telegram messenger.

# 1. types.ts
It's parse of Telegram bot API page https://core.telegram.org/bots/api to the TypeScript code.

# 2. bot.ts
It's implementation of the types.ts and linkage to Google apps script as the server for bot.

# 3. log.ts
It's need for writing notes to the Google sheet as the log.

# 4. main.ts
The main file.

# 5. tsconfig.json
Basic file with parameters for TypeScript compiler.

# Manual
1. Open main.ts file and fill the variables:
<br>
<br><strong>SPREADSHEET_URL</strong> - full URL to the Google sheet that will be used as the log-file.
<br><strong>SHEET_NAME</strong> - the name of sheet for writing. If the shett with this name is present, that it's will be used. If it's absent, that will be create a new sheet with this name.
<br><strong>TIMEZONE</strong> - timezone that will be used as the time of notes in log.
<br>
<br><strong>TELEGRAM_BOT_TOKEN</strong> - token as <a href="https://core.telegram.org/bots/api#authorizing-your-bot">showing</a>.

