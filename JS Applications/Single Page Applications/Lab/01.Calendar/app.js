let views = document.querySelectorAll('section');
for (const view of views) {
    view.remove();
}

let monthsMapping = {
    'Jan': '1',
    'Feb': '2',
    'Mar': '3',
    'Apr': '4',
    'May': '5',
    'Jun': '6',
    'Jul': '7',
    'Aug': '8',
    'Sep': '9',
    'Oct': '10',
    'Nov': '11',
    'Dec': '12'
}

let body = document.querySelector('body');

let indexView = views[0];
let currentView = indexView;

attachEventsOnView(currentView);
body.appendChild(currentView);

function attachEventsOnView(view) {
    
    let title = view.children[0].children[0];
    if (indexView == view) {
    let tbody = view.getElementsByTagName('tbody')[0];
    tbody.addEventListener('click', drillYears);
    } else if (view.classList[0] == 'monthCalendar') {
        let tbody = view.getElementsByTagName('tbody')[0];
        tbody.addEventListener('click', drillMonths);
        title.addEventListener('click', () => swapViews(view, indexView));
    } else {
        title.addEventListener('click', backToMonth);
    }
}

function backToMonth(event) {
        let year = event.target.textContent.split(' ')[1];
        let newView = Array.from(views).filter(e => e.id == `year-${year}`)[0];
        
        attachEventsOnView(newView);
        swapViews(currentView, newView);
}


function swapViews(oldView, newView) {
    body.removeChild(oldView);
    body.appendChild(newView);
    currentView = newView;
}


function drillYears(event) {
    if (event.target.classList[0] == 'day') {
        let date = event.target.children[0].textContent;
        let newView = Array.from(views).filter(e => e.id == `year-${date}`)[0];
        
        attachEventsOnView(newView);
        swapViews(currentView, newView);
    }
}

function drillMonths(event) {
    if (event.target.classList[0] == 'day') {
        let title = currentView.children[0].children[0].textContent;
        let date = event.target.children[0].textContent;
        let newView = Array.from(views).filter(e => e.id == `month-${title}-${monthsMapping[date]}`)[0];
        
        attachEventsOnView(newView);
        swapViews(currentView, newView);
    }
}