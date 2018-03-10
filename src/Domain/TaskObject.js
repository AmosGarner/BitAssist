export default class TaskObject{
    isDone: boolean;
    body: string;

    constructor(taskBody, isDone=false){
        this.body = taskBody;
        this.isDone = isDone;
    }
}