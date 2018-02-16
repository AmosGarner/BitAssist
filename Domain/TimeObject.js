export default class TimeObject{
    militaryTime: boolean;
    hour: number;
    minute: number;
    second: number;
    indicator: string;

    constructor(){
        let date = new Date();
        this.militaryTime = true;
        this.hour = (date.getHours() < 10 ?"0"+date.getHours():date.getHours());
        this.minute = (date.getMinutes() < 10 ?"0"+date.getMinutes():date.getMinutes());
        this.second = (date.getSeconds() < 10 ?"0"+date.getSeconds():date.getSeconds());
        this.indicator = (this.hour >= 12 ?"PM":"AM");
    }
}