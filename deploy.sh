npm run build

result=`pm2 ls |grep -w 'ssr+node'`
if [ -n "$result" ];then
  pm2 delete ssr+node
fi

pm2 start pm2.json --env production