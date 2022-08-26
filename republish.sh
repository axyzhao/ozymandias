#!bin/bash
npm run build
mv build docs
git add .
git commit -m "resize"
git push
