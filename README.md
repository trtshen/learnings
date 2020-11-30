### Learnings - Git Secret

Link: https://git-secret.io

### Prerequisites

- git-secret: install through homebrew (Mac)

#### Steps (to setup git-secret in your project)

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

#### Steps (to use git-secret as team member)
1. Reveal encrypted file(s): Password is required
	```bash
	git secret reveal
	```

1. Encrypt tracked file(s) before commit
	```bash
	git secret hide
	```

1. Find the list of encrypted file(s)
	```bash
	git secret list
	```

1. Find who has access to the encrypted file(s)
	```bash
	git secret whoknows
	```

#### Steps (adding new user to git-secret keyring)

1. Get public key exported from other user, they'll need to run this command in his machine
	```bash
	#assuming he/she has gpg key added earlier
	gpg --export their.email@address.com --armor > their-public-key.gpg
	```

1. Download and import their key (Purpose: sharing secret with them, so they can see files encrypted under your key)
	```bash
	gpg --import their-public-key.gpg
	```

1. Commit `.gitsecret` changes, then everyone start coding
