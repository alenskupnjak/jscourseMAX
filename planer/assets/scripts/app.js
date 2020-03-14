class Tooltip {

}

class ProjectItem {
  constructor(id, updatedProjectListFunction){
    this.id = id;
    this.updatedProjectListHandler = updatedProjectListFunction;
    console.log('ProjectItem= '+ id)
    this.connctSwitchButton();
    this.connectMoreInfoButton();
  }

  connectMoreInfoButton() {

  }

  connctSwitchButton() {
    const projectItemElement = document.getElementById(this.id)
    console.log(projectItemElement);
    console.log(projectItemElement.querySelector('button:last-of-type'));
    console.log(projectItemElement.querySelector(':first-child'));
    const switchButton = projectItemElement.querySelector('button:last-of-type');
    console.log(switchButton);
    switchButton.addEventListener('click',this.updatedProjectListHandler);
  }

}

class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type
    const prjItem = document.querySelectorAll(`#${type}-projects li`); console.log(prjItem)
    for (const data of prjItem) {
      console.log(data)
      console.log('localName= '+ data.localName)
      console.log('classList= '+ data.classList)
      console.log('classList= '+ data.textContent)
      this.projects.push(new ProjectItem(data.id, this.switchProject.bind(this)))
    }
    console.log(this.projects)
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    // ovim sam pozvao finkciju iz druge instance
    this.switchHandler = switchHandlerFunction;
    console.log(this.switchHandler);

  }

  addProject() {
    console.log(this)

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