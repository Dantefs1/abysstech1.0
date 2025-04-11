import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Copy } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import Link from "next/link";
import Image from "next/image";

const translations = {
  zh: {
    intro: "完全匿名 · 去中心化 · Solana 驱动的通讯软件，打造未来 Web3 通讯生态",
    address: "代币合约地址",
    copy: "复制",
    copied: "已复制",
    tokenomics: "代币经济模型",
    team: "团队成员",
    social: "社交媒体",
    product: "产品介绍",
    community: "社区激励",
    teamAdvisors: "团队与顾问",
    devFund: "开发基金",
    strategic: "战略投资者",
    ecosystem: "生态发展",
    liquidity: "流动性池",
    contact: "联系我们",
    faq: "常见问题"
  },
  en: {
    intro: "Fully anonymous, decentralized messaging on Solana for the future of Web3 communication.",
    address: "Token Contract Address",
    copy: "Copy",
    copied: "Copied",
    tokenomics: "Tokenomics",
    team: "Team Members",
    social: "Social Links",
    product: "Product Intro",
    community: "Community Rewards",
    teamAdvisors: "Team & Advisors",
    devFund: "Development Fund",
    strategic: "Strategic Investors",
    ecosystem: "Ecosystem",
    liquidity: "Liquidity Pool",
    contact: "Contact Us",
    faq: "FAQ"
  }
};

export default function AbysstechHome() {
  const [copied, setCopied] = useState(false);
  const [lang, setLang] = useState("zh");
  const [isLoading, setIsLoading] = useState(true);
  const t = translations[lang];
  const contractAddress = "So1aNaEXamp1eT0kenC0ntractAbYsSTech";

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tokenDistribution = [
    { name: t.community, value: 35 },
    { name: t.teamAdvisors, value: 20 },
    { name: t.devFund, value: 15 },
    { name: t.strategic, value: 15 },
    { name: t.ecosystem, value: 10 },
    { name: t.liquidity, value: 5 }
  ];

  const teamMembers = [
    { name: "匿名成员 A", role: "核心开发者", img: "/team/member1.png" },
    { name: "匿名成员 B", role: "社区运营", img: "/team/member2.png" },
    { name: "匿名成员 C", role: "前端开发", img: "/team/member3.png" },
    { name: "匿名成员 D", role: "智能合约审计", img: "/team/member4.png" }
  ];

  const languages = [
    { code: "zh", label: "中文" },
    { code: "en", label: "English" },
    { code: "vi", label: "Tiếng Việt" },
    { code: "ja", label: "日本語" }
  ];

  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#d0ed57", "#a4de6c", "#8dd1e1"];

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          key="loader"
          className="flex justify-center items-center min-h-screen bg-black text-white text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          Loading Abysstech...
        </motion.div>
      ) : (
        <motion.main
          className="bg-cover min-h-screen text-white scroll-smooth px-4"
          style={{ backgroundImage: `url('/bg/animated-bg.gif')` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <header className="flex justify-between items-center p-6">
            <h1 className="text-2xl font-bold">Abysstech</h1>
            <div className="flex gap-2">
              {languages.map((l) => (
                <Button
                  key={l.code}
                  variant={lang === l.code ? "default" : "outline"}
                  onClick={() => setLang(l.code)}
                >
                  {l.label}
                </Button>
              ))}
            </div>
          </header>

          <section className="text-center pt-10">
            <h2 className="text-4xl font-bold mb-4">{t.product}</h2>
            <p className="text-lg max-w-2xl mx-auto mb-6">{t.intro}</p>

            <div className="mb-6">
              <span className="text-sm mr-2">{t.address}:</span>
              <span className="text-green-400 font-mono">{contractAddress}</span>
              <Button onClick={handleCopy} className="ml-2" variant="outline">
                <Copy className="w-4 h-4 mr-1" /> {copied ? t.copied : t.copy}
              </Button>
            </div>
          </section>

          <section className="flex justify-center py-12">
            <Card className="bg-black/30 shadow-lg">
              <CardContent className="flex flex-col items-center">
                <h3 className="text-2xl mb-4">{t.tokenomics}</h3>
                <PieChart width={300} height={300}>
                  <Pie data={tokenDistribution} dataKey="value" outerRadius={100}>
                    {tokenDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </CardContent>
            </Card>
          </section>

          <section className="py-12">
            <h3 className="text-center text-2xl mb-6">{t.team}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="bg-black/30 shadow-md">
                  <CardContent className="p-4 flex flex-col items-center">
                    <Image src={member.img} alt={member.name} width={100} height={100} className="rounded-full mb-2" />
                    <div className="font-semibold">{member.name}</div>
                    <div className="text-sm text-gray-300">{member.role}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <footer className="text-center text-sm text-gray-400 py-6">
            © 2025 Abysstech — contact@abysstech.xyz
          </footer>
        </motion.main>
      )}
    </AnimatePresence>
  );
}