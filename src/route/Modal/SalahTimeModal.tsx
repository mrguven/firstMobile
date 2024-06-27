interface SalahTimeModal {
    
        code: number,
        status: string,
        data: [{
            timings: {
                Fajr: string,
                Sunrise: string,
                Dhuhr: string,
                Asr: string,
                Sunset: string,
                Maghrib: string,
                Isha: string,
                Imsak: string,
                Midnight: string
            },
            date: {
                readable: Date,
                timestamp: number,
                gregorian: {
                    date: Date,
                    format: string,
                    day: number,
                    weekday: {
                        en: string
                    },
                    month: {
                        number: 5,
                        en: string,
                    },
                    year: 2018,
                    designation: {
                        abbreviated: string,
                        expanded: string,
                    },
                },
                hijri: {
                    date: Date,
                    format: string,
                    day: number,
                    weekday: {
                        en: string,
                        ar:string,
                    },
                    month: {
                        number: number,
                        en: string,
                        ar:string,
                    },
                    year: number,
                    designation: {
                        abbreviated: string,
                        expanded: string,
                    },
                    holidays:string[],
                },
            },
            meta: {
                latitude: number,
                longitude: number,
                timezone: string,
                method: {
                    id: number,
                    name: string,
                    params: {
                        Fajr: number,
                        Isha: number
                    }
                },
                latitudeAdjustmentMethod: string,
                midnightMode: string,
                school: string,
                offset: {
                    Imsak:string,
                    Fajr: string,
                    Sunrise: string,
                    Dhuhr:string,
                    Asr:string,
                    Maghrib:string,
                    Sunset:string,
                    Isha:string,
                    Midnight:string
                 }
             
         }

}]



}
