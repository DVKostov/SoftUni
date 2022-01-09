function solve(input) {
    class Gladiator {
        constructor(name) {
            this.name = name;
            this.techniques = [];
            this.totalSkills = 0;
            this.addSkill = (skill) => {
                this.totalSkills += skill
            }
        }
    }
    class Technique {
        constructor(technique, skill) {
            this.technique = technique;
            this.skill = skill;
            this.setSkill = (skill) => {
                let currentSkill = this.skill;
                if (skill > this.skill) {
                    this.skill = skill;
                    return skill - currentSkill
                } else {
                    return 0
                }
            }
        }
    }
    function compareGladiators(a, b) {
        if (a.totalSkills > b.totalSkills) {
            return -1;
        }
        if (a.totalSkills < b.totalSkills) {
            return 1;
        }
        if (a.name.localeCompare(b.name)) {
            return -1;
        }
        if (b.name.localeCompare(a.name)) {
            return 1;
        }
        return 0;
    }
    function compareTechniques(a, b) {
        if (a.skill > b.skill) {
            return -1;
        }
        if (a.skill < b.skill) {
            return 1;
        }
        if (a.technique.localeCompare(b.technique)) {
            return -1;
        }
        if (b.technique.localeCompare(a.technique)) {
            return 1;
        }
        return 0;
    }



    let pool = [];
    for (const iterator of input) {
        let [name, technique, skill] = iterator.split(' -> ');
        if (technique !== undefined) {
            let currentGladiator = pool.find(g => g.name === name);
            if (currentGladiator === undefined) {
                pool.push(new Gladiator(name));
            }
            currentGladiator = pool.find(g => g.name === name);
            let currentTechnique = currentGladiator.techniques.find(t => t.technique === technique);
            if (currentTechnique === undefined) {
                currentGladiator.techniques.push(new Technique(technique, Number(skill)));
                currentGladiator.addSkill(Number(skill));
            } else {
                currentGladiator.addSkill(currentTechnique.setSkill(Number(skill)));
            }
        } else if (name !== 'Ave Cesar') {
            let [firstName, secondName] = iterator.split(' vs ');
            let first = pool.find(g => g.name === firstName);
            let second = pool.find(g => g.name === secondName);
            let inCommon = false;
            if (first !== undefined && second !== undefined) {
                for (const i of first.techniques) {
                    if (second.techniques.find(t => t.technique === i.technique) !== undefined) {
                        inCommon = true
                    }
                }
                if (inCommon) {
                    if (first.totalSkills > second.totalSkills) {
                        pool.splice(pool.indexOf(second), 1);
                    } else if (first.skill < second.skill) {
                        pool.splice(pool.indexOf(first), 1);
                    } else {
                        pool.splice(pool.indexOf(second), 1);
                        pool.splice(pool.indexOf(first), 1);
                    }
                }
            }
        } else {
            break;
        }
    }

    let sortedPool = pool.sort(compareGladiators);
    for (const iterator of sortedPool) {
        console.log(`${iterator.name}: ${iterator.totalSkills} skill`);
        let sortedTechniques = iterator.techniques.sort(compareTechniques);
        for (const i of sortedTechniques) {
            console.log(`- ${i.technique} <!> ${i.skill}`);
        }
    }




}
solve(
    [
        'Pesho -> Duck -> 400',
        'Julius -> Shield -> 150',
        'Gladius -> Heal -> 200',
        'Gladius -> Support -> 250',
        'Gladius -> Shield -> 250',
        'Peter vs Gladius',
        'Gladius vs Julius',
        'Gladius vs Maximilian',
        'Ave Cesar'
    ]



)