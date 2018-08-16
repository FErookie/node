nodejs 核心模块(实例推荐跑在chrome上)

    1 http模块(见http文件夹)
        传统的http服务器使用apache nginx iis 之类的软件来进行构建 但是在node中使用http模块
    就可以构建服务器
        1-1 创建一个简单的node服务器 例子1-1 1-2 两个例子的作用是相同的 （具体的参数的含义我写在http1_1.js中）其实第二个中的 on方法 + 回调 
    我觉得看起来更明白 这之后我们把req相关的所有知识点写一个http1_3.js这个文件将会输出请求的各个部分的详细结果
        1-2 客户端向http服务器发送请求(具体见实例1-4 1-5 1-6) 我们使用的方法有http.request(option , callback):option 为json对象 主要字段有host port（默认是80端口）
    method（默认是GET） path（请求的相对于根的路径 默认是"/"） headers等 该方法返回一个httpClientRequest实例 | http.get(option , callback):
    使用http请求方式GET的简便方法
    2 url模块(同上)
        url模块主要提供三个方法 url.parse() 解析一个url地址 返回一个url对象 | url.formate() 接受url对象 返回地址 | url.resolve 接受一个base url 和一个 href url 像
    浏览器一样解析 返回完整地址 
           