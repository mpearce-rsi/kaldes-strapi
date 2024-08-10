import type { Schema, Attribute } from '@strapi/strapi';

export interface BasicStringArray extends Schema.Component {
  collectionName: 'components_basic_string_arrays';
  info: {
    displayName: 'Quotes';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Quote: Attribute.Text;
    Name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'basic.string-array': BasicStringArray;
    }
  }
}
