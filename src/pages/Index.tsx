import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from '@/components/ui/icon';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import { useLanguage } from '@/hooks/useLanguage';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Icon name="Brain" className="h-8 w-8 text-blue-600 mr-2" />
                <span className="font-bold text-xl text-slate-800">{t({ru: 'AI JobHub', tg: 'AI Кор'})}</span>
              </div>
              <div className="hidden md:ml-8 md:flex md:space-x-8">
                <a href="#" className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">{t({ru: 'Вакансии', tg: 'Ҷойҳои кор'})}</a>
                <a href="#" className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">{t({ru: 'Резюме', tg: 'Резюме'})}</a>
                <a href="#" className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">{t({ru: 'Компании', tg: 'Ширкатҳо'})}</a>
                <a href="#" className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">{t({ru: 'Аналитика', tg: 'Таҳлил'})}</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <Button variant="outline" size="sm">
                {t({ru: 'Войти', tg: 'Ворид шудан'})}
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                {t({ru: 'Регистрация', tg: 'Сабти ном'})}
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
                кори
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              AI-платформаи наве барои коргарон ва ҷӯяндагони кор дар Тоҷикистон. 
              Интихоби автоматикунонӣ, рейтинги номзадҳо ва тавсияҳои зирак.
            </p>
            
            {/* AI Search */}
            <div className="max-w-2xl mx-auto mb-12">
              <Tabs defaultValue="jobs" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="jobs" className="flex items-center">
                    <Icon name="Search" className="w-4 h-4 mr-2" />
                    {t({ru: 'Найти работу', tg: 'Кор ёфтан'})}
                  </TabsTrigger>
                  <TabsTrigger value="candidates" className="flex items-center">
                    <Icon name="Users" className="w-4 h-4 mr-2" />
                    {t({ru: 'Найти сотрудника', tg: 'Коргар ёфтан'})}
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="jobs" className="space-y-4">
                  <div className="relative">
                    <Icon name="Sparkles" className="absolute left-3 top-3 h-5 w-5 text-blue-500" />
                    <Input
                      placeholder={t({ru: 'Опишите желаемую позицию или навыки...', tg: 'Мақоми дилхоҳ ё малакаҳоро шарҳ диҳед...'})}
                      className="pl-12 h-12 text-lg"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                    <Icon name="Zap" className="w-5 h-5 mr-2" />
                    {t({ru: 'Найти с помощью AI', tg: 'Бо ёрии AI ёфтан'})}
                  </Button>
                </TabsContent>
                
                <TabsContent value="candidates" className="space-y-4">
                  <div className="relative">
                    <Icon name="Target" className="absolute left-3 top-3 h-5 w-5 text-emerald-500" />
                    <Input
                      placeholder={t({ru: 'Опишите требования к кандидату...', tg: 'Талаботи номзадро шарҳ диҳед...'})}
                      className="pl-12 h-12 text-lg"
                    />
                  </div>
                  <Button size="lg" className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800">
                    <Icon name="UserSearch" className="w-5 h-5 mr-2" fallback="Search" />
                    {t({ru: 'Поиск кандидатов', tg: 'Ҷустуҷӯи номзадҳо'})}
                  </Button>
                </TabsContent>
              </Tabs>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800">5.2K+</div>
                <div className="text-sm text-slate-600">Ҷойҳои кор</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800">1.8K+</div>
                <div className="text-sm text-slate-600">Ширкатҳо</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800">95%</div>
                <div className="text-sm text-slate-600">Дақиқии AI</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Vacancies */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-2">
                Ҷойҳои кори беҳтарин
              </h2>
              <p className="text-lg text-slate-600">Вакансияҳо аз ширкатҳои калони Тоҷикистон</p>
            </div>
            <Button variant="outline" className="hidden md:block">
              <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
              Ҳамаашро дидан
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Top Vacancy 1 */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">ТА</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">Барномасози Frontend</h3>
                      <p className="text-sm text-slate-600">Таджик Алюминий</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Нав</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-slate-600">
                    <Icon name="MapPin" className="w-4 h-4 mr-2" />
                    <span>Душанбе</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Icon name="DollarSign" className="w-4 h-4 mr-2" />
                    <span>3,500-5,000 сомонӣ</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Icon name="Clock" className="w-4 h-4 mr-2" />
                    <span>Тамоми рӯз</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    <Badge variant="secondary" className="text-xs">React</Badge>
                    <Badge variant="secondary" className="text-xs">TypeScript</Badge>
                    <Badge variant="secondary" className="text-xs">Tailwind</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top Vacancy 2 */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">ОТ</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">Муҳосиби молиявӣ</h3>
                      <p className="text-sm text-slate-600">Ориён Тоҷик</p>
                    </div>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">Зудтарин</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-slate-600">
                    <Icon name="MapPin" className="w-4 h-4 mr-2" />
                    <span>Душанбе</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Icon name="DollarSign" className="w-4 h-4 mr-2" />
                    <span>2,800-4,200 сомонӣ</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Icon name="Clock" className="w-4 h-4 mr-2" />
                    <span>Тамоми рӯз</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    <Badge variant="secondary" className="text-xs">Excel</Badge>
                    <Badge variant="secondary" className="text-xs">1С</Badge>
                    <Badge variant="secondary" className="text-xs">Молия</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top Vacancy 3 */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">ТС</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">Менеҷери савдо</h3>
                      <p className="text-sm text-slate-600">Телеком Саноат</p>
                    </div>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">Дурӣ</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-slate-600">
                    <Icon name="MapPin" className="w-4 h-4 mr-2" />
                    <span>Худжанд</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Icon name="DollarSign" className="w-4 h-4 mr-2" />
                    <span>4,000-6,500 сомонӣ</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Icon name="Clock" className="w-4 h-4 mr-2" />
                    <span>Эҷодӣ</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    <Badge variant="secondary" className="text-xs">CRM</Badge>
                    <Badge variant="secondary" className="text-xs">Савдо</Badge>
                    <Badge variant="secondary" className="text-xs">B2B</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center md:hidden">
            <Button variant="outline" className="w-full">
              Ҳамаашро дидан
              <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Nearby Jobs by Location */}
      <div className="py-20 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Ҷойҳои кор дар наздикӣ
            </h2>
            <p className="text-lg text-slate-600">Вакансияҳо дар шаҳрҳои Тоҷикистон</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Dushanbe Jobs */}
            <Card className="p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Icon name="Building2" className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">Душанбе</h3>
                  <p className="text-slate-600">Пойтахти Тоҷикистон</p>
                </div>
                <div className="ml-auto">
                  <Badge className="bg-blue-100 text-blue-800">2,847 ҷой</Badge>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 px-3 bg-white rounded-lg">
                  <span className="text-sm text-slate-700">Барномасозӣ</span>
                  <span className="text-sm font-semibold text-slate-800">487 ҷой</span>
                </div>
                <div className="flex justify-between items-center py-2 px-3 bg-white rounded-lg">
                  <span className="text-sm text-slate-700">Молия ва банкдорӣ</span>
                  <span className="text-sm font-semibold text-slate-800">324 ҷой</span>
                </div>
                <div className="flex justify-between items-center py-2 px-3 bg-white rounded-lg">
                  <span className="text-sm text-slate-700">Савдо ва маркетинг</span>
                  <span className="text-sm font-semibold text-slate-800">298 ҷой</span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-4">
                Ҳамаи ҷойҳоро дидан
              </Button>
            </Card>

            {/* Khujand Jobs */}
            <Card className="p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                  <Icon name="Factory" className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">Худжанд</h3>
                  <p className="text-slate-600">Маркази шимоли Тоҷикистон</p>
                </div>
                <div className="ml-auto">
                  <Badge className="bg-emerald-100 text-emerald-800">1,234 ҷой</Badge>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 px-3 bg-white rounded-lg">
                  <span className="text-sm text-slate-700">Саноат ва истеҳсолот</span>
                  <span className="text-sm font-semibold text-slate-800">312 ҷой</span>
                </div>
                <div className="flex justify-between items-center py-2 px-3 bg-white rounded-lg">
                  <span className="text-sm text-slate-700">Логистика</span>
                  <span className="text-sm font-semibold text-slate-800">198 ҷой</span>
                </div>
                <div className="flex justify-between items-center py-2 px-3 bg-white rounded-lg">
                  <span className="text-sm text-slate-700">Хизматрасонӣ</span>
                  <span className="text-sm font-semibold text-slate-800">156 ҷой</span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-4">
                Ҳамаи ҷойҳоро дидан
              </Button>
            </Card>
          </div>

          {/* All cities quick access */}
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-6">Дигар шаҳрҳои Тоҷикистон:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="outline" size="sm">Бохтар (234 ҷой)</Button>
              <Button variant="outline" size="sm">Куляб (187 ҷой)</Button>
              <Button variant="outline" size="sm">Турсунзода (156 ҷой)</Button>
              <Button variant="outline" size="sm">Исфара (134 ҷой)</Button>
              <Button variant="outline" size="sm">Истаравшан (98 ҷой)</Button>
              <Button variant="outline" size="sm">Панҷакент (87 ҷой)</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;