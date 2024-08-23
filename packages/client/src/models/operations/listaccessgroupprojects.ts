/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from '../../types/enums.js';
import * as z from 'zod';

export type ListAccessGroupProjectsRequest = {
  /**
   * The ID or name of the Access Group.
   */
  idOrName: string;
  /**
   * Limit how many access group projects should be returned.
   */
  limit?: number | undefined;
  /**
   * Continuation cursor to retrieve the next page of results.
   */
  next?: string | undefined;
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
};

export const ListAccessGroupProjectsRole = {
  Admin: 'ADMIN',
  ProjectDeveloper: 'PROJECT_DEVELOPER',
  ProjectViewer: 'PROJECT_VIEWER',
} as const;
export type ListAccessGroupProjectsRole = ClosedEnum<
  typeof ListAccessGroupProjectsRole
>;

export type ListAccessGroupProjectsProject = {
  name?: string | undefined;
  framework?: string | null | undefined;
  latestDeploymentId?: string | undefined;
};

export type ListAccessGroupProjectsProjects = {
  projectId: string;
  role: ListAccessGroupProjectsRole;
  createdAt: string;
  updatedAt: string;
  project: ListAccessGroupProjectsProject;
};

export type ListAccessGroupProjectsPagination = {
  count: number;
  next: string | null;
};

export type ListAccessGroupProjectsResponseBody = {
  projects: Array<ListAccessGroupProjectsProjects>;
  pagination: ListAccessGroupProjectsPagination;
};

