/* eslint-disable no-unused-vars */
const users = [{
    ID: 1,
    username: 'arifulalam',
    fullname: 'Ariful Alam',
    dob: '1985-01-09',
    email: 'ariful-alam@hotmail.com',
}];

const posts = [{
    ID: 1,
    title: 'Post #1',
    authorId: 1,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
    anim id est laborum.`,
    createdOn: '2024-06-01',
    isPublished: true,
},{
    ID: 2,
    title: 'Post #2',
    authorId: 1,
    content: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
    ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure 
    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
    anim id est laborum.`,
    createdOn: '2024-06-05',
    isPublished: true,
},{
    ID: 3,
    title: 'Post #3',
    authorId: 1,
    content: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
    officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    createdOn: '2024-06-07',
    isPublished: true,
}];

const comments = [{
    ID: 1,
    authorId: null,
    postId: 1,
    name: 'Arshad',
    email: 'arshad@mail.com',
    comment: `Dugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
    qui officia deserunt mollit anim id est laborum.`,
    commentedOn: '2024-06-03',
},{
    ID: 2,
    authorId: null,
    postId: 2,
    name: 'Arshad',
    email: 'arshad@mail.com',
    comment: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.`,
    commentedOn: '2024-06-06',
},{
    ID: 3,
    authorId: null,
    postId: 1,
    name: 'Sajjad',
    email: 'sajjad@mail.com',
    comment: `Excepteur sint occaecat cupidatat non proident, sunt in culpa 
    qui officia deserunt mollit anim id est laborum.`,
    commentedOn: '2024-06-03',
},{
    ID: 4,
    authorId: null,
    postId: 3,
    name: 'Farhad',
    email: 'farhad@mail.com',
    comment: `Voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa.`,
    commentedOn: '2024-06-08',
},{
    ID: 5,
    authorId: null,
    postId: 2,
    name: 'Sajjad',
    email: 'sajjad@mail.com',
    comment: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
    qui officia deserunt mollit anim id est laborum.`,
    commentedOn: '2024-06-10',
}];

export {users, posts, comments}