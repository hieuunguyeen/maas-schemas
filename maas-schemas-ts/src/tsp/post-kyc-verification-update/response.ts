/*

undefined
Response schema for post KYC verification update.

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import { nonEmptyArray } from 'io-ts-types/lib/nonEmptyArray';

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
  'http://maasglobal.com/tsp/post-kyc-verification-update/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    status?: number;
    message?: string;
  } & {
    message: Defined;
    status: Defined;
  },
  ResponseBrand
>;
export const Response = t.brand(
  t.intersection([
    t.partial({
      status: t.number,
      message: t.string,
    }),
    t.type({
      message: Defined,
      status: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      status?: number;
      message?: string;
    } & {
      message: Defined;
      status: Defined;
    },
    ResponseBrand
  > => true,
  'Response',
);
export interface ResponseBrand {
  readonly Response: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(Response)).decodeSync(examplesResponse) // => examplesResponse */
export const examplesResponse: NonEmptyArray<Response> = ([
  { status: 200, message: 'Documents were processed.' },
] as unknown) as NonEmptyArray<Response>;

export default Response;

// Success
