MAIN
####

git branch // list all branches
git branch <name> // create new cranch // does not move HEAD
git branch -f <name> <into> // create branch at specified commit // or move existing branch

git checkout <into> // use to move HEAD
git checkout -b <name> // combine git branch <name> and git checkout <name>

git merge <what> //  always into currently checked out branch, with new commit // only 1 argument
git rebase <into> (<what>) // <what> moves HEAD to that branch // moves diff commits on top of <into>

relative reference/ancestors: ^(^^...) and ~<number> // can be added to a branch/commit reference or HEAD
^<number> to specify which parent when there is upstream branching // these can be chained

git reset <into> // local only - moves HEAD back to <into>
git revert <what> // creates new commits and moves HEAD forward

git cherry-pick <commit> (<commit2> ...)
git rebase -i <into> (<what>) // <what> moves HEAD to that branch // moves diff commits on top of <into>

git commit --amend // combine with cherry-pick or rebase to amend older commits

git tag <name> (<what>) // checkout into tag detaches HEAD // delete with: -d <name>
git describe (<what>) // default is HEAD // gets closest ancestor tag, distance (if > 0), and current commit hash
	// produces error if no tags upstream

REMOTE
######

git clone <from> (<into>) // <from> is a repository url and <into> is an optional directory name
	// creates remote-tracking branches for each branch in the cloned repository

git branch --remote // display remote tracking branches: <remote>/<branch> // commiting on these detaches HEAD

git fetch (<remote>) (<branch>) // default <remote> is origin 
	// download commits from <remote> and update remote tracking branch positions
	// works if current branch doesn't have remote tracking (unlike pull)

git pull (<remote>) (<branch>) // combine git fetch and merge
git pull --rebase (<remote>) (<branch>) // combine git fetch and rebase

git push (<remote>) (<branch>) // default <remote> is origin 
	// upload commits to <remote> and update remote tracking branch positions
	// does not work if the remote and local branches have diverged
	// solution: fetch, rebase or merge into the remote branch, push - same as: pull and push

git checkout -b <name> <remote branch> // create and switch to new branch that is linked to the specified remote branch
git branch -u <remote branch> (<name>) // link the current branch (or specify by <name>) to the specified remote branch

git push <remote> <source>:<destination> // push any commit into any remote branch (<source>:<destination> is a "colon refspec")

git fetch <remote> <source>:<destination> // fetch any remote commit into any local branch // source is the remote here!
git pull <remote> <source>:<destination> // pull any remote commit into any local branch // source is the remote here!

git push <remote> :<destination> // when there is no <source> push will delete the remote branch

git fetch <remote> :<destination> // when there is no <source> fetch will create a new local branch