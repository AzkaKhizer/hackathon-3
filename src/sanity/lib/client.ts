import { createClient } from 'next-sanity';

export const client = createClient({
  projectId:"6zd1nxdv",
  dataset:"production",
  apiVersion:'2021-03-25',
  useCdn:true, 
  token:"skw7BHrv2sETn6SZbDJYqzTOsTJGtVDhqHOkkpES6Ah1v9gNfXEjbDjqMEclkscH0sHDXqikIKNAB9RmLKI7fb8l7QmpltgGTidRjORnFUWbbdoXPM5jG7cLPvoMPpQ3tnNSROAJpEKpvnLPrpb0lxe7LVA5eiIrRM2NLweGTgBd4kDnoiwF",
});
