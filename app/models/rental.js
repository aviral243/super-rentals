import { Model, attr } from "@ember-data/model";

export default Model.extend({
  title: attr(),
  owner: attr(),
  city: attr(),
  category: attr(),
  image: attr(),
  bedrooms: attr(),
  description: attr()
});
