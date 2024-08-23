/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from '../../types/enums.js';
import * as z from 'zod';

export type GetDomainTransferRequest = {
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
  domain: string;
};

/**
 * The domain's transfer policy (depends on TLD requirements). `charge-and-renew`: transfer will charge for renewal and will renew the existing domain's registration. `no-charge-no-change`: transfer will have no change to registration period and does not require charge. `no-change`: transfer charge is required, but no change in registration period. `new-term`: transfer charge is required and a new registry term is set based on the transfer date. `not-supported`: transfers are not supported for this domain or TLD. `null`: This TLD is not supported by Vercel's Registrar.
 */
export const TransferPolicy = {
  ChargeAndRenew: 'charge-and-renew',
  NoChargeNoChange: 'no-charge-no-change',
  NoChange: 'no-change',
  NewTerm: 'new-term',
  NotSupported: 'not-supported',
} as const;
/**
 * The domain's transfer policy (depends on TLD requirements). `charge-and-renew`: transfer will charge for renewal and will renew the existing domain's registration. `no-charge-no-change`: transfer will have no change to registration period and does not require charge. `no-change`: transfer charge is required, but no change in registration period. `new-term`: transfer charge is required and a new registry term is set based on the transfer date. `not-supported`: transfers are not supported for this domain or TLD. `null`: This TLD is not supported by Vercel's Registrar.
 */
export type TransferPolicy = ClosedEnum<typeof TransferPolicy>;

/**
 * The current state of an ongoing transfer. `pending_owner`: Awaiting approval by domain's admin contact (every transfer begins with this status). If approval is not given within five days, the transfer is cancelled. `pending_admin`: Waiting for approval by Vercel Registrar admin. `pending_registry`: Awaiting registry approval (the transfer completes after 7 days unless it is declined by the current registrar). `completed`: The transfer completed successfully. `cancelled`: The transfer was cancelled. `undef`: No transfer exists for this domain. `unknown`: This TLD is not supported by Vercel's Registrar.
 */
export const GetDomainTransferStatus = {
  PendingOwner: 'pending_owner',
  PendingAdmin: 'pending_admin',
  PendingRegistry: 'pending_registry',
  Completed: 'completed',
  Cancelled: 'cancelled',
  Undef: 'undef',
  Unknown: 'unknown',
} as const;
/**
 * The current state of an ongoing transfer. `pending_owner`: Awaiting approval by domain's admin contact (every transfer begins with this status). If approval is not given within five days, the transfer is cancelled. `pending_admin`: Waiting for approval by Vercel Registrar admin. `pending_registry`: Awaiting registry approval (the transfer completes after 7 days unless it is declined by the current registrar). `completed`: The transfer completed successfully. `cancelled`: The transfer was cancelled. `undef`: No transfer exists for this domain. `unknown`: This TLD is not supported by Vercel's Registrar.
 */
export type GetDomainTransferStatus = ClosedEnum<
  typeof GetDomainTransferStatus
>;

export type GetDomainTransferResponseBody = {
  /**
   * Whether or not the domain is transferable
   */
  transferable: boolean;
  /**
   * The domain's transfer policy (depends on TLD requirements). `charge-and-renew`: transfer will charge for renewal and will renew the existing domain's registration. `no-charge-no-change`: transfer will have no change to registration period and does not require charge. `no-change`: transfer charge is required, but no change in registration period. `new-term`: transfer charge is required and a new registry term is set based on the transfer date. `not-supported`: transfers are not supported for this domain or TLD. `null`: This TLD is not supported by Vercel's Registrar.
   */
  transferPolicy: TransferPolicy | null;
  /**
   * Description associated with transferable state.
   */
  reason: string;
  /**
   * The current state of an ongoing transfer. `pending_owner`: Awaiting approval by domain's admin contact (every transfer begins with this status). If approval is not given within five days, the transfer is cancelled. `pending_admin`: Waiting for approval by Vercel Registrar admin. `pending_registry`: Awaiting registry approval (the transfer completes after 7 days unless it is declined by the current registrar). `completed`: The transfer completed successfully. `cancelled`: The transfer was cancelled. `undef`: No transfer exists for this domain. `unknown`: This TLD is not supported by Vercel's Registrar.
   */
  status: GetDomainTransferStatus;
};

