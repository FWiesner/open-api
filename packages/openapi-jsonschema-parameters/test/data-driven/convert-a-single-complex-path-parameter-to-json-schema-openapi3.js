module.exports = {
  parameters: [
    {
      in: 'path',
      name: 'foo',
      required: true,
      // jsonschema properties
      schema: {
        default: 5,
        example: 6,
        description: 'asdfasdf',
        format: 'asdf',
        type: 'string',
        title: 'fffasdf',
        maximum: 0,
        additionalItems: true,
        items: [{ nullable: true }],
        exclusiveMaximum: true,
        minimum: 5,
        exclusiveMinimum: false,
        maxLength: 5,
        minLength: 6,
        pattern: '^asdf$',
        maxItems: 5,
        minItems: 7,
        uniqueItems: false,
        enum: ['1', '3'],
        multipleOf: 57,
        properties: {
          something: { nullable: true }
        },
        oneOf: [{ nullable: true }],
        allOf: [{ nullable: true }],
        anyOf: [{ nullable: true }],
        not: { nullable: true }
      },
      examples: {
        example1: {
          value: 'asd'
        }
      }
    }
  ],

  outputSchema: {
    path: {
      properties: {
        foo: {
          additionalItems: true,
          default: 5,
          example: 6,
          description: 'asdfasdf',
          type: 'string',
          maximum: 0,
          exclusiveMaximum: true,
          minimum: 5,
          exclusiveMinimum: false,
          format: 'asdf',
          items: [{ anyOf: [{}, { type: 'null' }] }],
          maxLength: 5,
          minLength: 6,
          pattern: '^asdf$',
          title: 'fffasdf',
          maxItems: 5,
          minItems: 7,
          uniqueItems: false,
          enum: ['1', '3'],
          multipleOf: 57,
          properties: {
            something: { anyOf: [{}, { type: 'null' }] }
          },
          oneOf: [{ anyOf: [{}, { type: 'null' }] }],
          allOf: [{ anyOf: [{}, { type: 'null' }] }],
          anyOf: [{ anyOf: [{}, { type: 'null' }] }],
          not: { anyOf: [{}, { type: 'null' }] },
          examples: {
            example1: {
              value: 'asd'
            }
          }
        }
      },
      required: ['foo']
    }
  }
};
