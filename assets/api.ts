import { ImageDescriptor } from "./commons";
import axios from 'axios';

const API_URL = "http://dev.backend.littleknitsstory.com/api/v1";
const PLACEHOLDER_IMG_URL = "http://via.placeholder.com/600x300/";

export async function getSliderImages() : Promise<any> {
  let result = null;
  await fetch(`${API_URL}/sliders`, {
    mode: 'cors', // no-cors, cors, *same-origin,
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached,
    credentials: 'same-origin', // include, *same-origin, omit
  }).then(e => {
    result = e;
  }).catch()
  return result;
}
