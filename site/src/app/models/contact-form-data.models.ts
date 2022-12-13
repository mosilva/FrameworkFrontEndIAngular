import { addressData } from './address-data.model';
import { contact } from './contact-data.model';

export interface ContactFormData {
  name: string;
  cpf: string;
  userName: string;
  password: string;
  message: string;
  address?: addressData;
  contact?: contact;
}
