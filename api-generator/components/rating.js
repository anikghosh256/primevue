const RatingProps = [
    {
        name: 'modelValue',
        type: 'number',
        default: 'null',
        description: 'Value of the rating.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the element should be disabled.'
    },
    {
        name: 'readonly',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that component is read-only.'
    },
    {
        name: 'stars',
        type: 'number',
        default: '5',
        description: 'Number of stars.'
    },
    {
        name: 'cancel',
        type: 'boolean',
        default: 'true',
        description: 'When specified a cancel icon is displayed to allow clearing the value.'
    },
    {
        name: 'onIcon',
        type: 'string',
        default: 'pi pi-star',
        description: 'Icon for the on state.'
    },
    {
        name: 'offIcon',
        type: 'string',
        default: 'pi pi-star-fill',
        description: 'Icon for the off state.'
    },
    {
        name: 'cancelIcon',
        type: 'string',
        default: 'pi pi-ban',
        description: 'Icon for the cancelable state.'
    }
];

const RatingEvents = [
    {
        name: 'change',
        description: 'Callback to invoke on value change.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'number',
                description: 'Selected option value'
            }
        ]
    },
    {
        name: 'focus',
        description: 'Callback to invoke when component receives focus.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'blur',
        description: 'Callback to invoke when component loses focus.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            }
        ]
    }
];

const RatingSlots = [
    {
        name: 'cancelicon',
        description: 'Custom cancel icon template.'
    },
    {
        name: 'onicon',
        description: 'Custom on icon template.'
    },
    {
        name: 'officon',
        description: 'Custom off icon template.'
    }
];

module.exports = {
    rating: {
        name: 'rating',
        description: 'Rating component is a star based selection input.',
        props: RatingProps,
        events: RatingEvents,
        slots: RatingSlots
    }
};
