/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date, represented as a 'yyyy-mm-dd' string */
  Date: { input: any; output: any; }
};

export type CreateFamiliesMutationResponse = {
  __typename?: 'CreateFamiliesMutationResponse';
  families: Array<Family>;
  info: CreateInfo;
};

export type CreateFamilyMembersMutationResponse = {
  __typename?: 'CreateFamilyMembersMutationResponse';
  familyMembers: Array<FamilyMember>;
  info: CreateInfo;
};

/** Information about the number of nodes and relationships created during a create mutation */
export type CreateInfo = {
  __typename?: 'CreateInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
};

export type CreatePartnershipsMutationResponse = {
  __typename?: 'CreatePartnershipsMutationResponse';
  info: CreateInfo;
  partnerships: Array<Partnership>;
};

/** Information about the number of nodes and relationships deleted during a delete mutation */
export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesDeleted: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type FamiliesConnection = {
  __typename?: 'FamiliesConnection';
  edges: Array<FamilyEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Family = {
  __typename?: 'Family';
  id: Scalars['ID']['output'];
  members: Array<FamilyMember>;
  membersAggregate?: Maybe<FamilyFamilyMemberMembersAggregationSelection>;
  membersConnection: FamilyMembersConnection;
  name: Scalars['String']['output'];
};


export type FamilyMembersArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<FamilyMemberOptions>;
  where?: InputMaybe<FamilyMemberWhere>;
};


export type FamilyMembersAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FamilyMemberWhere>;
};


export type FamilyMembersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FamilyMembersConnectionSort>>;
  where?: InputMaybe<FamilyMembersConnectionWhere>;
};

export type FamilyAggregateSelection = {
  __typename?: 'FamilyAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type FamilyConnectInput = {
  members?: InputMaybe<Array<FamilyMembersConnectFieldInput>>;
};

export type FamilyConnectOrCreateInput = {
  members?: InputMaybe<Array<FamilyMembersConnectOrCreateFieldInput>>;
};

export type FamilyConnectOrCreateWhere = {
  node: FamilyUniqueWhere;
};

export type FamilyConnectWhere = {
  node: FamilyWhere;
};

export type FamilyCreateInput = {
  members?: InputMaybe<FamilyMembersFieldInput>;
  name: Scalars['String']['input'];
};

export type FamilyDeleteInput = {
  members?: InputMaybe<Array<FamilyMembersDeleteFieldInput>>;
};

export type FamilyDisconnectInput = {
  members?: InputMaybe<Array<FamilyMembersDisconnectFieldInput>>;
};

export type FamilyEdge = {
  __typename?: 'FamilyEdge';
  cursor: Scalars['String']['output'];
  node: Family;
};

export type FamilyFamilyMemberMembersAggregationSelection = {
  __typename?: 'FamilyFamilyMemberMembersAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<FamilyFamilyMemberMembersNodeAggregateSelection>;
};

export type FamilyFamilyMemberMembersNodeAggregateSelection = {
  __typename?: 'FamilyFamilyMemberMembersNodeAggregateSelection';
  birthYear: IntAggregateSelection;
  firstName: StringAggregateSelection;
  id: IdAggregateSelection;
  lastName: StringAggregateSelection;
};

export type FamilyMember = {
  __typename?: 'FamilyMember';
  birthDate?: Maybe<Scalars['Date']['output']>;
  birthYear?: Maybe<Scalars['Int']['output']>;
  children: Array<FamilyMember>;
  childrenAggregate?: Maybe<FamilyMemberFamilyMemberChildrenAggregationSelection>;
  childrenConnection: FamilyMemberChildrenConnection;
  deathDate?: Maybe<Scalars['Date']['output']>;
  families: Array<Family>;
  familiesAggregate?: Maybe<FamilyMemberFamilyFamiliesAggregationSelection>;
  familiesConnection: FamilyMemberFamiliesConnection;
  firstName: Scalars['String']['output'];
  gender?: Maybe<Gender>;
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  parents: Array<FamilyMember>;
  parentsAggregate?: Maybe<FamilyMemberFamilyMemberParentsAggregationSelection>;
  parentsConnection: FamilyMemberParentsConnection;
  partners: Array<Partnership>;
  partnersAggregate?: Maybe<FamilyMemberPartnershipPartnersAggregationSelection>;
  partnersConnection: FamilyMemberPartnersConnection;
};


export type FamilyMemberChildrenArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<FamilyMemberOptions>;
  where?: InputMaybe<FamilyMemberWhere>;
};


export type FamilyMemberChildrenAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FamilyMemberWhere>;
};


export type FamilyMemberChildrenConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FamilyMemberChildrenConnectionSort>>;
  where?: InputMaybe<FamilyMemberChildrenConnectionWhere>;
};


export type FamilyMemberFamiliesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<FamilyOptions>;
  where?: InputMaybe<FamilyWhere>;
};


export type FamilyMemberFamiliesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FamilyWhere>;
};


export type FamilyMemberFamiliesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FamilyMemberFamiliesConnectionSort>>;
  where?: InputMaybe<FamilyMemberFamiliesConnectionWhere>;
};


export type FamilyMemberParentsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<FamilyMemberOptions>;
  where?: InputMaybe<FamilyMemberWhere>;
};


export type FamilyMemberParentsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FamilyMemberWhere>;
};


export type FamilyMemberParentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FamilyMemberParentsConnectionSort>>;
  where?: InputMaybe<FamilyMemberParentsConnectionWhere>;
};


export type FamilyMemberPartnersArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<PartnershipOptions>;
  where?: InputMaybe<PartnershipWhere>;
};


export type FamilyMemberPartnersAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PartnershipWhere>;
};


export type FamilyMemberPartnersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FamilyMemberPartnersConnectionSort>>;
  where?: InputMaybe<FamilyMemberPartnersConnectionWhere>;
};

export type FamilyMemberAggregateSelection = {
  __typename?: 'FamilyMemberAggregateSelection';
  birthYear: IntAggregateSelection;
  count: Scalars['Int']['output'];
  firstName: StringAggregateSelection;
  id: IdAggregateSelection;
  lastName: StringAggregateSelection;
};

export type FamilyMemberChildrenAggregateInput = {
  AND?: InputMaybe<Array<FamilyMemberChildrenAggregateInput>>;
  NOT?: InputMaybe<FamilyMemberChildrenAggregateInput>;
  OR?: InputMaybe<Array<FamilyMemberChildrenAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<FamilyMemberChildrenNodeAggregationWhereInput>;
};

export type FamilyMemberChildrenConnectFieldInput = {
  connect?: InputMaybe<Array<FamilyMemberConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<FamilyMemberConnectWhere>;
};

