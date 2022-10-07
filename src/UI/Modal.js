export default class Modal {
    constructor(contentId) {
        this.contentTemplateEl = document.getElementById(contentId);
        this.modalTemplateEl = document.getElementById('modal-template');
    }

    show() {
        console.log('modal show')
        const modalElements = document.importNode(this.modalTemplateEl.content, true);
        this.modalEl = modalElements.querySelector('.modal');
        this.backdropEl = modalElements.querySelector('.backdrop');
        const contentEl = document.importNode(this.contentTemplateEl.content, true);

        this.modalEl.appendChild(contentEl);

        document.body.insertAdjacentElement('afterbegin', this.backdropEl)
        document.body.insertAdjacentElement('afterbegin', this.modalEl);
    }

    hide() {
        this.modalEl.remove();
        this.backdropEl.remove();
        this.modalEl = null;
        this.backdropEl = null;
    }
}