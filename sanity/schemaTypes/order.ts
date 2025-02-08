import { defineType, defineField } from 'sanity';

const order = defineType({
  name: 'order', // Name of the schema
  title: 'Order', // Title for the schema
  type: 'document', // Type of schema
  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('First Name is required.'),
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Last Name is required.'),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: (Rule) => Rule.required().error('Address is required.'),
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      validation: (Rule) => Rule.required().error('City is required.'),
    }),
    defineField({
      name: 'zipCode',
      title: 'Zip Code',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .regex(/^\d{5,6}(?:[-\s]\d{4})?$/, {
            name: 'zip code',
            invert: false,
          })
          .error('Please enter a valid zip code.'),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .regex(/^\+?[0-9]{10,15}$/, {
            name: 'phone number',
            invert: false,
          })
          .error('Please enter a valid phone number.'),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .email()
          .error('Please enter a valid email address.'),
    }),
    defineField({
      name: 'cartItems',
      title: 'Cart Items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'product' }], // Reference to the 'product' schema
        },
      ],
      validation: (Rule) => Rule.required().min(1).error('At least one cart item is required.'),
    }),
    defineField({
      name: 'total',
      title: 'Total Amount',
      type: 'number',
      validation: (Rule) => Rule.required().positive().error('Total amount must be a positive number.'),
    }),
    defineField({
      name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Success', value: 'success' },
          { title: 'Dispatch', value: 'dispatch' },
        ],
        layout: 'radio', // Radio button layout for status
      },
      initialValue: 'pending', // Default value for status
      validation: (Rule) => Rule.required().error('Order status is required.'),
    }),
  ],
});

export default order;