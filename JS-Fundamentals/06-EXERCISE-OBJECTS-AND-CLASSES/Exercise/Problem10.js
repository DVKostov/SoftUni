function info(input) {
    class System {
        constructor(sysName) {
            this.sysName = sysName;
            this.components = [];
        }
    }
    class Component {
        constructor(compName) {
            this.compName = compName;
            this.subComponents = [];
        }
    }
    let systems = [];

    for (let index = 0; index < input.length; index++) {
        let [system, component, subComponent] = input[index].split(' | ');  
        if (systems.find(s => s.sysName === system) === undefined) {
            systems.push(new System(system));
        }
        let sysObj = systems.find(s => s.sysName === system);
        if (sysObj.components.find(c => c.compName === component) === undefined) {
            sysObj.components.push(new Component(component));
        }
        compObj = sysObj.components.find(c => c.compName === component);
        if (compObj.subComponents.find(s => s === subComponent) === undefined) {
            compObj.subComponents.push(subComponent)
        }
    }


    function compareSystems(a, b) {
        if (a.components.length > b.components.length) {
            return -1;
        }
        if (a.components.length < b.components.length) {
            return 1;
        }
        if (a.sysName.toLowerCase().charCodeAt() < b.sysName.toLowerCase().charCodeAt()) {
            return -1;
        }
        if (a.sysName.toLowerCase().charCodeAt() > b.sysName.toLowerCase().charCodeAt()) {
            return 1;
        }
        return 0;
    }

    function compareComponents(a, b) {
        if (a.subComponents.length > b.subComponents.length) {
            return -1;
        }
        if (a.subComponents.length < b.subComponents.length) {
            return 1;
        }
        return 0;
    }

    systems.sort(compareSystems)
    for (let index = 0; index < systems.length; index++) {
        console.log(systems[index].sysName);
        systems[index].components.sort(compareComponents);
        for (let secIndex = 0; secIndex < systems[index].components.length; secIndex++) {
            console.log(`|||${systems[index].components[secIndex].compName}`)
            for (let thrIndex = 0; thrIndex < systems[index].components[secIndex].subComponents.length; thrIndex++) {
                console.log(`||||||${systems[index].components[secIndex].subComponents[thrIndex]}`)
                
            }
        }
        
    }

}
info([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security',

    'Lambda | CoreC | Ca4',
    'Lambda | CoreC | Ca4',
    'Lambda | CoreC | Ca4',
    'Lambda | CoreC | Ca4',
    'Lambda | CoreC | Ca4'


  ]  
)