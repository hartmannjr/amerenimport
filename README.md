# amerenimport
Imports bill data from ameren "bill is ready" email to Google Sheets

Uses email filter to tag Ameren's "Your Ameren Missouri Bill is Ready" emails with "Imports/AmerenImports"

From there, a regular trigger uses dataimport.importdata() to add the due date and bill amount to the sheet "AmerenImport" for use in data manipulation.

Once processed, the code will remove the "Imports/AmerenImports" label and add the new label "Imports/Imported" label to each message. 

Requirements:
- label: "Imports/AmerenImports"
- label: "Imports/Imported"
- email filter: subject:(Your Ameren Missouri Bill is Ready) | Do this: Apply label "Imports/AmerenImports"
- sheet: "AmerenImports"

Credit:
- pointNclick - for the methodology on improrting email information
- link: https://stackoverflow.com/a/32897768
