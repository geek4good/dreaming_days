export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'category'}
        }
      ]
    },
    {
      title: 'SKU',
      name: 'sku',
      type: 'string'
    },
    {
      title: 'Stock quantity',
      name: 'stockQuantity',
      type: 'number'
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number'
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: 'blurb',
      title: 'Blurb',
      type: 'localeString'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'localeBlockContent'
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'images[0]'
    }
  }
}
