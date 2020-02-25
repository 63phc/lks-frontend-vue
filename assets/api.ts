import axios from 'axios';
import { Category, Product, Slide, MenuEntry, Author, Post } from './models';

const API_URL = "http://dev.backend.littleknitsstory.com/api/v1";
const PLACEHOLDER_IMG_URL = "http://via.placeholder.com/600x200/";

async function _simpleFetch(subdir: string, method: string = "GET", body: any = null, headers: any = {}) : Promise<any>
{
  let result = await fetch(`${API_URL}${subdir}`, {method: method, body: body, headers: headers}).then(e => {
    return e.json()
  }).then(e => {
    return e; }).catch(e => {})
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

export async function getMenuEntries() : Promise<Array<MenuEntry>> { let result = await _simpleFetch("/menu");

  return result.results.map(e => Object({
    name: e.name,
    url: e.url,
    is_active: e.is_active
  }))
}

export async function getAuthors() : Promise<Array<Author>>
{
  let result = await _simpleFetch("/users")

  return result.map(e => Object({
    first_name: e.first_name,
    last_name: e.last_name,
    avatar: e.avatar,
    about: e.about,
    vk_profile: e.vk_profile,
    fb_profile: e.fb_profile,
    ig_profile: e.inst_profile,
    tg_profile: e.tg_profile
  }))
}

export async function getPosts(limit: number = 0, offset: number = 0) : Promise<Array<Post>>
{
  let result = await _simpleFetch(`/posts/?limit=${limit}&offset=${offset}`)
  return result.results.map(e => Object({
    title: e.title,
    slug: e.slug,
    content: e.content,
    author: e.author,
    image_preview: e.image_preview,
    image_alt: e.image_alt,
    created_at: e.created_at,
    author_name: "Екатерина Анаприенко" // TODO: Remove hardcoded author name
  }))
}

export async function getPost(slug: string) : Promise<Post>
{
  let e = await _simpleFetch(`/posts/${slug}`)
  return Object({
    title: e.title,
    slug: e.slug,
    content: e.content,
    author: e.author,
    image_preview: e.image_preview,
    image_alt: e.image_alt,
    created_at: e.created_at,
    author_name: "Екатерина Анаприенко" // TODO: Remove hardcoded author name
  })
}

export async function getProducts(limit: number = 0, offset: number = 0) : Promise<Array<Product>>
{
  let result = await _simpleFetch(`/products/?limit=${limit}&offset=${offset}`)
  return result.results.map(e => Object({
    title: e.title,
    slug: e.slug,
    description: e.description,
    price: e.price,
    sale: e.sale,
    colors: e.colors.map(g => g.color),
    categories: e.categories,
    author: e.author,
    image_preview: e.image_preview,
    image_alt: e.image_alt,
    properties: {
      weight: e.weight,
      height: e.height,
      type_product: e.type_product,
      material: e.material
    },
    count: 1,
    id: e.id
  }))
}

export async function getProduct(slug: string) : Promise<Product>
{
  let e = await _simpleFetch(`/products/${slug}`)
  return Object({
    title: e.title,
    slug: e.slug,
    description: e.description,
    price: e.price,
    sale: e.sale,
    colors: e.colors.map(g => g.color),
    categories: e.categories,
    author: e.author,
    image_preview: e.image_preview,
    image_alt: e.image_alt,
    properties: {
      weight: e.weight,
      height: e.height,
      type_product: e.type_product,
      material: e.material
    },
    count: 1,
    id: e.id
  })
}

export async function subscribe(email: string)
{
  let result = await _simpleFetch(`/subscribe/`, 'POST', JSON.stringify({email: email}), {'Content-Type': 'application/json'})
  if (typeof(result.email) === "string") 
  {
    return {success: true}
  }
  else if (result.email.length > 1)
  {
    return {success: false, error: "EMAIL_INVALID"}
  }
  else if (result.email.length > 0) 
  {
    return {success: false, error: "EMAIL_TAKEN"}  
  }
}

export async function getCategories() : Promise<Array<Category>> {
  let result = await _simpleFetch('/categories/');
  return result.map(e => Object({
    title: e.title,
    slug: e.slug
  }));
}

export async function quickOrder(product : Product, name: string, phone: string) {
  let res = await _simpleFetch(
    `/quick_orders/`,
    'POST', 
    JSON.stringify({
      products: [{product: product.id, amount: product.count}],
      phone: phone,
      address: "Somewhere",
      comments: "",
      name: name
    }),
    {'Content-Type': 'application/json'}
  )

  return res.products;
}

export async function order(products : Array<Product>, name: string, phone: string, email: string, comment: string, address: string) {
  let res = await _simpleFetch(
    `/orders/`,
    'POST', 
    JSON.stringify({
      products: products.map(e => Object({product: e.id, amount: e.count})),
      phone: phone,
      address: address,
      comments: comment,
      name: name
    }),
    {'Content-Type': 'application/json'}
  )
  res.error = res.pk == null;
  return res;
}