/** @internal */
export const ListAccessGroupProjectsRequest$inboundSchema: z.ZodType<
  ListAccessGroupProjectsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  idOrName: z.string(),
  limit: z.number().int().optional(),
  next: z.string().optional(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/** @internal */
export type ListAccessGroupProjectsRequest$Outbound = {
  idOrName: string;
  limit?: number | undefined;
  next?: string | undefined;
  teamId?: string | undefined;
  slug?: string | undefined;
};

/** @internal */
export const ListAccessGroupProjectsRequest$outboundSchema: z.ZodType<
  ListAccessGroupProjectsRequest$Outbound,
  z.ZodTypeDef,
  ListAccessGroupProjectsRequest
> = z.object({
  idOrName: z.string(),
  limit: z.number().int().optional(),
  next: z.string().optional(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAccessGroupProjectsRequest$ {
  /** @deprecated use `ListAccessGroupProjectsRequest$inboundSchema` instead. */
  export const inboundSchema = ListAccessGroupProjectsRequest$inboundSchema;
  /** @deprecated use `ListAccessGroupProjectsRequest$outboundSchema` instead. */
  export const outboundSchema = ListAccessGroupProjectsRequest$outboundSchema;
  /** @deprecated use `ListAccessGroupProjectsRequest$Outbound` instead. */
  export type Outbound = ListAccessGroupProjectsRequest$Outbound;
}

/** @internal */
export const ListAccessGroupProjectsRole$inboundSchema: z.ZodNativeEnum<
  typeof ListAccessGroupProjectsRole
> = z.nativeEnum(ListAccessGroupProjectsRole);

/** @internal */
export const ListAccessGroupProjectsRole$outboundSchema: z.ZodNativeEnum<
  typeof ListAccessGroupProjectsRole
> = ListAccessGroupProjectsRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAccessGroupProjectsRole$ {
  /** @deprecated use `ListAccessGroupProjectsRole$inboundSchema` instead. */
  export const inboundSchema = ListAccessGroupProjectsRole$inboundSchema;
  /** @deprecated use `ListAccessGroupProjectsRole$outboundSchema` instead. */
  export const outboundSchema = ListAccessGroupProjectsRole$outboundSchema;
}

/** @internal */
export const ListAccessGroupProjectsProject$inboundSchema: z.ZodType<
  ListAccessGroupProjectsProject,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  framework: z.nullable(z.string()).optional(),
  latestDeploymentId: z.string().optional(),
});

/** @internal */
export type ListAccessGroupProjectsProject$Outbound = {
  name?: string | undefined;
  framework?: string | null | undefined;
  latestDeploymentId?: string | undefined;
};

/** @internal */
export const ListAccessGroupProjectsProject$outboundSchema: z.ZodType<
  ListAccessGroupProjectsProject$Outbound,
  z.ZodTypeDef,
  ListAccessGroupProjectsProject
> = z.object({
  name: z.string().optional(),
  framework: z.nullable(z.string()).optional(),
  latestDeploymentId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAccessGroupProjectsProject$ {
  /** @deprecated use `ListAccessGroupProjectsProject$inboundSchema` instead. */
  export const inboundSchema = ListAccessGroupProjectsProject$inboundSchema;
  /** @deprecated use `ListAccessGroupProjectsProject$outboundSchema` instead. */
  export const outboundSchema = ListAccessGroupProjectsProject$outboundSchema;
  /** @deprecated use `ListAccessGroupProjectsProject$Outbound` instead. */
  export type Outbound = ListAccessGroupProjectsProject$Outbound;
}

/** @internal */
export const ListAccessGroupProjectsProjects$inboundSchema: z.ZodType<
  ListAccessGroupProjectsProjects,
  z.ZodTypeDef,
  unknown
> = z.object({
  projectId: z.string(),
  role: ListAccessGroupProjectsRole$inboundSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
  project: z.lazy(() => ListAccessGroupProjectsProject$inboundSchema),
});

/** @internal */
export type ListAccessGroupProjectsProjects$Outbound = {
  projectId: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  project: ListAccessGroupProjectsProject$Outbound;
};

/** @internal */
export const ListAccessGroupProjectsProjects$outboundSchema: z.ZodType<
  ListAccessGroupProjectsProjects$Outbound,
  z.ZodTypeDef,
  ListAccessGroupProjectsProjects
> = z.object({
  projectId: z.string(),
  role: ListAccessGroupProjectsRole$outboundSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
  project: z.lazy(() => ListAccessGroupProjectsProject$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAccessGroupProjectsProjects$ {
  /** @deprecated use `ListAccessGroupProjectsProjects$inboundSchema` instead. */
  export const inboundSchema = ListAccessGroupProjectsProjects$inboundSchema;
  /** @deprecated use `ListAccessGroupProjectsProjects$outboundSchema` instead. */
  export const outboundSchema = ListAccessGroupProjectsProjects$outboundSchema;
  /** @deprecated use `ListAccessGroupProjectsProjects$Outbound` instead. */
  export type Outbound = ListAccessGroupProjectsProjects$Outbound;
}

/** @internal */
export const ListAccessGroupProjectsPagination$inboundSchema: z.ZodType<
  ListAccessGroupProjectsPagination,
  z.ZodTypeDef,
  unknown
> = z.object({
  count: z.number(),
  next: z.nullable(z.string()),
});

/** @internal */
export type ListAccessGroupProjectsPagination$Outbound = {
  count: number;
  next: string | null;
};

/** @internal */
export const ListAccessGroupProjectsPagination$outboundSchema: z.ZodType<
  ListAccessGroupProjectsPagination$Outbound,
  z.ZodTypeDef,
  ListAccessGroupProjectsPagination
> = z.object({
  count: z.number(),
  next: z.nullable(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAccessGroupProjectsPagination$ {
  /** @deprecated use `ListAccessGroupProjectsPagination$inboundSchema` instead. */
  export const inboundSchema = ListAccessGroupProjectsPagination$inboundSchema;
  /** @deprecated use `ListAccessGroupProjectsPagination$outboundSchema` instead. */
  export const outboundSchema =
    ListAccessGroupProjectsPagination$outboundSchema;
  /** @deprecated use `ListAccessGroupProjectsPagination$Outbound` instead. */
  export type Outbound = ListAccessGroupProjectsPagination$Outbound;
}

/** @internal */
export const ListAccessGroupProjectsResponseBody$inboundSchema: z.ZodType<
  ListAccessGroupProjectsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  projects: z.array(
    z.lazy(() => ListAccessGroupProjectsProjects$inboundSchema)
  ),
  pagination: z.lazy(() => ListAccessGroupProjectsPagination$inboundSchema),
});

/** @internal */
export type ListAccessGroupProjectsResponseBody$Outbound = {
  projects: Array<ListAccessGroupProjectsProjects$Outbound>;
  pagination: ListAccessGroupProjectsPagination$Outbound;
};

/** @internal */
export const ListAccessGroupProjectsResponseBody$outboundSchema: z.ZodType<
  ListAccessGroupProjectsResponseBody$Outbound,
  z.ZodTypeDef,
  ListAccessGroupProjectsResponseBody
> = z.object({
  projects: z.array(
    z.lazy(() => ListAccessGroupProjectsProjects$outboundSchema)
  ),
  pagination: z.lazy(() => ListAccessGroupProjectsPagination$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAccessGroupProjectsResponseBody$ {
  /** @deprecated use `ListAccessGroupProjectsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ListAccessGroupProjectsResponseBody$inboundSchema;
  /** @deprecated use `ListAccessGroupProjectsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ListAccessGroupProjectsResponseBody$outboundSchema;
  /** @deprecated use `ListAccessGroupProjectsResponseBody$Outbound` instead. */
  export type Outbound = ListAccessGroupProjectsResponseBody$Outbound;
}
