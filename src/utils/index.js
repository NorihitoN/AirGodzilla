import { HOST } from '../constants/';

export function normalizeRooms(rooms){
  return rooms.map( room => {
    return {
      id: room.id,
      title: room.listing_name || '',
      image: `${HOST}${room.image}` || '',
      homeType: room.home_type || '',
      bedRoom: room.bed_room || '',
      price: room.price || '',
      instant: room.instant || '',
    }
  })
}

export function normalizeRoom(room){
    return {
      id: room.id,
      title: room.listing_name || '',
      image: `${HOST}${room.image}` || '',
      homeType: room.home_type || '',
      bedRoom: room.bed_room || '',
      price: room.price || '',
      instant: room.instant || '',
      summary: room.summary || '',
      accommodate: room.accommodate || '',
      bathRoom: room.bath_room || '',
      unavailableDates: room.unavailable_dates || '',
      host: room.host ? {
        emal: room.host.email || '',
        fullname: room.host.fullname || '',
        avatar: room.host.image || '',
      } : {
        email: '',
        fullname: '',
        avatar: '',
      }
    }
}
