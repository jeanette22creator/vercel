/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from '../../lib/primitives.js';
import { ClosedEnum } from '../../types/enums.js';
import * as components from '../components/index.js';
import * as z from 'zod';

export const CreateAuthTokenRequestBodyType = {
  Oauth2Token: 'oauth2-token',
} as const;
export type CreateAuthTokenRequestBodyType = ClosedEnum<
  typeof CreateAuthTokenRequestBodyType
>;

export type CreateAuthTokenRequestBody2 = {
  type: CreateAuthTokenRequestBodyType;
  name: string;
  clientId?: string | undefined;
  installationId?: string | undefined;
  expiresAt?: number | undefined;
};

export type CreateAuthTokenRequestBody1 = {
  name: string;
  expiresAt?: number | undefined;
};

export type CreateAuthTokenRequestBody =
  | CreateAuthTokenRequestBody1
  | CreateAuthTokenRequestBody2;

export type CreateAuthTokenRequest = {
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
  requestBody?:
    | CreateAuthTokenRequestBody1
    | CreateAuthTokenRequestBody2
    | undefined;
};

/**
 * Successful response.
 */
export type CreateAuthTokenResponseBody = {
  /**
   * Authentication token metadata.
   */
  token: components.AuthToken;
  /**
   * The authentication token's actual value. This token is only provided in this response, and can never be retrieved again in the future. Be sure to save it somewhere safe!
   */
  bearerToken: string;
};

/** @internal */
export const CreateAuthTokenRequestBodyType$inboundSchema: z.ZodNativeEnum<
  typeof CreateAuthTokenRequestBodyType
> = z.nativeEnum(CreateAuthTokenRequestBodyType);

/** @internal */
export const CreateAuthTokenRequestBodyType$outboundSchema: z.ZodNativeEnum<
  typeof CreateAuthTokenRequestBodyType
> = CreateAuthTokenRequestBodyType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAuthTokenRequestBodyType$ {
  /** @deprecated use `CreateAuthTokenRequestBodyType$inboundSchema` instead. */
  export const inboundSchema = CreateAuthTokenRequestBodyType$inboundSchema;
  /** @deprecated use `CreateAuthTokenRequestBodyType$outboundSchema` instead. */
  export const outboundSchema = CreateAuthTokenRequestBodyType$outboundSchema;
}

/** @internal */
export const CreateAuthTokenRequestBody2$inboundSchema: z.ZodType<
  CreateAuthTokenRequestBody2,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: CreateAuthTokenRequestBodyType$inboundSchema,
  name: z.string(),
  clientId: z.string().optional(),
  installationId: z.string().optional(),
  expiresAt: z.number().optional(),
});

/** @internal */
export type CreateAuthTokenRequestBody2$Outbound = {
  type: string;
  name: string;
  clientId?: string | undefined;
  installationId?: string | undefined;
  expiresAt?: number | undefined;
};

/** @internal */
export const CreateAuthTokenRequestBody2$outboundSchema: z.ZodType<
  CreateAuthTokenRequestBody2$Outbound,
  z.ZodTypeDef,
  CreateAuthTokenRequestBody2
> = z.object({
  type: CreateAuthTokenRequestBodyType$outboundSchema,
  name: z.string(),
  clientId: z.string().optional(),
  installationId: z.string().optional(),
  expiresAt: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAuthTokenRequestBody2$ {
  /** @deprecated use `CreateAuthTokenRequestBody2$inboundSchema` instead. */
  export const inboundSchema = CreateAuthTokenRequestBody2$inboundSchema;
  /** @deprecated use `CreateAuthTokenRequestBody2$outboundSchema` instead. */
  export const outboundSchema = CreateAuthTokenRequestBody2$outboundSchema;
  /** @deprecated use `CreateAuthTokenRequestBody2$Outbound` instead. */
  export type Outbound = CreateAuthTokenRequestBody2$Outbound;
}

/** @internal */
export const CreateAuthTokenRequestBody1$inboundSchema: z.ZodType<
  CreateAuthTokenRequestBody1,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  expiresAt: z.number().optional(),
});

/** @internal */
export type CreateAuthTokenRequestBody1$Outbound = {
  name: string;
  expiresAt?: number | undefined;
};

/** @internal */
export const CreateAuthTokenRequestBody1$outboundSchema: z.ZodType<
  CreateAuthTokenRequestBody1$Outbound,
  z.ZodTypeDef,
  CreateAuthTokenRequestBody1
