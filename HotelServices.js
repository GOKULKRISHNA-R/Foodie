import MockData from './../data/mock.json'

export class HotelService {
    static hotelData = null ;

    static async fetchHotelData () {
        try {
            HotelService.hotelData = MockData ;
        } catch (err) {
            throw err ;
        }
    }

    static async getHotelList() {
        let hotelList = [] ;

        try{

            if(!HotelService.hotelData) {
                await HotelService.fetchHotelData();
            }

            HotelService.hotelData.forEach(hotel => {
                
                let hotelData = {
                    id:hotel.id,
                    thumbnail_image: hotel.thumbnail_image,
                    name: hotel.name,
                    rating : hotel.rating,
                    reviews : hotel.reviews,
                    cusines : hotel.cuisines,
                }
                hotelList.push(hotelData) ;
            });



        }catch (err){
            console.log(err);
        }
        return hotelList ;
    } 
}

