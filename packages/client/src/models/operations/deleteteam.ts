/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from '../../lib/primitives.js';
import * as z from 'zod';

/**
 * An object describing the reason why the team is being deleted.
 */
export type Reasons = {
  /**
   * Idenitifier slug of the reason why the team is being deleted.
   */
  slug: string;
  /**
   * Description of the reason why the team is being deleted.
   */
  description: string;
};

export type DeleteTeamRequestBody = {
  /**
   * Optional array of objects that describe the reason why the team is being deleted.
   */
  reasons?: Array<Reasons> | undefined;
};

export type DeleteTeamRequest = {
  /**
   * Id of the team to be set as the new default team
   */
  newDefaultTeamId?: string | undefined;
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId: string;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
  requestBody?: DeleteTeamRequestBody | undefined;
};

/**
 * The Team was successfully deleted
 */
export type DeleteTeamResponseBody = {
  /**
   * The ID of the deleted Team
   */
  id: string;
  /**
   * Signifies whether the default team update has failed, when newDefaultTeamId is provided in request query.
   */
  newDefaultTeamIdError?: boolean | undefined;
};

/** @internal */
export const Reasons$inboundSchema: z.ZodType<Reasons, z.ZodTypeDef, unknown> =
  z.object({
    slug: z.string(),
    description: z.string(),
  });

/** @internal */
export type Reasons$Outbound = {
  slug: string;
  description: string;
};

/** @internal */
export const Reasons$outboundSchema: z.ZodType<
  Reasons$Outbound,
  z.ZodTypeDef,
  Reasons
> = z.object({
  slug: z.string(),
  description: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Reasons$ {
  /** @deprecated use `Reasons$inboundSchema` instead. */
  export const inboundSchema = Reasons$inboundSchema;
  /** @deprecated use `Reasons$outboundSchema` instead. */
  export const outboundSchema = Reasons$outboundSchema;
  /** @deprecated use `Reasons$Outbound` instead. */
  export type Outbound = Reasons$Outbound;
}

/** @internal */
export const DeleteTeamRequestBody$inboundSchema: z.ZodType<
  DeleteTeamRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  reasons: z.array(z.lazy(() => Reasons$inboundSchema)).optional(),
});

/** @internal */
export type DeleteTeamRequestBody$Outbound = {
  reasons?: Array<Reasons$Outbound> | undefined;
};

/** @internal */
export const DeleteTeamRequestBody$outboundSchema: z.ZodType<
  DeleteTeamRequestBody$Outbound,
  z.ZodTypeDef,
  DeleteTeamRequestBody
> = z.object({
  reasons: z.array(z.lazy(() => Reasons$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteTeamRequestBody$ {
  /** @deprecated use `DeleteTeamRequestBody$inboundSchema` instead. */
  export const inboundSchema = DeleteTeamRequestBody$inboundSchema;
  /** @deprecated use `DeleteTeamRequestBody$outboundSchema` instead. */
  export const outboundSchema = DeleteTeamRequestBody$outboundSchema;
  /** @deprecated use `DeleteTeamRequestBody$Outbound` instead. */
  export type Outbound = DeleteTeamRequestBody$Outbound;
}

/** @internal */
export const DeleteTeamRequest$inboundSchema: z.ZodType<
  DeleteTeamRequest,
  z.ZodTypeDef,
  unknown
> = z
  .object({
    newDefaultTeamId: z.string().optional(),
    teamId: z.string(),
    slug: z.string().optional(),
    RequestBody: z.lazy(() => DeleteTeamRequestBody$inboundSchema).optional(),
  })
  .transform(v => {
    return remap$(v, {
      RequestBody: 'requestBody',
    });
  });

/** @internal */
export type DeleteTeamRequest$Outbound = {
  newDefaultTeamId?: string | undefined;
  teamId: string;
  slug?: string | undefined;
  RequestBody?: DeleteTeamRequestBody$Outbound | undefined;
};

/** @internal */
export const DeleteTeamRequest$outboundSchema: z.ZodType<
  DeleteTeamRequest$Outbound,
  z.ZodTypeDef,
  DeleteTeamRequest
> = z
  .object({
    newDefaultTeamId: z.string().optional(),
    teamId: z.string(),
    slug: z.string().optional(),
    requestBody: z.lazy(() => DeleteTeamRequestBody$outboundSchema).optional(),
  })
  .transform(v => {
    return remap$(v, {
      requestBody: 'RequestBody',
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteTeamRequest$ {
  /** @deprecated use `DeleteTeamRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteTeamRequest$inboundSchema;
  /** @deprecated use `DeleteTeamRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteTeamRequest$outboundSchema;
  /** @deprecated use `DeleteTeamRequest$Outbound` instead. */
  export type Outbound = DeleteTeamRequest$Outbound;
}

/** @internal */
export const DeleteTeamResponseBody$inboundSchema: z.ZodType<
  DeleteTeamResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  newDefaultTeamIdError: z.boolean().optional(),
});

/** @internal */
export type DeleteTeamResponseBody$Outbound = {
  id: string;
  newDefaultTeamIdError?: boolean | undefined;
};

/** @internal */
export const DeleteTeamResponseBody$outboundSchema: z.ZodType<
  DeleteTeamResponseBody$Outbound,
  z.ZodTypeDef,
  DeleteTeamResponseBody
> = z.object({
  id: z.string(),
  newDefaultTeamIdError: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteTeamResponseBody$ {
  /** @deprecated use `DeleteTeamResponseBody$inboundSchema` instead. */
  export const inboundSchema = DeleteTeamResponseBody$inboundSchema;
  /** @deprecated use `DeleteTeamResponseBody$outboundSchema` instead. */
  export const outboundSchema = DeleteTeamResponseBody$outboundSchema;
  /** @deprecated use `DeleteTeamResponseBody$Outbound` instead. */
  export type Outbound = DeleteTeamResponseBody$Outbound;
}
