const users = [
    {
        firstName: 'Tech',
        lastName: 'Global',
        email: 'tech.global@techglobal.com',
        age: 3,
        address: {
            street_line_1: '2800 S River Rd',
            street_line_2: 'Suite 310',
            city: 'Des Plaines',
            state: 'IL',
            zip: '60018'
        }
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        age: 47,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@gmail.com',
        age: 30,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Alex',
        lastName: 'Smith',
        email: 'alexsmith@outlook.com',
        age: 32,
        address: {
            street_line_1: '456 Xyz St',
            street_line_2: '',
            city: 'Miami',
            state: 'Florida',
            zip: '67890'
        }
    }
  ];

  // Count how many users are older then 30

const olderThan30 = users.reduce((counter, user) => user.age > 30 ? counter + 1 : counter, 0)
  console.log(olderThan30)

// count how many live in chicago
  const countChicago = users.reduce((counter, user) => user.address.city === 'Chicago' ? counter + 1 : counter, 0)
  console.log(countChicago)

  // count how many users emails have gmail domain
  const countDomains = users.reduce((counter, user) => user.email.includes('@gmail') ? counter + 1 : counter, 0)
  console.log(countDomains)

  // find and store all the users name younger than 35
  const arr = []
  for(const user of users) {
    if(user.age < 35) {
        arr.push(user.firstName)
    }
  }
  console.log(arr)

  // find average of ages of all users
const averageOfAges = ((users.reduce((count, user) => count + user.age), 0) / users.length) 

console.log(averageOfAges)


const appleStore = [
    {
        productName: "iPhone 14 Pro",
        quantity: 50,
        price: 1099.99,
    },
    {
        productName: "MacBook Pro 16-inch",
        quantity: 30,
        price: 2399.99,
    },

    {
        productName: "iPad Air",
        quantity: 75,
        price: 599.99,
    },
    {
        productName: "Apple Watch Series 7",
        quantity: 100,
        price: 399.99,
    },
    {
        productName: "AirPods Pro",
        quantity: 200,
        price: 249.99,
    },
];

// find the most expenseive product 





