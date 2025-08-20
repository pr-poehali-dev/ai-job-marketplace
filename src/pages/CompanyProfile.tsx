import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from '@/components/ui/icon';

interface CompanyJob {
  id: string;
  title: string;
  location: string;
  salary: string;
  type: string;
  postedDate: string;
}

const companiesData = {
  'TT Mobile': {
    name: 'ТТ Мобайл',
    nameEn: 'TT Mobile',
    logo: '📱',
    industry: 'Телекоммуникации',
    founded: '2001',
    employees: '1,000+',
    location: 'Душанбе, Таджикистан',
    website: 'ttmobile.tj',
    description: 'ТТ Мобайл — ведущий оператор мобильной связи в Таджикистане, предоставляющий услуги связи миллионам абонентов по всей стране.',
    benefits: [
      'Конкурентная заработная плата',
      'Медицинское страхование',
      'Корпоративное обучение',
      'Карьерный рост',
      '28 дней отпуска'
    ],
    stats: {
      totalJobs: 15,
      totalEmployees: 1200,
      responseRate: '85%',
      avgResponseTime: '2 дня'
    },
    jobs: [
      {
        id: '1',
        title: 'Барномасози React калон',
        location: 'Душанбе',
        salary: '8,000-15,000 сомонӣ',
        type: 'Тамоми рӯз',
        postedDate: '5 рӯз пеш'
      },
      {
        id: '7',
        title: 'Мутахассиси маркетинг',
        location: 'Душанбе',
        salary: '5,000-9,000 сомонӣ',
        type: 'Тамоми рӯз',
        postedDate: '3 рӯз пеш'
      }
    ]
  },
  'Банки Эсхата': {
    name: 'Банки Эсхата',
    nameEn: 'Eskhata Bank',
    logo: '🏦',
    industry: 'Банковские услуги',
    founded: '1997',
    employees: '800+',
    location: 'Душанбе, Таджикистан',
    website: 'eskhata.tj',
    description: 'Банк Эсхата — один из крупнейших коммерческих банков Таджикистана, предоставляющий полный спектр банковских услуг.',
    benefits: [
      'Стабильная заработная плата',
      'Полный соцпакет',
      'Обучение в международных программах',
      'Бонусная система',
      'Корпоративные льготы'
    ],
    stats: {
      totalJobs: 8,
      totalEmployees: 850,
      responseRate: '92%',
      avgResponseTime: '1 день'
    },
    jobs: [
      {
        id: '2',
        title: 'Таҳлилгари маълумот',
        location: 'Душанбе',
        salary: '6,000-12,000 сомонӣ',
        type: 'Тамоми рӯз',
        postedDate: '2 рӯз пеш'
      }
    ]
  }
};

export default function CompanyProfile() {
  const { company: companyParam } = useParams<{ company: string }>();
  const navigate = useNavigate();
  
  const company = companyParam ? companiesData[companyParam as keyof typeof companiesData] : null;

  if (!company) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Card className="p-8 text-center">
          <Icon name="Building" className="w-16 h-16 text-slate-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-slate-800 mb-2">Ширкат ёфт нашуд</h2>
          <p className="text-slate-600 mb-4">Ширкате, ки шумо ҷустуҷӯ мекунед, мавҷуд нест.</p>
          <Button onClick={() => navigate('/')} variant="outline">
            Бозгашт ба саҳифаи асосӣ
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center text-slate-600 hover:text-slate-800 mb-6"
          >
            <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
            Бозгашт
          </Button>

          {/* Company Header */}
          <div className="flex items-start space-x-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-4xl">
              {company.logo}
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-slate-800 mb-2">{company.name}</h1>
              <p className="text-lg text-slate-600 mb-4">{company.industry}</p>
              <div className="flex items-center space-x-6 text-sm text-slate-600">
                <div className="flex items-center">
                  <Icon name="MapPin" className="w-4 h-4 mr-1" />
                  {company.location}
                </div>
                <div className="flex items-center">
                  <Icon name="Calendar" className="w-4 h-4 mr-1" />
                  Таъсис: {company.founded}
                </div>
                <div className="flex items-center">
                  <Icon name="Users" className="w-4 h-4 mr-1" />
                  {company.employees} кормандон
                </div>
                <div className="flex items-center">
                  <Icon name="Globe" className="w-4 h-4 mr-1" />
                  {company.website}
                </div>
              </div>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" className="flex items-center">
                <Icon name="Heart" className="w-4 h-4 mr-2" />
                Дунбол кардан
              </Button>
              <Button className="flex items-center bg-blue-600 hover:bg-blue-700">
                <Icon name="Send" className="w-4 h-4 mr-2" />
                Резюме фиристодан
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="about" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="about">Дар бораи ширкат</TabsTrigger>
                <TabsTrigger value="jobs">Вакансияҳо ({company.jobs.length})</TabsTrigger>
                <TabsTrigger value="reviews">Шарҳҳо</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-xl font-semibold text-slate-800 mb-4">Тавсифи ширкат</h2>
                  <p className="text-slate-700 leading-relaxed mb-6">{company.description}</p>
                  
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Бартариҳои корӣ</h3>
                  <ul className="space-y-2">
                    {company.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Icon name="Check" className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </TabsContent>

              <TabsContent value="jobs" className="space-y-4">
                {company.jobs.map((job) => (
                  <Card 
                    key={job.id} 
                    className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-transparent hover:border-l-blue-500"
                    onClick={() => navigate(`/job/${job.id}`)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-800 mb-2 hover:text-blue-600 transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-slate-600 mb-3">
                          <div className="flex items-center">
                            <Icon name="MapPin" className="w-4 h-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Icon name="Clock" className="w-4 h-4 mr-1" />
                            {job.type}
                          </div>
                          <div className="flex items-center">
                            <Icon name="Calendar" className="w-4 h-4 mr-1" />
                            {job.postedDate}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-green-600">{job.salary}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="reviews" className="space-y-4">
                <Card className="p-6 text-center">
                  <Icon name="MessageSquare" className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-slate-600 mb-2">Шарҳҳо ҳанӯз нест</h3>
                  <p className="text-slate-500">Аввалин шарҳро дар бораи ин ширкат гузоред</p>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Company Stats */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Омори ширкат</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-600">Вакансияҳои кушод</span>
                  <span className="font-semibold text-slate-800">{company.stats.totalJobs}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Кормандон</span>
                  <span className="font-semibold text-slate-800">{company.stats.totalEmployees}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Дарсади ҷавоб</span>
                  <span className="font-semibold text-green-600">{company.stats.responseRate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Вақти ҷавоб</span>
                  <span className="font-semibold text-slate-800">{company.stats.avgResponseTime}</span>
                </div>
              </div>
            </Card>

            {/* Contact Card */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Маълумоти тамос</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Icon name="Globe" className="w-5 h-5 text-slate-500 mr-3" />
                  <a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {company.website}
                  </a>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" className="w-5 h-5 text-slate-500 mr-3" />
                  <span className="text-slate-700">{company.location}</span>
                </div>
              </div>
            </Card>

            {/* Similar Companies */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Ширкатҳои монанд</h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 rounded-lg hover:bg-slate-50 cursor-pointer">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold mr-3">
                    📞
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">Мегафон</h4>
                    <p className="text-sm text-slate-500">5 вакансия</p>
                  </div>
                </div>
                <div className="flex items-center p-3 rounded-lg hover:bg-slate-50 cursor-pointer">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white font-bold mr-3">
                    📱
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">Tcell</h4>
                    <p className="text-sm text-slate-500">8 вакансия</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}