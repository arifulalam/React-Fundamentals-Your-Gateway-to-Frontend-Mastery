# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


1. run ```npm create vite@latest```
2. enter project name (class-8n9)
3. select **React**
4. select **JavaScript + SWC**
5. enter project folder (cd class-8n9)
6. run ``npm i`` or ``npm install``
7. run ``npm run dev``

This will start the project on http://localhost:5173/

Install Tailwind
<br/>
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Add following in ``tailwind.config.js`` inside ``content: []``
```
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
```
delete all in ``index.css`` and add following
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Install Daisy UI (Twailwind Framework)
```
npm i -D daisyui@latest
```

Add following in ``tailwind.config.js`` inside ``plugins: []``
```
require('daisyui'),
```

Add following after ``plugins: []`` section
```
// daisyUI config (optional - here are the default values)
daisyui: {
    // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    themes: true, 
    // name of one of the included themes for dark mode
    darkTheme: "dark", 
    // applies background color and foreground color for root element by default
    base: true, 
    // include daisyUI colors and design decisions for all components
    styled: true, 
    // adds responsive and modifier utility classes
    utils: true, 
    // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    prefix: "", 
    // Shows info about daisyUI version and used config in the console when building your CSS
    logs: true, 
    // The element that receives theme color CSS variables
    themeRoot: ":root", 
},
```

To use any theme from **DaisyUI** from following list, just add `` data-theme="<theme-name-here>"`` as ``attribute`` of ``<html>`` inside ``index.html``
```
light           dark
cupcake         bumblebee
emerald         corporate
synthwave       retro
cyberpunk       valentine
halloween       garden
forest          aqua
lofi            pastel
fantasy         wireframe
black           luxury
dracula         cmyk
autumn          business
acid            lemonade
night           coffee
winter          dim
nord            sunset
```

To create router to navigate page to page, we are going to install **react rounter dom**.
```
npm install react-router-dom
```

To store data to use any pages/componets we need to install **react redux** & **react-redux**
```
npm install @reduxjs/toolkit react-redux
```

To generate **UUID** we need to install *UUID* package
```
npm install uuid
```

To show toast message install **react-toastify**
```
npm install --save react-toastify
```

To change value of tags (i.e: title) between <head></head> needs **react-helmet-async**
```
npm i react-helmet-async
```

To play with times installed *MomentJS*
```
npm install moment --save
```