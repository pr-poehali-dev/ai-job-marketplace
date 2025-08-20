import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import Icon from '@/components/ui/icon';

interface UserData {
  name: string;
  email: string;
  phone: string;
  location: string;
  title: string;
  experience: string;
  salary: string;
  about: string;
  skills: string[];
  education: {
    degree: string;
    university: string;
    year: string;
  }[];
  experience_list: {
    position: string;
    company: string;
    period: string;
    description: string;
  }[];
  languages: string[];
}

export default function UserProfile() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState<UserData>({
    name: 'Алишер Раҳимов',
    email: 'alisher.rahimov@email.com',
    phone: '+992 90 123-45-67',
    location: 'Душанбе, Таджикистан',
    title: 'Барномасози React калон',
    experience: '5+ сол',
    salary: '10,000-15,000 сомонӣ',
    about: 'Барномасози бо таҷрибаи калон дар рушди барномаҳои веб бо React, TypeScript ва Node.js. Ошно бо технологияҳои муосир ва усулҳои беҳтарини рушд.',
    skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'Git', 'Agile'],
    education: [
      {
        degree: 'Магистратура дар Технологияҳои иттилоотӣ',
        university: 'Донишгоҳи миллии Таджикистон',
        year: '2018-2020'
      },
      {
        degree: 'Бакалавр дар Илми компютер',
        university: 'Донишгоҳи техникии Таджикистон',
        year: '2014-2018'
      }
    ],
    experience_list: [
      {
        position: 'Барномасози React калон',
        company: 'ТТ Мобайл',
        period: '2021 - ҳозир',
        description: 'Рушди барномаҳои веб барои 1M+ корбар, роҳбарии гурӯҳи рушдиёфтагон, татбиқи архитектураи микросервисҳо'
      },
      {
        position: 'Барномасози миёна',
        company: 'Банки Эсхата',
        period: '2019-2021',
        description: 'Кор дар лоиҳаҳои банкӣ, рушди системаҳои амниятнок, татбиқи стандартҳои рамзкунӣ'
      }
    ],
    languages: ['Тоҷикӣ (модарӣ)', 'Русӣ (ҳарфаӣ)', 'Англисӣ (мутавассит)']
  });

  const [newSkill, setNewSkill] = useState('');

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleAddSkill = () => {
    if (newSkill && !userData.skills.includes(newSkill)) {
      setUserData({
        ...userData,
        skills: [...userData.skills, newSkill]
      });
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setUserData({
      ...userData,
      skills: userData.skills.filter(skill => skill !== skillToRemove)
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center text-slate-600 hover:text-slate-800"
            >
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Бозгашт
            </Button>
            <div className="flex items-center space-x-3">
              {isEditing ? (
                <>
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    Бекор кардан
                  </Button>
                  <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
                    <Icon name="Save" className="w-4 h-4 mr-2" />
                    Сабт кардан
                  </Button>
                </>
              ) : (
                <Button onClick={() => setIsEditing(true)} variant="outline">
                  <Icon name="Edit" className="w-4 h-4 mr-2" />
                  Таҳрир кардан
                </Button>
              )}
            </div>
          </div>

          {/* Profile Header */}
          <div className="flex items-start space-x-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <Icon name="User" className="w-12 h-12 text-white" />
            </div>
            <div className="flex-1">
              {isEditing ? (
                <div className="space-y-3">
                  <Input
                    value={userData.name}
                    onChange={(e) => setUserData({...userData, name: e.target.value})}
                    className="text-2xl font-bold"
                    placeholder="Номи пурра"
                  />
                  <Input
                    value={userData.title}
                    onChange={(e) => setUserData({...userData, title: e.target.value})}
                    placeholder="Вазифаи ҷории кор"
                  />
                </div>
              ) : (
                <>
                  <h1 className="text-3xl font-bold text-slate-800 mb-2">{userData.name}</h1>
                  <p className="text-xl text-slate-600 mb-3">{userData.title}</p>
                </>
              )}
              <div className="flex items-center space-x-6 text-sm text-slate-600">
                <div className="flex items-center">
                  <Icon name="MapPin" className="w-4 h-4 mr-1" />
                  {userData.location}
                </div>
                <div className="flex items-center">
                  <Icon name="Calendar" className="w-4 h-4 mr-1" />
                  {userData.experience}
                </div>
                <div className="flex items-center">
                  <Icon name="DollarSign" className="w-4 h-4 mr-1" />
                  {userData.salary}
                </div>
              </div>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" className="flex items-center">
                <Icon name="Download" className="w-4 h-4 mr-2" />
                Боргирии PDF
              </Button>
              <Button className="flex items-center bg-green-600 hover:bg-green-700">
                <Icon name="Eye" className="w-4 h-4 mr-2" />
                Пешнамоиши резюме
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
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="about">Дар бораи ман</TabsTrigger>
                <TabsTrigger value="experience">Таҷриба</TabsTrigger>
                <TabsTrigger value="education">Таҳсилот</TabsTrigger>
                <TabsTrigger value="settings">Танзимот</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-6">
                <Card className="p-6">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle>Дар бораи ман</CardTitle>
                  </CardHeader>
                  <CardContent className="px-0">
                    {isEditing ? (
                      <Textarea
                        value={userData.about}
                        onChange={(e) => setUserData({...userData, about: e.target.value})}
                        placeholder="Тавсифи кӯтоҳ дар бораи худ..."
                        className="min-h-32"
                      />
                    ) : (
                      <p className="text-slate-700 leading-relaxed">{userData.about}</p>
                    )}
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle>Малакаҳо</CardTitle>
                  </CardHeader>
                  <CardContent className="px-0">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {userData.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="flex items-center gap-2">
                          {skill}
                          {isEditing && (
                            <button 
                              onClick={() => handleRemoveSkill(skill)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Icon name="X" className="w-3 h-3" />
                            </button>
                          )}
                        </Badge>
                      ))}
                    </div>
                    {isEditing && (
                      <div className="flex gap-2">
                        <Input
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                          placeholder="Малакаи нав..."
                          onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
                        />
                        <Button onClick={handleAddSkill} size="sm">
                          <Icon name="Plus" className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="experience" className="space-y-4">
                {userData.experience_list.map((exp, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800">{exp.position}</h3>
                        <p className="text-blue-600 font-medium">{exp.company}</p>
                      </div>
                      <Badge variant="outline">{exp.period}</Badge>
                    </div>
                    <p className="text-slate-700">{exp.description}</p>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="education" className="space-y-4">
                {userData.education.map((edu, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800">{edu.degree}</h3>
                        <p className="text-blue-600 font-medium">{edu.university}</p>
                      </div>
                      <Badge variant="outline">{edu.year}</Badge>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <Card className="p-6">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle>Маълумоти шахсӣ</CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 space-y-4">
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">Email</label>
                      <Input
                        value={userData.email}
                        onChange={(e) => setUserData({...userData, email: e.target.value})}
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">Телефон</label>
                      <Input
                        value={userData.phone}
                        onChange={(e) => setUserData({...userData, phone: e.target.value})}
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">Ҷойгиршавӣ</label>
                      <Input
                        value={userData.location}
                        onChange={(e) => setUserData({...userData, location: e.target.value})}
                        disabled={!isEditing}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle>Маълумоти тамос</CardTitle>
              </CardHeader>
              <CardContent className="px-0 space-y-3">
                <div className="flex items-center">
                  <Icon name="Mail" className="w-5 h-5 text-slate-500 mr-3" />
                  <span className="text-slate-700">{userData.email}</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" className="w-5 h-5 text-slate-500 mr-3" />
                  <span className="text-slate-700">{userData.phone}</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" className="w-5 h-5 text-slate-500 mr-3" />
                  <span className="text-slate-700">{userData.location}</span>
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle>Забонҳо</CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <ul className="space-y-2">
                  {userData.languages.map((language, index) => (
                    <li key={index} className="flex items-center">
                      <Icon name="Globe" className="w-4 h-4 text-slate-500 mr-3" />
                      <span className="text-slate-700">{language}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Profile Stats */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle>Омори профил</CardTitle>
              </CardHeader>
              <CardContent className="px-0 space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-600">Дидан</span>
                  <span className="font-semibold text-slate-800">1,234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Таклифҳои кор</span>
                  <span className="font-semibold text-green-600">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Рейтинги профил</span>
                  <span className="font-semibold text-blue-600">95%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}