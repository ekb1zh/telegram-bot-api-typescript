///<reference path="./bot.ts" />
///<reference path="./log.ts" />


// Global variables. Input data
const SPREADSHEET_URL: string = "";
const SHEET_NAME: string = "log";
const TIMEZONE: string = "GMT";

const TELEGRAM_BOT_TOKEN: string = "";
const GOOGLE_SCRIPT_DEPLOY_URL: string = "";

const LOG: Log = new Log(SPREADSHEET_URL, SHEET_NAME, TIMEZONE);
const BOT: TelegramBot = new TelegramBot(new Server(TELEGRAM_BOT_TOKEN));


// Bot initialization (launching manually once from the script)
function init(): void {
    try {
        LOG.of("deleteWebhook " + BOT.deleteWebhook());
        LOG.of("setWebhook " + BOT.setWebhook({ url: GOOGLE_SCRIPT_DEPLOY_URL }));
        LOG.of("getWebhookInfo " + JSON.stringify(BOT.getWebhookInfo(), null, 4));
        LOG.of("getMe " + JSON.stringify(BOT.getMe(), null, 4));
    } catch(error) {
        LOG.of("ERROR\n" + JSON.stringify(error, null, 4));
    }
}


// Google script event object: https://developers.google.com/apps-script/guides/web
interface GoogleScriptEvent {
    queryString: string | null, // The value of the query string portion of the URL, or null if no query string is specified name=alice&n=1&n=2
    parameter: Object, // An object of key/value pairs that correspond to the request parameters. Only the first value is returned for parameters that have multiple values. {"name": "alice", "n": "1"}
    parameters: Object, // An object similar to e.parameter, but with an array of values for each key {"name": ["alice"], "n": ["1", "2"]}
    contextPath: string, // Not used, always the empty string.
    contentLength: number, // The length of the request body for POST requests, or -1 for GET requests 332
    postData: {
        length: number, // The same as e.contentLength 332
        type: string, // The MIME type of the POST body text/csv
        contents: string, // The content text of the POST body Alice,21
        name: string // Always the value "postData" postData
    }
}


// Receiving data from Telegram server
function doPost(event: GoogleScriptEvent): void {

    try {
       
        // Analyzing data
        const update: Update = JSON.parse(event.postData.contents);

        // ...


        // Writing to log
        LOG.of(JSON.stringify(update.message, null, 4));
        
    } catch(err) {
        LOG.of("ERROR\n" + JSON.stringify(err, null, 4));
    }

}


// This method should not be called
function onGet(event: GoogleScriptEvent): never  { // GoogleAppsScript.Content.TextOutput | GoogleAppsScript.HTML.HtmlOutput {
    const err: Error = new Error("OnGet method called");
    LOG.of("ERROR\n" + JSON.stringify(err, null, 4));
    throw err;
}