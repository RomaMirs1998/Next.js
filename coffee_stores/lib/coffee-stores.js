import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
});

export async function fetchCoffeeStores(location) {
  const unsplashResults = await getListOfCoffeeStores();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY,
    },
  };

  let latlong = location ? location : "48.184306,16.365822";

  const response = await fetch(
    getURLForCoffeeStore(latlong, "coffee", 25),
    options
  );
  const data = await response.json();

  return data.results.map((result, index) => {
    return {
      id:result.fsq_id,
      name: result.name,
      address: result.location.address,
      country: result.location.country,
      imgUrl: unsplashResults[index],
    };
  });
}

const getURLForCoffeeStore = (latlong, query, limit) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latlong}&radius=10000&limit=${limit}`;
};

const getListOfCoffeeStores = async () => {
  const photos = await unsplash.search.getPhotos({
    query: "Coffee Store",
    page: 1,
    perPage: 30,
    orientation: "portrait",
    orderBy: "relevant",
  });

  const unsplashResults = photos.response.results.map((photo) => {
    return photo.urls.regular;
  });
  return unsplashResults;
};
