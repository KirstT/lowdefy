/*
  Copyright 2020-2021 Lowdefy, Inc

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import formatErrorMessage from './formatErrorMessage';

test('global incorrect type', async () => {
  const app = {
    global: 'global',
  };
  const error = {
    keyword: 'type',
    dataPath: '/global',
    schemaPath: '#/properties/global/type',
    params: {
      type: 'object',
    },
    message: 'should be object',
    data: 'global',
  };
  const res = formatErrorMessage(error, app);
  expect(res).toEqual(`--------- Schema Error ---------
message: should be object
path: /global
--------------------------------`);
});

test('page id missing', async () => {
  const app = {
    pages: [
      {
        type: 'PageHeaderMenu',
        blocks: [
          {
            id: 'b1',
            type: 'TextInput',
          },
        ],
      },
    ],
  };
  const error = {
    keyword: 'required',
    dataPath: '/pages/0',
    schemaPath: '#/required',
    params: {
      missingProperty: 'id',
    },
    message: "should have required property 'id'",
    data: {
      type: 'PageHeaderMenu',
      blocks: [
        {
          id: 'b1',
          type: 'TextInput',
        },
      ],
    },
  };
  const res = formatErrorMessage(error, app);
  expect(res).toEqual(`--------- Schema Error ---------
message: should have required property 'id'
path: /pages/0
--------------------------------`);
});

test('page type missing', async () => {
  const app = {
    pages: [
      {
        id: 'page1',
        blocks: [],
      },
    ],
  };
  const error = {
    keyword: 'required',
    dataPath: '/pages/0',
    schemaPath: '#/required',
    params: {
      missingProperty: 'type',
    },
    message: "should have required property 'type'",
    data: {
      id: 'page1',
      blocks: [],
    },
  };
  const res = formatErrorMessage(error, app);
  expect(res).toEqual(`--------- Schema Error ---------
message: should have required property 'type'
path: /pages/0
--------------------------------`);
});

test('id incorrect type', async () => {
  const app = {
    pages: [
      {
        id: 1,
        blocks: [],
      },
    ],
  };
  const error = {
    keyword: 'type',
    dataPath: '/pages/0/id',
    schemaPath: '#/properties/id/type',
    params: {
      type: 'string',
    },
    message: 'should be string',
    data: 1,
  };
  const res = formatErrorMessage(error, app);
  expect(res).toEqual(`--------- Schema Error ---------
message: should be string
path: /pages/0/id
--------------------------------`);
});
