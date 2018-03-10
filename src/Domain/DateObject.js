export default class DateObject{
    day: boolean;
    month: number;
    year: number;

    constructor(){
        let date = new Date();
        this.day = date.getDate();
        this.month = date.getMonth()+1;
        this.year = date.getYear()-100;
    }
}