export type FamilyMemberChildrenConnectOrCreateFieldInput = {
  onCreate: FamilyMemberChildrenConnectOrCreateFieldInputOnCreate;
  where: FamilyMemberConnectOrCreateWhere;
};

export type FamilyMemberChildrenConnectOrCreateFieldInputOnCreate = {
  node: FamilyMemberOnCreateInput;
};

export type FamilyMemberChildrenConnection = {
  __typename?: 'FamilyMemberChildrenConnection';
  edges: Array<FamilyMemberChildrenRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FamilyMemberChildrenConnectionSort = {
  node?: InputMaybe<FamilyMemberSort>;
};

export type FamilyMemberChildrenConnectionWhere = {
  AND?: InputMaybe<Array<FamilyMemberChildrenConnectionWhere>>;
  NOT?: InputMaybe<FamilyMemberChildrenConnectionWhere>;
  OR?: InputMaybe<Array<FamilyMemberChildrenConnectionWhere>>;
  node?: InputMaybe<FamilyMemberWhere>;
};

export type FamilyMemberChildrenCreateFieldInput = {
  node: FamilyMemberCreateInput;
};

export type FamilyMemberChildrenDeleteFieldInput = {
  delete?: InputMaybe<FamilyMemberDeleteInput>;
  where?: InputMaybe<FamilyMemberChildrenConnectionWhere>;
};

export type FamilyMemberChildrenDisconnectFieldInput = {
  disconnect?: InputMaybe<FamilyMemberDisconnectInput>;
  where?: InputMaybe<FamilyMemberChildrenConnectionWhere>;
};

export type FamilyMemberChildrenFieldInput = {
  connect?: InputMaybe<Array<FamilyMemberChildrenConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<FamilyMemberChildrenConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<FamilyMemberChildrenCreateFieldInput>>;
};

export type FamilyMemberChildrenNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FamilyMemberChildrenNodeAggregationWhereInput>>;
  NOT?: InputMaybe<FamilyMemberChildrenNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<FamilyMemberChildrenNodeAggregationWhereInput>>;
  birthYear_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  birthYear_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  birthYear_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  birthYear_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  birthYear_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  birthYear_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  birthYear_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  birthYear_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  birthYear_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  birthYear_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  birthYear_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  firstName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  firstName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  firstName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  firstName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  firstName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  firstName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  firstName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  firstName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  firstName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  firstName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  lastName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  lastName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  lastName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  lastName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  lastName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  lastName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  lastName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  lastName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  lastName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  lastName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type FamilyMemberChildrenRelationship = {
  __typename?: 'FamilyMemberChildrenRelationship';
  cursor: Scalars['String']['output'];
  node: FamilyMember;
};

export type FamilyMemberChildrenUpdateConnectionInput = {
  node?: InputMaybe<FamilyMemberUpdateInput>;
};

export type FamilyMemberChildrenUpdateFieldInput = {
  connect?: InputMaybe<Array<FamilyMemberChildrenConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<FamilyMemberChildrenConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<FamilyMemberChildrenCreateFieldInput>>;
  delete?: InputMaybe<Array<FamilyMemberChildrenDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<FamilyMemberChildrenDisconnectFieldInput>>;
  update?: InputMaybe<FamilyMemberChildrenUpdateConnectionInput>;
  where?: InputMaybe<FamilyMemberChildrenConnectionWhere>;
};

export type FamilyMemberConnectInput = {
  children?: InputMaybe<Array<FamilyMemberChildrenConnectFieldInput>>;
  families?: InputMaybe<Array<FamilyMemberFamiliesConnectFieldInput>>;
  parents?: InputMaybe<Array<FamilyMemberParentsConnectFieldInput>>;
  partners?: InputMaybe<Array<FamilyMemberPartnersConnectFieldInput>>;
};

export type FamilyMemberConnectOrCreateInput = {
  children?: InputMaybe<Array<FamilyMemberChildrenConnectOrCreateFieldInput>>;
  families?: InputMaybe<Array<FamilyMemberFamiliesConnectOrCreateFieldInput>>;
  parents?: InputMaybe<Array<FamilyMemberParentsConnectOrCreateFieldInput>>;
  partners?: InputMaybe<Array<FamilyMemberPartnersConnectOrCreateFieldInput>>;
};

export type FamilyMemberConnectOrCreateWhere = {
  node: FamilyMemberUniqueWhere;
};

export type FamilyMemberConnectWhere = {
  node: FamilyMemberWhere;
};

export type FamilyMemberCreateInput = {
  birthDate?: InputMaybe<Scalars['Date']['input']>;
  birthYear?: InputMaybe<Scalars['Int']['input']>;
  children?: InputMaybe<FamilyMemberChildrenFieldInput>;
  deathDate?: InputMaybe<Scalars['Date']['input']>;
  families?: InputMaybe<FamilyMemberFamiliesFieldInput>;
  firstName: Scalars['String']['input'];
  gender?: InputMaybe<Gender>;
  lastName: Scalars['String']['input'];
  parents?: InputMaybe<FamilyMemberParentsFieldInput>;
  partners?: InputMaybe<FamilyMemberPartnersFieldInput>;
};

export type FamilyMemberDeleteInput = {
  children?: InputMaybe<Array<FamilyMemberChildrenDeleteFieldInput>>;
  families?: InputMaybe<Array<FamilyMemberFamiliesDeleteFieldInput>>;
  parents?: InputMaybe<Array<FamilyMemberParentsDeleteFieldInput>>;
  partners?: InputMaybe<Array<FamilyMemberPartnersDeleteFieldInput>>;
};

export type FamilyMemberDisconnectInput = {
  children?: InputMaybe<Array<FamilyMemberChildrenDisconnectFieldInput>>;
  families?: InputMaybe<Array<FamilyMemberFamiliesDisconnectFieldInput>>;
  parents?: InputMaybe<Array<FamilyMemberParentsDisconnectFieldInput>>;
  partners?: InputMaybe<Array<FamilyMemberPartnersDisconnectFieldInput>>;
};

export type FamilyMemberEdge = {
  __typename?: 'FamilyMemberEdge';
  cursor: Scalars['String']['output'];
  node: FamilyMember;
};

export type FamilyMemberFamiliesAggregateInput = {
  AND?: InputMaybe<Array<FamilyMemberFamiliesAggregateInput>>;
  NOT?: InputMaybe<FamilyMemberFamiliesAggregateInput>;
  OR?: InputMaybe<Array<FamilyMemberFamiliesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<FamilyMemberFamiliesNodeAggregationWhereInput>;
};

export type FamilyMemberFamiliesConnectFieldInput = {
  connect?: InputMaybe<Array<FamilyConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<FamilyConnectWhere>;
};

export type FamilyMemberFamiliesConnectOrCreateFieldInput = {
  onCreate: FamilyMemberFamiliesConnectOrCreateFieldInputOnCreate;
  where: FamilyConnectOrCreateWhere;
};

export type FamilyMemberFamiliesConnectOrCreateFieldInputOnCreate = {
  node: FamilyOnCreateInput;
};

export type FamilyMemberFamiliesConnection = {
  __typename?: 'FamilyMemberFamiliesConnection';
  edges: Array<FamilyMemberFamiliesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FamilyMemberFamiliesConnectionSort = {
  node?: InputMaybe<FamilySort>;
};

export type FamilyMemberFamiliesConnectionWhere = {
  AND?: InputMaybe<Array<FamilyMemberFamiliesConnectionWhere>>;
  NOT?: InputMaybe<FamilyMemberFamiliesConnectionWhere>;
  OR?: InputMaybe<Array<FamilyMemberFamiliesConnectionWhere>>;
  node?: InputMaybe<FamilyWhere>;
};

export type FamilyMemberFamiliesCreateFieldInput = {
  node: FamilyCreateInput;
};

export type FamilyMemberFamiliesDeleteFieldInput = {
  delete?: InputMaybe<FamilyDeleteInput>;
  where?: InputMaybe<FamilyMemberFamiliesConnectionWhere>;
};

export type FamilyMemberFamiliesDisconnectFieldInput = {
  disconnect?: InputMaybe<FamilyDisconnectInput>;
  where?: InputMaybe<FamilyMemberFamiliesConnectionWhere>;
};

export type FamilyMemberFamiliesFieldInput = {
  connect?: InputMaybe<Array<FamilyMemberFamiliesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<FamilyMemberFamiliesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<FamilyMemberFamiliesCreateFieldInput>>;
};

export type FamilyMemberFamiliesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FamilyMemberFamiliesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<FamilyMemberFamiliesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<FamilyMemberFamiliesNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type FamilyMemberFamiliesRelationship = {
  __typename?: 'FamilyMemberFamiliesRelationship';
  cursor: Scalars['String']['output'];
  node: Family;
};

export type FamilyMemberFamiliesUpdateConnectionInput = {
  node?: InputMaybe<FamilyUpdateInput>;
};

export type FamilyMemberFamiliesUpdateFieldInput = {
  connect?: InputMaybe<Array<FamilyMemberFamiliesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<FamilyMemberFamiliesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<FamilyMemberFamiliesCreateFieldInput>>;
  delete?: InputMaybe<Array<FamilyMemberFamiliesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<FamilyMemberFamiliesDisconnectFieldInput>>;
  update?: InputMaybe<FamilyMemberFamiliesUpdateConnectionInput>;
  where?: InputMaybe<FamilyMemberFamiliesConnectionWhere>;
};

export type FamilyMemberFamilyFamiliesAggregationSelection = {
  __typename?: 'FamilyMemberFamilyFamiliesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<FamilyMemberFamilyFamiliesNodeAggregateSelection>;
};

export type FamilyMemberFamilyFamiliesNodeAggregateSelection = {
  __typename?: 'FamilyMemberFamilyFamiliesNodeAggregateSelection';
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type FamilyMemberFamilyMemberChildrenAggregationSelection = {
  __typename?: 'FamilyMemberFamilyMemberChildrenAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<FamilyMemberFamilyMemberChildrenNodeAggregateSelection>;
};

export type FamilyMemberFamilyMemberChildrenNodeAggregateSelection = {
  __typename?: 'FamilyMemberFamilyMemberChildrenNodeAggregateSelection';
  birthYear: IntAggregateSelection;
  firstName: StringAggregateSelection;
  id: IdAggregateSelection;
  lastName: StringAggregateSelection;
};

export type FamilyMemberFamilyMemberParentsAggregationSelection = {
  __typename?: 'FamilyMemberFamilyMemberParentsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<FamilyMemberFamilyMemberParentsNodeAggregateSelection>;
};

export type FamilyMemberFamilyMemberParentsNodeAggregateSelection = {
  __typename?: 'FamilyMemberFamilyMemberParentsNodeAggregateSelection';
  birthYear: IntAggregateSelection;
  firstName: StringAggregateSelection;
  id: IdAggregateSelection;
  lastName: StringAggregateSelection;
};

export type FamilyMemberOnCreateInput = {
  birthDate?: InputMaybe<Scalars['Date']['input']>;
  birthYear?: InputMaybe<Scalars['Int']['input']>;
  deathDate?: InputMaybe<Scalars['Date']['input']>;
  firstName: Scalars['String']['input'];
  gender?: InputMaybe<Gender>;
  lastName: Scalars['String']['input'];
};

export type FamilyMemberOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more FamilyMemberSort objects to sort FamilyMembers by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<FamilyMemberSort>>;
};

export type FamilyMemberParentsAggregateInput = {
  AND?: InputMaybe<Array<FamilyMemberParentsAggregateInput>>;
  NOT?: InputMaybe<FamilyMemberParentsAggregateInput>;
  OR?: InputMaybe<Array<FamilyMemberParentsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<FamilyMemberParentsNodeAggregationWhereInput>;
};

export type FamilyMemberParentsConnectFieldInput = {
  connect?: InputMaybe<Array<FamilyMemberConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<FamilyMemberConnectWhere>;
};

export type FamilyMemberParentsConnectOrCreateFieldInput = {
  onCreate: FamilyMemberParentsConnectOrCreateFieldInputOnCreate;
  where: FamilyMemberConnectOrCreateWhere;
};

export type FamilyMemberParentsConnectOrCreateFieldInputOnCreate = {
  node: FamilyMemberOnCreateInput;
};

export type FamilyMemberParentsConnection = {
  __typename?: 'FamilyMemberParentsConnection';
  edges: Array<FamilyMemberParentsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FamilyMemberParentsConnectionSort = {
  node?: InputMaybe<FamilyMemberSort>;
};

export type FamilyMemberParentsConnectionWhere = {
  AND?: InputMaybe<Array<FamilyMemberParentsConnectionWhere>>;
  NOT?: InputMaybe<FamilyMemberParentsConnectionWhere>;
  OR?: InputMaybe<Array<FamilyMemberParentsConnectionWhere>>;
  node?: InputMaybe<FamilyMemberWhere>;
};

export type FamilyMemberParentsCreateFieldInput = {
  node: FamilyMemberCreateInput;
};

export type FamilyMemberParentsDeleteFieldInput = {
  delete?: InputMaybe<FamilyMemberDeleteInput>;
  where?: InputMaybe<FamilyMemberParentsConnectionWhere>;
};

export type FamilyMemberParentsDisconnectFieldInput = {
  disconnect?: InputMaybe<FamilyMemberDisconnectInput>;
  where?: InputMaybe<FamilyMemberParentsConnectionWhere>;
};

export type FamilyMemberParentsFieldInput = {
  connect?: InputMaybe<Array<FamilyMemberParentsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<FamilyMemberParentsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<FamilyMemberParentsCreateFieldInput>>;
};

export type FamilyMemberParentsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FamilyMemberParentsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<FamilyMemberParentsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<FamilyMemberParentsNodeAggregationWhereInput>>;
  birthYear_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  birthYear_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  birthYear_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  birthYear_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  birthYear_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  birthYear_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  birthYear_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  birthYear_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  birthYear_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  birthYear_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  birthYear_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  firstName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  firstName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  firstName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  firstName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  firstName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  firstName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  firstName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  firstName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  firstName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  firstName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  lastName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  lastName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  lastName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  lastName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  lastName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  lastName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  lastName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  lastName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  lastName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  lastName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type FamilyMemberParentsRelationship = {
  __typename?: 'FamilyMemberParentsRelationship';
  cursor: Scalars['String']['output'];
  node: FamilyMember;
};

export type FamilyMemberParentsUpdateConnectionInput = {
  node?: InputMaybe<FamilyMemberUpdateInput>;
};

export type FamilyMemberParentsUpdateFieldInput = {
  connect?: InputMaybe<Array<FamilyMemberParentsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<FamilyMemberParentsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<FamilyMemberParentsCreateFieldInput>>;
  delete?: InputMaybe<Array<FamilyMemberParentsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<FamilyMemberParentsDisconnectFieldInput>>;
  update?: InputMaybe<FamilyMemberParentsUpdateConnectionInput>;
  where?: InputMaybe<FamilyMemberParentsConnectionWhere>;
};

export type FamilyMemberPartnersAggregateInput = {
  AND?: InputMaybe<Array<FamilyMemberPartnersAggregateInput>>;
  NOT?: InputMaybe<FamilyMemberPartnersAggregateInput>;
  OR?: InputMaybe<Array<FamilyMemberPartnersAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<FamilyMemberPartnersNodeAggregationWhereInput>;
};

export type FamilyMemberPartnersConnectFieldInput = {
  connect?: InputMaybe<Array<PartnershipConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<PartnershipConnectWhere>;
};

export type FamilyMemberPartnersConnectOrCreateFieldInput = {
  onCreate: FamilyMemberPartnersConnectOrCreateFieldInputOnCreate;
  where: PartnershipConnectOrCreateWhere;
};

export type FamilyMemberPartnersConnectOrCreateFieldInputOnCreate = {
  node: PartnershipOnCreateInput;
};

export type FamilyMemberPartnersConnection = {
  __typename?: 'FamilyMemberPartnersConnection';
  edges: Array<FamilyMemberPartnersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FamilyMemberPartnersConnectionSort = {
  node?: InputMaybe<PartnershipSort>;
};

export type FamilyMemberPartnersConnectionWhere = {
  AND?: InputMaybe<Array<FamilyMemberPartnersConnectionWhere>>;
  NOT?: InputMaybe<FamilyMemberPartnersConnectionWhere>;
  OR?: InputMaybe<Array<FamilyMemberPartnersConnectionWhere>>;
  node?: InputMaybe<PartnershipWhere>;
};

export type FamilyMemberPartnersCreateFieldInput = {
  node: PartnershipCreateInput;
};

export type FamilyMemberPartnersDeleteFieldInput = {
  delete?: InputMaybe<PartnershipDeleteInput>;
  where?: InputMaybe<FamilyMemberPartnersConnectionWhere>;
};

export type FamilyMemberPartnersDisconnectFieldInput = {
  disconnect?: InputMaybe<PartnershipDisconnectInput>;
  where?: InputMaybe<FamilyMemberPartnersConnectionWhere>;
};

export type FamilyMemberPartnersFieldInput = {
  connect?: InputMaybe<Array<FamilyMemberPartnersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<FamilyMemberPartnersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<FamilyMemberPartnersCreateFieldInput>>;
};

export type FamilyMemberPartnersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FamilyMemberPartnersNodeAggregationWhereInput>>;
  NOT?: InputMaybe<FamilyMemberPartnersNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<FamilyMemberPartnersNodeAggregationWhereInput>>;
};

export type FamilyMemberPartnersRelationship = {
  __typename?: 'FamilyMemberPartnersRelationship';
  cursor: Scalars['String']['output'];
  node: Partnership;
};

export type FamilyMemberPartnersUpdateConnectionInput = {
  node?: InputMaybe<PartnershipUpdateInput>;
};

export type FamilyMemberPartnersUpdateFieldInput = {
  connect?: InputMaybe<Array<FamilyMemberPartnersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<FamilyMemberPartnersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<FamilyMemberPartnersCreateFieldInput>>;
  delete?: InputMaybe<Array<FamilyMemberPartnersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<FamilyMemberPartnersDisconnectFieldInput>>;
  update?: InputMaybe<FamilyMemberPartnersUpdateConnectionInput>;
  where?: InputMaybe<FamilyMemberPartnersConnectionWhere>;
};

export type FamilyMemberPartnershipPartnersAggregationSelection = {
  __typename?: 'FamilyMemberPartnershipPartnersAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<FamilyMemberPartnershipPartnersNodeAggregateSelection>;
};

export type FamilyMemberPartnershipPartnersNodeAggregateSelection = {
  __typename?: 'FamilyMemberPartnershipPartnersNodeAggregateSelection';
  id: IdAggregateSelection;
};

export type FamilyMemberRelationInput = {
  children?: InputMaybe<Array<FamilyMemberChildrenCreateFieldInput>>;
  families?: InputMaybe<Array<FamilyMemberFamiliesCreateFieldInput>>;
  parents?: InputMaybe<Array<FamilyMemberParentsCreateFieldInput>>;
  partners?: InputMaybe<Array<FamilyMemberPartnersCreateFieldInput>>;
};

/** Fields to sort FamilyMembers by. The order in which sorts are applied is not guaranteed when specifying many fields in one FamilyMemberSort object. */
export type FamilyMemberSort = {
  birthDate?: InputMaybe<SortDirection>;
  birthYear?: InputMaybe<SortDirection>;
  deathDate?: InputMaybe<SortDirection>;
  firstName?: InputMaybe<SortDirection>;
  gender?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  lastName?: InputMaybe<SortDirection>;
};

export type FamilyMemberUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type FamilyMemberUpdateInput = {
  birthDate?: InputMaybe<Scalars['Date']['input']>;
  birthYear?: InputMaybe<Scalars['Int']['input']>;
  birthYear_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  birthYear_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  children?: InputMaybe<Array<FamilyMemberChildrenUpdateFieldInput>>;
  deathDate?: InputMaybe<Scalars['Date']['input']>;
  families?: InputMaybe<Array<FamilyMemberFamiliesUpdateFieldInput>>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  parents?: InputMaybe<Array<FamilyMemberParentsUpdateFieldInput>>;
  partners?: InputMaybe<Array<FamilyMemberPartnersUpdateFieldInput>>;
};

export type FamilyMemberWhere = {
  AND?: InputMaybe<Array<FamilyMemberWhere>>;
  NOT?: InputMaybe<FamilyMemberWhere>;
  OR?: InputMaybe<Array<FamilyMemberWhere>>;
  birthDate?: InputMaybe<Scalars['Date']['input']>;
  birthDate_GT?: InputMaybe<Scalars['Date']['input']>;
  birthDate_GTE?: InputMaybe<Scalars['Date']['input']>;
  birthDate_IN?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  birthDate_LT?: InputMaybe<Scalars['Date']['input']>;
  birthDate_LTE?: InputMaybe<Scalars['Date']['input']>;
  birthYear?: InputMaybe<Scalars['Int']['input']>;
  birthYear_GT?: InputMaybe<Scalars['Int']['input']>;
  birthYear_GTE?: InputMaybe<Scalars['Int']['input']>;
  birthYear_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  birthYear_LT?: InputMaybe<Scalars['Int']['input']>;
  birthYear_LTE?: InputMaybe<Scalars['Int']['input']>;
  childrenAggregate?: InputMaybe<FamilyMemberChildrenAggregateInput>;
  /** Return FamilyMembers where all of the related FamilyMemberChildrenConnections match this filter */
  childrenConnection_ALL?: InputMaybe<FamilyMemberChildrenConnectionWhere>;
  /** Return FamilyMembers where none of the related FamilyMemberChildrenConnections match this filter */
  childrenConnection_NONE?: InputMaybe<FamilyMemberChildrenConnectionWhere>;
  /** Return FamilyMembers where one of the related FamilyMemberChildrenConnections match this filter */
  childrenConnection_SINGLE?: InputMaybe<FamilyMemberChildrenConnectionWhere>;
  /** Return FamilyMembers where some of the related FamilyMemberChildrenConnections match this filter */
  childrenConnection_SOME?: InputMaybe<FamilyMemberChildrenConnectionWhere>;
  /** Return FamilyMembers where all of the related FamilyMembers match this filter */
  children_ALL?: InputMaybe<FamilyMemberWhere>;
  /** Return FamilyMembers where none of the related FamilyMembers match this filter */
  children_NONE?: InputMaybe<FamilyMemberWhere>;
  /** Return FamilyMembers where one of the related FamilyMembers match this filter */
  children_SINGLE?: InputMaybe<FamilyMemberWhere>;
  /** Return FamilyMembers where some of the related FamilyMembers match this filter */
  children_SOME?: InputMaybe<FamilyMemberWhere>;
  deathDate?: InputMaybe<Scalars['Date']['input']>;
  deathDate_GT?: InputMaybe<Scalars['Date']['input']>;
  deathDate_GTE?: InputMaybe<Scalars['Date']['input']>;
  deathDate_IN?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  deathDate_LT?: InputMaybe<Scalars['Date']['input']>;
  deathDate_LTE?: InputMaybe<Scalars['Date']['input']>;
  familiesAggregate?: InputMaybe<FamilyMemberFamiliesAggregateInput>;
  /** Return FamilyMembers where all of the related FamilyMemberFamiliesConnections match this filter */
  familiesConnection_ALL?: InputMaybe<FamilyMemberFamiliesConnectionWhere>;
  /** Return FamilyMembers where none of the related FamilyMemberFamiliesConnections match this filter */
  familiesConnection_NONE?: InputMaybe<FamilyMemberFamiliesConnectionWhere>;
  /** Return FamilyMembers where one of the related FamilyMemberFamiliesConnections match this filter */
  familiesConnection_SINGLE?: InputMaybe<FamilyMemberFamiliesConnectionWhere>;
  /** Return FamilyMembers where some of the related FamilyMemberFamiliesConnections match this filter */
  familiesConnection_SOME?: InputMaybe<FamilyMemberFamiliesConnectionWhere>;
  /** Return FamilyMembers where all of the related Families match this filter */
  families_ALL?: InputMaybe<FamilyWhere>;
  /** Return FamilyMembers where none of the related Families match this filter */
  families_NONE?: InputMaybe<FamilyWhere>;
  /** Return FamilyMembers where one of the related Families match this filter */
  families_SINGLE?: InputMaybe<FamilyWhere>;
  /** Return FamilyMembers where some of the related Families match this filter */
  families_SOME?: InputMaybe<FamilyWhere>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  firstName_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  firstName_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  firstName_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  firstName_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  gender_IN?: InputMaybe<Array<InputMaybe<Gender>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastName_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  lastName_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  lastName_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  lastName_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  parentsAggregate?: InputMaybe<FamilyMemberParentsAggregateInput>;
  /** Return FamilyMembers where all of the related FamilyMemberParentsConnections match this filter */
  parentsConnection_ALL?: InputMaybe<FamilyMemberParentsConnectionWhere>;
  /** Return FamilyMembers where none of the related FamilyMemberParentsConnections match this filter */
  parentsConnection_NONE?: InputMaybe<FamilyMemberParentsConnectionWhere>;
  /** Return FamilyMembers where one of the related FamilyMemberParentsConnections match this filter */
  parentsConnection_SINGLE?: InputMaybe<FamilyMemberParentsConnectionWhere>;
  /** Return FamilyMembers where some of the related FamilyMemberParentsConnections match this filter */
  parentsConnection_SOME?: InputMaybe<FamilyMemberParentsConnectionWhere>;
  /** Return FamilyMembers where all of the related FamilyMembers match this filter */
  parents_ALL?: InputMaybe<FamilyMemberWhere>;
  /** Return FamilyMembers where none of the related FamilyMembers match this filter */
  parents_NONE?: InputMaybe<FamilyMemberWhere>;
  /** Return FamilyMembers where one of the related FamilyMembers match this filter */
  parents_SINGLE?: InputMaybe<FamilyMemberWhere>;
  /** Return FamilyMembers where some of the related FamilyMembers match this filter */
  parents_SOME?: InputMaybe<FamilyMemberWhere>;
  partnersAggregate?: InputMaybe<FamilyMemberPartnersAggregateInput>;
  /** Return FamilyMembers where all of the related FamilyMemberPartnersConnections match this filter */
  partnersConnection_ALL?: InputMaybe<FamilyMemberPartnersConnectionWhere>;
  /** Return FamilyMembers where none of the related FamilyMemberPartnersConnections match this filter */
  partnersConnection_NONE?: InputMaybe<FamilyMemberPartnersConnectionWhere>;
  /** Return FamilyMembers where one of the related FamilyMemberPartnersConnections match this filter */
  partnersConnection_SINGLE?: InputMaybe<FamilyMemberPartnersConnectionWhere>;
  /** Return FamilyMembers where some of the related FamilyMemberPartnersConnections match this filter */
  partnersConnection_SOME?: InputMaybe<FamilyMemberPartnersConnectionWhere>;
  /** Return FamilyMembers where all of the related Partnerships match this filter */
  partners_ALL?: InputMaybe<PartnershipWhere>;
  /** Return FamilyMembers where none of the related Partnerships match this filter */
  partners_NONE?: InputMaybe<PartnershipWhere>;
  /** Return FamilyMembers where one of the related Partnerships match this filter */
  partners_SINGLE?: InputMaybe<PartnershipWhere>;
  /** Return FamilyMembers where some of the related Partnerships match this filter */
  partners_SOME?: InputMaybe<PartnershipWhere>;
};

export type FamilyMembersAggregateInput = {
  AND?: InputMaybe<Array<FamilyMembersAggregateInput>>;
  NOT?: InputMaybe<FamilyMembersAggregateInput>;
  OR?: InputMaybe<Array<FamilyMembersAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<FamilyMembersNodeAggregationWhereInput>;
};

export type FamilyMembersConnectFieldInput = {
  connect?: InputMaybe<Array<FamilyMemberConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<FamilyMemberConnectWhere>;
};

export type FamilyMembersConnectOrCreateFieldInput = {
  onCreate: FamilyMembersConnectOrCreateFieldInputOnCreate;
  where: FamilyMemberConnectOrCreateWhere;
};

export type FamilyMembersConnectOrCreateFieldInputOnCreate = {
  node: FamilyMemberOnCreateInput;
};

export type FamilyMembersConnection = {
  __typename?: 'FamilyMembersConnection';
  edges: Array<FamilyMembersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FamilyMembersConnectionSort = {
  node?: InputMaybe<FamilyMemberSort>;
};

export type FamilyMembersConnectionWhere = {
  AND?: InputMaybe<Array<FamilyMembersConnectionWhere>>;
  NOT?: InputMaybe<FamilyMembersConnectionWhere>;
  OR?: InputMaybe<Array<FamilyMembersConnectionWhere>>;
  node?: InputMaybe<FamilyMemberWhere>;
};

export type FamilyMembersCreateFieldInput = {
  node: FamilyMemberCreateInput;
};

export type FamilyMembersDeleteFieldInput = {
  delete?: InputMaybe<FamilyMemberDeleteInput>;
  where?: InputMaybe<FamilyMembersConnectionWhere>;
};

export type FamilyMembersDisconnectFieldInput = {
  disconnect?: InputMaybe<FamilyMemberDisconnectInput>;
  where?: InputMaybe<FamilyMembersConnectionWhere>;
};

export type FamilyMembersFieldInput = {
  connect?: InputMaybe<Array<FamilyMembersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<FamilyMembersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<FamilyMembersCreateFieldInput>>;
};

export type FamilyMembersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FamilyMembersNodeAggregationWhereInput>>;
  NOT?: InputMaybe<FamilyMembersNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<FamilyMembersNodeAggregationWhereInput>>;
  birthYear_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  birthYear_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  birthYear_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  birthYear_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  birthYear_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  birthYear_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  birthYear_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  birthYear_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  birthYear_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  birthYear_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  birthYear_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  firstName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  firstName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  firstName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  firstName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  firstName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  firstName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  firstName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  firstName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  firstName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  firstName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  lastName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  lastName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  lastName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  lastName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  lastName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  lastName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  lastName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  lastName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  lastName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  lastName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type FamilyMembersRelationship = {
  __typename?: 'FamilyMembersRelationship';
  cursor: Scalars['String']['output'];
  node: FamilyMember;
};

export type FamilyMembersUpdateConnectionInput = {
  node?: InputMaybe<FamilyMemberUpdateInput>;
};

export type FamilyMembersUpdateFieldInput = {
  connect?: InputMaybe<Array<FamilyMembersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<FamilyMembersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<FamilyMembersCreateFieldInput>>;
  delete?: InputMaybe<Array<FamilyMembersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<FamilyMembersDisconnectFieldInput>>;
  update?: InputMaybe<FamilyMembersUpdateConnectionInput>;
  where?: InputMaybe<FamilyMembersConnectionWhere>;
};

export type FamilyOnCreateInput = {
  name: Scalars['String']['input'];
};

export type FamilyOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more FamilySort objects to sort Families by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<FamilySort>>;
};

export type FamilyRelationInput = {
  members?: InputMaybe<Array<FamilyMembersCreateFieldInput>>;
};

/** Fields to sort Families by. The order in which sorts are applied is not guaranteed when specifying many fields in one FamilySort object. */
export type FamilySort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type FamilyUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type FamilyUpdateInput = {
  members?: InputMaybe<Array<FamilyMembersUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FamilyWhere = {
  AND?: InputMaybe<Array<FamilyWhere>>;
  NOT?: InputMaybe<FamilyWhere>;
  OR?: InputMaybe<Array<FamilyWhere>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  membersAggregate?: InputMaybe<FamilyMembersAggregateInput>;
  /** Return Families where all of the related FamilyMembersConnections match this filter */
  membersConnection_ALL?: InputMaybe<FamilyMembersConnectionWhere>;
  /** Return Families where none of the related FamilyMembersConnections match this filter */
  membersConnection_NONE?: InputMaybe<FamilyMembersConnectionWhere>;
  /** Return Families where one of the related FamilyMembersConnections match this filter */
  membersConnection_SINGLE?: InputMaybe<FamilyMembersConnectionWhere>;
  /** Return Families where some of the related FamilyMembersConnections match this filter */
  membersConnection_SOME?: InputMaybe<FamilyMembersConnectionWhere>;
  /** Return Families where all of the related FamilyMembers match this filter */
  members_ALL?: InputMaybe<FamilyMemberWhere>;
  /** Return Families where none of the related FamilyMembers match this filter */
  members_NONE?: InputMaybe<FamilyMemberWhere>;
  /** Return Families where one of the related FamilyMembers match this filter */
  members_SINGLE?: InputMaybe<FamilyMemberWhere>;
  /** Return Families where some of the related FamilyMembers match this filter */
  members_SOME?: InputMaybe<FamilyMemberWhere>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER',
  PreferNotToSay = 'PREFER_NOT_TO_SAY'
}

export type IdAggregateSelection = {
  __typename?: 'IDAggregateSelection';
  longest?: Maybe<Scalars['ID']['output']>;
  shortest?: Maybe<Scalars['ID']['output']>;
};

export type IntAggregateSelection = {
  __typename?: 'IntAggregateSelection';
  average?: Maybe<Scalars['Float']['output']>;
  max?: Maybe<Scalars['Int']['output']>;
  min?: Maybe<Scalars['Int']['output']>;
  sum?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createFamilies: CreateFamiliesMutationResponse;
  createFamilyMembers: CreateFamilyMembersMutationResponse;
  createPartnerships: CreatePartnershipsMutationResponse;
  deleteFamilies: DeleteInfo;
  deleteFamilyMembers: DeleteInfo;
  deletePartnerships: DeleteInfo;
  updateFamilies: UpdateFamiliesMutationResponse;
  updateFamilyMembers: UpdateFamilyMembersMutationResponse;
  updatePartnerships: UpdatePartnershipsMutationResponse;
};


export type MutationCreateFamiliesArgs = {
  input: Array<FamilyCreateInput>;
};


export type MutationCreateFamilyMembersArgs = {
  input: Array<FamilyMemberCreateInput>;
};


export type MutationCreatePartnershipsArgs = {
  input: Array<PartnershipCreateInput>;
};


export type MutationDeleteFamiliesArgs = {
  delete?: InputMaybe<FamilyDeleteInput>;
  where?: InputMaybe<FamilyWhere>;
};


export type MutationDeleteFamilyMembersArgs = {
  delete?: InputMaybe<FamilyMemberDeleteInput>;
  where?: InputMaybe<FamilyMemberWhere>;
};


export type MutationDeletePartnershipsArgs = {
  delete?: InputMaybe<PartnershipDeleteInput>;
  where?: InputMaybe<PartnershipWhere>;
};


export type MutationUpdateFamiliesArgs = {
  update?: InputMaybe<FamilyUpdateInput>;
  where?: InputMaybe<FamilyWhere>;
};


export type MutationUpdateFamilyMembersArgs = {
  update?: InputMaybe<FamilyMemberUpdateInput>;
  where?: InputMaybe<FamilyMemberWhere>;
};


export type MutationUpdatePartnershipsArgs = {
  update?: InputMaybe<PartnershipUpdateInput>;
  where?: InputMaybe<PartnershipWhere>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Partnership = {
  __typename?: 'Partnership';
  endDate?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  partner: FamilyMember;
  partnerAggregate?: Maybe<PartnershipFamilyMemberPartnerAggregationSelection>;
  partnerConnection: PartnershipPartnerConnection;
  startDate?: Maybe<Scalars['Date']['output']>;
  type: RelationshipType;
};


export type PartnershipPartnerArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<FamilyMemberOptions>;
  where?: InputMaybe<FamilyMemberWhere>;
};


export type PartnershipPartnerAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FamilyMemberWhere>;
};


export type PartnershipPartnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PartnershipPartnerConnectionSort>>;
  where?: InputMaybe<PartnershipPartnerConnectionWhere>;
};

export type PartnershipAggregateSelection = {
  __typename?: 'PartnershipAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelection;
};

export type PartnershipConnectInput = {
  partner?: InputMaybe<PartnershipPartnerConnectFieldInput>;
};

export type PartnershipConnectOrCreateInput = {
  partner?: InputMaybe<PartnershipPartnerConnectOrCreateFieldInput>;
};

export type PartnershipConnectOrCreateWhere = {
  node: PartnershipUniqueWhere;
};

export type PartnershipConnectWhere = {
  node: PartnershipWhere;
};

export type PartnershipCreateInput = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  partner?: InputMaybe<PartnershipPartnerFieldInput>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  type: RelationshipType;
};

export type PartnershipDeleteInput = {
  partner?: InputMaybe<PartnershipPartnerDeleteFieldInput>;
};

export type PartnershipDisconnectInput = {
  partner?: InputMaybe<PartnershipPartnerDisconnectFieldInput>;
};

export type PartnershipEdge = {
  __typename?: 'PartnershipEdge';
  cursor: Scalars['String']['output'];
  node: Partnership;
};

export type PartnershipFamilyMemberPartnerAggregationSelection = {
  __typename?: 'PartnershipFamilyMemberPartnerAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<PartnershipFamilyMemberPartnerNodeAggregateSelection>;
};

export type PartnershipFamilyMemberPartnerNodeAggregateSelection = {
  __typename?: 'PartnershipFamilyMemberPartnerNodeAggregateSelection';
  birthYear: IntAggregateSelection;
  firstName: StringAggregateSelection;
  id: IdAggregateSelection;
  lastName: StringAggregateSelection;
};

export type PartnershipOnCreateInput = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  type: RelationshipType;
};

