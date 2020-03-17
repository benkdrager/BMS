//Datei:	k10_scripting_tests.js
//Autor:
//Datum:
//kim, timotheus chang whae
//13.11.2017
function BatchUpload()  
{
		if (application.activeWindow.caption.indexOf("BMS") == -3) {
         application.messageBox("Falsche Datenbank", "Falsche Datenbank, bitte wechseln Sie in die BMS-Datenbank", "error-icon");
		 return;
        }
// ################################# ANFANG PICA-Export #################################




// ################################# ENDE PICA-Export #################################
 

var screenTest;
screenTest = application.activeWindow.getVariable("scr");
if (screenTest = "8A"){
                application.messageBox("Batch-Upload abgeschlossen", "Alle Einträge ### PICA-Export ### im Batch-Skript löschen und speichern." + "\n" + "Anschließend die Skripte in WinIBW mit dem Shortcut \"STRG + UMSCHALT + ALT + R\" neu laden", "alert-icon");
                return;
                }
}
