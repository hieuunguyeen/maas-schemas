/*

undefined
MaaS common units that are used consistently within our own objects

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

export const schemaId = 'http://maasglobal.com/core/components/units.json';
// Uuid
// Universally unique identifier, see https://en.wikipedia.org/wiki/Universally_unique_identifier
export type Uuid = t.Branded<string, UuidBrand>;
export const Uuid = t.brand(
  t.string,
  (x): x is t.Branded<string, UuidBrand> =>
    typeof x !== 'string' ||
    x.match(RegExp('^[A-Fa-f0-9]{8}(-[A-Fa-f0-9]{4}){3}-[A-Fa-f0-9]{12}$', 'u')) !== null,
  'Uuid',
);
export interface UuidBrand {
  readonly Uuid: unique symbol;
}
// Url
// Uniform resource locator, see https://en.wikipedia.org/wiki/Uniform_Resource_Locator and https://mathiasbynens.be/demo/url-regex
export type Url = t.Branded<string, UrlBrand>;
export const Url = t.brand(
  t.string,
  (x): x is t.Branded<string, UrlBrand> =>
    typeof x !== 'string' ||
    x.match(RegExp('^(https?|ftp):\\/\\/[^\\s/$.?#].[^\\s]*$', 'u')) !== null,
  'Url',
);
export interface UrlBrand {
  readonly Url: unique symbol;
}
// Arn
// The purpose of this remains a mystery
export type Arn = t.Branded<string, ArnBrand>;
export const Arn = t.brand(
  t.string,
  (x): x is t.Branded<string, ArnBrand> =>
    (typeof x !== 'string' ||
      x.match(
        RegExp('^arn:aws:[a-z]+:[\\w\\-]*:\\d{12}:[ \\w\\-]+(\\/[\\w\\- \\/]+)*', 'u'),
      ) !== null) &&
    (typeof x !== 'string' || x.length >= 1) &&
    (typeof x !== 'string' || x.length <= 256),
  'Arn',
);
export interface ArnBrand {
  readonly Arn: unique symbol;
}
// ObsoleteIdentityId
// The purpose of this remains a mystery
export type ObsoleteIdentityId = t.Branded<string, ObsoleteIdentityIdBrand>;
export const ObsoleteIdentityId = t.brand(
  t.string,
  (x): x is t.Branded<string, ObsoleteIdentityIdBrand> =>
    typeof x !== 'string' ||
    x.match(
      RegExp('^[aepus]{2}-[\\w]{4}-\\d:[a-f\\d]{8}(-[a-f\\d]{4}){3}-[a-f\\d]{12}$', 'u'),
    ) !== null,
  'ObsoleteIdentityId',
);
export interface ObsoleteIdentityIdBrand {
  readonly ObsoleteIdentityId: unique symbol;
}
// IdentityId
// The purpose of this remains a mystery
export type IdentityId = t.Branded<ObsoleteIdentityId | Uuid, IdentityIdBrand>;
export const IdentityId = t.brand(
  t.union([ObsoleteIdentityId, Uuid]),
  (x): x is t.Branded<ObsoleteIdentityId | Uuid, IdentityIdBrand> => true,
  'IdentityId',
);
export interface IdentityIdBrand {
  readonly IdentityId: unique symbol;
}
// Currency
// Accepted monetary unit in ISO 4127 format, see https://en.wikipedia.org/wiki/ISO_4217#cite_note-1
export type Currency = t.Branded<
  string & ('EUR' | 'GBP' | 'SGD' | 'USD' | 'JPY'),
  CurrencyBrand
>;
export const Currency = t.brand(
  t.intersection([
    t.string,
    t.union([
      t.literal('EUR'),
      t.literal('GBP'),
      t.literal('SGD'),
      t.literal('USD'),
      t.literal('JPY'),
    ]),
  ]),
  (x): x is t.Branded<string & ('EUR' | 'GBP' | 'SGD' | 'USD' | 'JPY'), CurrencyBrand> =>
    true,
  'Currency',
);
export interface CurrencyBrand {
  readonly Currency: unique symbol;
}
// Time
// POSIX time in milliseconds, https://en.wikipedia.org/wiki/Unix_time
export type Time = t.Branded<number, TimeBrand>;
export const Time = t.brand(
  t.number,
  (x): x is t.Branded<number, TimeBrand> =>
    (typeof x !== 'number' || x >= 1451606400) &&
    (typeof x !== 'number' || x <= 9007199254740991) &&
    Number.isInteger(x),
  'Time',
);
export interface TimeBrand {
  readonly Time: unique symbol;
}
// Duration
// duration in milliseconds (negative values permitted), https://en.wikipedia.org/wiki/Unix_time
export type Duration = t.Branded<number, DurationBrand>;
export const Duration = t.brand(
  t.number,
  (x): x is t.Branded<number, DurationBrand> =>
    (typeof x !== 'number' || x >= -9007199254740991) &&
    (typeof x !== 'number' || x <= 9007199254740991) &&
    Number.isInteger(x),
  'Duration',
);
export interface DurationBrand {
  readonly Duration: unique symbol;
}
// IsoDate
// A date in the form YYYY-MM-DD without a time component
export type IsoDate = t.Branded<string, IsoDateBrand>;
export const IsoDate = t.brand(
  t.string,
  (x): x is t.Branded<string, IsoDateBrand> =>
    typeof x !== 'string' || x.match(RegExp('^\\d{4}-\\d{2}-\\d{2}', 'u')) !== null,
  'IsoDate',
);
export interface IsoDateBrand {
  readonly IsoDate: unique symbol;
}
// Default
// The default export. More information at the top.
export type Default = t.Branded<unknown, DefaultBrand>;
export const Default = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, DefaultBrand> => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}

export default Default;

// Success