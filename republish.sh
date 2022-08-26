#!bin/bash
npm run build
rm -rf docs
mv build docs
git add .
git commit -m "add google tag"
git push
