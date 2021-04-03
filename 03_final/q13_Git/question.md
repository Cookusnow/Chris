## Git Question A:

You have committed and pushed a bad change to your git repo.  How can you fix it (give exact command)?
Consider how to do this without destroying history, since others might have pulled your bad change and based their changes on yours?  What would this command do?

## Git Question B:

How do you delete a local branch after completing work on it.  How would you delete a remote branch?

### Answer:

1. Click 'Git History' > Right Click on the commit to revert > Select 'Revert Commit' > Make sure 'commit the changes' is checked > click revert
    This undoes changes by creating a new commit

2. a. $ git branch -d <local-branch>
   b. $ git push origin --delete <remote-branch-name>