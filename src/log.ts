// Writing log-data in Googlesheet
class Log {

    // Fields
    private readonly SHEET:     GoogleAppsScript.Spreadsheet.Sheet;
    private readonly TIMEZONE:  string;

    // Constructor
    constructor(    spreadsheetUrl: string,
                    sheetName:      string,
                    timeZone:       string      ) {   // throws Error

        // Checking parameters
        if(!spreadsheetUrl) throw new Error("Spreadsheet url");
        if(!sheetName) throw new Error("Sheet name");
        
        // Getting spreadsheet
        type Spreadsheet = GoogleAppsScript.Spreadsheet.Spreadsheet;
        const spreadsheet: Spreadsheet = SpreadsheetApp.openByUrl(spreadsheetUrl);
        if(!spreadsheet) throw new Error("Spreadsheet");
        
        // Getting sheet of spreadsheet
        type Sheet = GoogleAppsScript.Spreadsheet.Sheet;
        let sheet: Sheet = spreadsheet.getSheetByName(sheetName);
        if(!sheet) sheet = spreadsheet.insertSheet(sheetName, 0);
        // 0 = put a new sheet on the first position

        // Writing fields
        this.SHEET = sheet;
        this.TIMEZONE = timeZone;
    }

    // New note
    of(text: string): void { // throws Error

        // Adding new line before the first line
        this.SHEET.insertRowBefore(1);

        // Checking, is this sheet has a minimum two columns?
        if(this.SHEET.getMaxColumns() < 2) {
            this.SHEET.insertColumnAfter(1);
        }

        // Preparing date
        const date: string = Utilities.formatDate(
            new Date(), this.TIMEZONE, "yyyy.MM.dd HH:mm:ss" );

        // Preparing array
        const arr: string[][] = [[date, text]];

        // Preparing range for write
        type Range = GoogleAppsScript.Spreadsheet.Range;
        const range: Range = this.SHEET.getRange("A1:B1");
        
        // Writing array to the range
        range.setValues(arr);
    }
}