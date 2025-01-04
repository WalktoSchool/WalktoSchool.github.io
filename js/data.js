export default {
    index: {
        title: "你好，我是",
        me: [
            "臧恒",
            "嵌入式软件开发实习生",
            "嵌入式狂热粉"
        ],
        bg: "./images/bg.jpg",
        subTitle: "即使前方的路看似绝境，也要有硬生生给自己开出一条路的勇气",
        contact: [
            {
                name: "Email",
                icon: "fa-envelope",
                link: "mailto:1433110833@qq.com"
            },
            {
                name: "Github",
                icon: "fa-github",
                link: "https://github.com/WalktoSchool"
            },
            {
                name: "WeChat",
                icon: "fa-weixin",
                link: ""
            },
            {
                name: "QQ",
                icon: "fa-qq",
                link: "tencent://AddContact/?fromId=50&fromSubId=1&subcmd=all&uin=1433110833"
            }
        ],
        loadMore: {
            text: "了解更多",
            class: "lovexhj2"
        }
    },
    
    project: {
        title: "我的项目",
        list: [{
                name: "安防监控",
                text: "这款设备可通过网页远程监控和控制家中的设施。",
                nb: [
                    "C", "Linux", "itop-4412", "HTML", "CSS", "JS"
                ],
                url: "http://9400cu689qe6.vicp.fun",
                img: "./images/anfang/fengmian2.png",
                content: `<h2>项目平台</h2>
                <p>Ubuntu 5.4.0-6ubuntu1~16.04.12</p>
                <h2>开发周期</h2>
                <p>2024年9月1日 – 2024年10月1日，1人/30天</p>
                <h2>开发工具</h2>
                <p>Visual Studio、Vim、SecureCRT、FileZilla Client、Git、arm-linux-gnueabihf-gcc</p>
                <h2>项目背景</h2>
                <p>只需在家中安装摄像头，即可随时随地登录网页，查看监控内容，还可以远程遥控家中设备，方便生活。</p>
                <h2>模块介绍</h2>
                <p>1、网页端：采用html、css、javascript编写前端页面；</p>
                <p>2、服务器：采用适配嵌入式设备的轻量级服务器boa，将静态页面部署在主机的80端口；</p>
                <p>3、数据采集端：通过罗技C920摄像头采集图像，实现监控；</p>
                <p>4、主控设备：搭载arm-a9的itop-4412开发板作为主控设备；</p>
                <p>5、接入点：采用搭载cc2530的zigbee模块作为接入点，可以实现与主控设备见的无线通信和信号传输；</p>
                <h2>项目技术</h2>
                <p>1、监控功能：采用罗技C920摄像头采集图像，通过mjpg-stream软件获取图像数据；</p>
                <p>2、显示功能：通过mjpg-stream服务器端提供的动态图像接口获取图像信息并显示；</p>
                <p>3、控制功能：网页端按键点击后，通过js将对应信息传递至CGI进程，CGI进程将数据封装成结构体，通过消息队列发送至控制进程，控制进程从消息队列中读取到不同信息执行不同的控制命令；</p>
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/anfang/fengmian.png"></li>
                    
                    <li style="margin-top: 10px;">
                        <video width="300" height="152" controls  preload="metadata">
                            <source src="./video/anfang.mp4" type="video/mp4">
                        </video>
                    </li>
                    <li style="margin-top: 10px;">
                        <video width="300" height="152" controls preload="metadata"> 
                            <source src="./video/anfnag2.mp4" type="video/mp4">
                        </video>
                    </li>
                </ul>
                <h2>项目职责</h2>
                <p>1、应用层软件开发；</p>
                <p>2、驱动层软件开发；</p>
                <p>3、测试；</p>`
            },
            {
                name: "大学生智能车竞赛",
                text: "根据赛道信息，设计一款能快速且稳定完成全程的智能车",
                nb: [
                    "Freescale Kinetis K60", "IAR", "Altium Designer 18", "MPU6050"
                ],
                url: "",
                img: "./images/nxp/fengmian.png",
                content: `<h2>项目类型</h2>
                <p>比赛项目</p>
                <h2>开发周期</h2>
                <p>2019年1月1日 – 2019年7月1日，2人/210天</p>
                <h2>开发工具</h2>
                <p>IAR、Altium Designer 18、Matlab</p>
                <h2>算法</h2>
                <p>PID、串级PID、图像逆透视、卡尔曼滤波、大津二值化</p>
                <h2>模块介绍</h2>
                <p>1、	K60：基于Arm Cortex-M4内核构建，作为智能车的主控芯片；</p>
                <p>2、	总钻风MT9V034摄像头：一款灰度摄像头，用于检测赛道信息；</p>
                <p>3、	6轴陀螺仪Mpu6050：读取车身姿态，用于检测坡道；</p>
                <p>4、	LCD显示器：实时显示摄像头采集到的图像信息，方便分析；</p>
                <p>5、	蓝牙HC-05：与电脑蓝牙无线连接，可以实现无线调参，提高效率；</p>
                <p>6、	超声波HC-SR04：用于检测赛道中的路障元素；</p>
                <h2>项目技术</h2>
                <p>1.	采用边线检测算法识别图像中的赛道边线，通过控制舵机使得摄像头采集到的图像中线始终保持在两条边线之间，从而实现循迹；</p>
                <p>2.	采用逆透视算法将上宽下窄的赛道图像转成均匀的赛道图像，提高赛道元素的识别准确度；</p>
                <p>3.	通过PID算法控制车速和舵机角度，经过多次调参后使得车身的响应速度达到最高；</p>
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/nxp/1.png" width="300" height="152"></li>
                    <li><img src="./images/nxp/2.png" width="300" height="152"></li>
                    <li><img src="./images/nxp/3.png" width="300" height="152"></li>
                    <li><img src="./images/nxp/4.png" width="300" height="152"></li>
                    <li><img src="./images/nxp/5.png" width="300" height="152"></li>
                    <li style="margin-top: 10px; margin-left: 10px;">
                        <video width="300" height="152" controls preload="metadata"> 
                            <source src="./video/nxp.mp4" type="video/mp4">
                        </video>
                    </li>
                </ul>
                <h2>项目职责</h2>
                <p>1、算法移植；</p>
                <p>2、软件调参；</p>
                <p>3、硬件设计；</p>`,
            },
            {
                name: "桌面时钟",
                text: "一款简约风格的数字时钟，可以显示日期和时间",
                nb: [
                    "Arduino IDE", "Altium Designer 18"
                ],
                url: "",
                img: "./images/zhong/2.png",
                content: `<h2>项目类型</h2>
                <p>练手项目</p>
                <h2>开发周期</h2>
                <p>2021年5月1日 – 2021年6月1日，1人/30天</p>
                <h2>开发工具</h2>
                <p>Arduino ide、Altium Designer 18</p>
                
                <h2>项目介绍</h2>
                <p>这款WIFI时钟采用ESP8266-12S作为主控芯片，采用Arduino编程，通过联网阿里云授时服务平台获取到的时间信息通过程序显示在8*8的点阵屏中。此外在PCB板上使用了一颗高精度的RTC芯片，所以即使应用在没有网络的环境下也可以保证时间的精确；</p>
                <h2>模块介绍</h2>
                <p>1、	下载模块：下载程序部分采用的CH340N，这款芯片与普通的USB转TTL芯片区别不大，而且为贴片封装，体积小；</p>
                <p>2、	电源模块：使用3.3V稳压芯片AMS1117DC-DC设计。这款芯片需要在输入口接一个100UF的钽电容和一个0.1UF的无极性电容，这样可以滤除输入电源不必要的交流成分，和储存电能的作用。在输出口也是如此，可以防止后面电源影响电源的波动；</p>
                <p>3、	联网模块：采用ESP8266-12S模块。好处就是ESP8266-12S所需的外部器件为0，节约了成本。在这款WIFI时钟里,ESP8266主要作用就是连接网络定时访问阿里NTP服务器；</p>
                
                <h2>工作原理</h2>
                <p>在这款矩阵时钟上加入了SmartConfig自动配网功能。当时钟上电后会尝试连接路由器，如果是第一次使用里面没有WIFI密码账号，需要在手机上下载EspTouch软件来进行配网。配网成功后就会自动连接到家里的路由器WIFI然后访问阿里的NTP服务器来进行时间获取，然后再将获取的时间通过点阵显示出来。</p>
                
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/zhong/3.png"  width="300" height="152"></li>
                    <li style="margin-top: 10px; margin-left: 9px;">
                        <video width="300" height="152" controls preload="metadata"> 
                            <source src="./video/zhong.mp4" type="video/mp4">
                        </video>
                    </li>
                </ul>
                <h2>项目职责</h2>
                <p>1、参与原型图设计与 UI 设计，辅助市场调研；</p>
                <p>2、负责数据库设计，模块设计；</p>
                <p>3、客户端与服务端的编程开发；</p>
                <p>4、修复测试人员发现的BUG；</p>`,
            },
            {
                name: "蓝牙遥控车",
                text: "一款通过手机APP遥控的玩具车",
                nb: [
                    "Keil4", "STC89C51", "HC-05", "DS18B20", "APP_inventor"
                ],
                url: "",
                img: "./images/lanya/2.png",
                content: `<h2>项目类型</h2>
                <p>练手项目</p>
                <h2>开发周期</h2>
                <p>1人/10天</p>
                <h2>开发工具</h2>
                <p>Keil4、APP_inventor</p>
                <h2>项目介绍</h2>
                <p>这是一款遥控玩具车，具备三档速度调节功能，并能实时显示室内温度。</p>
                <h2>模块介绍</h2>
                <p>1、	温度采集模块：DS18B20；</p>
                <p>2、	无线通信模块：蓝牙HC-05；</p>
                <p>2、	主控模块：STC89C51；</p>
                <p>2、	点击驱动模块：L298N；</p>
                <h2>项目技术</h2>
                <p>1、	采用Keil4编写单片机控制程序，接收到不同的信息，控制车身执行不同的指令（前进、后退、左转、右转）；</p>
                <p>2、	采用APP_inventor开发安卓APP，实现通过手机蓝牙传输信息的功能；</p>
                <h2>项目预览</h2>
                <ul>
                    <li style="margin-top: 10px; margin-left: 9px;">
                        <video width="300" height="152" controls preload="metadata"> 
                            <source src="./video/lanyaruan.mp4" type="video/mp4">
                        </video>
                    </li>
                </ul>`,
            },
           
            
            
            {
                name: "华为软件精英挑战赛",
                text: "为华为云数据库中心运维机器人提供调度方案",
                nb: [
                    "C/C++"
                ],
                url: "",
                img: "./images/ruantiao/ruantiao.png",
                content: `<h2>项目类型</h2>
                <p>比赛项目</p>
                <h2>开发周期</h2>
                <p>1人/14天</p>
                <h2>开发工具</h2>
                <p>Visual Studio 2022</p>
                <h2>项目背景</h2>
                <p>在机器人领域，如何规划多机器人的任务执行以实现最优调度，如何控制机器人的转向与前进速度以实现全程无碰的最优路径移动等都是非常有价值的算法难题。本次比赛通过软件模拟了多机器人的运行环境以及真实机器人的状态信息，由选手来挑战这些有价值的算法难题。</p>
                <h2>项目技术</h2>
                <p>1、 设计机器人调度算法，考虑各种情况，保证每个机器人当下都能做出最优策略；</p>
                <p>2、 设计避让算法，防止机器人之间发生碰撞；</p>
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/ruantiao/1.png"  width="300" height="152"></li>
                    <li><img src="./images/ruantiao/2.png"  width="300" height="152"></li>
                    <li><img src="./images/ruantiao/3.png"  width="300" height="152"></li>
                   
                    <li style="margin-top: 10px; margin-left: 9px;">
                        <video width="300" height="152" controls preload="metadata"> 
                            <source src="./video/ruantiao.mp4" type="video/mp4">
                        </video>
                    </li>
                
                   
                </ul>`,
            }
        ],
        listLoadMore: "查看",
        loadMore: {
            text: "继续浏览",
            class: "lovexhj4"
        }
    },
    about: {
        title: "关于我",
        laozi: {
            img: "./images/me.jpg",
            content: "<span></span>我叫<b>臧恒</b>，今年26岁，是重庆邮电大学的一名研三在读生，所学专业是<b>通信工程</b>；<br /><span></span>我个人对于嵌入式开发有着<b>浓厚的兴趣</b>，喜欢用学习到的知识去设计与制作一些嵌入式设备，毕竟兴趣才是我最好的老师。<br /><span></span>曾获得<b>“华为杯”中国研究生数学建模竞赛三等奖</b>，<b>大学生电子设计竞赛国赛一等奖</b>，以及两届<b>大学生智能车竞赛国赛二等奖</b>。"
        },
        ability: [{
                icon: "fa-linux",
                title: " ",
                subTitle: "Vim，shell，Makefile，基础命令，TFTP,NFS...",
                color: "#ff4757",
                bfb: "Linux"
            },
            {
                icon: "fa-desktop",
                title: "",
                subTitle: "itop-4412，I.MX6ULL，stm32，STC89C51，K60...",
                color: "#ffa502",
                bfb: "Chip"
            },
            {
                icon: "fa-code",
                title: "",
                subTitle: "C++，C，python，HTML，CSS，JavaScript...",
                color: "#1e90ff",
                bfb: "Code"
            },
            {
                icon: "fa-share-alt",
                title: "                    ",
                subTitle: "UART，IIC，SPI，CAN...",
                color: "#2ed573",
                bfb: "Protocol"
            }
        ],
        loadMore: {
            text: "继续浏览",
            class: "lovexhj3"
        }
    },
    contact: {
        title: "联系我",
        list: [{
                name: "手机",
                context: "19562101073"
            },
            {
                name: "邮箱",
                context: "1433110833@qq.com"
            },
            {
                name: "QQ",
                context: "1433110833"
            },
            {
                name: "微信",
                context: "15955336125"
            }
        ]
    }
}