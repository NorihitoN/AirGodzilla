import {SET_ROOMS, SET_ROOM} from '../actions/room';

const initialState = {
    rooms: [],
    room: null,
  // rooms: [
  //   {
  //     id: 1,
  //     title: 'New York',
  //     homeType: 'Apartment',
  //     image: {uri: 'http://monstermathclub.com/wp-content/uploads/2017/02/nice-homes-great-nice-houses-on-the-beach.jpg'},
  //     bedRoom: 2,
  //     price: 180,
  //     instant: true
  //   },
  //   {
  //     id: 2,
  //     title: 'Melborn',
  //     homeType: 'Shared',
  //     image: {uri: 'http://www.reallynicehouses.com/wp-content/uploads/IMG_1397.jpg'},
  //     bedRoom: 1,
  //     price: 120,
  //     instant: false
  //   },
  //   {
  //     id: 3,
  //     title: 'London',
  //     homeType: 'Entire',
  //     image: {uri: 'http://cumbria-quality.co.uk/wp-content/uploads/2016/02/Cumbria-Quality-Beautiful-Guest-house-imgae.jpg'},
  //     bedRoom: 3,
  //     price: 100,
  //     instant: false
  //   },
  // ]
};

export default function(state = initialState, action){
  if (action.type === SET_ROOMS) {
    return {
      ...state,
      rooms: action.rooms
    }
  }

  if (action.type === SET_ROOM) {
    return {
      ...state,
      room: action.room
    }
  }
  return state;
}
