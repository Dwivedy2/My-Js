(function() {
    const currentUrl = window.location.href;
    const githubUrlPattern = /^https:\/\/github\.com\/(.+)/;

    if (githubUrlPattern.test(currentUrl)) {
        const newUrl = currentUrl.replace(githubUrlPattern, 'https://github.dev/$1');
        window.location.replace(newUrl);
    }
})();
