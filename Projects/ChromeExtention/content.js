(function() {
    const currentUrl = window.location.href;
    if(currentUrl.includes('.com')) {
        const githubUrlPattern = /^https:\/\/github\.com\/(.+)/;
    
        if (githubUrlPattern.test(currentUrl)) {
            const newUrl = currentUrl.replace(githubUrlPattern, 'https://github.dev/$1');
            window.location.replace(newUrl);
        }
    } else {
        const githubUrlPattern = /^https:\/\/github\.dev\/(.+)/;
    
        if (githubUrlPattern.test(currentUrl)) {
            const newUrl = currentUrl.replace(githubUrlPattern, 'https://github.com/$1');
            window.location.replace(newUrl);
        }
    }
})();
