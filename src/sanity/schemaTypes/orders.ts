import { defineType } from "sanity";

export const order = defineType({
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    
    },
    {
      name:'address',
      title:'Address',
      type:'string'
    },
    {
      name:'city',
      title:'City',
      type:'string'
    },
    {
      name:'cartItems',
      title:'Cart Items',
      type:'array',
      of:[{type:'reference',to:{type:'products'}}]
    },

    {
      name: 'totalAmount',
      title: 'Total Amount (USD)',
      type: 'number',
      
    },
     {
      name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
        list: [
          
            {title:'Pending', value:'pending'},
           {title:'Success', value:'success'},
           {title:'Dispatch', value:'dispatch'},

        ],
      
      layout:'radio',
      },
      initialValue: 'pending',
    },
   
  ],

});
