const webService = {
    sns: {
        twitter: {
            users: [
                {
                    name: 'Tom',
                    email: 'tom@gmail.com'
                },
                {
                    name: 'Bob',
                    email: 'bob@gmail.com'
                }
            ]
        },
        facebook: {
            users: [
                {
                    name: 'Kenny',
                    email: 'kenny@gmail.com'
                },
                {
                    name: 'Matt',
                    email: 'matt@gmail.com'
                }
            ]
        }
    }
}

console.log(webService.sns.twitter.users[0].email);
// => tom@gmail.com