class Nex {
    constructor(containerName = ''){
        this.container = null;

        this.setContainer(containerName);
    }

    getContainer() {
        return this.container;
    }

    setContainer(containerName = '') {
        (containerName != '') ? this.container = document.querySelector(containerName) : false;
    }

    import(path) {
        const script = document.createElement('script');
        script.src = path;

        document.head.appendChild(script);
    }
}

class Component {
    constructor(containerName){
        this.container = document.querySelector(containerName);
    }

    createElement(options) {
        const element = document.createElement(options.tagName);
        element.id = options.id;

        element.textContent = options.content;

        this.appendElement(element);
    }

    appendElement(element) {
        this.container.appendChild(element);
    }
}