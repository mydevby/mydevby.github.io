var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/mydevby/mydevby.github.io', // Update to point to your repository  
        user: {
            name: 'mydevby', // update to use your name
            email: 'mydev.by@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
