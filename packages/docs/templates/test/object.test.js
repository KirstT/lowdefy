import propertiesFormTransformer from '../blocks/propertiesFormTransformer';
import propertiesGetterTransformer from '../blocks/propertiesGetterTransformer';
import defaultValueTransformer from '../blocks/defaultValueTransformer';

const schema = {
  schema: {
    properties: {
      type: 'object',
      additionalProperties: false,
      properties: {
        field: {
          type: 'object',
          description: 'description',
          properties: {
            str: {
              type: 'string',
              description: 'str description',
            },
            num: {
              type: 'number',
              description: 'num description',
            },
          },
        },
      },
    },
  },
};

test('object propertiesFormTransformer', () => {
  expect(propertiesFormTransformer(schema)).toMatchInlineSnapshot(`
    Array [
      Object {
        "blocks": Array [
          Object {
            "id": "block.properties.field.str",
            "layout": Object {
              "_global": "settings_input_layout",
            },
            "properties": Object {
              "label": Object {
                "align": "right",
                "extra": "str description",
                "span": 8,
              },
              "size": "small",
              "title": "str",
            },
            "required": false,
            "type": "TextInput",
          },
          Object {
            "id": "block.properties.field.num",
            "layout": Object {
              "_global": "settings_input_layout",
            },
            "properties": Object {
              "label": Object {
                "align": "right",
                "extra": "num description",
                "span": 8,
              },
              "size": "small",
              "step": 0.1,
              "title": "num",
            },
            "required": false,
            "type": "NumberInput",
          },
        ],
        "layout": Object {
          "contentGutter": 0,
        },
        "properties": Object {
          "inner": true,
          "size": "small",
          "title": "field:",
        },
        "type": "Card",
      },
    ]
  `);
});

test('object propertiesGetterTransformer', () => {
  expect(propertiesGetterTransformer(schema)).toMatchInlineSnapshot(`
    Object {
      "_object.assign": Array [
        Object {
          "_state": "block.properties",
        },
      ],
    }
  `);
});

test('object defaultValueTransformer', () => {
  expect(defaultValueTransformer(schema)).toMatchInlineSnapshot(`Object {}`);
  const schemaDV = {
    schema: {
      properties: {
        type: 'object',
        additionalProperties: false,
        properties: {
          field: {
            type: 'object',
            default: {
              num: 1,
            },
            description: 'description',
            properties: {
              str: {
                type: 'string',
                description: 'str description',
              },
              num: {
                type: 'number',
                description: 'num description',
              },
            },
          },
        },
      },
    },
  };
  expect(defaultValueTransformer(schemaDV)).toMatchInlineSnapshot(`
    Object {
      "field": Object {
        "num": 1,
      },
    }
  `);
});
