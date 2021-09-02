#!/usr/bin/env sh

# window 执行 npm run deploy 会提示bash不是命令。
# 可以使用git来执行deploy.sh文件
# 进入到deploy.sh所在文件夹，右键选择 Git Bash Here，在打开的git命令面板中，输入 sh deploy.sh即可

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd blog

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:heiye1991/heiye1991.github.io.git main

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages


# 返回到上一级
cd ..

# 删除生成的blog文件夹
rm -rf blog
