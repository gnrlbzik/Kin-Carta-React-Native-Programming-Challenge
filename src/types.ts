export type Action = {
  payload: Array<ContactItem>;
  type: string;
};

export type ContactItem = {
  name: string;
  id: string;
  companyName?: string;
  isFavorite: boolean;
  smallImageURL?: string;
  largeImageURL?: string;
  emailAddress?: string;
  birthdate?: string;
  phone?: {
    work?: string;
    home?: string;
    mobile?: string;
  };
  address?: {
    street?: string;
    city?: string;
    state?: string;
    country?: string;
    zipCode?: string;
  };
};

export type ContactsList = Array<ContactItem>;

export type State = {
  contacts: {
    isLoading: boolean;
    list: ContactsList;
  };
  contactPreviewId: string | null;
};
