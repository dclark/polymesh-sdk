[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/TickerReservation/types](../modules/api_entities_TickerReservation_types.md) / TickerReservationDetails

# Interface: TickerReservationDetails

[api/entities/TickerReservation/types](../modules/api_entities_TickerReservation_types.md).TickerReservationDetails

## Table of contents

### Properties

- [expiryDate](api_entities_TickerReservation_types.TickerReservationDetails.md#expirydate)
- [owner](api_entities_TickerReservation_types.TickerReservationDetails.md#owner)
- [status](api_entities_TickerReservation_types.TickerReservationDetails.md#status)

## Properties

### expiryDate

• **expiryDate**: ``null`` \| `Date`

date at which the reservation expires, null if it never expires (permanent reservation or Asset already launched)

#### Defined in

[api/entities/TickerReservation/types.ts:26](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/TickerReservation/types.ts#L26)

___

### owner

• **owner**: ``null`` \| [`Identity`](../classes/api_entities_Identity.Identity.md)

Identity ID of the owner of the ticker, null if it hasn't been reserved

#### Defined in

[api/entities/TickerReservation/types.ts:22](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/TickerReservation/types.ts#L22)

___

### status

• **status**: [`TickerReservationStatus`](../enums/api_entities_TickerReservation_types.TickerReservationStatus.md)

#### Defined in

[api/entities/TickerReservation/types.ts:27](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/TickerReservation/types.ts#L27)
