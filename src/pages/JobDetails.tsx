import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

interface JobDetailsProps {}

const jobsData = {
  '1': {
    id: '1',
    title: 'Барномасози React калон',
    company: 'ТТ Мобайл',
    location: 'Душанбе',
    salary: '8,000-15,000 сомонӣ',
    type: 'Тамоми рӯз',
    experience: '3+ сол',
    description: 'Мо барномасози бо малака барои кор бо React, TypeScript ва Node.js меҷӯем. Шумо дар лоиҳаҳои калони финтех кор хоҳед кард.',
    requirements: [
      'React, TypeScript, Redux',
      'Node.js, Express',
      '3+ сол таҷриба',
      'Git, Docker',
      'Забонҳои англисӣ/русӣ'
    ],
    benefits: [
      'Музди рақобатнок',
      'Таълими давомдор',
      'Суҳбати дурдаст',
      'Бимаи тиббӣ',
      'Рӯзҳои татилӣ 28 рӯз'
    ],
    contactEmail: 'hr@ttmobile.tj',
    contactPhone: '+992 37 123-45-67',
    postedDate: '5 рӯз пеш'
  },
  '2': {
    id: '2',
    title: 'Таҳлилгари маълумот',
    company: 'Банки Эсхата',
    location: 'Душанбе',
    salary: '6,000-12,000 сомонӣ',
    type: 'Тамоми рӯз',
    experience: '2+ сол',
    description: 'Ҷустуҷӯи мутахассис барои таҳлили маълумот ва гузориш дар соҳаи банкдорӣ.',
    requirements: [
      'Python, R, SQL',
      'Tableau, Power BI',
      'Статистика, эконометрика',
      'Excel эксперт',
      'Фаҳмиши молия'
    ],
    benefits: [
      'Музди боэътибор',
      'Таълим дар хориҷ',
      'Бонусҳои солона',
      'Нишасти нарм',
      'Фарҳанги ҷавон'
    ],
    contactEmail: 'career@eskhata.tj',
    contactPhone: '+992 37 890-12-34',
    postedDate: '2 рӯз пеш'
  }
};

export default function JobDetails({}: JobDetailsProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const job = id ? jobsData[id as keyof typeof jobsData] : null;

  if (!job) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Card className="p-8 text-center">
          <Icon name="AlertCircle" className="w-16 h-16 text-slate-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-slate-800 mb-2">Вакансия ёфт нашуд</h2>
          <p className="text-slate-600 mb-4">Вакансияе, ки шумо ҷустуҷӯ мекунед, мавҷуд нест.</p>
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
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center text-slate-600 hover:text-slate-800"
            >
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Бозгашт
            </Button>
            <div className="flex items-center space-x-3">
              <Button variant="outline" className="flex items-center">
                <Icon name="Share" className="w-4 h-4 mr-2" />
                Мубодила
              </Button>
              <Button variant="outline" className="flex items-center">
                <Icon name="Heart" className="w-4 h-4 mr-2" />
                Дӯст доштан
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Job Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header */}
            <Card className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-slate-800 mb-2">{job.title}</h1>
                  <div className="flex items-center text-slate-600 mb-3">
                    <Icon name="Building" className="w-5 h-5 mr-2" />
                    <span className="text-lg font-medium">{job.company}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-slate-600">
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
                  <div className="text-2xl font-bold text-green-600 mb-1">{job.salary}</div>
                  <Badge variant="secondary">{job.experience}</Badge>
                </div>
              </div>
            </Card>

            {/* Job Description */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">Тавсифи кор</h2>
              <p className="text-slate-700 leading-relaxed">{job.description}</p>
            </Card>

            {/* Requirements */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">Талабот</h2>
              <ul className="space-y-2">
                {job.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <Icon name="Check" className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{req}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Benefits */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">Бартариҳо</h2>
              <ul className="space-y-2">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Icon name="Star" className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Section */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Пешниҳод кардан</h3>
              <Button className="w-full mb-4 bg-blue-600 hover:bg-blue-700">
                <Icon name="Send" className="w-4 h-4 mr-2" />
                Аризаи кор фиристодан
              </Button>
              <p className="text-sm text-slate-500 text-center">
                Шумо резюмеи худро ворид карда тавонед
              </p>
            </Card>

            {/* Contact Info */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Маълумоти тамос</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Icon name="Mail" className="w-5 h-5 text-slate-500 mr-3" />
                  <a href={`mailto:${job.contactEmail}`} className="text-blue-600 hover:underline">
                    {job.contactEmail}
                  </a>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" className="w-5 h-5 text-slate-500 mr-3" />
                  <a href={`tel:${job.contactPhone}`} className="text-blue-600 hover:underline">
                    {job.contactPhone}
                  </a>
                </div>
              </div>
            </Card>

            {/* Company Info */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Дар бораи ширкат</h3>
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="Building" className="w-6 h-6 text-white" />
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-slate-800">{job.company}</h4>
                  <p className="text-sm text-slate-500">Ширкати технологӣ</p>
                </div>
              </div>
              <Button variant="outline" className="w-full" onClick={() => navigate(`/company/${job.company}`)}>
                <Icon name="ExternalLink" className="w-4 h-4 mr-2" />
                Дидани профили ширкат
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}