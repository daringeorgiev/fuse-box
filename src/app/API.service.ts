/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateFuseBoxInput = {
  id?: string | null;
  name: string;
  description?: string | null;
  ownerId: string;
  rows?: number | null;
};

export type ModelFuseBoxConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  ownerId?: ModelStringInput | null;
  rows?: ModelIntInput | null;
  and?: Array<ModelFuseBoxConditionInput | null> | null;
  or?: Array<ModelFuseBoxConditionInput | null> | null;
  not?: ModelFuseBoxConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateFuseBoxInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  ownerId?: string | null;
  rows?: number | null;
};

export type DeleteFuseBoxInput = {
  id?: string | null;
};

export type CreateFuseInput = {
  id?: string | null;
  active?: boolean | null;
  label: string;
  type?: string | null;
};

export type ModelFuseConditionInput = {
  active?: ModelBooleanInput | null;
  label?: ModelStringInput | null;
  type?: ModelStringInput | null;
  and?: Array<ModelFuseConditionInput | null> | null;
  or?: Array<ModelFuseConditionInput | null> | null;
  not?: ModelFuseConditionInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateFuseInput = {
  id: string;
  active?: boolean | null;
  label?: string | null;
  type?: string | null;
};

export type DeleteFuseInput = {
  id?: string | null;
};

export type ModelFuseBoxFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  ownerId?: ModelStringInput | null;
  rows?: ModelIntInput | null;
  and?: Array<ModelFuseBoxFilterInput | null> | null;
  or?: Array<ModelFuseBoxFilterInput | null> | null;
  not?: ModelFuseBoxFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelFuseFilterInput = {
  id?: ModelIDInput | null;
  active?: ModelBooleanInput | null;
  label?: ModelStringInput | null;
  type?: ModelStringInput | null;
  and?: Array<ModelFuseFilterInput | null> | null;
  or?: Array<ModelFuseFilterInput | null> | null;
  not?: ModelFuseFilterInput | null;
};

export type CreateFuseBoxMutation = {
  __typename: "FuseBox";
  id: string;
  name: string;
  description: string | null;
  ownerId: string;
  rows: number | null;
  fuses: Array<{
    __typename: "Fuse";
    id: string;
    active: boolean | null;
    label: string;
    type: string | null;
    fuseBox: {
      __typename: "FuseBox";
      id: string;
      name: string;
      description: string | null;
      ownerId: string;
      rows: number | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  }> | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateFuseBoxMutation = {
  __typename: "FuseBox";
  id: string;
  name: string;
  description: string | null;
  ownerId: string;
  rows: number | null;
  fuses: Array<{
    __typename: "Fuse";
    id: string;
    active: boolean | null;
    label: string;
    type: string | null;
    fuseBox: {
      __typename: "FuseBox";
      id: string;
      name: string;
      description: string | null;
      ownerId: string;
      rows: number | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  }> | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteFuseBoxMutation = {
  __typename: "FuseBox";
  id: string;
  name: string;
  description: string | null;
  ownerId: string;
  rows: number | null;
  fuses: Array<{
    __typename: "Fuse";
    id: string;
    active: boolean | null;
    label: string;
    type: string | null;
    fuseBox: {
      __typename: "FuseBox";
      id: string;
      name: string;
      description: string | null;
      ownerId: string;
      rows: number | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  }> | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateFuseMutation = {
  __typename: "Fuse";
  id: string;
  active: boolean | null;
  label: string;
  type: string | null;
  fuseBox: {
    __typename: "FuseBox";
    id: string;
    name: string;
    description: string | null;
    ownerId: string;
    rows: number | null;
    fuses: Array<{
      __typename: "Fuse";
      id: string;
      active: boolean | null;
      label: string;
      type: string | null;
      createdAt: string;
      updatedAt: string;
    }> | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type UpdateFuseMutation = {
  __typename: "Fuse";
  id: string;
  active: boolean | null;
  label: string;
  type: string | null;
  fuseBox: {
    __typename: "FuseBox";
    id: string;
    name: string;
    description: string | null;
    ownerId: string;
    rows: number | null;
    fuses: Array<{
      __typename: "Fuse";
      id: string;
      active: boolean | null;
      label: string;
      type: string | null;
      createdAt: string;
      updatedAt: string;
    }> | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type DeleteFuseMutation = {
  __typename: "Fuse";
  id: string;
  active: boolean | null;
  label: string;
  type: string | null;
  fuseBox: {
    __typename: "FuseBox";
    id: string;
    name: string;
    description: string | null;
    ownerId: string;
    rows: number | null;
    fuses: Array<{
      __typename: "Fuse";
      id: string;
      active: boolean | null;
      label: string;
      type: string | null;
      createdAt: string;
      updatedAt: string;
    }> | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type GetFuseBoxQuery = {
  __typename: "FuseBox";
  id: string;
  name: string;
  description: string | null;
  ownerId: string;
  rows: number | null;
  fuses: Array<{
    __typename: "Fuse";
    id: string;
    active: boolean | null;
    label: string;
    type: string | null;
    fuseBox: {
      __typename: "FuseBox";
      id: string;
      name: string;
      description: string | null;
      ownerId: string;
      rows: number | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  }> | null;
  createdAt: string;
  updatedAt: string;
};

export type ListFuseBoxsQuery = {
  __typename: "ModelFuseBoxConnection";
  items: Array<{
    __typename: "FuseBox";
    id: string;
    name: string;
    description: string | null;
    ownerId: string;
    rows: number | null;
    fuses: Array<{
      __typename: "Fuse";
      id: string;
      active: boolean | null;
      label: string;
      type: string | null;
      createdAt: string;
      updatedAt: string;
    }> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetFuseQuery = {
  __typename: "Fuse";
  id: string;
  active: boolean | null;
  label: string;
  type: string | null;
  fuseBox: {
    __typename: "FuseBox";
    id: string;
    name: string;
    description: string | null;
    ownerId: string;
    rows: number | null;
    fuses: Array<{
      __typename: "Fuse";
      id: string;
      active: boolean | null;
      label: string;
      type: string | null;
      createdAt: string;
      updatedAt: string;
    }> | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type ListFusesQuery = {
  __typename: "ModelFuseConnection";
  items: Array<{
    __typename: "Fuse";
    id: string;
    active: boolean | null;
    label: string;
    type: string | null;
    fuseBox: {
      __typename: "FuseBox";
      id: string;
      name: string;
      description: string | null;
      ownerId: string;
      rows: number | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateFuseBoxSubscription = {
  __typename: "FuseBox";
  id: string;
  name: string;
  description: string | null;
  ownerId: string;
  rows: number | null;
  fuses: Array<{
    __typename: "Fuse";
    id: string;
    active: boolean | null;
    label: string;
    type: string | null;
    fuseBox: {
      __typename: "FuseBox";
      id: string;
      name: string;
      description: string | null;
      ownerId: string;
      rows: number | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  }> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateFuseBoxSubscription = {
  __typename: "FuseBox";
  id: string;
  name: string;
  description: string | null;
  ownerId: string;
  rows: number | null;
  fuses: Array<{
    __typename: "Fuse";
    id: string;
    active: boolean | null;
    label: string;
    type: string | null;
    fuseBox: {
      __typename: "FuseBox";
      id: string;
      name: string;
      description: string | null;
      ownerId: string;
      rows: number | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  }> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteFuseBoxSubscription = {
  __typename: "FuseBox";
  id: string;
  name: string;
  description: string | null;
  ownerId: string;
  rows: number | null;
  fuses: Array<{
    __typename: "Fuse";
    id: string;
    active: boolean | null;
    label: string;
    type: string | null;
    fuseBox: {
      __typename: "FuseBox";
      id: string;
      name: string;
      description: string | null;
      ownerId: string;
      rows: number | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  }> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateFuseSubscription = {
  __typename: "Fuse";
  id: string;
  active: boolean | null;
  label: string;
  type: string | null;
  fuseBox: {
    __typename: "FuseBox";
    id: string;
    name: string;
    description: string | null;
    ownerId: string;
    rows: number | null;
    fuses: Array<{
      __typename: "Fuse";
      id: string;
      active: boolean | null;
      label: string;
      type: string | null;
      createdAt: string;
      updatedAt: string;
    }> | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateFuseSubscription = {
  __typename: "Fuse";
  id: string;
  active: boolean | null;
  label: string;
  type: string | null;
  fuseBox: {
    __typename: "FuseBox";
    id: string;
    name: string;
    description: string | null;
    ownerId: string;
    rows: number | null;
    fuses: Array<{
      __typename: "Fuse";
      id: string;
      active: boolean | null;
      label: string;
      type: string | null;
      createdAt: string;
      updatedAt: string;
    }> | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteFuseSubscription = {
  __typename: "Fuse";
  id: string;
  active: boolean | null;
  label: string;
  type: string | null;
  fuseBox: {
    __typename: "FuseBox";
    id: string;
    name: string;
    description: string | null;
    ownerId: string;
    rows: number | null;
    fuses: Array<{
      __typename: "Fuse";
      id: string;
      active: boolean | null;
      label: string;
      type: string | null;
      createdAt: string;
      updatedAt: string;
    }> | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateFuseBox(
    input: CreateFuseBoxInput,
    condition?: ModelFuseBoxConditionInput
  ): Promise<CreateFuseBoxMutation> {
    const statement = `mutation CreateFuseBox($input: CreateFuseBoxInput!, $condition: ModelFuseBoxConditionInput) {
        createFuseBox(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          ownerId
          rows
          fuses {
            __typename
            id
            active
            label
            type
            fuseBox {
              __typename
              id
              name
              description
              ownerId
              rows
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFuseBoxMutation>response.data.createFuseBox;
  }
  async UpdateFuseBox(
    input: UpdateFuseBoxInput,
    condition?: ModelFuseBoxConditionInput
  ): Promise<UpdateFuseBoxMutation> {
    const statement = `mutation UpdateFuseBox($input: UpdateFuseBoxInput!, $condition: ModelFuseBoxConditionInput) {
        updateFuseBox(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          ownerId
          rows
          fuses {
            __typename
            id
            active
            label
            type
            fuseBox {
              __typename
              id
              name
              description
              ownerId
              rows
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFuseBoxMutation>response.data.updateFuseBox;
  }
  async DeleteFuseBox(
    input: DeleteFuseBoxInput,
    condition?: ModelFuseBoxConditionInput
  ): Promise<DeleteFuseBoxMutation> {
    const statement = `mutation DeleteFuseBox($input: DeleteFuseBoxInput!, $condition: ModelFuseBoxConditionInput) {
        deleteFuseBox(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          ownerId
          rows
          fuses {
            __typename
            id
            active
            label
            type
            fuseBox {
              __typename
              id
              name
              description
              ownerId
              rows
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFuseBoxMutation>response.data.deleteFuseBox;
  }
  async CreateFuse(
    input: CreateFuseInput,
    condition?: ModelFuseConditionInput
  ): Promise<CreateFuseMutation> {
    const statement = `mutation CreateFuse($input: CreateFuseInput!, $condition: ModelFuseConditionInput) {
        createFuse(input: $input, condition: $condition) {
          __typename
          id
          active
          label
          type
          fuseBox {
            __typename
            id
            name
            description
            ownerId
            rows
            fuses {
              __typename
              id
              active
              label
              type
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFuseMutation>response.data.createFuse;
  }
  async UpdateFuse(
    input: UpdateFuseInput,
    condition?: ModelFuseConditionInput
  ): Promise<UpdateFuseMutation> {
    const statement = `mutation UpdateFuse($input: UpdateFuseInput!, $condition: ModelFuseConditionInput) {
        updateFuse(input: $input, condition: $condition) {
          __typename
          id
          active
          label
          type
          fuseBox {
            __typename
            id
            name
            description
            ownerId
            rows
            fuses {
              __typename
              id
              active
              label
              type
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFuseMutation>response.data.updateFuse;
  }
  async DeleteFuse(
    input: DeleteFuseInput,
    condition?: ModelFuseConditionInput
  ): Promise<DeleteFuseMutation> {
    const statement = `mutation DeleteFuse($input: DeleteFuseInput!, $condition: ModelFuseConditionInput) {
        deleteFuse(input: $input, condition: $condition) {
          __typename
          id
          active
          label
          type
          fuseBox {
            __typename
            id
            name
            description
            ownerId
            rows
            fuses {
              __typename
              id
              active
              label
              type
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFuseMutation>response.data.deleteFuse;
  }
  async GetFuseBox(id: string): Promise<GetFuseBoxQuery> {
    const statement = `query GetFuseBox($id: ID!) {
        getFuseBox(id: $id) {
          __typename
          id
          name
          description
          ownerId
          rows
          fuses {
            __typename
            id
            active
            label
            type
            fuseBox {
              __typename
              id
              name
              description
              ownerId
              rows
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFuseBoxQuery>response.data.getFuseBox;
  }
  async ListFuseBoxs(
    filter?: ModelFuseBoxFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFuseBoxsQuery> {
    const statement = `query ListFuseBoxs($filter: ModelFuseBoxFilterInput, $limit: Int, $nextToken: String) {
        listFuseBoxs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            ownerId
            rows
            fuses {
              __typename
              id
              active
              label
              type
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListFuseBoxsQuery>response.data.listFuseBoxs;
  }
  async GetFuse(id: string): Promise<GetFuseQuery> {
    const statement = `query GetFuse($id: ID!) {
        getFuse(id: $id) {
          __typename
          id
          active
          label
          type
          fuseBox {
            __typename
            id
            name
            description
            ownerId
            rows
            fuses {
              __typename
              id
              active
              label
              type
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFuseQuery>response.data.getFuse;
  }
  async ListFuses(
    filter?: ModelFuseFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFusesQuery> {
    const statement = `query ListFuses($filter: ModelFuseFilterInput, $limit: Int, $nextToken: String) {
        listFuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            active
            label
            type
            fuseBox {
              __typename
              id
              name
              description
              ownerId
              rows
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListFusesQuery>response.data.listFuses;
  }
  OnCreateFuseBoxListener: Observable<
    SubscriptionResponse<OnCreateFuseBoxSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateFuseBox {
        onCreateFuseBox {
          __typename
          id
          name
          description
          ownerId
          rows
          fuses {
            __typename
            id
            active
            label
            type
            fuseBox {
              __typename
              id
              name
              description
              ownerId
              rows
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateFuseBoxSubscription>>;

  OnUpdateFuseBoxListener: Observable<
    SubscriptionResponse<OnUpdateFuseBoxSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateFuseBox {
        onUpdateFuseBox {
          __typename
          id
          name
          description
          ownerId
          rows
          fuses {
            __typename
            id
            active
            label
            type
            fuseBox {
              __typename
              id
              name
              description
              ownerId
              rows
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateFuseBoxSubscription>>;

  OnDeleteFuseBoxListener: Observable<
    SubscriptionResponse<OnDeleteFuseBoxSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteFuseBox {
        onDeleteFuseBox {
          __typename
          id
          name
          description
          ownerId
          rows
          fuses {
            __typename
            id
            active
            label
            type
            fuseBox {
              __typename
              id
              name
              description
              ownerId
              rows
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteFuseBoxSubscription>>;

  OnCreateFuseListener: Observable<
    SubscriptionResponse<OnCreateFuseSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateFuse {
        onCreateFuse {
          __typename
          id
          active
          label
          type
          fuseBox {
            __typename
            id
            name
            description
            ownerId
            rows
            fuses {
              __typename
              id
              active
              label
              type
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateFuseSubscription>>;

  OnUpdateFuseListener: Observable<
    SubscriptionResponse<OnUpdateFuseSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateFuse {
        onUpdateFuse {
          __typename
          id
          active
          label
          type
          fuseBox {
            __typename
            id
            name
            description
            ownerId
            rows
            fuses {
              __typename
              id
              active
              label
              type
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateFuseSubscription>>;

  OnDeleteFuseListener: Observable<
    SubscriptionResponse<OnDeleteFuseSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteFuse {
        onDeleteFuse {
          __typename
          id
          active
          label
          type
          fuseBox {
            __typename
            id
            name
            description
            ownerId
            rows
            fuses {
              __typename
              id
              active
              label
              type
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteFuseSubscription>>;
}
