import {randomInt, randomIntInRange} from "../Domain/RandomNumber";

export default class WeatherObject{
    high: number;
    low: number;
    condition: string;

    constructor(){
        let conditions = [
            "Sunny",
            "Clear",
            "Rain",
            "Cloudy",
            "Partly-Cloudy",
            "Snow",
            "Storm"
        ];
        this.high = randomIntInRange(50,100);
        this.low = randomIntInRange(0,this.high);
        this.condition = conditions[randomInt(conditions.length)];
    }
}