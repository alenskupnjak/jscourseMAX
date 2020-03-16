class DOMHelper {
  static moveElement(elementId, newDestination) {
    const element = document.getElementById(elementId)
    console.log(element)
    const destinationElement = document.querySelector(newDestination);
    console.log(destinationElement)
    destinationElement.append(element);
    // // // opcija nije podrzana u svim preglednicima, mala animacija....
    // element.scrollIntoView({behavior:'smooth'});
    // opcija podrzana u svim preglednicima
    element.scrollIntoView({behavior:'auto'});
  }

  static clearEventListeners (element) {
    const cloneElement = element.cloneNode(true);
    element.replaceWith(cloneElement);
    return cloneElement;
  }
} 
class Tooltip {
  constructor(funkcija, text, hostElementId){
    this.closeNotifier = funkcija
    this.text = text;
    this.hostElementId = hostElementId;
  }

  closeTooltip = () => {
    this.sakrij();
    this.closeNotifier();
  }

  sakrij() {
    this.element.remove();
  }
  
  show() {
    const tooltipElement = document.createElement('div')
    tooltipElement.className = 'card';
    tooltipElement.textContent = this.text;
    this.hostElement= document.getElementById(this.hostElementId);
    console.log(this.hostElement)
    console.log(this.hostElement.getBoundingClientRect());
    const hostElementLeft = this.hostElement.offsetLeft;
    const hostPosTop = this.hostElement.offsetTop;
    const hostElHigh = this.hostElement.clientHeight;
    const parentElementScrolling = this.hostElement.parentElement.scrollTop
    console.log(parentElementScrolling)

    const x = hostElementLeft + 20;
    const y = hostPosTop + hostElHigh - parentElementScrolling - 10 ;

    tooltipElement.style.position = 'absolute'
    tooltipElement.style.left = x + 'px';
    tooltipElement.style.top = y +'px';

    this.hostElement.insertAdjacentElement('beforeend',tooltipElement)

    // document.body.append(tooltipElement);
    tooltipElement.addEventListener('click',this.closeTooltip)
    this.element = tooltipElement;
  }
}

class ProjectItem {
  hasActiveToolTip = false;
  constructor(id, updatedProjectListFunction, type){
    this.id = id;
    this.updatedProjectListHandler = updatedProjectListFunction;
    console.log('ProjectItem= '+ id)
    this.connctSwitchButton(type);
    this.connectMoreInfoButton();
    this.pokus= 'slon';
  }

  showMoreInfoHandler() {
    if (this.hasActiveToolTip) {
      return;
    }
    const projectElement = document.getElementById(this.id);
    const tooltipText = projectElement.dataset.extraInfo;
    console.log(tooltipText)
    console.log(projectElement.dataset);
    const tooltip = new Tooltip(() => {
      this.hasActiveToolTip = false
    }, tooltipText, this.id);
    tooltip.show();
    this.hasActiveToolTip = true;
  }

  connectMoreInfoButton() {
    const projectItemElement = document.getElementById(this.id);
    let moreInfoButton = projectItemElement.querySelector('button:first-of-type');
    moreInfoButton.addEventListener('click',this.showMoreInfoHandler.bind(this));
  }

  connctSwitchButton(type) {
    const projectItemElement = document.getElementById(this.id)
    console.log(projectItemElement);
    console.log(projectItemElement.querySelector('button:last-of-type'));
    console.log(projectItemElement.querySelector(':first-child'));
    let switchButton = projectItemElement.querySelector('button:last-of-type');
    switchButton = DOMHelper.clearEventListeners(switchButton);
    switchButton.textContent = type === 'active' ? 'Finish' :'Activate';
    switchButton.addEventListener('click',this.updatedProjectListHandler.bind(this,this.id,this.pokus));
  }

  update(updatedProjectListFn, type) {
    this.updatedProjectListHandler= updatedProjectListFn;
    this.connctSwitchButton(type);
  }

}

class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type
    this.posta = 'posta'
    const prjItem = document.querySelectorAll(`#${type}-projects li`); console.log(prjItem)
    for (const data of prjItem) {
      console.log(data)
      console.log('localName= '+ data.localName)
      console.log('classList= '+ data.classList)
      console.log('classList= '+ data.textContent)
      this.projects.push(new ProjectItem(data.id, this.switchProject.bind(this), this.posta, this.type))
    }
    console.log(this.projects)
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    // ovim sam pozvao finkciju iz druge instance
    this.switchHandler = switchHandlerFunction;
    console.log(this.switchHandler);

  }

  addProject(project, sto) {
    console.log(project)
    this.projects.push(project)
    DOMHelper.moveElement(project.id,`#${this.type}-projects ul`)
    project.update(this.switchProject.bind(this), this.type);
  }

  switchProject(projectId) {
    // zelim iz postojeceg polja makniti instancu jer prelati u drugu instancu
    // prvi nacin
    // const projectIndec = this.projects.findIndex(p => p.id === projectId);
    // this.projects.splice(projectIndec,1);
    this.switchHandler(this.projects.find(p => p.id === projectId));
    this.projects= this.projects.filter(p => p.id !== projectId);
  }

}

class App {
 static init(){
  const activeProjectList = new ProjectList('active');
  console.log('*************************************')
  const finishedProjectList = new ProjectList('finished');
  // primjer callback funkcije
  activeProjectList.setSwitchHandlerFunction(finishedProjectList.addProject.bind(finishedProjectList));
  finishedProjectList.setSwitchHandlerFunction(activeProjectList.addProject.bind(activeProjectList));

 }
}

App.init();