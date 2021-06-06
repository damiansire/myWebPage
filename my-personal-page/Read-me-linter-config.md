# instrucciones para finalizar la configuracion de forma exitosa

te he instalado estandard como reglas de linter (es un linter opinionado de JS lo que quire decir que ellos ponene las reglas y nosostros la seguimos)

si hay algo que no te gusta solo tienes que cambiarlo en la configuracion de prettier y cambialo

## Requisitos

Debes tener instalado las siguientes extenciones

1. Prettier
2. EsLint

Asegurate de tener las versiones oficiales de ambos paquetes

## Para un plus en la experiencia de desarrollo :

![Kitten](https://user-images.githubusercontent.com/2644648/94192921-761cb900-fe64-11ea-9e49-ae5b28e37320.png "Instructions")

Abre la barra de busqueda en linux es (Ctrl + Shift + P) pero en la barra de busqueda y abra la opcion de que contenga las palabras settings(json) y dentro te aparecenran todas los lenguajes con sus respectivos linters y deberas colocar las opciones que estan propuestas por la extencion oficial de ESLint

Un ejemplo de mi configuracion

```{json}
  {
    "workbench.iconTheme": "material-icon-theme",
    "go.formatTool": "goimports",
    "python.pythonPath": "/bin/python4",
    "[vue]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
    },
    "[html]": {
        "editor.defaultFormatter": "vscode.html-language-features"
    },
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "worbench.editorAssociations": [
        {
            "viewType": "jupyter.notebook.ipynb",
            "filenamePattern": "*.ipynb"
        }
    ],
    "[typescriptreact]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "[javascriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "workbench.colorTheme": "One Dark Pro",
    "go.toolsManagement.autoUpdate": true,
    "terminal.integrated.fontFamily": "Cascadia Mono",
    "editor.inlineHints.fontFamily": "Cascadia Code",
    "editor.fontFamily": "Cascadia Code",
    "markdown.preview.fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe WPC', 'Segoe UI', system-ui, 'Ubuntu', 'Droid Sans', sans-serif",
    "editor.codeLensFontFamily": "",
    "editor.tabSize": 2,
    "editor.fontLigatures": true,
    "window.zoomLevel": 1,
    "typescript.updateImportsOnFileMove.enabled": "always",
    "javascript.updateImportsOnFileMove.enabled": "never",
    "tabnine.experimentalAutoImports": true,
    "liveServer.settings.donotShowInfoMsg": true,
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[jsonc]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}

```

# fijate en la este

editor.defaultFormatter : [en esta parte tiene lo propuesto por la extension de prettier]

tambien agraga la opcion de "editor.formatOnSave": true,esta opcion permite que cada que guardas el linter formatea el archivo automaticamente

```{json
{
  "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
  },
}
```

puedes agragar estas opciones tanto para typescript

```{json
{
    "[javascriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
}
```

luego hasle un reload al editor para que todo se aplique de forma correcta
