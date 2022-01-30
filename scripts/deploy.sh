#!/usr/bin/env bash

set -eu

repo_uri="https://x-access-token:${DEPLOY_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"
remote_name="origin"
main_branch="master"
target_branch="gh-pages"
build_dir="public"
build_publish_dir="docs"

cd "$GITHUB_WORKSPACE"

git config user.name "$GITHUB_ACTOR"
git config user.email "${GITHUB_ACTOR}@bots.github.com"

git fetch
git checkout "$target_branch"

npm ci
npm run clean
rm -rf ./$build_publish_dir

git pull
git merge "${remote_name}/${main_branch}" --allow-unrelated-histories --strategy-option theirs

npm run build
mv ./$build_dir ./$build_publish_dir
git add "$build_publish_dir" -f

git commit -m "updated GitHub Pages"
if [ $? -ne 0 ]; then
    echo "nothing to commit"
    exit 0
fi

git remote set-url "$remote_name" "$repo_uri" # includes access token
git push --force-with-lease "$remote_name" "$target_branch"