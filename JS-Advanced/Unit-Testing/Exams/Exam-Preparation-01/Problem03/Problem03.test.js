const expect = require('chai').expect
let { Repository } = require("./Problem03.js");

describe("Tests …", function () {
    let properties = {
        name: "string",
        age: "number",
        birthday: "object"
    };

    let repository = new Repository(properties);

    let entity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };

    let entityUpd = {
        name: "Pesho1",
        age: 23,
        birthday: new Date(1999, 0, 7)
    };

    describe("Test1", function () {

        it("Additional", function () {
            expect(repository).to.have.property('props');
            expect(repository.props).to.deep.equal(properties);
            expect(repository).to.have.property('data');
            expect(repository.data).to.be.instanceOf(Map);
        });

        it("count & add", function () {
            expect(repository.count).to.be.equal(0);
            expect(repository.add(entity)).to.be.equal(0);
            expect(repository.count).to.be.equal(1);
            expect(repository.add(entity)).to.be.equal(1);
        });



        it("get", function () {
            expect(repository.getId(0)).to.deep.equal(entity);
            expect(repository.getId(1)).to.deep.equal(entity);
            expect(() => repository.getId(2)).to.throw(Error, 'Entity with id: 2 does not exist!')
            expect(() => repository.getId(-1)).to.throw(Error, 'Entity with id: -1 does not exist!')
            expect(() => repository.getId(true)).to.throw(Error, 'Entity with id: true does not exist!')
        });

        it("add missing", function () {
            
            expect(() => repository.add({age: 22, birthday: new Date(1998, 0, 7) }))
            .to.throw(Error, 'Property name is missing from the entity!')

            expect(() => repository.add({ name: "Pesho", birthday: new Date(1998, 0, 7) }))
            .to.throw(Error, 'Property age is missing from the entity!')

            expect(() => repository.add({ name: "Pesho", age: 22 }))
            .to.throw(Error, 'Property birthday is missing from the entity!')

        });
        it("incorrect type", function () {
            
            expect(() => repository.add({ name: true, age: 22, birthday: new Date(1998, 0, 7) }))
            .to.throw(TypeError, 'Property name is not of correct type!')

            expect(() => repository.add({ name: "Pesho", age: '22', birthday: new Date(1998, 0, 7) }))
            .to.throw(TypeError, 'Property age is not of correct type!')

            expect(() => repository.add({ name: "Pesho", age: 22, birthday: 123 }))
            .to.throw(TypeError, 'Property birthday is not of correct type!')

        });
        it("Update", function () {
            
            expect(() => repository.update(2, { name: "Pesho", age: 22, birthday: new Date(1998, 0, 7) }))
            .to.throw(Error, 'Entity with id: 2 does not exist!')
            expect(() => repository.update(-1, { name: "Pesho", age: 22, birthday: new Date(1998, 0, 7) }))
            .to.throw(Error, 'Entity with id: -1 does not exist!')
            expect(() => repository.update('0', { name: "Pesho", age: 22, birthday: new Date(1998, 0, 7) }))
            .to.throw(Error, 'Entity with id: 0 does not exist!')

            expect(() => repository.update(0, { name: true, age: 22, birthday: new Date(1998, 0, 7) }))
            .to.throw(TypeError, 'Property name is not of correct type!')

            expect(() => repository.update(0, { name: "Pesho", age: '22', birthday: new Date(1998, 0, 7) }))
            .to.throw(TypeError, 'Property age is not of correct type!')

            expect(() => repository.update(0, { name: "Pesho", age: 22, birthday: 123 }))
            .to.throw(TypeError, 'Property birthday is not of correct type!')
            repository.update(0, entityUpd)
            expect(repository.getId(0)).to.deep.equal(entityUpd);

        });
        it("Delete", function () {
            
            expect(() => repository.del(2)).to.throw(Error, 'Entity with id: 2 does not exist!')
            expect(() => repository.del(-1)).to.throw(Error, 'Entity with id: -1 does not exist!')
            expect(() => repository.del('0')).to.throw(Error, 'Entity with id: 0 does not exist!')
            expect(() => repository.del(true)).to.throw(Error, 'Entity with id: true does not exist!')
            repository.del(0)
            expect(repository.count).to.be.equal(1);
            expect(() => repository.getId(0)).to.throw(Error, 'Entity with id: 0 does not exist!')
            expect(() => repository.update(0, { name: "Pesho", age: 22, birthday: new Date(1998, 0, 7) }))
            .to.throw(Error, 'Entity with id: 0 does not exist!')
        });
    });
});
