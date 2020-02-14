import axios from 'axios';
import { Slide, MenuEntry } from './globals';

const API_URL = "http://dev.backend.littleknitsstory.com/api/v1";
const PLACEHOLDER_IMG_URL = "http://via.placeholder.com/600x200/";

async function _simpleFetch(subdir: string) : Promise<any>
{
  let result = await fetch(`${API_URL}${subdir}`).then(e => {
    return e.json()
  }).then(e => {
    return e;
  })
  return result;
}

export async function getSliderImages() : Promise<Array<Slide>> 
{
  let result = await _simpleFetch("/sliders");

  return result.results.map(e => Object({
    image_src: e.image_preview !== null ? e.image_preview : PLACEHOLDER_IMG_URL+(~~(Math.random()*500)), 
    image_alt: e.image_alt,
    title: e.title,
    subtitle: e.sub_title
  }))
}

export async function getMenuEntries() : Promise<Array<MenuEntry>>
{
  let result = await _simpleFetch("/menu");

  return result.results.map(e => Object({
    name: e.name,
    url: e.url,
    is_active: e.is_active
  }))
}