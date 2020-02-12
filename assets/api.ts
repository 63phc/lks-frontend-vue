import axios from 'axios';
import { Slide } from './commons';

const API_URL = "http://dev.backend.littleknitsstory.com/api/v1";
const PLACEHOLDER_IMG_URL = "http://via.placeholder.com/600x200/";

export async function getSliderImages() : Promise<Array<Slide>> {
  let result = await fetch(`${API_URL}/sliders`).then(e => {
    return e.json()
  }).then(e => {
    return e;
  })

  return result.results.map(e => Object({
    image_src: e.image_preview !== null ? e.image_preview : PLACEHOLDER_IMG_URL+(~~(Math.random()*500)), 
    image_alt: e.image_alt,
    title: e.title,
    subtitle: e.sub_title
  }))
}
