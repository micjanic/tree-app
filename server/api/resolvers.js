export const resolvers = {
    Query: {
        person: (_, { input }, ctx) => {
            return ctx.Person.findOne(input)
        },
        people: (_, { input }, ctx) => {
            return ctx.Person.find(input)
        },
    },
    Mutation: {
        updatePerson: async (_, { input }, ctx) => {},
        removePerson: async (_, { input }, ctx) => {
            const findPerson = await ctx.Person.findOne(input)

            const removeMothers = await ctx.Person.updateMany(
                { mother: findPerson.id },
                { $unset: { mother: '' } }
            )
            const removeFathers = await ctx.Person.updateMany(
                { father: findPerson.id },
                { $unset: { father: '' } }
            )

            return await ctx.Person.deleteOne(findPerson)
            //console.log(findPerson)
            //console.log(person)

            //return findPerson
        },
        newPerson: async (_, { input, mother, father }, ctx) => {
            const updateParents = {}
            mother &&
                (await ctx.Person.findOneAndUpdate(
                    {
                        firstName: mother.firstName,
                        lastName: mother.lastName,
                    },
                    mother,
                    {
                        new: true,
                        upsert: true,
                    }
                ).then((mother) => (updateParents.mother = mother.id)))

            father &&
                (await ctx.Person.findOneAndUpdate(
                    {
                        firstName: father.firstName,
                        lastName: father.lastName,
                    },
                    father,
                    {
                        new: true,
                        upsert: true,
                    }
                ).then((father) => (updateParents.father = father.id)))

            const newPerson = await ctx.Person.findOneAndUpdate(
                { firstName: input.firstName, lastName: input.lastName },
                { ...updateParents, ...input },
                { new: true, upsert: true }
            )

            const addChildrenToParents = await ctx.Person.updateMany(
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
        birthday(person, _, ctx) {
            const date = new Date(person.birthday)
            var strArray = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
            ]

            const d = date.getDate()
            const m = strArray[date.getMonth()]
            const y = date.getFullYear()

            return d && m && y && `${m} ${d}, ${y}`
        },
        currentAge(person, _, ctx) {
            return (
                new Date().getFullYear() -
                new Date(person.birthday).getFullYear()
            )
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
        siblings(person, _, ctx) {
            const getSiblingIds = ctx.Person.find({
                children: person.id,
            }).then((parents) =>
                ctx.Person.find({
                    _id: {
                        $in: parents
                            .map((parent) =>
                                parent.children.filter(
                                    (child) => child !== person.id
                                )
                            )
                            .flat(),
                    },
                })
            )

            return getSiblingIds
        },
    },
}
