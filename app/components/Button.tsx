import GitHubButton from 'react-github-btn'

const GithubButton = () => {
  return (
        <>
<GitHubButton
          href="https://github.com/eduardconstantin/doticons"
          data-color-scheme="no-preference: light; light: light; dark: dark;"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star doticons collection on GitHub"
        >Star</GitHubButton>
        </>
  );
};

export default GithubButton;