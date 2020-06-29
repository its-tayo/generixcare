import { IconName } from '@fortawesome/fontawesome-svg-core';

export interface NavItems {
  title: string;
  slug: string | null;
  showInFooter?: boolean;
  children?: NavItems[];
}

export interface SocialMediaLinks {
  platform: string;
  url: string;
  icon: IconName;
}
