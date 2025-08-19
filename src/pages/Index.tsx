import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Icon name="Brain" className="h-8 w-8 text-blue-600 mr-2" />
                <span className="font-bold text-xl text-slate-800">AI JobHub</span>
              </div>
              <div className="hidden md:ml-8 md:flex md:space-x-8">
                <a href="#" className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Вакансии</a>
                <a href="#" className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Резюме</a>
                <a href="#" className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Компании</a>
                <a href="#" className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Аналитика</a>
                <a href="#" className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Тесты</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                Войти
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16 pb-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-emerald-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
              Умный поиск{' '}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                талантов
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              AI-платформа нового поколения для работодателей и соискателей. 
              Автоматизированный подбор, скоринг кандидатов и умные рекомендации.
            </p>
            
            {/* AI Search */}
            <div className="max-w-2xl mx-auto mb-12">
              <Tabs defaultValue="jobs" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="jobs" className="flex items-center">
                    <Icon name="Search" className="w-4 h-4 mr-2" />
                    Найти работу
                  </TabsTrigger>
                  <TabsTrigger value="candidates" className="flex items-center">
                    <Icon name="Users" className="w-4 h-4 mr-2" />
                    Найти сотрудника
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="jobs" className="space-y-4">
                  <div className="relative">
                    <Icon name="Sparkles" className="absolute left-3 top-3 h-5 w-5 text-blue-500" />
                    <Input
                      placeholder="Опишите желаемую позицию или навыки..."
                      className="pl-12 h-12 text-lg"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                    <Icon name="Zap" className="w-5 h-5 mr-2" />
                    Найти с помощью AI
                  </Button>
                </TabsContent>
                
                <TabsContent value="candidates" className="space-y-4">
                  <div className="relative">
                    <Icon name="Target" className="absolute left-3 top-3 h-5 w-5 text-emerald-500" />
                    <Input
                      placeholder="Опишите требования к кандидату..."
                      className="pl-12 h-12 text-lg"
                    />
                  </div>
                  <Button size="lg" className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800">
                    <Icon name="UserSearch" className="w-5 h-5 mr-2" fallback="Search" />
                    Поиск кандидатов
                  </Button>
                </TabsContent>
              </Tabs>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800">15K+</div>
                <div className="text-sm text-slate-600">Вакансий</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800">8K+</div>
                <div className="text-sm text-slate-600">Компаний</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800">95%</div>
                <div className="text-sm text-slate-600">Точность AI</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Features */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Возможности AI-платформы
            </h2>
            <p className="text-xl text-slate-600">Автоматизируем процесс подбора персонала</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI Resume Builder */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="FileText" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">AI Резюме</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">Создание резюме с помощью ИИ за 5 минут</p>
              </CardContent>
            </Card>

            {/* Smart Matching */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Target" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">Умный подбор</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">AI анализирует совместимость кандидата и вакансии</p>
              </CardContent>
            </Card>

            {/* Candidate Scoring */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="BarChart" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">Скоринг</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">Оценка кандидатов по 50+ параметрам</p>
              </CardContent>
            </Card>

            {/* Chatbot */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="MessageSquare" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">Чат-бот</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">Автоматизированное общение с кандидатами</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Candidate Scoring Demo */}
      <div className="py-20 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              AI-скоринг кандидатов
            </h2>
            <p className="text-xl text-slate-600">Пример анализа профиля разработчика</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">АИ</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-slate-800">Алексей Петров</h3>
                    <p className="text-slate-600">Senior Frontend Developer</p>
                  </div>
                  <div className="ml-auto">
                    <Badge className="bg-green-100 text-green-800">92% соответствие</Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">Технические навыки</span>
                      <span className="text-sm text-slate-600">95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">Опыт работы</span>
                      <span className="text-sm text-slate-600">88%</span>
                    </div>
                    <Progress value={88} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">Образование</span>
                      <span className="text-sm text-slate-600">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">Локация</span>
                      <span className="text-sm text-slate-600">100%</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="text-sm font-semibold text-blue-900 mb-2">Ключевые преимущества:</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• 5+ лет опыта с React и TypeScript</li>
                    <li>• Опыт в финтех стартапах</li>
                    <li>• Готов к релокации</li>
                    <li>• Активен на GitHub</li>
                  </ul>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Icon name="TrendingUp" className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-lg font-semibold text-slate-800">Аналитика подбора</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">847</div>
                    <div className="text-sm text-green-800">Подходящих резюме</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">43</div>
                    <div className="text-sm text-blue-800">Топ кандидатов</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Icon name="Clock" className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-lg font-semibold text-slate-800">Экономия времени</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-700">Ручной отбор</span>
                    <span className="font-semibold text-slate-800">~8 часов</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-700">С AI JobHub</span>
                    <span className="font-semibold text-green-600">~15 минут</span>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="flex justify-between">
                      <span className="font-semibold text-slate-800">Экономия</span>
                      <span className="font-bold text-emerald-600">97%</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Тарифные планы</h2>
            <p className="text-xl text-slate-600">Выберите подходящий план для вашего бизнеса</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" className="w-8 h-8 text-slate-600" />
                </div>
                <CardTitle className="text-2xl">Базовый</CardTitle>
                <div className="text-4xl font-bold text-slate-800 mt-4">
                  Бесплатно
                </div>
                <CardDescription className="mt-2">
                  Для знакомства с платформой
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-600 mr-3" />
                    <span>5 поисков в месяц</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-600 mr-3" />
                    <span>Базовый AI-помощник</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-600 mr-3" />
                    <span>Создание резюме</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="X" className="w-5 h-5 text-slate-400 mr-3" />
                    <span className="text-slate-400">Скоринг кандидатов</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Начать бесплатно
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="relative overflow-hidden border-2 border-blue-500 hover:shadow-xl transition-shadow">
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-2 text-sm font-medium">
                Рекомендуем
              </div>
              <CardHeader className="text-center pb-8 pt-12">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Sparkles" className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Премиум</CardTitle>
                <div className="text-4xl font-bold text-slate-800 mt-4">
                  ₽2,990
                  <span className="text-base font-normal text-slate-600">/мес</span>
                </div>
                <CardDescription className="mt-2">
                  Для активного поиска персонала
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-600 mr-3" />
                    <span>100 поисков в месяц</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-600 mr-3" />
                    <span>Продвинутый AI-помощник</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-600 mr-3" />
                    <span>AI-скоринг кандидатов</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-600 mr-3" />
                    <span>Чат-бот для HR</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-600 mr-3" />
                    <span>Аналитика и отчеты</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Выбрать премиум
                </Button>
              </CardContent>
            </Card>

            {/* Business Plan */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Building" className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-2xl">Бизнес</CardTitle>
                <div className="text-4xl font-bold text-slate-800 mt-4">
                  ₽9,990
                  <span className="text-base font-normal text-slate-600">/мес</span>
                </div>
                <CardDescription className="mt-2">
                  Для крупных HR-отделов
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-600 mr-3" />
                    <span>Безлимитные поиски</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-600 mr-3" />
                    <span>Корпоративный AI</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-600 mr-3" />
                    <span>Интеграции с CRM</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-600 mr-3" />
                    <span>Персональный менеджер</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-600 mr-3" />
                    <span>API доступ</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  Связаться с нами
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="Brain" className="h-8 w-8 text-blue-400 mr-2" />
                <span className="font-bold text-xl">AI JobHub</span>
              </div>
              <p className="text-slate-400 mb-4">
                Революция в подборе персонала с помощью искусственного интеллекта
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                  <Icon name="Mail" className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                  <Icon name="Phone" className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Продукт</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white">Поиск вакансий</a></li>
                <li><a href="#" className="hover:text-white">Поиск кандидатов</a></li>
                <li><a href="#" className="hover:text-white">AI-резюме</a></li>
                <li><a href="#" className="hover:text-white">Аналитика</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white">О нас</a></li>
                <li><a href="#" className="hover:text-white">Блог</a></li>
                <li><a href="#" className="hover:text-white">Карьера</a></li>
                <li><a href="#" className="hover:text-white">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white">Документация</a></li>
                <li><a href="#" className="hover:text-white">Справочный центр</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
                <li><a href="#" className="hover:text-white">Статус системы</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 AI JobHub. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;