export interface IRecordImage {
  name: string,
  url: string
}

export interface IRecordImages {
  cats: Array<IRecordImage>,
  dogs: Array<IRecordImage>,
  foxes: Array<IRecordImage>,
}

export interface IRecord {
  images: IRecordImages,
  error: string | null,
  loading: boolean,
}

export interface ICatRecord {
  id: string,
  url: string,
  width: number, 
  height: number
}

export interface ICatRecord {
  status: string,
  message: Array<string>,
}

export interface IFoxRecord {
  image: string,
  link: string,
}