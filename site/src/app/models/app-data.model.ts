import { AddressSectionData } from './address-section-data.model';
import { AboutSectionData } from './about-section-data.model';
import { FeraturesSectionsData } from './features-section-data.model';
import { HeaderSectionData } from './header-section-data.model';
export interface AppData {
  features: FeraturesSectionsData;
  about: AboutSectionData;
  address: AddressSectionData;
  header: HeaderSectionData;
}
