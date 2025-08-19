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
                <span className="font-bold text-xl text-slate-800">AI Кор</span>
              </div>
              <div className="hidden md:ml-8 md:flex md:space-x-8">
                <a href="#" className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Ҷойҳои кор</a>
                <a href="#" className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Резюме</a>
                <a href="#" className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Ширкатҳо</a>
                <a href="#" className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Таҳлил</a>
                <a href="#" className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Санҷишҳо</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                Ворид шудан
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Сабти ном
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
                    Кор ёфтан
                  </TabsTrigger>
                  <TabsTrigger value="candidates" className="flex items-center">
                    <Icon name="Users" className="w-4 h-4 mr-2" />
                    Коргар ёфтан
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="jobs" className="space-y-4">
                  <div className="relative">
                    <Icon name="Sparkles" className="absolute left-3 top-3 h-5 w-5 text-blue-500" />
                    <Input
                      placeholder="Мақоми дилхоҳ ё малакаҳоро шарҳ диҳед..."
                      className="pl-12 h-12 text-lg"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                    <Icon name="Zap" className="w-5 h-5 mr-2" />
                    Бо ёрии AI ёфтан
                  </Button>
                </TabsContent>
                
                <TabsContent value="candidates" className="space-y-4">
                  <div className="relative">
                    <Icon name="Target" className="absolute left-3 top-3 h-5 w-5 text-emerald-500" />
                    <Input
                      placeholder="Талаботи номзадро шарҳ диҳед..."
                      className="pl-12 h-12 text-lg"
                    />
                  </div>
                  <Button size="lg" className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800">
                    <Icon name="UserSearch" className="w-5 h-5 mr-2" fallback="Search" />
                    Ҷустуҷӯи номзадҳо
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

      {/* AI Features */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Имкониятҳои AI-платформа
            </h2>
            <p className="text-xl text-slate-600">Раванди интихоби кадрҳоро автоматикунонӣ мекунем</p>
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
                <p className="text-sm text-slate-600">Сохтани резюме бо ёрии AI дар 5 дақиқа</p>
              </CardContent>
            </Card>

            {/* Smart Matching */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Target" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">Интихоби зирак</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">AI мувофиқатии номзад ва ҷойи корро таҳлил мекунад</p>
              </CardContent>
            </Card>

            {/* Candidate Scoring */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="BarChart" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">Рейтинг</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">Арзёбии номзадҳо аз рӯи 50+ параметр</p>
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
                <p className="text-sm text-slate-600">Муошират бо номзадҳои автоматикунонӣ</p>
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
              AI-рейтинги номзадҳо
            </h2>
            <p className="text-xl text-slate-600">Мисоли таҳлили профили барномасоз</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">АИ</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-slate-800">Алишер Раҳимов</h3>
                    <p className="text-slate-600">Барномасози калон</p>
                  </div>
                  <div className="ml-auto">
                    <Badge className="bg-green-100 text-green-800">92% мувофиқат</Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">Малакаҳои техникӣ</span>
                      <span className="text-sm text-slate-600">95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">Таҷрибаи корӣ</span>
                      <span className="text-sm text-slate-600">88%</span>
                    </div>
                    <Progress value={88} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">Маориф</span>
                      <span className="text-sm text-slate-600">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">Ҷойгиршавӣ</span>
                      <span className="text-sm text-slate-600">100%</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="text-sm font-semibold text-blue-900 mb-2">Бартариҳои асосӣ:</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• 5+ сол таҷриба бо React ва TypeScript</li>
                    <li>• Таҷриба дар финтех стартапҳо</li>
                    <li>• Омода ба кӯчидан</li>
                    <li>• Фаъол дар GitHub</li>
                  </ul>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Icon name="TrendingUp" className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-lg font-semibold text-slate-800">Таҳлили интихоб</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">347</div>
                    <div className="text-sm text-green-800">Резюмеи мувофиқ</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">28</div>
                    <div className="text-sm text-blue-800">Номзадҳои беҳтарин</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Icon name="Clock" className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-lg font-semibold text-slate-800">Сарфаи вақт</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-700">Интихоби дастӣ</span>
                    <span className="font-semibold text-slate-800">~8 соат</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-700">Бо AI Кор</span>
                    <span className="font-semibold text-green-600">~15 дақиқа</span>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="flex justify-between">
                      <span className="font-semibold text-slate-800">Сарфакардӣ</span>
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
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Тарифҳои хизматрасонӣ</h2>
            <p className="text-xl text-slate-600">Тарифи мувофиқро барои тиҷорати худ интихоб кунед</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" className="w-8 h-8 text-slate-600" />
                </div>
                <CardTitle className="text-2xl">Асосӣ</CardTitle>
                <div className="text-4xl font-bold text-slate-800 mt-4">
                  Ройгон
                </div>
                <CardDescription className="mt-2">
                  Барои шинос шудан бо платформа
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-600 mr-3" />
                    <span>5 ҷустуҷӯ дар моҳ</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-600 mr-3" />
                    <span>AI-ёвари асосӣ</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-600 mr-3" />
                    <span>Сохтани резюме</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="X" className="w-5 h-5 text-slate-400 mr-3" />
                    <span className="text-slate-400">Рейтинги номзадҳо</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Ройгон оғоз кунед
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
                  320 сомонӣ
                  <span className="text-base font-normal text-slate-600">/моҳ</span>
                </div>
                <CardDescription className="mt-2">
                  Барои ҷустуҷӯи фаъоли кадрҳо
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-600 mr-3" />
                    <span>100 ҷустуҷӯ дар моҳ</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-600 mr-3" />
                    <span>AI-ёвари пешрафта</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-600 mr-3" />
                    <span>AI-рейтинги номзадҳо</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-600 mr-3" />
                    <span>Чат-бот барои HR</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-600 mr-3" />
                    <span>Таҳлил ва ҳисоботҳо</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Премиум интихоб кунед
                </Button>
              </CardContent>
            </Card>

            {/* Business Plan */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Building" className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-2xl">Тиҷорӣ</CardTitle>
                <div className="text-4xl font-bold text-slate-800 mt-4">
                  1,050 сомонӣ
                  <span className="text-base font-normal text-slate-600">/моҳ</span>
                </div>
                <CardDescription className="mt-2">
                  Барои шуъбаҳои калони HR
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-600 mr-3" />
                    <span>Ҷустуҷӯи номаҳдуд</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-600 mr-3" />
                    <span>AI-и корпоративӣ</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-600 mr-3" />
                    <span>Пайвастшавӣ бо CRM</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-600 mr-3" />
                    <span>Менеҷери шахсӣ</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-600 mr-3" />
                    <span>Дастрасии API</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  Бо мо тамос гиред
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
                <span className="font-bold text-xl">AI Кор</span>
              </div>
              <p className="text-slate-400 mb-4">
                Инқилоб дар интихоби кадрҳо бо ёрии зеҳни сунъӣ
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
              <h3 className="font-semibold mb-4">Маҳсулот</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white">Ҷустуҷӯи ҷойҳои кор</a></li>
                <li><a href="#" className="hover:text-white">Ҷустуҷӯи номзадҳо</a></li>
                <li><a href="#" className="hover:text-white">AI-резюме</a></li>
                <li><a href="#" className="hover:text-white">Таҳлил</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Ширкат</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white">Дар бораи мо</a></li>
                <li><a href="#" className="hover:text-white">Блог</a></li>
                <li><a href="#" className="hover:text-white">Мансабҳо</a></li>
                <li><a href="#" className="hover:text-white">Тамосҳо</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Дастгирӣ</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white">Ҳуҷҷатсозӣ</a></li>
                <li><a href="#" className="hover:text-white">Маркази кӯмак</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
                <li><a href="#" className="hover:text-white">Ҳолати низом</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 AI Кор. Ҳамаи ҳуқуқҳо ҳифз шудаанд.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;