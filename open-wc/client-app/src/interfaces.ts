// Typescript interfaces used to leverage typescript's Type system.
// We define interfaces: propertyName: <type>
// where <type> can be primitive, Class, Collection, Enum, Interface

// Note: enum is a special case of interface in Typescript.
// Enum property values are mapped to incremental (0,1,2) integers when transpiled to JS.

interface ParamVal {
  isActive: boolean;
  key: string;
  value: string;
}

interface Endpoint {
  isActive: boolean;
  status: number;
  resource: string;
  uri: string;
  queryParams: Array<string>;
}

interface ConfigIdentifiers {
  spid: number;
  profile: string;
  arid: number;
  encounter: number;
  listGRH: boolean;
}

// enum SearchParamTypes {
//     Patient,
//     Encounter,
//     ListGRH
// }
