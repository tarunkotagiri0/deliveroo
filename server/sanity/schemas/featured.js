export default {
    name: "featured",
    type: "document",
    title: "Featured Menu Categories",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Name of the dish",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "short_description",
            type: "string",
            title: "Short Description",
            validation: (Rule) => Rule.max(200),
        },
        {
            name: "restuarants",
            type: "array",
            title: "Restuarants",
            of: [{
                type: "reference", to: [{
                    type: "restuarant"
                }]
            }]

        }
    ]
}