import queryOverpass from "query-overpass";
const queryable = {
  osm: (query, callback, options) => {
    queryOverpass(query, callback, options);
  }
};

export default queryable;