export type PartnershipOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more PartnershipSort objects to sort Partnerships by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PartnershipSort>>;
};

export type PartnershipPartnerAggregateInput = {
  AND?: InputMaybe<Array<PartnershipPartnerAggregateInput>>;
  NOT?: InputMaybe<PartnershipPartnerAggregateInput>;
  OR?: InputMaybe<Array<PartnershipPartnerAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<PartnershipPartnerNodeAggregationWhereInput>;
};

export type PartnershipPartnerConnectFieldInput = {
  connect?: InputMaybe<FamilyMemberConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<FamilyMemberConnectWhere>;
};

export type PartnershipPartnerConnectOrCreateFieldInput = {
  onCreate: PartnershipPartnerConnectOrCreateFieldInputOnCreate;
  where: FamilyMemberConnectOrCreateWhere;
};

export type PartnershipPartnerConnectOrCreateFieldInputOnCreate = {
  node: FamilyMemberOnCreateInput;
};

export type PartnershipPartnerConnection = {
  __typename?: 'PartnershipPartnerConnection';
  edges: Array<PartnershipPartnerRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PartnershipPartnerConnectionSort = {
  node?: InputMaybe<FamilyMemberSort>;
};

export type PartnershipPartnerConnectionWhere = {
  AND?: InputMaybe<Array<PartnershipPartnerConnectionWhere>>;
  NOT?: InputMaybe<PartnershipPartnerConnectionWhere>;
  OR?: InputMaybe<Array<PartnershipPartnerConnectionWhere>>;
  node?: InputMaybe<FamilyMemberWhere>;
};

export type PartnershipPartnerCreateFieldInput = {
  node: FamilyMemberCreateInput;
};

export type PartnershipPartnerDeleteFieldInput = {
  delete?: InputMaybe<FamilyMemberDeleteInput>;
  where?: InputMaybe<PartnershipPartnerConnectionWhere>;
};

export type PartnershipPartnerDisconnectFieldInput = {
  disconnect?: InputMaybe<FamilyMemberDisconnectInput>;
  where?: InputMaybe<PartnershipPartnerConnectionWhere>;
};

export type PartnershipPartnerFieldInput = {
  connect?: InputMaybe<PartnershipPartnerConnectFieldInput>;
  connectOrCreate?: InputMaybe<PartnershipPartnerConnectOrCreateFieldInput>;
  create?: InputMaybe<PartnershipPartnerCreateFieldInput>;
};

export type PartnershipPartnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PartnershipPartnerNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PartnershipPartnerNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<PartnershipPartnerNodeAggregationWhereInput>>;
  birthYear_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  birthYear_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  birthYear_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  birthYear_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  birthYear_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  birthYear_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  birthYear_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  birthYear_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  birthYear_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  birthYear_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  birthYear_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  birthYear_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  firstName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  firstName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  firstName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  firstName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  firstName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  firstName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  firstName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  firstName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  firstName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  firstName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  lastName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  lastName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  lastName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  lastName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  lastName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  lastName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  lastName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  lastName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  lastName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  lastName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type PartnershipPartnerRelationship = {
  __typename?: 'PartnershipPartnerRelationship';
  cursor: Scalars['String']['output'];
  node: FamilyMember;
};

export type PartnershipPartnerUpdateConnectionInput = {
  node?: InputMaybe<FamilyMemberUpdateInput>;
};

export type PartnershipPartnerUpdateFieldInput = {
  connect?: InputMaybe<PartnershipPartnerConnectFieldInput>;
  connectOrCreate?: InputMaybe<PartnershipPartnerConnectOrCreateFieldInput>;
  create?: InputMaybe<PartnershipPartnerCreateFieldInput>;
  delete?: InputMaybe<PartnershipPartnerDeleteFieldInput>;
  disconnect?: InputMaybe<PartnershipPartnerDisconnectFieldInput>;
  update?: InputMaybe<PartnershipPartnerUpdateConnectionInput>;
  where?: InputMaybe<PartnershipPartnerConnectionWhere>;
};

export type PartnershipRelationInput = {
  partner?: InputMaybe<PartnershipPartnerCreateFieldInput>;
};

/** Fields to sort Partnerships by. The order in which sorts are applied is not guaranteed when specifying many fields in one PartnershipSort object. */
export type PartnershipSort = {
  endDate?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  startDate?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
};

export type PartnershipUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PartnershipUpdateInput = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  partner?: InputMaybe<PartnershipPartnerUpdateFieldInput>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  type?: InputMaybe<RelationshipType>;
};

