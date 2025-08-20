import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from '@/components/ui/icon';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  experience: string;
  postedDate: string;
  description: string;
  tags: string[];
}

const jobsData: Job[] = [
  {
    id: '1',
    title: 'Барномасози React калон',
    company: 'ТТ Мобайл',
    location: 'Душанбе',
    salary: '8,000-15,000 сомонӣ',
    type: 'Тамоми рӯз',
    experience: '3+ сол',
    postedDate: '5 рӯз пеш',
    description: 'Кор бо React, TypeScript ва Node.js дар лоиҳаҳои калони финтех',
    tags: ['React', 'TypeScript', 'Node.js', 'Redux']
  },
  {
    id: '2',
    title: 'Таҳлилгари маълумот',
    company: 'Банки Эсхата',
    location: 'Душанбе',
    salary: '6,000-12,000 сомонӣ',
    type: 'Тамоми рӯз',
    experience: '2+ сол',
    postedDate: '2 рӯз пеш',
    description: 'Таҳлили маълумот ва гузориш дар соҳаи банкдорӣ',
    tags: ['Python', 'SQL', 'Tableau', 'Analytics']
  },
  {
    id: '3',
    title: 'Дизайнери UX/UI',
    company: 'Мегафон Таҷикистон',
    location: 'Душанбе',
    salary: '5,000-10,000 сомонӣ',
    type: 'Тамоми рӯз',
    experience: '2+ сол',
    postedDate: '1 рӯз пеш',
    description: 'Лоиҳакунии интерфейс барои мобилӣ ва веб барномаҳо',
    tags: ['Figma', 'Adobe XD', 'Prototyping', 'User Research']
  },
  {
    id: '4',
    title: 'DevOps муҳандис',
    company: 'Банки Амонат',
    location: 'Душанбе',
    salary: '7,000-13,000 сомонӣ',
    type: 'Тамоми рӯз',
    experience: '3+ сол',
    postedDate: '3 рӯз пеш',
    description: 'Идоракунии инфраструктура ва CI/CD процессҳо',
    tags: ['Docker', 'Kubernetes', 'AWS', 'Jenkins']
  },
  {
    id: '5',
    title: 'Барномасози мобилӣ (Flutter)',
    company: 'Tcell',
    location: 'Хуҷанд',
    salary: '6,000-11,000 сомонӣ',
    type: 'Тамоми рӯз',
    experience: '2+ сол',
    postedDate: '4 рӯз пеш',
    description: 'Рушди барномаҳои мобилӣ бо Flutter барои iOS ва Android',
    tags: ['Flutter', 'Dart', 'Firebase', 'Mobile']
  },
  {
    id: '6',
    title: 'Мутахассиси кибербехатарӣ',
    company: 'Компании Алиф',
    location: 'Душанбе',
    salary: '8,000-16,000 сомонӣ',
    type: 'Тамоми рӯз',
    experience: '4+ сол',
    postedDate: '6 рӯз пеш',
    description: 'Таъмини амнияти иттилоотӣ ва муҳофизат аз таҳдидҳо',
    tags: ['Security', 'Penetration Testing', 'Network Security', 'CISSP']
  }
];

const locations = ['Ҳама шаҳрҳо', 'Душанбе', 'Хуҷанд', 'Бохтар', 'Турсунзода', 'Истаравшан'];
const experiences = ['Ҳама дараҷаҳо', 'Таҷрибаи кор талаб намешавад', '1+ сол', '2+ сол', '3+ сол', '5+ сол'];
const jobTypes = ['Ҳама навъҳо', 'Тамоми рӯз', 'Нимарӯз', 'Масофавӣ', 'Контрактӣ'];

export default function JobSearch() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Ҳама шаҳрҳо');
  const [selectedExperience, setSelectedExperience] = useState('Ҳама дараҷаҳо');
  const [selectedJobType, setSelectedJobType] = useState('Ҳама навъҳо');

  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesLocation = selectedLocation === 'Ҳама шаҳрҳо' || job.location === selectedLocation;
    const matchesExperience = selectedExperience === 'Ҳама дараҷаҳо' || job.experience === selectedExperience;
    const matchesJobType = selectedJobType === 'Ҳама навъҳо' || job.type === selectedJobType;

    return matchesSearch && matchesLocation && matchesExperience && matchesJobType;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center text-slate-600 hover:text-slate-800"
            >
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Бозгашт
            </Button>
            <h1 className="text-2xl font-bold text-slate-800">Ҷустуҷӯи кор</h1>
            <div className="w-20"></div>
          </div>

          {/* Search Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Ҷои кор, ширкат, малака..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Шаҳр" />
              </SelectTrigger>
              <SelectContent>
                {locations.map(location => (
                  <SelectItem key={location} value={location}>{location}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedExperience} onValueChange={setSelectedExperience}>
              <SelectTrigger>
                <SelectValue placeholder="Таҷриба" />
              </SelectTrigger>
              <SelectContent>
                {experiences.map(exp => (
                  <SelectItem key={exp} value={exp}>{exp}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedJobType} onValueChange={setSelectedJobType}>
              <SelectTrigger>
                <SelectValue placeholder="Навъи кор" />
              </SelectTrigger>
              <SelectContent>
                {jobTypes.map(type => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-slate-800">
            {filteredJobs.length} вакансия ёфт шуд
          </h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-slate-600">Мураттаб кардан:</span>
            <Select defaultValue="date">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Аз нав</SelectItem>
                <SelectItem value="salary">Аз рӯи музд</SelectItem>
                <SelectItem value="relevance">Мувофиқат</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Job Cards */}
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <Card 
              key={job.id} 
              className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-transparent hover:border-l-blue-500"
              onClick={() => navigate(`/job/${job.id}`)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-1 hover:text-blue-600 transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex items-center text-slate-600 mb-2">
                        <Icon name="Building" className="w-4 h-4 mr-2" />
                        <span className="font-medium">{job.company}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-green-600 mb-1">{job.salary}</div>
                      <Badge variant="secondary">{job.experience}</Badge>
                    </div>
                  </div>

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

                  <p className="text-slate-700 mb-4">{job.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="p-2">
                        <Icon name="Heart" className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-2">
                        <Icon name="Share" className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredJobs.length > 0 && (
          <div className="text-center mt-8">
            <Button variant="outline" className="px-8">
              Боз нишон додан
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-600 mb-2">Ҳеҷ вакансия ёфт нашуд</h3>
            <p className="text-slate-500 mb-4">
              Параметрҳои ҷустуҷӯро иваз кунед ё дубора кӯшиш кунед
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchQuery('');
                setSelectedLocation('Ҳама шаҳрҳо');
                setSelectedExperience('Ҳама дараҷаҳо');
                setSelectedJobType('Ҳама навъҳо');
              }}
            >
              Пок кардани филтрҳо
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}