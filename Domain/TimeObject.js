export default class TimeObject{
    militaryTime: boolean;
    hour: number;
    minute: number;
    second: number;
    indicator: string;

    constructor(){
        let date = new Date();
        this.militaryTime = true;
        this.hour = date.getHours();
        this.minute = date.getMinutes();
        this.second = date.getSeconds();
        this.indicator = (this.hour >= 12 ?"PM":"AM");
    }
}