export default class LocationObject{
    latitude: number;
    longitude: number;
    city: string;
    state: string;

    constructor(){
        this.latitude = 35.9606;
        this.longitude = 83.9207;
        this.city = "Knoxville";
        this.state = "TN";
    }
}