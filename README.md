### Learnings - Git Secret

Link: https://git-secret.io

### Prerequisites

- git-secret: install through homebrew (Mac)

#### Steps

1. To start using *git-secret*, to initialize "git-secret"
	```bash
	git secret init
	```

1. To create your own gpg key (redo this for different repo)
	```bash
	gpg --gen-key
	```
1. Add first user (yourself) to git-secret repo keyring
	```bash
	git secret tell your-gpg@email.com
	```

1. Start adding sensitive file(s) by doing
	```bash
	git secret add directoy/to/file.name
	```

1. Once added file(s) are ready to be pushed to Github, do
	```bash
	git secret hide
	```