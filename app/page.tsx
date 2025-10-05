import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:linear-gradient(0deg,transparent,black)]" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 sm:py-32">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
              <div className="relative">
                <Image
                  src="https://picx.zhimg.com/v2-bdc6874c6d66aca24e92e0dc8f4cd410_xl.jpg?source=32738c0c&needBackground=1"
                  alt="木川"
                  width={160}
                  height={160}
                  className="rounded-full border-4 border-white dark:border-slate-900 shadow-2xl"
                  priority
                />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                木川
              </h1>
              <p className="text-xl sm:text-2xl text-slate-700 dark:text-slate-300 font-medium">
                AI 编程专家 · 运筹优化算法专家 · Golang 技术专家
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                10 年+技术开发经验，专注于大型互联网算法与 AI+编程融合创新
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center pt-4">
              <a
                href="https://github.com/muchuang1024"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-medium hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
              >
                GitHub
              </a>
              <a
                href="https://www.zhihu.com/people/muchuang"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
              >
                知乎
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white rounded-full font-medium hover:scale-105 transition-transform"
              >
                联系我
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            关于我
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">我是谁</h3>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">▹</span>
                  <span>互联网上市公司运筹优化算法专家，前大厂 Golang 技术专家，8 年工作经验</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">▹</span>
                  <span>给近百人提供过简历优化和 Go 面试辅导服务</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">▹</span>
                  <span>国内最大 AI 社群：AI 破局俱乐部合伙人</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">▹</span>
                  <span>在 AI 破局星球输出内容，获得 5 颗 AI 之心</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">▹</span>
                  <span>AI 破局星球 AI 编程航海教练</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">我的技能</h3>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 dark:text-indigo-400 mt-1">▹</span>
                  <span>精通 Golang、Python、Java 等现代技术栈</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 dark:text-indigo-400 mt-1">▹</span>
                  <span>有大型应用架构设计经验</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 dark:text-indigo-400 mt-1">▹</span>
                  <span>深入研究 AI 与技术融合，专注 D2C、Copilot 等前沿技术</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 dark:text-indigo-400 mt-1">▹</span>
                  <span>丰富的技术团队管理经验，善于规划技术方向和推动团队创新</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            我的作品
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="https://mcp-cn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-1 hover:shadow-2xl transition-all hover:scale-105"
            >
              <div className="bg-white dark:bg-slate-800 rounded-xl p-8 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                    M
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">MCP Hub 中国</h3>
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  精选优质 MCP 服务的综合平台，包含 Web 应用、CLI 工具和 MCP 服务器。支持 Cursor 一键安装，为 AI 开发者提供便捷的工具生态系统。
                </p>
                <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:gap-2 gap-1 inline-flex items-center transition-all">
                  访问项目 →
                </span>
              </div>
            </a>

            <a
              href="https://ziliu.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-1 hover:shadow-2xl transition-all hover:scale-105"
            >
              <div className="bg-white dark:bg-slate-800 rounded-xl p-8 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                    字
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">字流</h3>
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  AI 驱动的多平台内容发布工具。一次创作，智能适配公众号、知乎、掘金、知识星球、视频号、抖音、B 站、小红书等平台格式。
                </p>
                <span className="text-purple-600 dark:text-purple-400 font-medium group-hover:gap-2 gap-1 inline-flex items-center transition-all">
                  访问项目 →
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            我的成就
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "逆向分析 Copilot", desc: "Github 已获得上千 star", icon: "⭐" },
              { title: "GMTC 演讲嘉宾", desc: "全球大技术大会", icon: "🎤" },
              { title: "畅销书作者", desc: "《DeepSeek 极简入门与应用》", icon: "📚" },
              { title: "知乎技术话题", desc: "高赞回答者", icon: "✍️" },
              { title: "Trae 官方认证", desc: "Expert 专家", icon: "🏆" },
              { title: "CSDN AI 编程大赛", desc: "官方特邀评委", icon: "👨‍⚖️" },
            ].map((achievement, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:scale-105 transition-all"
              >
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            联系方式
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-2xl">
                  📱
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">公众号</h3>
                  <p className="text-slate-600 dark:text-slate-400">木川 AI 编程</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-2xl">
                  💬
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">微信</h3>
                  <p className="text-slate-600 dark:text-slate-400">mcmc2024</p>
                </div>
              </div>
            </div>

            <a
              href="https://www.zhihu.com/people/muchuang"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:scale-105 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-2xl">
                  🔵
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">知乎</h3>
                  <p className="text-slate-600 dark:text-slate-400">@muchuang</p>
                </div>
              </div>
            </a>

            <a
              href="https://github.com/muchuang1024"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:scale-105 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center text-2xl">
                  🐙
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">GitHub</h3>
                  <p className="text-slate-600 dark:text-slate-400">@muchuang1024</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © 2025 木川. All rights reserved.
          </p>
          <p className="text-slate-500 dark:text-slate-500 text-sm mt-2">
            专注 AI 编程 · 技术创新 · 知识分享
          </p>
        </div>
      </footer>
    </div>
  );
}
