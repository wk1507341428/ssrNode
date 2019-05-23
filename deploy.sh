# npm run build

if [ $1 = "uat" ];then
	npm run build:uat
else
	npm run build
fi

result=`pm2 ls |grep -w 'ssr+node'`
if [ -n "$result" ];then
  	pm2 delete ssr+node
fi

pm2 start pm2.json --env $1