import {HOST} from '../constants';
import {normalizeRooms, normalizeRoom} from '../utils';

export const SET_ROOMS = 'SET_ROOMS';
export const SET_ROOM = 'SET_ROOM';

export function setRooms(rooms){
  return {
    type: SET_ROOMS,
    rooms
  }
}

export function setRoom(room){
  return {
    type: SET_ROOM,
    room
  }
}

export function getRooms(rooms){
  return (dispatch) => {
    return fetch(`${HOST}/api/v1/rooms`)
    .then(response => response.json())
    .then(json => {
      console.log("getRooms", json);

      if (json.is_success){
        dispatch(setRooms(normalizeRooms(json.rooms)));
      } else {
        alert(json.error);
      }
    })
    .catch(e => alert(e));
  }
}

export function getRoom(roomId){
  return (dispatch) => {
    return fetch(`${HOST}/api/v1/rooms/${roomId}`)
    .then(response => response.json())
    .then(json => {
      console.log("get a single room", json);

      if (json.is_success){
        dispatch(setRoom(normalizeRoom(json.room)));
      } else {
        alert(json.error);
      }
    })
    .catch(e => alert(e));
  }
}
