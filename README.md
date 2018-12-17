# vue-elm

Vue.js 高仿饿了么外卖 App

## 你可以学到什么
我们可以通过一张图来认识一下本课程的知识结构

![vue-sell](https://webapp.didistatic.com/static/webapp/shield/vue-sell.png)

# 运行
npm install

npm run dev

# 部署
npm run build

nginx配置

```
server {
        listen 9000;
        server_name locaslhost;

        location / {
           root project/vue-elm;
           index index.html;
        }
        location /api {
            proxy_pass http://ustbhuangyi.com/sell/api;
        }

    }
```

## 演示地址

http://47.97.163.47:9000/