export type PartnershipWhere = {
  AND?: InputMaybe<Array<PartnershipWhere>>;
  NOT?: InputMaybe<PartnershipWhere>;
  OR?: InputMaybe<Array<PartnershipWhere>>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  endDate_GT?: InputMaybe<Scalars['Date']['input']>;
  endDate_GTE?: InputMaybe<Scalars['Date']['input']>;
  endDate_IN?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  endDate_LT?: InputMaybe<Scalars['Date']['input']>;
  endDate_LTE?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  partner?: InputMaybe<FamilyMemberWhere>;
  partnerAggregate?: InputMaybe<PartnershipPartnerAggregateInput>;
  partnerConnection?: InputMaybe<PartnershipPartnerConnectionWhere>;
  partnerConnection_NOT?: InputMaybe<PartnershipPartnerConnectionWhere>;
  partner_NOT?: InputMaybe<FamilyMemberWhere>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  startDate_GT?: InputMaybe<Scalars['Date']['input']>;
  startDate_GTE?: InputMaybe<Scalars['Date']['input']>;
  startDate_IN?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  startDate_LT?: InputMaybe<Scalars['Date']['input']>;
  startDate_LTE?: InputMaybe<Scalars['Date']['input']>;
  type?: InputMaybe<RelationshipType>;
  type_IN?: InputMaybe<Array<RelationshipType>>;
};

