import { TDictionary } from "../commonTypes";

const cacheImages = async (srcImages: Array<TDictionary>) => {
  const promises = await srcImages.map((obj: TDictionary) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = obj.url;
      img.addEventListener('load', resolve);
      img.addEventListener('error', reject);
    })
  });

  return await Promise.allSettled(promises);
}

export default cacheImages;
