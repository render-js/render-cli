export default [{
        type: 'input',
        name: 'Author',
        message: 'The author of the project',
        default: 'Anonymous'
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Email of author',
        default: 'Anonymous'
    },
    {
        type: 'input',
        name: 'License',
        message: 'The license that your project choose to use',
        choices: ['apache-2.0', 'MIT'],
        default: 'MIT'
    },
    {
        type: 'input',
        name: 'version',
        message: "Define your project's version",
        default: "1.0.0"
    },
    {
        type: 'input',
        name: 'description',
        message: "Your project's description",
        default: "Anonymous"
    }
];