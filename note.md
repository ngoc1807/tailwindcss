### install

```
- npm init -y
- npm install -D tailwindcss
- npx tailwindcss init
- npm install -D tailwindcss postcss autoprefixer vite
- set up package.json ->  sctipt:'vite'
- npx tailwindcss -i index.css -o ./dist/output.css --watch

```

### Break point

module.exports = {
theme: {
screens: {
'tablet': '640px',
// => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },

}
}

<!-- company -->

npx tailwindcss -i ./src/projects/company/index.css -o ./dist/projects/company.css --watch
