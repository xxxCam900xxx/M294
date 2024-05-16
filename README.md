# M294
M294 Frontend einer interaktiven Webapplikation realisieren

# Inhaltsverzeichnis
- [Modulbeschreibung](#modulbeschreibung)
- [Voraussetzungen](#vorraussetzungen)
- [Setup - How to start?](#setup---how-to-start)
- [Block 1 | Einstieg und Repetition](/Block_01/README.md)
- [Block 2 | DOM manipulieren und dynamisches Gestalten](/Block_02/README.md)
- [Block 3&4 | UI-Komponenten im Web (Workshop)](/Block_03_04/README.md)
- [Block 5 | Animationen und Grafiken](/Block_05/README.md)
- [Block 6 | Formularelemente einsetzen](/Block_06/README.md)
- [Block 7 | HTTP-Abfragen einsetzen](/Block_07/README.md)
- [Block 8 | Client seitiges Routing](/Block_08/README.md)
- [Block 9 | Authentifizierung benutzen (Projektarbeit)](/Block_09/README.md)

---
## Modulbeschreibung

#### Web Engineering
> [!NOTE]
> M294 Frontend einer interaktiven Webapplikation realisieren

#### Kompetenz
> [!IMPORTANT]
> Implementiert mittels vorgegebener Technologie und mit Hilfe eines existierenden Back-Ends ein Front-End einer interaktiven Webapplikation, welches die Verwaltung von Daten ermöglicht.

#### Objekt
> [!NOTE]
> Front-End einer interaktiven Webapplikation. Entsprechende Darstellung für die Verwaltung (Create, Read, Update, Delete) von Daten. Zum Beispiel: Verwaltung einer Todo-Liste.
---

## Vorraussetzungen
- [HTML - Hyper Text Markup Language](https://www.w3schools.com/html/default.asp)
- [CSS - Cascading Style Sheets](https://www.w3schools.com/css/default.asp)
- [JS - JavaScript](https://www.w3schools.com/js/default.asp)

---

## Setup - How to start?
### 1. Visual Studio Code herunterladen
Laden Sie sich [VScode](https://code.visualstudio.com/download) herunter.

### 2. Extension Live Preview
Nachdem Sie VScode heruntergeladen haben, gehen Sie an der linken Navigation auf **Extension**.

![ExtensionAussehen](/Content/Extension.png)

Geben Sie in der Suchleiste folgendes ein: "Live Server"

![LiveServerAussehen](/Content/LiveServer.png)

VS Marketplace Link: [VScode Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

### 3. Erstellen Sie einen Ordner
Nun erstllen Sie einen Ordner und öffnen Sie den Ordner mit VScode.

![InVScodeFolderÖffnen](/Content/VScodeOpenFolder.png)

![OrdnerAuswählen](/Content/TestOrdnerSelecrt.png)

### 4. HTML File hinzufügen und starten
Clicken Sie Linksklick im Ordner bereich in VScode und erstellen Sie ein neues File.

![VScode Fileerstellen](/Content/AddFile.png)

Geben Sie dem File den Namen "**index.html**"

![Datei Endung](/Content/Filename.png)

Im index.html File erstellen Sie folgendes Konstrukt:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <h1>Hello World</h1>
    
</body>
</html>
```
oder geben Sie ein Ausrufezeichen ein und Klicken Sie die oberste Möglichkeit.

![AlternativKonstrukt](/Content/ExlemationStruktur.png)

Jetzt sind Sie bereit, den Live Server zu starten, den wir zu Beginn installiert haben.

Klicken Sie dazu rechts unten auf "**Go Live**".

![GoLive Button](/Content/GoLive.png)