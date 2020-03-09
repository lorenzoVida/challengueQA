import { Selector, t} from 'testcafe';

class DashboardPage{
    constructor(){
        this.todoistIcon=Selector('svg[data-svgs-path="sm1/todoist_logo.svg"]');
}

async isPageLoaded(){
    return await this.todoistIcon.exists;
}

}

export default new  DashboardPage();