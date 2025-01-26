
import { defineType } from 'sanity';

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(50)
          .error('ID is required and must be between 1 and 50 characters.'),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(100)
          .error('Name is required and must be between 1 and 100 characters.'),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) =>
        Rule.required().error('An image is required.'),
    },
    {
      name: 'imagePath',
      title: 'Image Path',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({ allowRelative: false }).error('Image Path must be a valid URL.'),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) =>
        Rule.required().min(0).error('Price is required and must be a non-negative number.'),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) =>
        Rule.max(1000).error('Description cannot exceed 1000 characters.'),
    },
    {
      name: 'discountPercentage',
      title: 'Discount Percentage',
      type: 'number',
      validation: (Rule) =>
        Rule.min(0).max(100).error('Discount Percentage must be between 0 and 100.'),
    },
    {
      name: 'isFeaturedProduct',
      title: 'Is Featured Product',
      type: 'boolean',
    },
    {
      name: 'stockLevel',
      title: 'Stock Level',
      type: 'number',
      validation: (Rule) =>
        Rule.required().min(0).error('Stock Level is required and must be a non-negative number.'),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(50)
          .error('Category is required and must be between 1 and 50 characters.'),
    },
  ],
});