export type PartnershipsConnection = {
  __typename?: 'PartnershipsConnection';
  edges: Array<PartnershipEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  families: Array<Family>;
  familiesAggregate: FamilyAggregateSelection;
  familiesConnection: FamiliesConnection;
  familyMembers: Array<FamilyMember>;
  familyMembersAggregate: FamilyMemberAggregateSelection;
  familyMembersConnection: FamilyMembersConnection;
  partnerships: Array<Partnership>;
  partnershipsAggregate: PartnershipAggregateSelection;
  partnershipsConnection: PartnershipsConnection;
};


export type QueryFamiliesArgs = {
  options?: InputMaybe<FamilyOptions>;
  where?: InputMaybe<FamilyWhere>;
};


export type QueryFamiliesAggregateArgs = {
  where?: InputMaybe<FamilyWhere>;
};


export type QueryFamiliesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<FamilySort>>>;
  where?: InputMaybe<FamilyWhere>;
};


export type QueryFamilyMembersArgs = {
  options?: InputMaybe<FamilyMemberOptions>;
  where?: InputMaybe<FamilyMemberWhere>;
};


export type QueryFamilyMembersAggregateArgs = {
  where?: InputMaybe<FamilyMemberWhere>;
};


export type QueryFamilyMembersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<FamilyMemberSort>>>;
  where?: InputMaybe<FamilyMemberWhere>;
};