/** @internal */
export const GetDomainTransferRequest$inboundSchema: z.ZodType<
  GetDomainTransferRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  teamId: z.string().optional(),
  slug: z.string().optional(),
  domain: z.string(),
});

/** @internal */
export type GetDomainTransferRequest$Outbound = {
  teamId?: string | undefined;
  slug?: string | undefined;
  domain: string;
};

/** @internal */
export const GetDomainTransferRequest$outboundSchema: z.ZodType<
  GetDomainTransferRequest$Outbound,
  z.ZodTypeDef,
  GetDomainTransferRequest
> = z.object({
  teamId: z.string().optional(),
  slug: z.string().optional(),
  domain: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDomainTransferRequest$ {
  /** @deprecated use `GetDomainTransferRequest$inboundSchema` instead. */
  export const inboundSchema = GetDomainTransferRequest$inboundSchema;
  /** @deprecated use `GetDomainTransferRequest$outboundSchema` instead. */
  export const outboundSchema = GetDomainTransferRequest$outboundSchema;
  /** @deprecated use `GetDomainTransferRequest$Outbound` instead. */
  export type Outbound = GetDomainTransferRequest$Outbound;
}

/** @internal */
export const TransferPolicy$inboundSchema: z.ZodNativeEnum<
  typeof TransferPolicy
> = z.nativeEnum(TransferPolicy);

/** @internal */
export const TransferPolicy$outboundSchema: z.ZodNativeEnum<
  typeof TransferPolicy
> = TransferPolicy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransferPolicy$ {
  /** @deprecated use `TransferPolicy$inboundSchema` instead. */
  export const inboundSchema = TransferPolicy$inboundSchema;
  /** @deprecated use `TransferPolicy$outboundSchema` instead. */
  export const outboundSchema = TransferPolicy$outboundSchema;
}

/** @internal */
export const GetDomainTransferStatus$inboundSchema: z.ZodNativeEnum<
  typeof GetDomainTransferStatus
> = z.nativeEnum(GetDomainTransferStatus);

/** @internal */
export const GetDomainTransferStatus$outboundSchema: z.ZodNativeEnum<
  typeof GetDomainTransferStatus
> = GetDomainTransferStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDomainTransferStatus$ {
  /** @deprecated use `GetDomainTransferStatus$inboundSchema` instead. */
  export const inboundSchema = GetDomainTransferStatus$inboundSchema;
  /** @deprecated use `GetDomainTransferStatus$outboundSchema` instead. */
  export const outboundSchema = GetDomainTransferStatus$outboundSchema;
}

/** @internal */
export const GetDomainTransferResponseBody$inboundSchema: z.ZodType<
  GetDomainTransferResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  transferable: z.boolean(),
  transferPolicy: z.nullable(TransferPolicy$inboundSchema),
  reason: z.string(),
  status: GetDomainTransferStatus$inboundSchema,
});

/** @internal */
export type GetDomainTransferResponseBody$Outbound = {
  transferable: boolean;
  transferPolicy: string | null;
  reason: string;
  status: string;
};

/** @internal */
export const GetDomainTransferResponseBody$outboundSchema: z.ZodType<
  GetDomainTransferResponseBody$Outbound,
  z.ZodTypeDef,
  GetDomainTransferResponseBody
> = z.object({
  transferable: z.boolean(),
  transferPolicy: z.nullable(TransferPolicy$outboundSchema),
  reason: z.string(),
  status: GetDomainTransferStatus$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDomainTransferResponseBody$ {
  /** @deprecated use `GetDomainTransferResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetDomainTransferResponseBody$inboundSchema;
  /** @deprecated use `GetDomainTransferResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetDomainTransferResponseBody$outboundSchema;
  /** @deprecated use `GetDomainTransferResponseBody$Outbound` instead. */
  export type Outbound = GetDomainTransferResponseBody$Outbound;
}
