export const resolvers = {
    Query: {
        person: (_, { input }, ctx) => {
            return ctx.Person.findOne(input)
        },
        people: (_, { input }, ctx) => {
            return ctx.Person.find({})
        },
    },
    Mutation: {
        newPerson: (_, { input, parents }, ctx) => {
            const newPerson = ctx.Person.findOneAndUpdate(
                input,
                { parents },
                {
                    new: true,
                    upsert: true,
                }
            )
            return newPerson
        },
        removeAll: (_, __, ctx) => {
            console.log('reset DB')
            return ctx.Person.deleteMany({})
        },
    },
    Person: {
        parents(person, _, ctx) {
            return ctx.Person.find({
                _id: { $in: person.parents },
            })
        },
        father(person, _, ctx) {
            return ctx.Person.findOne({ _id: person.father })
        },
    },
}
