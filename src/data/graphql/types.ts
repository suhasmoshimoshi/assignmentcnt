import { GraphQLClient, RequestOptions } from "graphql-request";
import gql from "graphql-tag";
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
type GraphQLClientRequestHeaders = RequestOptions["requestHeaders"];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  Dimension: { input: any; output: any };
  HexColor: { input: any; output: any };
  Quality: { input: any; output: any };
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars["String"]["input"]>;
  contentType_contains?: InputMaybe<Scalars["String"]["input"]>;
  contentType_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contentType_not?: InputMaybe<Scalars["String"]["input"]>;
  contentType_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  contentType_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  fileName?: InputMaybe<Scalars["String"]["input"]>;
  fileName_contains?: InputMaybe<Scalars["String"]["input"]>;
  fileName_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fileName_not?: InputMaybe<Scalars["String"]["input"]>;
  fileName_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  height_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  height_gt?: InputMaybe<Scalars["Int"]["input"]>;
  height_gte?: InputMaybe<Scalars["Int"]["input"]>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  height_lt?: InputMaybe<Scalars["Int"]["input"]>;
  height_lte?: InputMaybe<Scalars["Int"]["input"]>;
  height_not?: InputMaybe<Scalars["Int"]["input"]>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  size?: InputMaybe<Scalars["Int"]["input"]>;
  size_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  size_gt?: InputMaybe<Scalars["Int"]["input"]>;
  size_gte?: InputMaybe<Scalars["Int"]["input"]>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  size_lt?: InputMaybe<Scalars["Int"]["input"]>;
  size_lte?: InputMaybe<Scalars["Int"]["input"]>;
  size_not?: InputMaybe<Scalars["Int"]["input"]>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  url?: InputMaybe<Scalars["String"]["input"]>;
  url_contains?: InputMaybe<Scalars["String"]["input"]>;
  url_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  url_not?: InputMaybe<Scalars["String"]["input"]>;
  url_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
  width_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  width_gt?: InputMaybe<Scalars["Int"]["input"]>;
  width_gte?: InputMaybe<Scalars["Int"]["input"]>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  width_lt?: InputMaybe<Scalars["Int"]["input"]>;
  width_lte?: InputMaybe<Scalars["Int"]["input"]>;
  width_not?: InputMaybe<Scalars["Int"]["input"]>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
};

export enum AssetOrder {
  ContentTypeAsc = "contentType_ASC",
  ContentTypeDesc = "contentType_DESC",
  FileNameAsc = "fileName_ASC",
  FileNameDesc = "fileName_DESC",
  HeightAsc = "height_ASC",
  HeightDesc = "height_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  WidthAsc = "width_ASC",
  WidthDesc = "width_DESC",
}

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export enum ImageFormat {
  Avif = "AVIF",
  /** JPG image format. */
  Jpg = "JPG",
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = "JPG_PROGRESSIVE",
  /** PNG image format */
  Png = "PNG",
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = "PNG8",
  /** WebP image format. */
  Webp = "WEBP",
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = "BOTTOM",
  /** Focus the resizing on the bottom left. */
  BottomLeft = "BOTTOM_LEFT",
  /** Focus the resizing on the bottom right. */
  BottomRight = "BOTTOM_RIGHT",
  /** Focus the resizing on the center. */
  Center = "CENTER",
  /** Focus the resizing on the largest face. */
  Face = "FACE",
  /** Focus the resizing on the area containing all the faces. */
  Faces = "FACES",
  /** Focus the resizing on the left. */
  Left = "LEFT",
  /** Focus the resizing on the right. */
  Right = "RIGHT",
  /** Focus the resizing on the top. */
  Top = "TOP",
  /** Focus the resizing on the top left. */
  TopLeft = "TOP_LEFT",
  /** Focus the resizing on the top right. */
  TopRight = "TOP_RIGHT",
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = "CROP",
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = "FILL",
  /** Resizes the image to fit into the specified dimensions. */
  Fit = "FIT",
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = "PAD",
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = "SCALE",
  /** Creates a thumbnail from the image. */
  Thumb = "THUMB",
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars["HexColor"]["input"]>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars["Int"]["input"]>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars["Dimension"]["input"]>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars["Quality"]["input"]>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars["Dimension"]["input"]>;
};

export type ProductFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  imageUrl?: InputMaybe<Scalars["String"]["input"]>;
  imageUrl_contains?: InputMaybe<Scalars["String"]["input"]>;
  imageUrl_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  imageUrl_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  imageUrl_not?: InputMaybe<Scalars["String"]["input"]>;
  imageUrl_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  imageUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export enum ProductOrder {
  ImageUrlAsc = "imageUrl_ASC",
  ImageUrlDesc = "imageUrl_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  firstPublishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  firstPublishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  id?: InputMaybe<Scalars["String"]["input"]>;
  id_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_not?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedVersion?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  publishedVersion_gt?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_gte?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_in?: InputMaybe<
    Array<InputMaybe<Scalars["Float"]["input"]>>
  >;
  publishedVersion_lt?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_lte?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_not?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["Float"]["input"]>>
  >;
};

export type GetProductByIdQueryVariables = Exact<{
  id: Scalars["String"]["input"];
}>;

export type GetProductByIdQuery = {
  product?:
    | {
        title?: string | undefined;
        description?: string | undefined;
        imageUrl?: string | undefined;
        sys: { id: string };
      }
    | undefined;
};

export type GetAllProductsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetAllProductsQuery = {
  productCollection?:
    | {
        total: number;
        items: Array<
          | {
              title?: string | undefined;
              description?: string | undefined;
              imageUrl?: string | undefined;
              sys: { id: string; publishedAt?: any | undefined };
            }
          | undefined
        >;
      }
    | undefined;
};

export const GetProductByIdDocument = gql`
  query GetProductById($id: String!) {
    product(id: $id) {
      sys {
        id
      }
      title
      description
      imageUrl
    }
  }
`;
export const GetAllProductsDocument = gql`
  query GetAllProducts($limit: Int, $skip: Int) {
    productCollection(limit: $limit, skip: $skip) {
      total
      items {
        sys {
          id
          publishedAt
        }
        title
        description
        imageUrl
      }
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
  variables?: any,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType,
  _variables,
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    GetProductById(
      variables: GetProductByIdQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetProductByIdQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetProductByIdQuery>(
            GetProductByIdDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "GetProductById",
        "query",
        variables,
      );
    },
    GetAllProducts(
      variables?: GetAllProductsQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetAllProductsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetAllProductsQuery>(
            GetAllProductsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "GetAllProducts",
        "query",
        variables,
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
