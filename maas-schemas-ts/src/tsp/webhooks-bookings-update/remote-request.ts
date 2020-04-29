/*

undefined
Remote request schema, e.g. how TSP should call MaaS-backend

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Booking_ from 'maas-schemas-ts/core/booking';
import * as BookingOption_ from 'maas-schemas-ts/core/booking-option';
import * as BookingMeta_ from 'maas-schemas-ts/core/booking-meta';
import * as Errors_ from 'maas-schemas-ts/core/components/errors';

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
  'http://maasglobal.com/tsp/webhooks-bookings-update/remote-request.json';

// RemoteRequest
// The default export. More information at the top.
export type RemoteRequest = t.Branded<
  {
    tspId?: Booking_.TspId;
    cost?: Booking_.Cost;
    state?: 'RESERVED' | 'CONFIRMED' | 'ACTIVATED' | 'EXPIRED' | 'CANCELLED' | 'REJECTED';
    leg?: BookingOption_.LegDelta;
    meta?: BookingMeta_.BookingMeta;
    terms?: Booking_.Terms;
    token?: Booking_.Token;
    reasons?: Array<Errors_.Reason>;
  } & {
    tspId: Defined;
    state: Defined;
  },
  RemoteRequestBrand
>;
export const RemoteRequest = t.brand(
  t.intersection([
    t.partial({
      tspId: Booking_.TspId,
      cost: Booking_.Cost,
      state: t.union([
        t.literal('RESERVED'),
        t.literal('CONFIRMED'),
        t.literal('ACTIVATED'),
        t.literal('EXPIRED'),
        t.literal('CANCELLED'),
        t.literal('REJECTED'),
      ]),
      leg: BookingOption_.LegDelta,
      meta: BookingMeta_.BookingMeta,
      terms: Booking_.Terms,
      token: Booking_.Token,
      reasons: t.array(Errors_.Reason),
    }),
    t.type({
      tspId: Defined,
      state: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      tspId?: Booking_.TspId;
      cost?: Booking_.Cost;
      state?:
        | 'RESERVED'
        | 'CONFIRMED'
        | 'ACTIVATED'
        | 'EXPIRED'
        | 'CANCELLED'
        | 'REJECTED';
      leg?: BookingOption_.LegDelta;
      meta?: BookingMeta_.BookingMeta;
      terms?: Booking_.Terms;
      token?: Booking_.Token;
      reasons?: Array<Errors_.Reason>;
    } & {
      tspId: Defined;
      state: Defined;
    },
    RemoteRequestBrand
  > => true,
  'RemoteRequest',
);
export interface RemoteRequestBrand {
  readonly RemoteRequest: unique symbol;
}

export default RemoteRequest;

// Success
