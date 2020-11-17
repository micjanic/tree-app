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
        newPerson: async (_, { input, mother, father }, ctx) => {
            const newPerson = await ctx.Person.findOneAndUpdate(
                input,
                {
                    mother: await ctx.Person.findOneAndUpdate(
                        mother,
                        {},
                        {
                            new: true,
                            upsert: true,
                        }
                    ).then((mother) => mother.id),
                    father: await ctx.Person.findOneAndUpdate(
                        father,
                        {},
                        {
                            new: true,
                            upsert: true,
                        }
                    ).then((father) => father.id),
                },
                { new: true, upsert: true }
            )
            const updateParents = await ctx.Person.updateMany(
                { _id: { $in: [newPerson.mother, newPerson.father] } },
                { $addToSet: { children: newPerson.id } }
            )
            return newPerson
        },
        removeAll: (_, __, ctx) => {
            console.log('reset DB')
            return ctx.Person.deleteMany({})
        },
    },
    Person: {
        father(person, _, ctx) {
            return ctx.Person.findOne({ _id: person.father })
        },
        mother(person, _, ctx) {
            return ctx.Person.findOne({ _id: person.mother })
        },
        parents(person, _, ctx) {
            return ctx.Person.find({
                _id: { $in: [person.father, person.mother] },
            })
        },
        children(person, _, ctx) {
            return ctx.Person.find({
                _id: { $in: person.children },
            })
        },
        children(person, _, ctx) {
            return ctx.Person.find({
                _id: { $in: person.children },
            })
        },
    },
}
