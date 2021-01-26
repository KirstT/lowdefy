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

import { runBlockSchemaTests, runRenderTests } from '@lowdefy/block-tools';

import PageSHCF from '../src/blocks/PageSHCF/PageSHCF';
import examples from '../demo/examples/PageSHCF.yaml';
import meta from '../src/blocks/PageSHCF/PageSHCF.json';

runRenderTests({ examples, Block: PageSHCF, meta });
runBlockSchemaTests({ examples, meta });