export type QueryPartnershipsArgs = {
  options?: InputMaybe<PartnershipOptions>;
  where?: InputMaybe<PartnershipWhere>;
};


export type QueryPartnershipsAggregateArgs = {
  where?: InputMaybe<PartnershipWhere>;
};


export type QueryPartnershipsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<PartnershipSort>>>;
  where?: InputMaybe<PartnershipWhere>;
};

export enum RelationshipType {
  Divorced = 'DIVORCED',
  DomesticPartnership = 'DOMESTIC_PARTNERSHIP',
  Marriage = 'MARRIAGE',
  Separated = 'SEPARATED'
}

/** An enum for sorting in either ascending or descending order. */
export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type StringAggregateSelection = {
  __typename?: 'StringAggregateSelection';
  longest?: Maybe<Scalars['String']['output']>;
  shortest?: Maybe<Scalars['String']['output']>;
};

export type UpdateFamiliesMutationResponse = {
  __typename?: 'UpdateFamiliesMutationResponse';
  families: Array<Family>;
  info: UpdateInfo;
};

export type UpdateFamilyMembersMutationResponse = {
  __typename?: 'UpdateFamilyMembersMutationResponse';
  familyMembers: Array<FamilyMember>;
  info: UpdateInfo;
};

/** Information about the number of nodes and relationships created and deleted during an update mutation */
export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  nodesDeleted: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type UpdatePartnershipsMutationResponse = {
  __typename?: 'UpdatePartnershipsMutationResponse';
  info: UpdateInfo;
  partnerships: Array<Partnership>;
};

export type GetAllFamiliesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllFamiliesQuery = { __typename?: 'Query', families: Array<{ __typename?: 'Family', id: string, name: string, members: Array<{ __typename?: 'FamilyMember', id: string, firstName: string, lastName: string }> }> };


export const GetAllFamiliesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllFamilies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllFamiliesQuery, GetAllFamiliesQueryVariables>;