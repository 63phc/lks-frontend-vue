interface Slide
{
  image_src: string,
  image_alt: string,
  title: string,
  subtitle: string
}

interface MenuEntry 
{
  name: string,
  url: string,
  is_active: boolean
}


interface Author
{
  first_name: string,
  last_name: string,
  avatar: string,
  about: string,
  vk_profile: any,
  fb_profile: any,
  ig_profile: any,
  tg_profile: any,
}

interface Post 
{
  title: string,
  slug: string,
  content: string,
  author: string,
  image_preview: string,
  image_alt: string,
  created_at: Date 
}

interface Product {
  title: string,
  slug: string,
  description: string,
  price: string,
  sale: string,
  colors: Array<string>,
  categories: Array<Category>,
  author: string,
  image_preview: string,
  image_alt: string,
  properties: any,
  count: number,
  id: number,
  code: string
}

interface Category {
  title: string,
  slug: string
}

interface Review {
  title: string,
  author: string,
  comment: string,
  rating: number,
  image_preview: string
}

export {
  Slide,
  Review,
  MenuEntry,
  Author,
  Post,
  Product,
  Category 
}
