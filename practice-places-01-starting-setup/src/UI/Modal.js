export class Modal {
constructor(contentId, fallbackText) {
  this.fallbackText = fallbackText;
  this.contentTemplate = document.getElementById(contentId);
  this.modalTemplateEl = document.getElementById('modal-template');

}

  show() {
    if ('content' in document.createElement('template')) {
      const modalElements = document.importNode(this.modalTemplateEl.content, true);
      console.log(modalElements)
      const contentElement = document.importNode(this.contentTemplate.content, true);
      console.log(contentElement )

      this.modalElement = modalElements.querySelector('.modal');
      this.backdropElement = modalElements.querySelector('.backdrop');


      this.modalElement.appendChild(contentElement);

      document.body.insertAdjacentElement('afterbegin', this.modalElement);
      document.body.insertAdjacentElement('afterbegin', this.backdropElement);

    } else {
      // ovo smo ubacili zbog pretrazivaca koji ne podupiru "content' in document.createElement('template')"
        alert(this.fallbackText);
    }
  }

  hide() {
    if (this.modalElement) {
      document.body.removeChild(this.modalElement);
      document.body.removeChild(this.backdropElement);
      this.modalElement = null;
      this.backdropElement = null;
    }

  }

}