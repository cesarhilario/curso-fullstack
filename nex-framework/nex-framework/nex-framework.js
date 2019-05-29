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
}