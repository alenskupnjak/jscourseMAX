class DOMHelper {
  static clearEventListeners(element) {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  }

  static moveElement(elementId, newDestinationSelector) {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestinationSelector);
    destinationElement.append(element);
  }
}

class ProjectItem {
  // hasActiveTooltip = false;

  constructor(id, updateListsFun, type) {
    this.id = id;
    this.updateListsFun = updateListsFun;
    // this.connectMoreInfoButton();
    this.connectSwitchButton(type);
  }

  connectSwitchButton(type) {
    const ItemElement = document.getElementById(this.id);
    let switchBtn = ItemElement.querySelector('button:last-of-type');
    switchBtn = DOMHelper.clearEventListeners(switchBtn);
    switchBtn.textContent = type === 'active' ? 'Gotovo' : 'Aktivno';
    switchBtn.addEventListener('click', this.updateListsFun.bind(null, this.id));
  }

  osvjezi(updateListsFn, type) {
    this.updateListsFun = updateListsFn;
    this.connectSwitchButton(type);
  }
}

class ProjectList {
  lista = [];

  constructor(type) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projekt li`);
    console.log('prjItems type= '+ this.type )
    console.log(prjItems)
        for (const data of prjItems) {
            this.lista.push( new ProjectItem(data.id, this.switchProject.bind(this), this.type));
        }
    console.log(this.lista);
  }

  setSwitch(switchFunkcija) { this.switchFunkcija = switchFunkcija; console.log(switchFunkcija) }

  addProject(project) {
    console.log('U add project sam, type= ' + this.type)
    console.log('Lista Prije ')
    console.log(project)
    this.lista.push(project);
    console.log(this.lista)
    DOMHelper.moveElement(project.id, `#${this.type}-projekt ul`);
    project.osvjezi(this.switchProject.bind(this), this.type);
  }

  switchProject(projectId) {
    console.log(projectId)
    console.log(this.switchFunkcija);
    this.switchFunkcija(this.lista.find(p => p.id === projectId));
    this.lista = this.lista.filter(p => p.id !== projectId);
  }
}

class App {
  static init() {
    console.log('App 01')
    const act = new ProjectList('active'); console.log(act);
    console.log('App 02')
    const fin = new ProjectList('finished'); console.log(fin)
    console.log('App 03')
    act.setSwitch(fin.addProject.bind(fin));
    console.log('App 04')
    fin.setSwitch(act.addProject.bind(act));
    console.log('kraj App init')
    
  }
}

App.init();



// class Tooltip extends Component {
//   constructor(closeNotifierFunction) {
//     super();
//     this.closeNotifier = closeNotifierFunction;
//     this.create();
//   }

//   closeTooltip = () => {
//     this.detach();
//     this.closeNotifier();
//   };

//   create() {
//     const tooltipElement = document.createElement('div');
//     tooltipElement.className = 'card';
//     tooltipElement.textContent = 'DUMMY!';
//     tooltipElement.addEventListener('click', this.closeTooltip);
//     this.element = tooltipElement;
//   }
// }

// class Component {
//   constructor(hostElementId, insertBefore = false) {
//     if (hostElementId) {
//       this.hostElement = document.getElementById(hostElementId);
//     } else {
//       this.hostElement = document.body;
//     }
//     this.insertBefore = insertBefore;
//   }

//   detach() {
//     if (this.element) {
//       this.element.remove();
//       // this.element.parentElement.removeChild(this.element);
//     }
//   }

//   attach() {
//     this.hostElement.insertAdjacentElement(
//       this.insertBefore ? 'afterbegin' : 'beforeend',
//       this.element
//     );
//   }
// }


  // showMoreInfoHandler() {
  //   if (this.hasActiveTooltip) {
  //     return;
  //   }
  //   const tooltip = new Tooltip(() => { this.hasActiveTooltip = false; });
  //   tooltip.attach();
  //   this.hasActiveTooltip = true;
  // }

  // connectMoreInfoButton() {
  //   const projectItemElement = document.getElementById(this.id);
  //   const moreInfoBtn = projectItemElement.querySelector('button:first-of-type');
  //   moreInfoBtn.addEventListener('click', this.showMoreInfoHandler);
  // }