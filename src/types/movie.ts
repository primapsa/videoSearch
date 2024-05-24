export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: CollectionType;
  budget: number;
  genres: GenreType[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
type CollectionType = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};
export type RatedMovie = Record<number, number>;
export type GenreType = {
  id: number;
  name: string;
};
export type CompaniesProps = {
  list: ProductionCompany[];
};
export type ProductionCompany = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};
export type CompanyProps = Pick<ProductionCompany, 'logo_path' | 'name'>;

type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};
type Trailer = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
};
export type TrailerContainer = {
  videos: {
    results: Trailer[];
  };
};
export type VideoProps = {
  source: string | null;
};
export type MovieExtraProps = {
  source: string | null;
  text: string;
  compaines: ProductionCompany[];
};
export type OverviewProps = {
  text: string;
};
export type MovieWithTrailer = MovieType & TrailerContainer;