> = z.object({
  name: z.string(),
  expiresAt: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAuthTokenRequestBody1$ {
  /** @deprecated use `CreateAuthTokenRequestBody1$inboundSchema` instead. */
  export const inboundSchema = CreateAuthTokenRequestBody1$inboundSchema;
  /** @deprecated use `CreateAuthTokenRequestBody1$outboundSchema` instead. */
  export const outboundSchema = CreateAuthTokenRequestBody1$outboundSchema;
  /** @deprecated use `CreateAuthTokenRequestBody1$Outbound` instead. */
  export type Outbound = CreateAuthTokenRequestBody1$Outbound;
}

/** @internal */
export const CreateAuthTokenRequestBody$inboundSchema: z.ZodType<
  CreateAuthTokenRequestBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => CreateAuthTokenRequestBody1$inboundSchema),
  z.lazy(() => CreateAuthTokenRequestBody2$inboundSchema),
]);

/** @internal */
export type CreateAuthTokenRequestBody$Outbound =
  | CreateAuthTokenRequestBody1$Outbound
  | CreateAuthTokenRequestBody2$Outbound;

/** @internal */
export const CreateAuthTokenRequestBody$outboundSchema: z.ZodType<
  CreateAuthTokenRequestBody$Outbound,
  z.ZodTypeDef,
  CreateAuthTokenRequestBody
> = z.union([
  z.lazy(() => CreateAuthTokenRequestBody1$outboundSchema),
  z.lazy(() => CreateAuthTokenRequestBody2$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAuthTokenRequestBody$ {
  /** @deprecated use `CreateAuthTokenRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreateAuthTokenRequestBody$inboundSchema;
  /** @deprecated use `CreateAuthTokenRequestBody$outboundSchema` instead. */
  export const outboundSchema = CreateAuthTokenRequestBody$outboundSchema;
  /** @deprecated use `CreateAuthTokenRequestBody$Outbound` instead. */
  export type Outbound = CreateAuthTokenRequestBody$Outbound;
}

/** @internal */
export const CreateAuthTokenRequest$inboundSchema: z.ZodType<
  CreateAuthTokenRequest,
  z.ZodTypeDef,
  unknown
> = z
  .object({
    teamId: z.string().optional(),
    slug: z.string().optional(),
    RequestBody: z
      .union([
        z.lazy(() => CreateAuthTokenRequestBody1$inboundSchema),
        z.lazy(() => CreateAuthTokenRequestBody2$inboundSchema),
      ])
      .optional(),
  })
  .transform(v => {
    return remap$(v, {
      RequestBody: 'requestBody',
    });
  });

/** @internal */
export type CreateAuthTokenRequest$Outbound = {
  teamId?: string | undefined;
  slug?: string | undefined;
  RequestBody?:
    | CreateAuthTokenRequestBody1$Outbound
    | CreateAuthTokenRequestBody2$Outbound
    | undefined;
};

/** @internal */
export const CreateAuthTokenRequest$outboundSchema: z.ZodType<
  CreateAuthTokenRequest$Outbound,
  z.ZodTypeDef,
  CreateAuthTokenRequest
> = z
  .object({
    teamId: z.string().optional(),
    slug: z.string().optional(),
    requestBody: z
      .union([
        z.lazy(() => CreateAuthTokenRequestBody1$outboundSchema),
        z.lazy(() => CreateAuthTokenRequestBody2$outboundSchema),
      ])
      .optional(),
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
export namespace CreateAuthTokenRequest$ {
  /** @deprecated use `CreateAuthTokenRequest$inboundSchema` instead. */
  export const inboundSchema = CreateAuthTokenRequest$inboundSchema;
  /** @deprecated use `CreateAuthTokenRequest$outboundSchema` instead. */
  export const outboundSchema = CreateAuthTokenRequest$outboundSchema;
  /** @deprecated use `CreateAuthTokenRequest$Outbound` instead. */
  export type Outbound = CreateAuthTokenRequest$Outbound;
}

/** @internal */
export const CreateAuthTokenResponseBody$inboundSchema: z.ZodType<
  CreateAuthTokenResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  token: components.AuthToken$inboundSchema,
  bearerToken: z.string(),
});

/** @internal */
export type CreateAuthTokenResponseBody$Outbound = {
  token: components.AuthToken$Outbound;
  bearerToken: string;
};

/** @internal */
export const CreateAuthTokenResponseBody$outboundSchema: z.ZodType<
  CreateAuthTokenResponseBody$Outbound,
  z.ZodTypeDef,
  CreateAuthTokenResponseBody
> = z.object({
  token: components.AuthToken$outboundSchema,
  bearerToken: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAuthTokenResponseBody$ {
  /** @deprecated use `CreateAuthTokenResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreateAuthTokenResponseBody$inboundSchema;
  /** @deprecated use `CreateAuthTokenResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreateAuthTokenResponseBody$outboundSchema;
  /** @deprecated use `CreateAuthTokenResponseBody$Outbound` instead. */
  export type Outbound = CreateAuthTokenResponseBody$Outbound;
}
