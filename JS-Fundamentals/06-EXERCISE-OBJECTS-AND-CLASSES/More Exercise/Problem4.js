function solve(inputObj, actions) {
    let obj = inputObj
    for (let index = 0; index < actions.length; index++) {
        let [action, site] = actions[index].split(' ');
        switch (action) {
            case 'Open':
                obj['Open Tabs'].push(site);
                obj['Browser Logs'].push(actions[index]);
                break;
            case 'Close':
                let openIndex = obj['Open Tabs'].indexOf(site);
                if (openIndex > -1) {
                    obj['Open Tabs'].splice(openIndex, 1);
                    obj['Recently Closed'].push(site);
                    obj['Browser Logs'].push(actions[index]);
                }
                break;
            case 'Clear':
                obj['Open Tabs'] = [];
                obj['Recently Closed'] = [];
                obj['Browser Logs'] = [];
                break;
        }
    }
    console.log(obj['Browser Name'])
    if (obj['Open Tabs'] !== undefined) {
        console.log(`Open Tabs: ${obj['Open Tabs'].join(', ')}`)
    } else {
        console.log('Open Tabs: ')
    }
    if (obj['Recently Closed'] !== undefined) {
        console.log(`Recently Closed: ${obj['Recently Closed'].join(', ')}`)
    } else {
        console.log('Recently Closed: ')
    }
    if (obj['Browser Logs'] !== undefined) {
        console.log(`Browser Logs: ${obj['Browser Logs'].join(', ')}`)
    } else {
        console.log('Browser Logs: ')
    }
}
solve({"Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"],"Recently Closed":["Yahoo","Gmail"], "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},
["Close Facebook", "Open StackOverFlow", "Open Google"]
)