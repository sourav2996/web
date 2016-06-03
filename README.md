# Edu Spectrum Website

## How to Contribute
- Fork Edu Spectrum's repository.
- On your machine make a clone of the forked repository `git clone https://github.com/yourusername/web.git`.
- On your machine create a new branch on which you will work, `git checkout -b branchname`.
- Make whatever changes/modifications/additions that you want to on your new branch.
- Once you're ready, submit a pull request to merge your changes into the developmene branch of the upstream repository.
- To set the upstream repository run `git add remote upstream https://github.com/EduSpectrum/web.git`.
- Before submitting a Pull Request pull the latest changes from upstream and make sure that your changes do not cause any conflicts. ` git fetch upstream && git merge upstream/development `
- Commit your changes using ` git add * // To add all changed files `. Alternatively do ` git add filename ` to add particular files. Once you've added the files you want to commit, do a ` git commit `. Add a relevant comment stating the purpose of the commit.
- To submit a Pull Request do a `git push`. This will push commits to your forked repository. Then go to the web gui and submit a Pull Request, by choosing the appropriate branches.

## Running the application
- Run ` npm install ` after navigating to the project folder.
- Run ` node bin/www ` and navigate to ` http://localhost:3000 `.
  