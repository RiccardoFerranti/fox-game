import { FC, useState } from 'react';

import useDeepCompareEffect from 'use-deep-compare-effect';

import { ICatRecord, IFoxRecord, IRecord, IRecordImages } from './types';
import { StyledGameContainer, StyledLayout, StyleGameTitle } from './Layout.style';
import AnimatedBackground from './AnimatedBackground';

import useFetch from '../hooks/fetch/useFetch';
import { 
  BASE_CATS_URL,
  BASE_DOGS_URL,
  BASE_FOXEX_URL,
  NUMBER_CATS_TO_FETCH,
  NUMBER_DOGS_TO_FETCH,
  NUMBER_FOXES_TO_FETCH,
  NUMBER_CATS_FETCHED,
  NUMBER_DOGS_FETCHED,
  NUMBER_FOXES_FETCHED
} from '../consts/general';
import { RecordProvider } from '../RecordContext';
import cacheImages from '../helpers/cacheImages';

interface ILayoutProps {
  children: JSX.Element | JSX.Element[],
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  const [isLoading, setLoading] = useState(false);
  
  const { status: statusCats, data: dataCats, error: errorCats } = useFetch(BASE_CATS_URL, NUMBER_CATS_TO_FETCH, 10);
  const { status: statusDogs, data: dataDogs, error: errorDogs } = useFetch(BASE_DOGS_URL, NUMBER_DOGS_TO_FETCH);
  const { status: statusFox, data: dataFox, error: errorFox } = useFetch(BASE_FOXEX_URL, NUMBER_FOXES_TO_FETCH);

  const record: IRecord = {
    images: {
      cats: [],
      dogs: [],
      foxes:[],
    },
    error: errorCats || errorDogs || errorFox,
    loading: isLoading,
  }

  if (statusCats === 'fetched') {
    dataCats.forEach((catObj: Array<ICatRecord>) => {
      catObj.forEach((image: ICatRecord) => {
        record.images.cats.push({ name: 'cat', url: image.url })
      })
    })
  }
  
  if (statusDogs === 'fetched') {
    dataDogs.forEach((dogObj: ICatRecord) => {
      dogObj.message.forEach((image: string) => {
        record.images.dogs.push({ name: 'dog', url: image })
      })
    })
  }

  if (statusFox === 'fetched') {
    dataFox.forEach((foxObj: IFoxRecord) => {
      record.images.foxes.push({ name: 'fox', url: foxObj.image })
    })
  }

  useDeepCompareEffect(() => {
    if (!record.images.cats.length && !record.images.dogs.length && !record.images.foxes.length) setLoading(true);

    const render = async ({ cats, dogs, foxes }: IRecordImages) => {
      const newCats = JSON.parse(JSON.stringify(cats));
      const newDogs = JSON.parse(JSON.stringify(dogs));
      const newFoxes = JSON.parse(JSON.stringify(foxes));

      if (newCats.length !== NUMBER_CATS_FETCHED 
        && newDogs.length !== NUMBER_DOGS_FETCHED 
        && newFoxes.length !== NUMBER_FOXES_FETCHED) return;

      const imagesToCache = [...newCats, ...newDogs, ...newFoxes];
      const allImagesPromises = await cacheImages(imagesToCache);

      const numberTolalImages = NUMBER_CATS_FETCHED + NUMBER_DOGS_FETCHED + NUMBER_FOXES_FETCHED;
      if (allImagesPromises.length !== numberTolalImages) return;

      setLoading(false);
    }

    render(record.images);
  }, [record.images])

  return (
    <RecordProvider record={record}>
      <AnimatedBackground />
      <StyledLayout>
        <StyledGameContainer>
          <StyleGameTitle><span>Catch the Fox</span></StyleGameTitle>
          {children}
        </StyledGameContainer>
      </StyledLayout>
    </RecordProvider>
  )
}

export default Layout;
