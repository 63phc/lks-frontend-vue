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

export {
  Slide,
  MenuEntry
}