const FirstComponent = new Component('#container');

app.importStyle('src/js/components/FirstComponent/FirstComponent.css');

FirstComponent.createElement({
    tagName: 'h1',
    id: 'first-component',
    content: 'Olá mundo, eu sou o primeiro componente',
    className: 'red big'
});