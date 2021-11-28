import './button.css';

class Button {
    constructor() {
        this.title = '';
    }

    setTitle(text) {
        this.title = text;
    }

    setClick(func) {
        this.callback = func;
    }

    render() {
        const createButton = document.createElement('button');
        createButton.classList.add('button');
        createButton.innerText = this.title;
        createButton.addEventListener('click', this.callback);

        return createButton;
    }
}

export default Button;