class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];

    }
    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        if (!this.possibleArticles[articleModel]) {
            throw new Error('This article model is not included in this gallery!');
        }
        let art = this.listOfArticles.filter(e => e.articleModel === articleModel && e.articleName === articleName)[0];
        if (art) {
            art.quantity += quantity;
        } else {
            this.listOfArticles.push({ articleModel, articleName, quantity })
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }
    inviteGuest(guestName, personality) {

        let guest = this.guests.filter(e => e.guestName === guestName)[0];

        if (guest) {
            throw new Error(`${guestName} has already been invited.`);
        }

        let points = 50;
        switch (personality) {
            case "Vip":
                points = 500;
                break;
            case "Middle":
                points = 250;
                break;
        }

        this.guests.push({ guestName, points, purchaseArticle: 0 })
        return `You have successfully invited ${guestName}!`
    }
    buyArticle(articleModel, articleName, guestName) {
        articleModel = articleModel.toLowerCase();
        let art = this.listOfArticles.filter(e => e.articleModel === articleModel && e.articleName === articleName)[0];
        if (!art) {
            throw new Error('This article is not found.')
        }
        if (art.quantity === 0) {
            return `The ${articleName} is not available.`
        }
        let guest = this.guests.filter(e => e.guestName === guestName)[0];
        if (!guest) {
            return `This guest is not invited.`
        }
        if (guest.points < this.possibleArticles[articleModel]) {
            return `You need to more points to purchase the article.`
        }
        guest.points -= this.possibleArticles[articleModel];
        art.quantity--
        guest.purchaseArticle++
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
    }
    showGalleryInfo(criteria) {
        let result = ''
        switch (criteria) {
            case 'article':
                result = `Articles information:`
                let articles = this.listOfArticles;
                for (let index = 0; index < articles.length; index++) {
                    result += `\n${articles[index].articleModel} - ${articles[index].articleName} - ${articles[index].quantity}`
                }
                break;
            case 'guest':
                result = `Guests information:`
                let guests = this.guests;
                for (let index = 0; index < guests.length; index++) {
                    result += `\n${guests[index].guestName} - ${guests[index].purchaseArticle}`
                }
                break;

        }

        return result
    }
}



const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));

//Articles information:
//picture - Mona Liza - 3
//item - Ancient vase - 1
//Guests information:
//John - 1
//Peter - 1

