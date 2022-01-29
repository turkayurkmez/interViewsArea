export enum WeatherType{
    Snow ='Snow',
    Rain ='Rain',
    Sunny='Sunny'
}

export class Weather{
    constructor(
        public city:string,
        public celcius:number,
        public summary:WeatherType
    ){}
}