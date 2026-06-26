const BASE_API_CARDS = "https://api.pokemontcg.io/v2/cards";
const BASE_API = "https://api.pokemontcg.io/v2";
const API_KEY = "41c725f5-be99-4d5c-9241-818f3a3f7322";
const FILTER_TYPES = ["types", "supertypes", "subtypes", "rarities"];
const PAGE_SIZE = 25;
const MARKET_TYPES = ["tcgplayer", "cardmarket"];
const MARKET_URLS = {
  [MARKET_TYPES[0]]: "https://www.tcgplayer.com/",
  [MARKET_TYPES[1]]: "https://www.cardmarket.com/en",
};

export {
  BASE_API_CARDS,
  BASE_API,
  API_KEY,
  FILTER_TYPES,
  PAGE_SIZE,
  MARKET_TYPES,
  MARKET_URLS,
};
