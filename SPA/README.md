# Vanilla SPA (Sinle Page Application)

## Setup

1. Initialize the project with npm (generates a packge.json file):

```bash
npm init -y
```

2. Install Typescript and a development server:

```bash
    npm install typescript lite-server --save-dev
```
- __Typescript__ transpiles .ts files into JavaScript
- __Lite-server__ A lightweight development server with live reload

3. Initialize a tsconfig.json file for **Typescript** configuration:

```bash
    npx tsc --init
```


Update tsconfig.json file to include:
```json
    {
        "compilerOptions": {
        "target": "ES6",
        "module": "ES6",
        "outDir": "./dist",
        "rootDir": "./src",
        "strict": true
    },
    "include": ["src/**/*"]
}
```

## Project Scrutcture

```graphql
    my-spa/
    ├── dist/                 # Compiled JavaScript files (generated)
    ├── src/                  # Source files
    │   ├── index.html        # Main HTML file
    │   ├── style.css         # CSS file
    │   ├── app.ts            # Main TypeScript file
    ├── package.json          # NPM configuration
    ├── tsconfig.json         # TypeScript configuration
    ├── .gitignore            # Git ignore file

```

