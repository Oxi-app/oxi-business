// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Transport, RawMaterials, Processes, Logistics, Basket, Materials, Item } = initSchema(schema);

export {
  Transport,
  RawMaterials,
  Processes,
  Logistics,
  Basket,
  Materials,
  Item
};