function onEdit(e){// automatically adds to spreadsheet
  var sheet = e.source.getActiveSheet();
  if (sheet.getName() == "Sheet1") //"order data" is the name of the sheet where you want to run this script.
  {   
    var actRng = sheet.getActiveRange();
    var editColumn = actRng.getColumn();
    var rowIndex = actRng.getRowIndex();
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues();
    var timestamp = headers[0].indexOf("TimeStamp") + 1;
    var product = headers[0].indexOf("VariantID") + 1;
    SpreadsheetApp.getActiveSheet().getRange('D'+rowIndex).setValue(Utilities.formatDate(new Date(), "UTC+8", "MM-dd-yyyy"));
  }
}

