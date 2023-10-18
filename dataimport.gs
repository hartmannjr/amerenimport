function importdata() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("AmerenImport")

  //sheet.clear();

  var label = GmailApp.getUserLabelByName("Imports/AmerenImports");
  var threads = label.getThreads();
  
  for (var i=0; i<threads.length; i++)
  {
    var messages = threads[i].getMessages();

    for(var j=0; j<messages.length; j++)
    {
      var msg = messages[j].getPlainBody().toString();
      var splitMsg = msg.split("*");
      var splitMsg2 = splitMsg[10].split(" ");
      var duedate = splitMsg2[1].slice(0,10);
      var data = [[duedate.trim(),"$"+splitMsg[8].trim()]];

      //sheet.AppendRow([msg,dat])
      sheet.getRange(sheet.getLastRow()+1,1,data.length, data[0].length).setValues(data);
    }
    threads[i].removeLabel(label);
    
    var newLabel = GmailApp.getUserLabelByName("Imports/Imported");
    threads[i].addLabel(newLabel);
  }
}
