# JS-SPA


## Git Setup

__Create a new repository on the command line__
> echo "# JS-SPA" >> README.md
>
> git init
>
> git add README.md
>
> git commit -m "first commit"
>
> git branch -M main
>
> git remote add origin https://github.com/pedrovcunha/JS-SPA.git
>
> git push -u origin main

__Or push an existing repository from the command line__
> git remote add origin https://github.com/pedrovcunha/JS-SPA.git
>
> git branch -M main
>
> git push -u origin main


Run the following command to explicitly set your local main branch to track origin/main:

```sh
git branch --set-upstream-to=origin/main main
```

__git branch -M main__
The -M flag renames the current branch to main, forcing the rename if the branch already exists.

Equivalent to:
```sh
git branch -m main
```
__-u__

```sh
git push -u origin main
```

- The -u (or --set-upstream) flag sets upstream tracking, linking your local main branch to origin/main on GitHub.
- After this, you can simply run git push or git pull without specifying the branch.
