# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.10.0](https://github.com/lowdefy/lowdefy/compare/v3.9.0...v3.10.0) (2021-02-17)


### Bug Fixes

* **blocks:** Do not pass methods down to imported blocks. ([ff3f588](https://github.com/lowdefy/lowdefy/commit/ff3f588410a970a65523693f143ba9e80139f2f0))
* **blocks:** Update block tests. ([898fc3c](https://github.com/lowdefy/lowdefy/commit/898fc3c818fd9879a79b48fcc785398c33677731))
* **blocksAntd:** Fix icon in Notification. ([34c03fc](https://github.com/lowdefy/lowdefy/commit/34c03fc7f09c5c28717de059443c819cc1bbfa49))
* **build:** Add action messages to app schema ([2aff1cb](https://github.com/lowdefy/lowdefy/commit/2aff1cbf3a2216ab4c97a2119a158381b305ca88))
* **cli:** Log command and lowdefy version in error handler. ([6c1ed5b](https://github.com/lowdefy/lowdefy/commit/6c1ed5b4c29f94b95802f2081ee58db7d1ebe47f))
* **deps:** Update dependency @ant-design/icons to v4.5.0. ([8382bbb](https://github.com/lowdefy/lowdefy/commit/8382bbba7b58ec022109e4d97d1944390a9c09cc))
* **deps:** Update dependency @apollo/client to v3.3.11. ([27f553d](https://github.com/lowdefy/lowdefy/commit/27f553db37287e7d14b08d9eb9896c0ac084d56a))
* **deps:** Update dependency apollo-server packages to v2.21.0 ([276012c](https://github.com/lowdefy/lowdefy/commit/276012c48283be64e60cbe00f7d8acf695773725))
* **deps:** Update dependency aws-sdk to v2.845.0. ([55f5ef7](https://github.com/lowdefy/lowdefy/commit/55f5ef79340d76c74a4fefef8b401ac0603714fd))
* **deps:** Update dependency css-loader to v5.0.2. ([6dd6a82](https://github.com/lowdefy/lowdefy/commit/6dd6a82fa4e4975f201e0c22c6b5bf29cd0541e3))
* **deps:** Update dependency eslint to v7.20.0. ([36b3892](https://github.com/lowdefy/lowdefy/commit/36b389201effcd5f8888beab5e1ed9edae924cc0))
* **deps:** Update dependency html-webpack-plugin to v5.1.0 ([d0dd688](https://github.com/lowdefy/lowdefy/commit/d0dd688816e3e9fc6ff56235698d3af4707eba5f))
* **deps:** Update dependency imports-loader to v2.0.0. ([9543482](https://github.com/lowdefy/lowdefy/commit/954348287f1a07830afbba0724d309189ae6f083))
* **deps:** Update dependency json5 to v2.2.0. ([d93df2b](https://github.com/lowdefy/lowdefy/commit/d93df2b82d15585c907f18e2a52c2fda7b23a71a))
* **deps:** Update dependency less to v4.1.1. ([19ec1e2](https://github.com/lowdefy/lowdefy/commit/19ec1e205154974005b741d4a77a89161fad308f))
* **deps:** Update dependency less-loader to v8.0.0. ([465727b](https://github.com/lowdefy/lowdefy/commit/465727bf5e6cd0377e61afa37a38e7e0a1a05e95))
* **deps:** Update dependency mingo to v4.1.1. ([efdb838](https://github.com/lowdefy/lowdefy/commit/efdb838fdf3b002f5799e04c5d5de1dc721dabdc))
* **deps:** Update dependency mongodb to v3.6.4. ([5a82096](https://github.com/lowdefy/lowdefy/commit/5a820966382377c92ec600ea94fb5faa07e76d7a))
* **deps:** Update dependency nunjucks to v3.2.3. ([741616e](https://github.com/lowdefy/lowdefy/commit/741616e4e46544deac297fcf4dea034b6e2174c5))
* **deps:** Update dependency query-string to v6.14.0. ([3a942f1](https://github.com/lowdefy/lowdefy/commit/3a942f10ba577cc3015b5e1a9eebd23ee21a0238))
* **deps:** Update dependency webpack to v5.22.0. ([bb9f69e](https://github.com/lowdefy/lowdefy/commit/bb9f69e29cbce728932ab512e12122ce3dc349cc))
* **deps:** Update dependency webpack-cli to v4.5.0. ([445d55c](https://github.com/lowdefy/lowdefy/commit/445d55ca12f720be9f09632a319c319323c7041c))
* **deps:** Update package commander to v7.1.0. ([e13945e](https://github.com/lowdefy/lowdefy/commit/e13945e5774078a9b55d8db7391dc4d9b82485c2))
* **docs:** Add concepts pages for lists, secrets and deployment. ([fb93e33](https://github.com/lowdefy/lowdefy/commit/fb93e3369578daf8d99707c531ca55c22d4d227b))
* **docs:** CallMethod takes an array as input. ([a698d0b](https://github.com/lowdefy/lowdefy/commit/a698d0b13739dd5728f69c55a75f3c644828e475))
* **engine:** Fix Link action always errors. ([ec4c0f2](https://github.com/lowdefy/lowdefy/commit/ec4c0f24dcf5715ca8230d20b253a74afcdcccb5))
* **engine:** Fix set block to update on event loading. ([db80390](https://github.com/lowdefy/lowdefy/commit/db8039079ecfb5484f49f0a921e326fda4342050))
* **engine:** Use displayMessage from window. ([a7e50b3](https://github.com/lowdefy/lowdefy/commit/a7e50b39da5a37efc16dc15d2f3e56a4bac820f6))
* **graphql:** Add descriptions to SendGridMailSendSchema. ([edefaa7](https://github.com/lowdefy/lowdefy/commit/edefaa7e52df68f328ead03e5fbd58ae5f2e43c9))
* **graphql:** Add saslprep dependancy for mongodb. ([4d1137a](https://github.com/lowdefy/lowdefy/commit/4d1137af842bec80d1fbc7f131ef86cb66339244))
* **renderer:** Set displayMessage on window. ([8ba9606](https://github.com/lowdefy/lowdefy/commit/8ba9606e048e76478f39125fa21ac97931a68fa6))


### Features

* **cli:** Add init command to cli. ([ec496a5](https://github.com/lowdefy/lowdefy/commit/ec496a5e55caacf42f3fddccefca213778963f2a))
* **cli:** Check for outdated versions on startup. ([7236da3](https://github.com/lowdefy/lowdefy/commit/7236da312b2656464c0775e882fc58e11303944f))
* **cli:** Rename @lowdefy/cli package to lowdefy ([b73777a](https://github.com/lowdefy/lowdefy/commit/b73777a18f379c8cb2ffef7007ba487d4d1c051e))


### Reverts

* fix(deps): Update dependency less to v4.1.1 to v3.13.0. ([2e09287](https://github.com/lowdefy/lowdefy/commit/2e09287f572f78b82eae43cd2f56ef75994a0356))





# [3.9.0](https://github.com/lowdefy/lowdefy/compare/v3.8.0...v3.9.0) (2021-02-16)


### Bug Fixes

* **actions:** Fix action response, add tests. ([0d16f82](https://github.com/lowdefy/lowdefy/commit/0d16f82a92135e0e895bd2088d4386b0f01b67d7))
* **blocksAntd:** Fix args.icon for Message. ([8a16504](https://github.com/lowdefy/lowdefy/commit/8a165048b8253f06a6c827426d9c5f4dd1e002dd))
* **blocksAntd:** Return the message function. ([6fb2aec](https://github.com/lowdefy/lowdefy/commit/6fb2aec2d82085dab4f6a406c6882b7cd7666ef8))
* **blocksAntd:** Update Timeline to work from value settings. ([c95009b](https://github.com/lowdefy/lowdefy/commit/c95009b44128f234d1c3f4848e823b1d9c4400e2))
* **blocksColorSelectors:** Include block value test. ([9da9c32](https://github.com/lowdefy/lowdefy/commit/9da9c322f61ae10fd1123a3852ce6bff096fa329))
* **blockTools:** Add example value to block render tests. ([e860013](https://github.com/lowdefy/lowdefy/commit/e8600131aeabaad93d70b7be4125a2153cb7598d))
* **build:** Fix TimelineList block location (renamed from Timeline). ([02c5dea](https://github.com/lowdefy/lowdefy/commit/02c5dea13ff5f87b385a3ac5408efe2e4fa8c3dc))
* **docs:** Add docs for SendGridMailSend. ([3e19e4c](https://github.com/lowdefy/lowdefy/commit/3e19e4c05ed026873d9e65fda1a667f27073d9c3))
* **docs:** Add init menu for PageSiderMenu and PageHeaderMenu. ([2f8c6d2](https://github.com/lowdefy/lowdefy/commit/2f8c6d29c034576340ae05250811ae54a6f8ecde))
* **docs:** Add List and ControlledList. ([513a494](https://github.com/lowdefy/lowdefy/commit/513a494dc5c9273d346ef850f413bb6721134c89))
* **docs:** filterDefaultValue not to filter arrays. ([48ccc5c](https://github.com/lowdefy/lowdefy/commit/48ccc5c6005760a21845fc1cf30b08ef387f44dc))
* **docs:** Fix schemas for Context Pages. ([2700d68](https://github.com/lowdefy/lowdefy/commit/2700d68c7fd29ad89ba669fcab48ba816211cbcc))
* **docs:** Fixes to SendGridMail. ([4a6cd66](https://github.com/lowdefy/lowdefy/commit/4a6cd663f67057ce120e37fc9d0368c34badf577))
* **docs:** Improve blocks default value filter. ([8e722d1](https://github.com/lowdefy/lowdefy/commit/8e722d1120d8f25da6c9e897701137d90534aecc))
* **docs:** Improve example rendering in template. ([e528776](https://github.com/lowdefy/lowdefy/commit/e5287763e98959a9a559c040e92bd8f895b8293c))
* **docs:** Only recurse getNestedValue on objects. ([d6d3e04](https://github.com/lowdefy/lowdefy/commit/d6d3e0429829f12466fdab56c17af9cfc1cc61ec))
* **docs:** Remove and fix old block examples. ([11defbe](https://github.com/lowdefy/lowdefy/commit/11defbe4b2140ee78a2cec073b9e225bdc1ae24b))
* **docs:** Typos in AxiosHttp. ([5928330](https://github.com/lowdefy/lowdefy/commit/59283307518f24b41dd592879f3eeaefd4cd50f9))
* **docs:** Update _format operator docs. ([8aa42aa](https://github.com/lowdefy/lowdefy/commit/8aa42aaed51ad49459e0dbf330685019b99d61df))
* **docs:** Update CallMethod docs with new usage. ([0f0f320](https://github.com/lowdefy/lowdefy/commit/0f0f320d180a2ebdb1ae8c1b29ca2afb4f1b0730))
* **engine:** Fix Link action with input and urlQuery. ([be6a1e1](https://github.com/lowdefy/lowdefy/commit/be6a1e1e8801458d059fe937d517b777c41fee71))
* **engine:** Fix Validate function name ([795d876](https://github.com/lowdefy/lowdefy/commit/795d8765e18f5c3c5a1e3b44133e9785fad3aad2))
* **engine:** Log action errors to the console. ([38ea5ff](https://github.com/lowdefy/lowdefy/commit/38ea5ff430d766f3b178b3746aeac6c6c8cb78d6))
* add SECURITY.md ([84a03ba](https://github.com/lowdefy/lowdefy/commit/84a03ba69ce2d6be2387afb8c86749ebd5717a61))
* **renderer:** Add displayMessage to renderer. ([863515e](https://github.com/lowdefy/lowdefy/commit/863515e173ca7bb7cf1f5b65a02efb5a10640da3))


### Features

* **engine:** Parse params for all actions. Refactor actions and events. ([0d55bd2](https://github.com/lowdefy/lowdefy/commit/0d55bd2624917a8415802db7413ebe4e06e1c111))





# [3.8.0](https://github.com/lowdefy/lowdefy/compare/v3.7.2...v3.8.0) (2021-02-12)


### Bug Fixes

* **blocks:** Remove react router from render loop where not required. ([7b6970f](https://github.com/lowdefy/lowdefy/commit/7b6970f9b4fcc1b9e35771ba619fab890fa638f5))
* **blocks-antd:** Remove formatter option from Statistic block. ([4c6a3b8](https://github.com/lowdefy/lowdefy/commit/4c6a3b81310418b207521ca790d80ebfe2149f6c))
* **blocksAntd:** Fix Label areas.label bug. ([6bcd258](https://github.com/lowdefy/lowdefy/commit/6bcd2585268302938ab61010bd297a390e0f09aa))
* **blocksAntd:** Fix suffixIcon and label on MonthSelector. ([9547ff5](https://github.com/lowdefy/lowdefy/commit/9547ff5b147620837becea4e05d4b680b5115b0d))
* **blocksAntd:** PageSiderMenu affix toggle button. ([ae46923](https://github.com/lowdefy/lowdefy/commit/ae469234a8fd7daec47c3e9064234ba1bdeebffd))
* **blocksAntd:** PageSiderMenu clean up. ([340a760](https://github.com/lowdefy/lowdefy/commit/340a760a89c1286a7ec7c4e4b4b7457006cfcf49))
* **blocksAntd:** PageSiderMenu collapsed state should not open defaultOpenKeys. ([9172904](https://github.com/lowdefy/lowdefy/commit/91729047988323907c8ed0db4970be89a1c2c9d0))
* **blocksAntd:** Remove open property from Modal and Drawer. ([e5954ff](https://github.com/lowdefy/lowdefy/commit/e5954fffc71a55b4e883ef93d77f1bb439b68d66))
* **blocksAntd:** Update Anchor to use href spec. ([1b9a5b1](https://github.com/lowdefy/lowdefy/commit/1b9a5b1b4c43489be583968480403325c49fdca7))
* **blocksColorSelectors:** Add default colors for SwatchesColorSelector. ([9650f73](https://github.com/lowdefy/lowdefy/commit/9650f7377b480ac681e199bc355fd4de8c44650e))
* **blocksColorSelectors:** Add value label for CircleColorSelector. ([ee5c05b](https://github.com/lowdefy/lowdefy/commit/ee5c05b7c6361409fa837c92f5cd4a222cfb09eb))
* **blocksColorSelectors:** Upfate blocksColorSelectors examples render loop. ([2f88449](https://github.com/lowdefy/lowdefy/commit/2f884495ceea239e30b95f662db5f271b8344c95))
* **docs:**  Improve concepts docs. ([f982f83](https://github.com/lowdefy/lowdefy/commit/f982f8339dd8889ced1b53b000373baca58df06c))
* **docs:** Add 404 to general template. ([c31cb4b](https://github.com/lowdefy/lowdefy/commit/c31cb4b85a07b2708cf34271bfa221d0efcc5043))
* **docs:** Add Collapse, Tabs and MobileMenu blocks ([6db451b](https://github.com/lowdefy/lowdefy/commit/6db451b2a991b4e64d9b58e62c4670b4713a36c9))
* **docs:** Add container block docs. ([b490ec7](https://github.com/lowdefy/lowdefy/commit/b490ec767d6ab78c79f8b78836aee88f2f3b3f12))
* **docs:** Add context category block docs. ([39fb6c3](https://github.com/lowdefy/lowdefy/commit/39fb6c3b78eed52a114608186ad16b385cd43828))
* **docs:** Add examples to Progress. ([9169001](https://github.com/lowdefy/lowdefy/commit/9169001ab56763b6d9ee26d6c9e33705367b60b8))
* **docs:** Add filePath to all pages. ([b890a2a](https://github.com/lowdefy/lowdefy/commit/b890a2a6a18151f47c011707578358668c16b71a))
* **docs:** Fix content overflow on mobile. ([33c1abb](https://github.com/lowdefy/lowdefy/commit/33c1abb8c1992d0d48965e06641a59ef3fc00f7e))
* **docs:** Fix object propertiesGetterTransformer to assign to default object when null. ([31df2a4](https://github.com/lowdefy/lowdefy/commit/31df2a41204365fd898d10df89a89261193b3a0e))
* **docs:** fix schema on ScrollTo blockId example ([9c0b620](https://github.com/lowdefy/lowdefy/commit/9c0b620555990aab52f283965cbdab6b43176a76))
* **docs:** Fix selector value types for init_state_values. ([6cfd6a1](https://github.com/lowdefy/lowdefy/commit/6cfd6a1aa711113f31130940ff5eec5cf008a1f1))
* **docs:** Link to community in header. ([62da21b](https://github.com/lowdefy/lowdefy/commit/62da21b09ae545301312ddac4c5eec9ad27231c7))
* **docs:** Remove Skeleton for now. ([45d5b69](https://github.com/lowdefy/lowdefy/commit/45d5b69db11104af57e719e8a465960cc60f91fd))
* **docs:** Render value by default on color selectors. ([3db0f53](https://github.com/lowdefy/lowdefy/commit/3db0f53e5b839931be831b3d459e6cc236a728c8))
* **docs:** Update blocks template to one use schema variable. ([54aa7dc](https://github.com/lowdefy/lowdefy/commit/54aa7dc1a1b8ba67e596edb8b415cb28c8dff6c1))
* **docs:** Update blocks templates for context blocks ([8e7bd77](https://github.com/lowdefy/lowdefy/commit/8e7bd77ba2ced9f87b502f8876880eec9dc80259))
* **docs:** Update footer links to hrefs. ([787cfb0](https://github.com/lowdefy/lowdefy/commit/787cfb025eac722156954a7cba2bb8dee8b999b5))
* **docs:** Update templates with header and footer. ([e2a63fa](https://github.com/lowdefy/lowdefy/commit/e2a63fac3dbcc6bba9de3d7c53edbb82a32c9c8d))
* **engine:** Fix container chlidren visibilty if container vis is null. ([0af48bd](https://github.com/lowdefy/lowdefy/commit/0af48bdc5b9ea201118e76b3479180c15498fbaf))
* **operators:** Allow get from object to take an integer argument. ([e8bdbd9](https://github.com/lowdefy/lowdefy/commit/e8bdbd96a3bf776365d77f9c0800c3c732ea0fbe))
* **operators:** Block experimental operators in _operator. ([342b636](https://github.com/lowdefy/lowdefy/commit/342b636468031905a45e2da66b455ce74469ada5))
* **renderer:** Loading must render inside BlockLayout. ([e1bced9](https://github.com/lowdefy/lowdefy/commit/e1bced9843df832084fb724322de074ad64f792f))


### Features

* **engine:** Rename Link action newWindow to newTab. ([35b47f6](https://github.com/lowdefy/lowdefy/commit/35b47f6d47338b3f93ae41a0fcd2046b5593db50))
* **operators:** Add _format operator. ([44839da](https://github.com/lowdefy/lowdefy/commit/44839daf959253660b6d3c97204898cad0e464fb))
* **operators:** Add _index operator. ([995a912](https://github.com/lowdefy/lowdefy/commit/995a9128e38a27d4e2fdad8c7b6459ee2640c120))
* **operators:** Add experimental javascript operator ([9b7998c](https://github.com/lowdefy/lowdefy/commit/9b7998c174ed0eb6cb0e6054aa0f3334e404f7d8))





## [3.7.2](https://github.com/lowdefy/lowdefy/compare/v3.7.1...v3.7.2) (2021-02-09)


### Bug Fixes

* Fix package lifecycle scripts. ([af7f3a8](https://github.com/lowdefy/lowdefy/commit/af7f3a8ea29763defb20cfb4f28afba3b56d981c))





## [3.7.1](https://github.com/lowdefy/lowdefy/compare/v3.7.0...v3.7.1) (2021-02-09)

**Note:** Version bump only for package @lowdefy/lowdefy





# [3.7.0](https://github.com/lowdefy/lowdefy/compare/v3.6.0...v3.7.0) (2021-02-09)


### Bug Fixes

* **blockDefaults:**  Change allowClear default to false for TextArea and TextInput. ([30323ea](https://github.com/lowdefy/lowdefy/commit/30323eadf0bd573c7788302727ba5881caa4fe5e))
* **blocksAntd:** Fix Menu default open and selected keys. ([a1f48c5](https://github.com/lowdefy/lowdefy/commit/a1f48c5c1a93e5d47a08c6808416642598282d45))
* **blocksAntd:** Fix placeholder default for DateRangeSelector. ([03b03ad](https://github.com/lowdefy/lowdefy/commit/03b03addd6f07c55476d5db0055294e683ffa090))
* **blocksAntd:** Update styling for ControlledList. ([e5d773b](https://github.com/lowdefy/lowdefy/commit/e5d773b9f43eaaee2ba5d94ddd0c92c80f14e32d))
* **blockTools:** Add pageId to block schema in schemaTest. ([548ba6a](https://github.com/lowdefy/lowdefy/commit/548ba6aefefa8475cfa6cb7c48ccce143d577d95))
* **blockTools:** Fix Skeleton linear-gradient for safari. ([59026f4](https://github.com/lowdefy/lowdefy/commit/59026f4b75d186a61162f0bc44e8bf8454ea06ff))
* **build:** Allow _ref path argument to be a _var. ([a8bd287](https://github.com/lowdefy/lowdefy/commit/a8bd287176a58eff5df5f79071119cce0fc4e0fa))
* **engine:** Actions should only skip when “skip” is explicitly true ([e34dc05](https://github.com/lowdefy/lowdefy/commit/e34dc056d11709d2d319f36a052f27dea0ec7cc6))
* **engine:** Only update when onInit is done. ([9f21597](https://github.com/lowdefy/lowdefy/commit/9f215976ffd44caa96c75e0ba929f750819b2e36))


### Features

* **docs:** Update blocks property getters. ([e68f774](https://github.com/lowdefy/lowdefy/commit/e68f774a5c6421b2b1136fc6943ffd0aaf0da498))





# [3.6.0](https://github.com/lowdefy/lowdefy/compare/v3.5.0...v3.6.0) (2021-02-05)


### Bug Fixes

* Fix blocks-color-seletors typo. ([b6ccedd](https://github.com/lowdefy/lowdefy/commit/b6ccedd355c53b5910ef398aff49d32968f34c2e))
* **blocksAntd:** PageHSCF events rename. ([ec4e9ed](https://github.com/lowdefy/lowdefy/commit/ec4e9edc41561414f11ddf62c2d0d0a63905578c))
* **build:** Add 'field' to block schema. ([4aa76e8](https://github.com/lowdefy/lowdefy/commit/4aa76e807743064cca8c5a51ee3d5c7ad536aff8))
* **cli:** Fix netlify build. ([3c930e8](https://github.com/lowdefy/lowdefy/commit/3c930e85010fcf85aae48eb07603412a31044c29))
* **docs:** Events rename fixes. ([a43cd3d](https://github.com/lowdefy/lowdefy/commit/a43cd3d3b09d88261638539d5c0383f539e705dd))
* **docs:** Update docs for v3.5.0 ([969414d](https://github.com/lowdefy/lowdefy/commit/969414dcaf47039f8feb82034d25bf6bb4aa4e78))
* **engine:** Events rename fix. ([ca142ca](https://github.com/lowdefy/lowdefy/commit/ca142ca160a8e3db911ed70f571be31ef5f60d42))


### Features

* **githubactions:** Upload blocks to cdn on publish. ([2afebd1](https://github.com/lowdefy/lowdefy/commit/2afebd109a67bd298cb16e9c7faf5fa8b4ec73ff))
* 🐢Redirect all paths to blocks-cdn. ([a45447a](https://github.com/lowdefy/lowdefy/commit/a45447ad1dacf977e487a020bd56080ae2b09792))





# [3.5.0](https://github.com/lowdefy/lowdefy/compare/v3.4.0...v3.5.0) (2021-02-05)


### Bug Fixes

* **blockBasic:** Fix typo. ([9772e1a](https://github.com/lowdefy/lowdefy/commit/9772e1a44aa0db1e3c0f3194cd16d71794027de7))
* **blocks:** Add default colors to ColorSelector schemas. ([ed03d73](https://github.com/lowdefy/lowdefy/commit/ed03d733c95fc8d73a276bdb40b5b3afc4880d25))
* **blocks:** Add events to all subblocks. ([753ae60](https://github.com/lowdefy/lowdefy/commit/753ae60fc8a150ef2db3a243a2862841c6aad48b))
* **blocks:** Block schema fixes. ([34b5a11](https://github.com/lowdefy/lowdefy/commit/34b5a118024186e0a8ce241e5d05c0b26f84f710))
* **blocks:** Fix NumberInput to not apply default precision. ([f2ddcaa](https://github.com/lowdefy/lowdefy/commit/f2ddcaa7582515eb42464580888676789df73512))
* **blocks:** Fix port setting in webpack config. ([c828740](https://github.com/lowdefy/lowdefy/commit/c82874045dd041fbf3c3a8b4f5cb7dc27a05f39a))
* **blocks:** RatingSlider NA checkkbox to set NA value to state. ([a15693d](https://github.com/lowdefy/lowdefy/commit/a15693d566cee53f4d7c4f5e2461757f89bc7ee4))
* **blocks:** Update block schemas for all blocks. ([9a79743](https://github.com/lowdefy/lowdefy/commit/9a79743174935fd3eb02b3e777165e026e95c7ec))
* **blocks-antd:** Update snapshots for Avatar schema. ([784c0e9](https://github.com/lowdefy/lowdefy/commit/784c0e965f8455287f5b13f8a44c5386c75801ea))
* **blocksAntd:** Alert description only margin issue. Closes [#327](https://github.com/lowdefy/lowdefy/issues/327) ([864e74e](https://github.com/lowdefy/lowdefy/commit/864e74eff0a9b05eed90cd70081b9826b1ae95dc))
* **blocksAntd:** Correct disabledDates typo. Closes [#358](https://github.com/lowdefy/lowdefy/issues/358) ([558becf](https://github.com/lowdefy/lowdefy/commit/558becf243921b6494eaa99a2b307193253391a5))
* **blocksAntd:** Fix top padding on RatingSlider. ([48f9c13](https://github.com/lowdefy/lowdefy/commit/48f9c13962fdc71a815360c62b71c364ff405a8c))
* **blocksAntd:** Maintain cursor position for input blocks. Closes [#344](https://github.com/lowdefy/lowdefy/issues/344) ([7e90fed](https://github.com/lowdefy/lowdefy/commit/7e90fed8c6b12f51054d3c8bc4b3c93579ab097a))
* **blocksBasic:** Add bad html test. ([98740b8](https://github.com/lowdefy/lowdefy/commit/98740b8aae72a57311d64314f9ce9c1838f212ae))
* **blocksMarkdown:** Update schemas. ([9af217c](https://github.com/lowdefy/lowdefy/commit/9af217cb2b9de6609680fe96e6c006b983adda5d))
* **build:** Add types object to app schema. ([bd40748](https://github.com/lowdefy/lowdefy/commit/bd40748afcbe3c31d83b7c2f169db9ae1285ea5d))
* **build:** Improve error message if _var receives invalid arguments. ([c52a942](https://github.com/lowdefy/lowdefy/commit/c52a94297aec0f39c88bd5f6ae6d22e6723fe27a))
* **build:** Improve warning message if menu’s page not found ([7df576a](https://github.com/lowdefy/lowdefy/commit/7df576a2689f8eb79b44ca5fa8d2af38126006e7))
* **build:** Update default locations. ([203175d](https://github.com/lowdefy/lowdefy/commit/203175d6a4b8c018c9d65ff7cb7248b10d4e4508))
* **cli:** Clean node_modules in netlify build before copying. ([9251d58](https://github.com/lowdefy/lowdefy/commit/9251d58a592d5cca83021f9d7a6701390defa1f9))
* **cli:** Fix function name case ([1ba1c65](https://github.com/lowdefy/lowdefy/commit/1ba1c65d7d01a808f5c1d06e0c95454bae9594d7))
* **cli:** Fix reload port clash when running multiple dev servers. ([4910718](https://github.com/lowdefy/lowdefy/commit/4910718f4ebe78105694a5943d96989f274c427a))
* **cli:** Only start server if initial build has completed. ([20cfcaa](https://github.com/lowdefy/lowdefy/commit/20cfcaa3d8f67816628f5001fbcc4ebb28b43123))
* **DangerousHtml:** Fix DangerousHtml description in include render details. ([30b348a](https://github.com/lowdefy/lowdefy/commit/30b348aebd163507722dadd163a045e72e7a70ec))
* **deps:** Update dependency @and-design/icons to v4.4.0 ([9189eae](https://github.com/lowdefy/lowdefy/commit/9189eae785d8635cf1f84b17519450fc4f005900))
* **deps:** update dependency aws-sdk to v2.832.0 ([ed9f6d4](https://github.com/lowdefy/lowdefy/commit/ed9f6d4d2fb38b12dea5963ef408d5679cc2b8fe))
* **deps:** update dependency chokidar to v3.5.1 ([fe8ff89](https://github.com/lowdefy/lowdefy/commit/fe8ff892a770cac37cbba3b1244357aab5b68d28))
* **deps:** Update dependency copy-webpack-plugin to v7.0.0. ([901d412](https://github.com/lowdefy/lowdefy/commit/901d4126544dd4ee68d62bf520cdd4cc2b0d1dcc))
* **deps:** Update dependency graphql to v15.5.0 ([90acf72](https://github.com/lowdefy/lowdefy/commit/90acf7289c517f9afe066cd0706c64187a39648b))
* **deps:** Update dependency ora to v5.3.0. ([542c115](https://github.com/lowdefy/lowdefy/commit/542c1156c66c9926d89b751ed5b5bf44661a5d96))
* **deps:** Update peer dependencies. ([57e5295](https://github.com/lowdefy/lowdefy/commit/57e52959b6ec507f4d060d8c7260a22761dca328))
* **docs:** Add default values and loading to blocks. ([fcadf76](https://github.com/lowdefy/lowdefy/commit/fcadf76edca9828c8bc0a511ca24cbbb20ccd219))
* **docs:** Catch null in filter_default_value. ([8975b0f](https://github.com/lowdefy/lowdefy/commit/8975b0f5cbc62e93d32b2ecf151d3c5ed5a822a7))
* **docs:** Change secret warning to Alert. ([9be4ef5](https://github.com/lowdefy/lowdefy/commit/9be4ef585204d143b547da0147a66a827a456956))
* **docs:** Concepts pages fixes and additions. ([fd6fba5](https://github.com/lowdefy/lowdefy/commit/fd6fba55d1d57d120b3fad6045b3d671b1bec0e8))
* **docs:** Convert propertiesFormTransform to work with objects. ([33042ba](https://github.com/lowdefy/lowdefy/commit/33042ba8e5a867338822ba1f4383bf458f801fa1))
* **docs:** Fix all date value_type. ([51e6b70](https://github.com/lowdefy/lowdefy/commit/51e6b70a50fa4dc2579cf9180f7b93284322cd07))
* **docs:** Fix connection docs formatting ([37ff0ce](https://github.com/lowdefy/lowdefy/commit/37ff0cea9345a9741409b28d753d3a0cb36b424b))
* **docs:** Fix lowdfey.yaml ([01cc8fc](https://github.com/lowdefy/lowdefy/commit/01cc8fc27538eec1f4fa5c24e9110949928785ab))
* **docs:** Fix merge conflict and S3UploadButton examples ([e496d8c](https://github.com/lowdefy/lowdefy/commit/e496d8c8de04879fc59810ca66cf4182b3788997))
* **docs:** Fix operator docs ([7bf5a6c](https://github.com/lowdefy/lowdefy/commit/7bf5a6c8759cfd66aab74ba05eb4cb4401563e65))
* **docs:** Improve default value filter for config yaml. ([e0cfc63](https://github.com/lowdefy/lowdefy/commit/e0cfc63d5379637fa16f086bfde1c9eb9c24983d))
* **docs:** Operator docs fixes. ([a36f31c](https://github.com/lowdefy/lowdefy/commit/a36f31cfed44920557123e485c045a44c0d25db9))
* **docs:** Operator docs improvements. ([919949f](https://github.com/lowdefy/lowdefy/commit/919949f4e6cdb1c44d10f543b2ee638b1070beee))
* **docs:** ParagraphInput remove content property. ([83d00ed](https://github.com/lowdefy/lowdefy/commit/83d00ed16c8bfd7b9cfed77c38190f1695cf9213))
* **docs:** Remove text size setting from markdown blocks. ([58cf464](https://github.com/lowdefy/lowdefy/commit/58cf46432431b35b3cbdb0bc520b7402b88207b6))
* **docs:** Review cli and lowdefy-schema. ([4440ecf](https://github.com/lowdefy/lowdefy/commit/4440ecf7378ff1d404c1ef5f03c7910f3599e202))
* **docs:** Right align all label for blocks. ([9060988](https://github.com/lowdefy/lowdefy/commit/906098885c9bee6abdb52af4e70883f67074edfe))
* **docs:** Set initial values for new propertiesFormTransformer. ([01632c6](https://github.com/lowdefy/lowdefy/commit/01632c6796b17f8f458b8b7b5db459ae32dcc441))
* **docs:** Tutorial fixes ([6536cc0](https://github.com/lowdefy/lowdefy/commit/6536cc04c89a18fabb4c3961f22ad519cc2fa284))
* **docs:** Typo fixes on operators. ([d48d391](https://github.com/lowdefy/lowdefy/commit/d48d3918751d048f2ac81e33f4f595e073c12cdc))
* **docs:** Update concpets ortder. ([91a5450](https://github.com/lowdefy/lowdefy/commit/91a54500ceb1a74dd13a2a0083c289ff0dc66884))
* **docs:** Update connections docs. ([75ac999](https://github.com/lowdefy/lowdefy/commit/75ac999f75f321390389fea0fc4bccbd16515fbc))
* **docs:** Update Pagination tests. ([fa583f2](https://github.com/lowdefy/lowdefy/commit/fa583f23a63ce2c40bd08d5acf0b6a0cf5a0c56d))
* **docs:** Update snapshots for Avatar schema. ([0176a85](https://github.com/lowdefy/lowdefy/commit/0176a85f99ff84e7335a22e72943a52b818bdd6c))
* **docs:** Update template tests. ([391c36e](https://github.com/lowdefy/lowdefy/commit/391c36e6f4ec7434eb8eee64f0b809540014b8a2))
* **graphql:** Mongodb, do not allow $out/$merge when write is false. ([92aa370](https://github.com/lowdefy/lowdefy/commit/92aa370ba037758f7e17e6c8c837960817e13ca4)), closes [#242](https://github.com/lowdefy/lowdefy/issues/242)
* **operators:** Fix error when operator not supported, add support for _global ([8ba32aa](https://github.com/lowdefy/lowdefy/commit/8ba32aa7b4e23311b27043cd64782b75063a60b3))
* **renderer:** Fix registerMethods object. Closes [#348](https://github.com/lowdefy/lowdefy/issues/348) ([d28931f](https://github.com/lowdefy/lowdefy/commit/d28931f012f9aa52e884d58dd4982cb383b68579))
* concept pages typos and minor fixes ([f0df767](https://github.com/lowdefy/lowdefy/commit/f0df767c4073ebeebef9081da8c3f0aef33bfb7a))
* **renderer:** Fix context creation render loop bug. ([019dbdc](https://github.com/lowdefy/lowdefy/commit/019dbdc6465d0178da23e9c6e41bd5c3503ae686))


### Features

* **block-tools:** Rename block actions to events ([e33d0f3](https://github.com/lowdefy/lowdefy/commit/e33d0f3046b8ab354c0bfb38759c67708aafe22a))
* **blocks:** Add default block loading. ([d0d1801](https://github.com/lowdefy/lowdefy/commit/d0d1801490c486b19ec49ee9fd50395c9e02bb68))
* **blocks:** Fix disableDates in date selector schemas. ([b2763ee](https://github.com/lowdefy/lowdefy/commit/b2763ee2053df56a79c17e05998e643275e4bf4e))
* **blocks:** Update block schemas and tests. ([30636bd](https://github.com/lowdefy/lowdefy/commit/30636bd744f43652adcad51dd91570b53667dc04))
* **blocks-antd:** Rename block actions to events. ([9d9dce2](https://github.com/lowdefy/lowdefy/commit/9d9dce2ecfb4d9e37349b9f235a53d9724caee00))
* **blocks-basic:** Rename block actions to events. ([cbb5626](https://github.com/lowdefy/lowdefy/commit/cbb5626b8c3767aeb02a5b087a2cbc585e80b635))
* **blocks-color-selectors:** Rename block actions to events. ([ea13e8e](https://github.com/lowdefy/lowdefy/commit/ea13e8ebfec3512c98894a1483ad13f479dd42ed))
* **blocksBasic:** Sanitize html with dompurify. ([83f72a4](https://github.com/lowdefy/lowdefy/commit/83f72a4e2008f4deb1cb29b5d65fb1de11479644))
* **blocksMarkdown:** Split  MarkdownWithCode and Markdown, and add DangerousMarkdown which uses dompurify. ([61ea65b](https://github.com/lowdefy/lowdefy/commit/61ea65b35bd04393cab01de3e9f6a229822001c2))
* **build:** Do not cache block metas if served from localhost. ([58772af](https://github.com/lowdefy/lowdefy/commit/58772af17886570aa8108ce2f04c554f21f80027))
* **docs:** Add _array and _string docs. ([ea2ad05](https://github.com/lowdefy/lowdefy/commit/ea2ad05051e79fa22f1225f891065fcb00df725a))
* **docs:** Add _date, _object and _state docs. ([de2035a](https://github.com/lowdefy/lowdefy/commit/de2035a776336a49b2c94b10d7de77cded1aa354))
* **docs:** Add _input, _global, _media, and _url_query docs. ([9c81963](https://github.com/lowdefy/lowdefy/commit/9c81963ebe27556461f78a78908d9fcd88939329))
* **docs:** Add _ref and _var operators. ([420eef7](https://github.com/lowdefy/lowdefy/commit/420eef7593799e13b7c99072d3fd2f7294ccf42b))
* **docs:** Add _secret, _menu, _get, _event doc pages ([edd5b01](https://github.com/lowdefy/lowdefy/commit/edd5b01dc0fb9a9e60725229dc7006a80cb70908))
* **docs:** Add Alert, Anchor, Avatar and Breadcrumb docs. ([0983607](https://github.com/lowdefy/lowdefy/commit/098360766d95789232050bce9cdfa72ed3405beb))
* **docs:** Add all ColorSelector blocks. ([3913968](https://github.com/lowdefy/lowdefy/commit/3913968620e50e771a21adc452bbc4696b31efab))
* **docs:** Add all Selectors. ([f5e65ab](https://github.com/lowdefy/lowdefy/commit/f5e65ab4068e7c6bd413026b2adecb4e4563761e))
* **docs:** Add block schema transformer ([4cdf891](https://github.com/lowdefy/lowdefy/commit/4cdf89182ce8a81b86a30c84c637ac79e2f5e9ab))
* **docs:** Add blocks for Divider, Menu, Icon, Paragraph, Progress, Skeleton, Statistic. ([a2901ec](https://github.com/lowdefy/lowdefy/commit/a2901ec4b1d29a6973093db877a1ab1e741e4a17))
* **docs:** Add CLI docs page. ([75cc5ba](https://github.com/lowdefy/lowdefy/commit/75cc5babb9d4c3448d38cfb22ce886617016aabf))
* **docs:** Add concepts and next steps. ([f1b8055](https://github.com/lowdefy/lowdefy/commit/f1b80555b6102854b8b7f68450c29d09a0c0d44a))
* **docs:** add concepts docs. ([3b12dc9](https://github.com/lowdefy/lowdefy/commit/3b12dc955edc226fe548c11d5f63d08ae2e3612c))
* **docs:** Add DangerousMarkdown, Markdown, MarkdownWithCode blocks. ([963cfa2](https://github.com/lowdefy/lowdefy/commit/963cfa2ef242ce17650493e1748d87770918d384))
* **docs:** Add date selector docs. ([767f9ac](https://github.com/lowdefy/lowdefy/commit/767f9ac8f3ae0c0ac91bdcd12761c2155b0f5ec8))
* **docs:** Add docs for GoogleSheet connection. ([8d2ff5d](https://github.com/lowdefy/lowdefy/commit/8d2ff5d0dd12064d809989023ff4a2c788b32aa6))
* **docs:** Add docs for TextArea. ([102494e](https://github.com/lowdefy/lowdefy/commit/102494ea422bf980e0b1ab82a2535faab1311605))
* **docs:** Add gutter example to layout docs. ([4929366](https://github.com/lowdefy/lowdefy/commit/492936696ed549078a1b4da32ec29f4c00533e3f))
* **docs:** Add Html and DangerousHtml to docs. ([c6fb602](https://github.com/lowdefy/lowdefy/commit/c6fb6028ca869db960a4b611df18518f9e32ee63))
* **docs:** Add Html block to docs. ([0daff90](https://github.com/lowdefy/lowdefy/commit/0daff90433f74b4132d18d1818bf931593b173ce))
* **docs:** Add Lowdefy schema concept page. ([5d6c78c](https://github.com/lowdefy/lowdefy/commit/5d6c78c6823877f1d75fd0ef4c35d54f760e6d9b))
* **docs:** Add math operator page. ([1c29bda](https://github.com/lowdefy/lowdefy/commit/1c29bdaea2865fc70244526b3d1adaaf6be4618f))
* **docs:** Add NumberInput docs. ([b05cf14](https://github.com/lowdefy/lowdefy/commit/b05cf143fe687f51938019d235710bbbcd750359))
* **docs:** Add operator docs. ([47ad077](https://github.com/lowdefy/lowdefy/commit/47ad0774465261ce3db3f3454660cd3aca0a4ef8))
* **docs:** Add operator docs. ([606346a](https://github.com/lowdefy/lowdefy/commit/606346aeaba441608b8163036f8d395095b61794))
* **docs:** Add operator docs. ([e164d7d](https://github.com/lowdefy/lowdefy/commit/e164d7d4d016218ade6096a85bc97b22733de4e4))
* **docs:** Add optionsSelector displayType. ([572a63d](https://github.com/lowdefy/lowdefy/commit/572a63d5de8a03f4e22d4a523edd118ca8bb6eb0))
* **docs:** Add Pagination to docs. ([83a96ab](https://github.com/lowdefy/lowdefy/commit/83a96ab340d52038ddee03dce554e54af476b7df))
* **docs:** Add RatingSlider to docs. ([f64e363](https://github.com/lowdefy/lowdefy/commit/f64e363691d9e1c8a2ddde92f29c7f5f5d48681e))
* **docs:** Add S3UploadButton docs. ([c024488](https://github.com/lowdefy/lowdefy/commit/c024488b6b4d71e500c480889d1116cd6ef5266f))
* **docs:** Add schemas for connections, requests, action. ([f061f96](https://github.com/lowdefy/lowdefy/commit/f061f9684e5b70b3934db34169b9a4834eb76d9f))
* **docs:** Add Switch block. ([7da2dfb](https://github.com/lowdefy/lowdefy/commit/7da2dfb092e72cc89e2b739ae1db336fed188380))
* **docs:** Add Title block. ([adaa229](https://github.com/lowdefy/lowdefy/commit/adaa229df2e5d9c138770dfe289f9cdb80e9c1b5))
* **docs:** Add TitleInput and ParagraphInput. ([3e5b239](https://github.com/lowdefy/lowdefy/commit/3e5b2393227c579ea957380b78439ff016014385))
* **docs:** Add validation to blocks. ([c841b8a](https://github.com/lowdefy/lowdefy/commit/c841b8a172ad075fc2cca178f152a0d26a6436c7))
* **docs:** Block loading. ([a64c488](https://github.com/lowdefy/lowdefy/commit/a64c4888a6ed256eb2ae2e811c9c0a90e3d46e23))
* **docs:** Context data object init. ([f757eb2](https://github.com/lowdefy/lowdefy/commit/f757eb2c22afcaf9d413aceba10b3cd12c8365ae))
* **docs:** Docs improvements ([529e924](https://github.com/lowdefy/lowdefy/commit/529e92498758abdfec345414723278cb595359f3))
* **docs:** Finalize the Lowdefy introduction. ([938e6fc](https://github.com/lowdefy/lowdefy/commit/938e6fc7b488bc430e29590e39f222098836d9fe))
* **docs:** Init Blocks concept. ([acf7a0c](https://github.com/lowdefy/lowdefy/commit/acf7a0c99e8e52824dbee111d4e2142cf53e075a))
* **docs:** Init docs. ([99cdadd](https://github.com/lowdefy/lowdefy/commit/99cdadd8247b6f114c19d5169d850a445f062bf9))
* **docs:** Make propertiesFormTransformer work with arrays. ([9967d73](https://github.com/lowdefy/lowdefy/commit/9967d731843db28e1181e132d3d5fc7fe057d124))
* **docs:** Move tutorial content from md files to page yaml file ([30f5286](https://github.com/lowdefy/lowdefy/commit/30f528610d8324b49b949119a1f62107d4967883))
* **docs:** Nest layout examples in a Collapse. ([689a8d3](https://github.com/lowdefy/lowdefy/commit/689a8d3d11f731c4348406922c8bda29dc433442))
* **docs:** Overview and operators concepts pages. ([b298dd4](https://github.com/lowdefy/lowdefy/commit/b298dd4104da85dcbee0c78b54b472dfd4feb04f))
* **docs:** TDLR for blocks. ([ef1954b](https://github.com/lowdefy/lowdefy/commit/ef1954b219330457989daa9b778b38f583fab574))
* **docs:** Update actions doc pages. ([ae01776](https://github.com/lowdefy/lowdefy/commit/ae01776b34bda10947160c5adfb98312df156593))
* **docs:** Update blocks concepts. ([19ccf72](https://github.com/lowdefy/lowdefy/commit/19ccf7232e3d0c70724655f204233128eb8a75cd))
* **docs:** Update blocks page template to use transformers ([158539e](https://github.com/lowdefy/lowdefy/commit/158539ef517c4accd35ac3f77830dd43c781bf3c))
* **docs:** Update concepts ([04bfcef](https://github.com/lowdefy/lowdefy/commit/04bfcefe15668c1f702a7351f9dbd32d649ff6bc))
* **docs:** Update Connections and Requests. ([6600773](https://github.com/lowdefy/lowdefy/commit/6600773517669f1824199fafd2d89ecbf893a4ae))
* **docs:** Update context to context-and-state ([d6b0081](https://github.com/lowdefy/lowdefy/commit/d6b00810993b24f460422af92e2745c0fb040cfd))
* **docs:** Update defaultValueTransformer to pull nested defaults from schemas. ([4ecb396](https://github.com/lowdefy/lowdefy/commit/4ecb3962ee9f4091f0e72975d816fa663940d3f8))
* **docs:** Update events-and-actions. ([a09bb11](https://github.com/lowdefy/lowdefy/commit/a09bb114f38d352cda37e26b146d29f0bcbe3923))
* **docs:** Update Layout. ([3d920e6](https://github.com/lowdefy/lowdefy/commit/3d920e61f83531eaff56303e856b6aeddee9685f))
* **docs:** Update operator docs template for methods. ([03be26f](https://github.com/lowdefy/lowdefy/commit/03be26f8feb569bcf12dfc5ac915b93d2d819427))
* **docs:** Update operator docs. ([a31009c](https://github.com/lowdefy/lowdefy/commit/a31009cd7e0a1b6b9020659ef342e7a4f23d71e2))
* **docs:** Update tutorial. ([2c9cb61](https://github.com/lowdefy/lowdefy/commit/2c9cb61c091fc415892d20a34308436145245f62))
* **docs:** Update tutorial. ([b58e95d](https://github.com/lowdefy/lowdefy/commit/b58e95dc1e6d00a6619a5a966d888448dfb962ce))
* **docs:** Use transformer fn to create properties from block schema ([faad65c](https://github.com/lowdefy/lowdefy/commit/faad65cae33e5ea92304a7fa854463a436c2557c))
* **engine:** Add support for meta.initValue to initialize block value from meta. ([5d5307c](https://github.com/lowdefy/lowdefy/commit/5d5307c82a45d7120870fae1c0abc1ea9caf5005))
* **engine:** Rename block actions to events ([bd4f7a7](https://github.com/lowdefy/lowdefy/commit/bd4f7a79e3039d2dcc9a8e0e5663d560cbc6c8bb))
* **graphql:** Rename args object to event. ([e3bb6f5](https://github.com/lowdefy/lowdefy/commit/e3bb6f50a652f76fc2b0fef44229cec5e175f5f1))
* **operators:** Add _event operator. ([a869441](https://github.com/lowdefy/lowdefy/commit/a869441bf6fdd4cf44e6d5c03f74ea466fa6f027))
* **operators:** Add _function operator. ([07f7e6f](https://github.com/lowdefy/lowdefy/commit/07f7e6f68ff90c742bb6fb7403bfc53cb0593cb7))
* **operators:** Add array methods that use functions. ([49f6a93](https://github.com/lowdefy/lowdefy/commit/49f6a9301e793181f7460bcdddd670969c26fd34))
* **operators:** Rename _action_log operator to _event_log ([dd2af60](https://github.com/lowdefy/lowdefy/commit/dd2af60f67fc095d0e5e9583764c174bae9cd062))
* Rename blocks “actions” field to “events”. ([8f2e998](https://github.com/lowdefy/lowdefy/commit/8f2e9986e72be368203c0479a28ad7c7a2511f10))
* **renderer:** Rename actions to events ([134b275](https://github.com/lowdefy/lowdefy/commit/134b2756fd7f544486d9b1f8f5b53fa566fce23f))
* **renderer:** Rename actions to events. ([601ae65](https://github.com/lowdefy/lowdefy/commit/601ae6513e9ed2d8e5b18e3c3321405fad19c281))





# [3.4.0](https://github.com/lowdefy/lowdefy/compare/v3.3.0...v3.4.0) (2021-01-20)


### Bug Fixes

* **block-tools:** Fix test snapshot. ([e70fc5c](https://github.com/lowdefy/lowdefy/commit/e70fc5c1b95cecfc2b1214f59b9ba969640a239c))
* **build:** Fix app schema test tests. ([86917c0](https://github.com/lowdefy/lowdefy/commit/86917c0f79ca75321af5d89e2f29e9328debec50))
* **build:** Fix lowdefy app schema. ([f33c151](https://github.com/lowdefy/lowdefy/commit/f33c151dfbe1a2ea55ead94c0fc6ef2573f34875))
* **graphql:** Add request deserialize tests for entire inputs. ([98cdbd8](https://github.com/lowdefy/lowdefy/commit/98cdbd895bc038ac49e75554fccf3110b9bed504))
* **graphql:** Deserialize request input variables. ([82e8475](https://github.com/lowdefy/lowdefy/commit/82e8475c2757e35adf24d489627738de736984d4))
* **graphql:** Update tests operator error message. ([c534328](https://github.com/lowdefy/lowdefy/commit/c53432827c2ba05ae4cd6ac16d94c1fa108e374a))
* **operators:** getFromObject should copy object if getting entire obj ([32f0cbc](https://github.com/lowdefy/lowdefy/commit/32f0cbcf813376ad48bd50e375065a536e8f0e35))
* **operators:** Update test error message snapshots. ([1b49ba2](https://github.com/lowdefy/lowdefy/commit/1b49ba233110265db8fb26a8f6294e6e4518b46f))
* _lt, _lte, _gt, _gte not to throw on non numerics. ([0bad71d](https://github.com/lowdefy/lowdefy/commit/0bad71d2276cdab85b37bba6ada7e859ec7f51fb))
* Temporarily log parser errors to console. ([a43b386](https://github.com/lowdefy/lowdefy/commit/a43b3860354142815e173fc6875f663e018525c7))


### Features

* **build:** Add licence field to app schema. ([a6f7c91](https://github.com/lowdefy/lowdefy/commit/a6f7c910f629884942424f0f177614ca8c3c45ae))





# [3.3.0](https://github.com/lowdefy/lowdefy/compare/v3.1.1...v3.3.0) (2021-01-18)


### Bug Fixes

* Fix location not defined. ([90f1e25](https://github.com/lowdefy/lowdefy/commit/90f1e25594f5ef9cb8f0a6c75e51809a0cb2da6d))
* Give defaultFunction to runClass and error in undefined methodName. ([38af83b](https://github.com/lowdefy/lowdefy/commit/38af83b3fc8fed64427b79ee17275585151259a8))
* Make all method operators work with runClass and runInstance. ([ef58619](https://github.com/lowdefy/lowdefy/commit/ef58619e87d7dd50d045f7dd04587209f8a7679a))
* Update error message for unsupported method. ([285a6cb](https://github.com/lowdefy/lowdefy/commit/285a6cb9284d0d07e02712004539622484797f8b))
* Update tests in engie to work with new operator format. ([4f626a1](https://github.com/lowdefy/lowdefy/commit/4f626a1c543daa0f6fa3fdb0cd6316d642e49700))
* **deps:** update apollo server packages to v2.19.1 ([#326](https://github.com/lowdefy/lowdefy/issues/326)) ([8b977e3](https://github.com/lowdefy/lowdefy/commit/8b977e363930b2c5b639fd4455751d81e3487570))
* **deps:** update dependency aws-sdk to v2.828.0 ([a94debd](https://github.com/lowdefy/lowdefy/commit/a94debd1781ad749218560076901bde6c2587016))
* **deps:** update dependency axios to v0.21.1 [security] ([99d91ed](https://github.com/lowdefy/lowdefy/commit/99d91edce62a5e7c9d98f94f12bbcc1754cee303))
* **deps:** update dependency axios to v0.21.1 [security] yarn pnp ([69807c2](https://github.com/lowdefy/lowdefy/commit/69807c2e20d4e8b460157aa1a94846606b93dcda))
* **deps:** update dependency chokidar to v3.5.0 ([#329](https://github.com/lowdefy/lowdefy/issues/329)) ([3e79f6f](https://github.com/lowdefy/lowdefy/commit/3e79f6f55419995437210f091d39775d3e6fd47d))
* **deps:** update dependency query-string to v6.13.8 ([17bdbb8](https://github.com/lowdefy/lowdefy/commit/17bdbb8ad2e67dd10c0749beb838090985f0ec66))
* **deps:** Update js-yaml from 3.14.1 to 4.0.0. ([1a9e1f9](https://github.com/lowdefy/lowdefy/commit/1a9e1f9e1057c14a3638bdd140de1b50d2721cd0))
* project operator import typo ([84ea45e](https://github.com/lowdefy/lowdefy/commit/84ea45e0c169194352a716910ecb9a3fc9312114))
* Update runInstance and runClass to cover all function types. ([bc49186](https://github.com/lowdefy/lowdefy/commit/bc491863e311f32fd30f6f46af412d5a09edd6ca))
* **cli:** add dev server port option ([744ce51](https://github.com/lowdefy/lowdefy/commit/744ce51e9f0318211764d12d82c5e47a7f93c09a))
* **deps:** update apollo server packages to v2.19.2 ([68f89d0](https://github.com/lowdefy/lowdefy/commit/68f89d0b9a131bfd031af5a95f9b71b276efa275))
* **deps:** update dependency @apollo/client to v3.3.7 ([390dbb1](https://github.com/lowdefy/lowdefy/commit/390dbb1d75a9225d4cdcb74c68e4b70aebae9d4c))
* **deps:** Update package @wojtekmaj/enzyme-adapter-react-17 to v0.4.1 ([251102e](https://github.com/lowdefy/lowdefy/commit/251102e986b3e18804a8c94dbde2e93d3a7a85e9))
* Change allowed properties and methods to Sets. ([8b91c21](https://github.com/lowdefy/lowdefy/commit/8b91c211806303ec16a07f23fea50836e91e27c6))
* Change to mingo system import file. ([a540435](https://github.com/lowdefy/lowdefy/commit/a540435870977a3274c5a057f08dbbe6dca929f4))
* Evaluate _math using runMethod. ([3f06967](https://github.com/lowdefy/lowdefy/commit/3f06967282a456290907f30586f6e4dcdc7b94b2))
* packages/graphql/package.json to reduce vulnerabilities ([63aab05](https://github.com/lowdefy/lowdefy/commit/63aab0545dacf36d9e1a29c92a73f576565fb081))
* packages/graphql/package.json to reduce vulnerabilities ([942fa1e](https://github.com/lowdefy/lowdefy/commit/942fa1e11fd8b067dffff97319072449b1c7cdc3))
* Rename _base64_encode and _base64_decode to _base64.encode and _base64.decode. ([8ded919](https://github.com/lowdefy/lowdefy/commit/8ded919d17653852ad764d9210a9c0ae020086aa))
* Rename _uri_encode and _uri_decode to _uri.encode and _uri.decode. ([bb0e9b4](https://github.com/lowdefy/lowdefy/commit/bb0e9b4df16fa6ca89c6060d1698db76cd6720e0))


### Features

* Add _diff operator on NodeParser. ([ea65823](https://github.com/lowdefy/lowdefy/commit/ea6582330998834deaeb6d1a5184573fb15700a3))
* Rewrite date to us runClass. ([9fe2698](https://github.com/lowdefy/lowdefy/commit/9fe2698f19b3cc622bb2da95c8c43c9df2a819d8))
* Throw error on _divide by zero. ([3d0047d](https://github.com/lowdefy/lowdefy/commit/3d0047d8f9924d513a6cd0afd617275e4f2234ac))
* **build:** Add transformer function option to _ref. ([27c9114](https://github.com/lowdefy/lowdefy/commit/27c9114678bcc4ba41ed42ef9e1e96a86b76cb28))
* **build:** add vars parameter to transformer function. ([c0782fe](https://github.com/lowdefy/lowdefy/commit/c0782fee22180a178ee647cfc1b700ba394b38cc))
* **cli:** Rename version field in lowdefy.yaml to lowdefy. ([51ed277](https://github.com/lowdefy/lowdefy/commit/51ed277a0525c1fd6eca426f709a50852b764ece))
* Add _array, _object and _string operators. ([39197f7](https://github.com/lowdefy/lowdefy/commit/39197f760119c16ad6036259a30060a3c67f2e82))
* Add _base64_encode and _base64_decode operators. ([25eb55a](https://github.com/lowdefy/lowdefy/commit/25eb55a5cd920bc219d24a25126faf227068e196))
* Add _divide operator. ([cc57d5d](https://github.com/lowdefy/lowdefy/commit/cc57d5dd01879ed019cdc190694fd54e1eb3babc))
* Add _gt, _gte, _lt, _lte operators. ([e9d3bba](https://github.com/lowdefy/lowdefy/commit/e9d3bba6ef12facc16d70d3f1bf6e0c752d0c3ad))
* Add _if_none operator. ([6ee7e42](https://github.com/lowdefy/lowdefy/commit/6ee7e42c27dcdd2def6f73a06fd022d4a67e223c))
* Add _json.parse and _json.stringify to replace _json_parse and _json_stringify. ([b83749f](https://github.com/lowdefy/lowdefy/commit/b83749f7655eb21dcdfed57c2cb968bac45e5227))
* Add _log operator. ([735cea0](https://github.com/lowdefy/lowdefy/commit/735cea080dbb34a0f91f6a3d112bc6e274d1a216))
* Add _math operator. ([9c447f7](https://github.com/lowdefy/lowdefy/commit/9c447f7ebbb4d1824b97c661c65addb7fd5d4c42))
* Add _media operator. ([fc860ad](https://github.com/lowdefy/lowdefy/commit/fc860ad7091b7b7b74c9b347a2674c98daa4feac))
* Add _mql to replace _mql_aggregate, _mql_test, _mql_expr. ([20e16bc](https://github.com/lowdefy/lowdefy/commit/20e16bc2bf18c71b7ae0dac6252966982e7c11b7))
* Add _product operator. ([54704de](https://github.com/lowdefy/lowdefy/commit/54704de97629096118e75f5e19cb38c03024b1c0))
* Add _random operator. ([41d1960](https://github.com/lowdefy/lowdefy/commit/41d19608b437c0cc6b81a530343dea3450b2942c))
* Add _subtract operator. ([0f1c1c6](https://github.com/lowdefy/lowdefy/commit/0f1c1c6d8bf750b78aec38b375dbe18761553dbe))
* Add _sum operator. ([05e5a8d](https://github.com/lowdefy/lowdefy/commit/05e5a8d44098c2433e7c2e60379e3c4f02de25c5))
* Add _uri_encode and _uri_decode operators. ([bdb0eb8](https://github.com/lowdefy/lowdefy/commit/bdb0eb8e49768d9f3b1f969b4503e488a2db340d))
* Add _uuid operator to NodeParser. ([0f562fe](https://github.com/lowdefy/lowdefy/commit/0f562feff59167be3431c04cb1aa65a678eba400))
* Add .env file support for serverDev. ([d533726](https://github.com/lowdefy/lowdefy/commit/d533726993296454d8faa288ca8ea169854ce4b4))
* Add copy option to get. ([9d5b40f](https://github.com/lowdefy/lowdefy/commit/9d5b40f922c95929203b641457231af82d69b6f2))
* Allow method dot notation for operations, and parser performance improvement. ([f0c1711](https://github.com/lowdefy/lowdefy/commit/f0c171179a06152cf756542166c0c37005a7ba29))
* Ignore operator objects with more than one key. ([225a543](https://github.com/lowdefy/lowdefy/commit/225a543a1ecc27b0c624726add3b014d24cec68c))
* Rename _parse to _json_parse, _stringify to _json_stringify, _dump_yaml to _yaml_stringify,  _load_yaml to _yaml_parse. ([ac6eb0a](https://github.com/lowdefy/lowdefy/commit/ac6eb0ab1af02854d93eedfdfb643f0bc664663a))
* Replace _yaml_parse and _yaml_stringify with _yaml.parse and _yaml.stringify. ([d61a316](https://github.com/lowdefy/lowdefy/commit/d61a3165631c97c075b1f8c8f0bf6285d6d8958f))
* Update default block versions to ^3.0.0. ([78f1200](https://github.com/lowdefy/lowdefy/commit/78f1200382f3d2f262ab562c6baf63c68283b692))





# [3.2.0](https://github.com/lowdefy/lowdefy/compare/v3.1.1...v3.2.0) (2021-01-18)


### Bug Fixes

* Fix location not defined. ([90f1e25](https://github.com/lowdefy/lowdefy/commit/90f1e25594f5ef9cb8f0a6c75e51809a0cb2da6d))
* Give defaultFunction to runClass and error in undefined methodName. ([38af83b](https://github.com/lowdefy/lowdefy/commit/38af83b3fc8fed64427b79ee17275585151259a8))
* Make all method operators work with runClass and runInstance. ([ef58619](https://github.com/lowdefy/lowdefy/commit/ef58619e87d7dd50d045f7dd04587209f8a7679a))
* Update error message for unsupported method. ([285a6cb](https://github.com/lowdefy/lowdefy/commit/285a6cb9284d0d07e02712004539622484797f8b))
* Update tests in engie to work with new operator format. ([4f626a1](https://github.com/lowdefy/lowdefy/commit/4f626a1c543daa0f6fa3fdb0cd6316d642e49700))
* **deps:** update apollo server packages to v2.19.1 ([#326](https://github.com/lowdefy/lowdefy/issues/326)) ([8b977e3](https://github.com/lowdefy/lowdefy/commit/8b977e363930b2c5b639fd4455751d81e3487570))
* **deps:** update dependency aws-sdk to v2.828.0 ([a94debd](https://github.com/lowdefy/lowdefy/commit/a94debd1781ad749218560076901bde6c2587016))
* **deps:** update dependency axios to v0.21.1 [security] ([99d91ed](https://github.com/lowdefy/lowdefy/commit/99d91edce62a5e7c9d98f94f12bbcc1754cee303))
* **deps:** update dependency axios to v0.21.1 [security] yarn pnp ([69807c2](https://github.com/lowdefy/lowdefy/commit/69807c2e20d4e8b460157aa1a94846606b93dcda))
* **deps:** update dependency chokidar to v3.5.0 ([#329](https://github.com/lowdefy/lowdefy/issues/329)) ([3e79f6f](https://github.com/lowdefy/lowdefy/commit/3e79f6f55419995437210f091d39775d3e6fd47d))
* **deps:** update dependency query-string to v6.13.8 ([17bdbb8](https://github.com/lowdefy/lowdefy/commit/17bdbb8ad2e67dd10c0749beb838090985f0ec66))
* **deps:** Update js-yaml from 3.14.1 to 4.0.0. ([1a9e1f9](https://github.com/lowdefy/lowdefy/commit/1a9e1f9e1057c14a3638bdd140de1b50d2721cd0))
* project operator import typo ([84ea45e](https://github.com/lowdefy/lowdefy/commit/84ea45e0c169194352a716910ecb9a3fc9312114))
* Update runInstance and runClass to cover all function types. ([bc49186](https://github.com/lowdefy/lowdefy/commit/bc491863e311f32fd30f6f46af412d5a09edd6ca))
* **cli:** add dev server port option ([744ce51](https://github.com/lowdefy/lowdefy/commit/744ce51e9f0318211764d12d82c5e47a7f93c09a))
* **deps:** update apollo server packages to v2.19.2 ([68f89d0](https://github.com/lowdefy/lowdefy/commit/68f89d0b9a131bfd031af5a95f9b71b276efa275))
* **deps:** update dependency @apollo/client to v3.3.7 ([390dbb1](https://github.com/lowdefy/lowdefy/commit/390dbb1d75a9225d4cdcb74c68e4b70aebae9d4c))
* **deps:** Update package @wojtekmaj/enzyme-adapter-react-17 to v0.4.1 ([251102e](https://github.com/lowdefy/lowdefy/commit/251102e986b3e18804a8c94dbde2e93d3a7a85e9))
* Change allowed properties and methods to Sets. ([8b91c21](https://github.com/lowdefy/lowdefy/commit/8b91c211806303ec16a07f23fea50836e91e27c6))
* Change to mingo system import file. ([a540435](https://github.com/lowdefy/lowdefy/commit/a540435870977a3274c5a057f08dbbe6dca929f4))
* Evaluate _math using runMethod. ([3f06967](https://github.com/lowdefy/lowdefy/commit/3f06967282a456290907f30586f6e4dcdc7b94b2))
* packages/graphql/package.json to reduce vulnerabilities ([63aab05](https://github.com/lowdefy/lowdefy/commit/63aab0545dacf36d9e1a29c92a73f576565fb081))
* packages/graphql/package.json to reduce vulnerabilities ([942fa1e](https://github.com/lowdefy/lowdefy/commit/942fa1e11fd8b067dffff97319072449b1c7cdc3))
* Rename _base64_encode and _base64_decode to _base64.encode and _base64.decode. ([8ded919](https://github.com/lowdefy/lowdefy/commit/8ded919d17653852ad764d9210a9c0ae020086aa))
* Rename _uri_encode and _uri_decode to _uri.encode and _uri.decode. ([bb0e9b4](https://github.com/lowdefy/lowdefy/commit/bb0e9b4df16fa6ca89c6060d1698db76cd6720e0))


### Features

* Add _diff operator on NodeParser. ([ea65823](https://github.com/lowdefy/lowdefy/commit/ea6582330998834deaeb6d1a5184573fb15700a3))
* Rewrite date to us runClass. ([9fe2698](https://github.com/lowdefy/lowdefy/commit/9fe2698f19b3cc622bb2da95c8c43c9df2a819d8))
* Throw error on _divide by zero. ([3d0047d](https://github.com/lowdefy/lowdefy/commit/3d0047d8f9924d513a6cd0afd617275e4f2234ac))
* **build:** Add transformer function option to _ref. ([27c9114](https://github.com/lowdefy/lowdefy/commit/27c9114678bcc4ba41ed42ef9e1e96a86b76cb28))
* **build:** add vars parameter to transformer function. ([c0782fe](https://github.com/lowdefy/lowdefy/commit/c0782fee22180a178ee647cfc1b700ba394b38cc))
* **cli:** Rename version field in lowdefy.yaml to lowdefy. ([51ed277](https://github.com/lowdefy/lowdefy/commit/51ed277a0525c1fd6eca426f709a50852b764ece))
* Add _array, _object and _string operators. ([39197f7](https://github.com/lowdefy/lowdefy/commit/39197f760119c16ad6036259a30060a3c67f2e82))
* Add _base64_encode and _base64_decode operators. ([25eb55a](https://github.com/lowdefy/lowdefy/commit/25eb55a5cd920bc219d24a25126faf227068e196))
* Add _divide operator. ([cc57d5d](https://github.com/lowdefy/lowdefy/commit/cc57d5dd01879ed019cdc190694fd54e1eb3babc))
* Add _gt, _gte, _lt, _lte operators. ([e9d3bba](https://github.com/lowdefy/lowdefy/commit/e9d3bba6ef12facc16d70d3f1bf6e0c752d0c3ad))
* Add _if_none operator. ([6ee7e42](https://github.com/lowdefy/lowdefy/commit/6ee7e42c27dcdd2def6f73a06fd022d4a67e223c))
* Add _json.parse and _json.stringify to replace _json_parse and _json_stringify. ([b83749f](https://github.com/lowdefy/lowdefy/commit/b83749f7655eb21dcdfed57c2cb968bac45e5227))
* Add _log operator. ([735cea0](https://github.com/lowdefy/lowdefy/commit/735cea080dbb34a0f91f6a3d112bc6e274d1a216))
* Add _math operator. ([9c447f7](https://github.com/lowdefy/lowdefy/commit/9c447f7ebbb4d1824b97c661c65addb7fd5d4c42))
* Add _media operator. ([fc860ad](https://github.com/lowdefy/lowdefy/commit/fc860ad7091b7b7b74c9b347a2674c98daa4feac))
* Add _mql to replace _mql_aggregate, _mql_test, _mql_expr. ([20e16bc](https://github.com/lowdefy/lowdefy/commit/20e16bc2bf18c71b7ae0dac6252966982e7c11b7))
* Add _product operator. ([54704de](https://github.com/lowdefy/lowdefy/commit/54704de97629096118e75f5e19cb38c03024b1c0))
* Add _random operator. ([41d1960](https://github.com/lowdefy/lowdefy/commit/41d19608b437c0cc6b81a530343dea3450b2942c))
* Add _subtract operator. ([0f1c1c6](https://github.com/lowdefy/lowdefy/commit/0f1c1c6d8bf750b78aec38b375dbe18761553dbe))
* Add _sum operator. ([05e5a8d](https://github.com/lowdefy/lowdefy/commit/05e5a8d44098c2433e7c2e60379e3c4f02de25c5))
* Add _uri_encode and _uri_decode operators. ([bdb0eb8](https://github.com/lowdefy/lowdefy/commit/bdb0eb8e49768d9f3b1f969b4503e488a2db340d))
* Add _uuid operator to NodeParser. ([0f562fe](https://github.com/lowdefy/lowdefy/commit/0f562feff59167be3431c04cb1aa65a678eba400))
* Add .env file support for serverDev. ([d533726](https://github.com/lowdefy/lowdefy/commit/d533726993296454d8faa288ca8ea169854ce4b4))
* Add copy option to get. ([9d5b40f](https://github.com/lowdefy/lowdefy/commit/9d5b40f922c95929203b641457231af82d69b6f2))
* Allow method dot notation for operations, and parser performance improvement. ([f0c1711](https://github.com/lowdefy/lowdefy/commit/f0c171179a06152cf756542166c0c37005a7ba29))
* Ignore operator objects with more than one key. ([225a543](https://github.com/lowdefy/lowdefy/commit/225a543a1ecc27b0c624726add3b014d24cec68c))
* Rename _parse to _json_parse, _stringify to _json_stringify, _dump_yaml to _yaml_stringify,  _load_yaml to _yaml_parse. ([ac6eb0a](https://github.com/lowdefy/lowdefy/commit/ac6eb0ab1af02854d93eedfdfb643f0bc664663a))
* Replace _yaml_parse and _yaml_stringify with _yaml.parse and _yaml.stringify. ([d61a316](https://github.com/lowdefy/lowdefy/commit/d61a3165631c97c075b1f8c8f0bf6285d6d8958f))
* Update default block versions to ^3.0.0. ([78f1200](https://github.com/lowdefy/lowdefy/commit/78f1200382f3d2f262ab562c6baf63c68283b692))
