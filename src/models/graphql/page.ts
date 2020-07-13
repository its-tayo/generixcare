import { ContentBoxProps } from 'src/interfaces';
import {
  BaseQueryType,
  PageContextType,
  PrismicTextType,
  PrismicHtmlType,
  PrismicExternalLinkType,
  TitleType,
  ImageType,
  ContentType
} from './base';

type PageSliceSlidingHeroItems = TitleType & {
  show_button: boolean;
  button_label: string;
  button_link: string;
  sliding_image: ImageType;
};

export type PageSliceSlidingHero = {
  id: string;
  items: PageSliceSlidingHeroItems[];
};

export type PageSliceBlockQuote = {
  id: string;
  primary: ContentType;
};

export type PageSliceHighlight = {
  id: string;
  primary: ContentType;
};

export type PageSliceNewsletter = {
  id: string;
  primary: TitleType & {
    input_placeholder: string;
    button_label: string;
  };
};

export type HomeContentType = {
  items: ContentBoxProps[];
};

export type ContactType = {
  address?: PrismicHtmlType;
  google_map?: string;
  website?: string;
  email?: string;
  phone?: string;
  opening_hours?: PrismicHtmlType;
  job_openings?: PrismicHtmlType;
  twitter?: PrismicExternalLinkType;
  facebook?: PrismicExternalLinkType;
  google_plus?: PrismicExternalLinkType;
};

export type PageSliceComponents = {
  id: string;
  primary: {
    component: 'home_content' | 'contact';
  };
};

type SliceType = 'sliding_hero' | 'block_quote' | 'highlight' | 'newsletter' | 'components';

type PageSectionTypes = { slice_type: SliceType } & (
  | PageSliceSlidingHero
  | PageSliceBlockQuote
  | PageSliceHighlight
  | PageSliceNewsletter
  | PageSliceComponents
);

type PageType = {
  name: PrismicTextType;
  body: PageSectionTypes[];
};

export type GlobalPageType = BaseQueryType<PageType> &
  BaseQueryType<HomeContentType> &
  BaseQueryType<ContactType> &
  PageContextType;
