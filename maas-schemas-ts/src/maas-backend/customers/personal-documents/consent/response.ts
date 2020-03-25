/*

undefined
Save user consent to send all TSP required personal documents to TSP

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as Common_ from 'maas-schemas-ts/core/components/common';

type Defined =
  | Record<string, unknown>
  | Array<unknown>
  | string
  | boolean
  | number
  | null;
const Defined = t.union([
  t.UnknownRecord,
  t.UnknownArray,
  t.string,
  t.boolean,
  t.number,
  t.null,
]);

export const schemaId =
  'http://maasglobal.com/maas-backend/customers/personal-documents/consent/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    identityId?: Units_.IdentityId;
    agencyId?: Common_.AgencyId;
  } & {
    identityId: Defined;
    agencyId: Defined;
  },
  ResponseBrand
>;
export const Response = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      agencyId: Common_.AgencyId,
    }),
    t.type({
      identityId: Defined,
      agencyId: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      agencyId?: Common_.AgencyId;
    } & {
      identityId: Defined;
      agencyId: Defined;
    },
    ResponseBrand
  > => true,
  'Response',
);
export interface ResponseBrand {
  readonly Response: unique symbol;
}

export default Response;

// Success
