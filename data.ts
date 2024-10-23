

export type IData = {
  image: string,
  title: string,
  description: string,
  price: number
}
export const Data: IData[] = [
  {image: "\keyChain.jpeg",title:"Key chain", description:"Handmade keychain of various designs ", price:250},
  {image: "\carChain.jpeg",title:"Key chain", description:"Handmade keychain of various designs ", price:250},
  {image: "\cricket.jpeg",title:"Door hangings", description:"Customize handmade door hangings starting from", price:2000},
  {image: "\earpod.jpeg",title:"Hands-Free Handy Pouch", description:"Handmade pouch for hands-free and other things", price:200},
  {image: "\hajjMubarak.jpeg",title:"Door hangings", description:"Customize handmade door hangings starting from", price:2000},
  {image: "\insects.jpeg",title:"Set of 3 butterflies", description:"painting kit for kids with paints", price:250},
  {image: "\kidsColor.jpeg",title:"Color sorting kit", description:"Color sorting kit helps children to  differentiate colours", price:400},
  {image: "\kingHanger.jpeg",title:"Door hangings", description:"Customize handmade door hangings starting from", price:2000},
  {image: "\lolies.jpeg",title:"Popsicles set of 3", description:"painting kit for kids with paints ", price:400},
  {image: "\planet.jpeg",title:"wooden Kit", description:"Big size painting wooden kits for kids with paints  ", price:350},
  {image: "\pockets.jpeg",title:"Mini purse", description:"Handmade Mini purse", price:200},
  {image: "\safari.jpeg",title:"Door hangings", description:"Customize handmade door hangings starting from", price:2000},
  {image: "\sea.jpeg",title:"Miniature Kits", description:"Painting kit for kids with paints ", price:250},
  {image: "\welcomeHome.jpeg",title:"Door hangings", description:"Customize handmade door hangings starting from", price:2000}

]

export default function HandleAddToCart()
{
  return(
  console.log("Item successfully added to the cart!")
);
}