flowchart
    participant browser
    participant server
    participant database

    browser->server: Open https://studies.cs.helsinki.fi/exampleapp/notes
    server->database: Retrieve notes data
    database-->>server: Notes data
    server-->>browser: HTML document

    browser->server: Enter note in text field and click Save
    server->database: Save new note
    database-->>server: Confirmation
    server-->>browser: Redirect to updated notes page

    browser->server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    server->database: Retrieve updated notes data
    database-->>server: Updated notes data
    server-->>browser: Updated HTML document
-