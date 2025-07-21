import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

const Index = () => {
  const riders = [
    {
      name: "АЛЕКС ВОЛКОВ",
      number: "01",
      stats: "15 побед • 3 чемпионства",
      image: "/img/59bab91b-ac5b-491e-add1-6bf53dfcaa56.jpg"
    },
    {
      name: "ДМИТРИЙ SPEED",
      number: "22", 
      stats: "12 побед • 2 чемпионства",
      image: "/img/59bab91b-ac5b-491e-add1-6bf53dfcaa56.jpg"
    },
    {
      name: "МАКСИМ THUNDER",
      number: "88",
      stats: "8 побед • 1 чемпионство",
      image: "/img/59bab91b-ac5b-491e-add1-6bf53dfcaa56.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-racing-black text-racing-white">
      {/* Header */}
      <header className="relative py-6 px-4 border-b border-racing-silver/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="/img/2cb4a29f-3632-4bf0-9451-2ba9cb46f3e7.jpg" alt="SPYSTAV Team" className="h-12 w-auto" />
            <div>
              <h1 className="text-2xl font-bold font-['Montserrat'] text-racing-orange">SPYSTAV</h1>
              <p className="text-racing-silver text-sm">MX BIKES TEAM</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#team" className="text-racing-silver hover:text-racing-orange transition-colors">Команда</a>
            <a href="#sponsors" className="text-racing-silver hover:text-racing-orange transition-colors">Спонсоры</a>
            <a href="#contact" className="text-racing-silver hover:text-racing-orange transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-racing-black via-racing-black/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-racing-orange/10"></div>
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="max-w-2xl">
            <Badge className="bg-racing-orange text-racing-white mb-4">ЧЕМПИОНЫ MX BIKES</Badge>
            <h1 className="text-5xl md:text-7xl font-bold font-['Montserrat'] mb-6 text-racing-white leading-none">
              SPYSTAV
              <span className="block text-racing-orange">RACING TEAM</span>
            </h1>
            <p className="text-xl text-racing-silver mb-8 font-['Roboto']">
              Профессиональная команда мотокросса в MX Bikes. 
              Скорость, адреналин и победы на виртуальных трассах.
            </p>
            <div className="flex space-x-4">
              <Button 
                onClick={() => window.open('https://t.me/jwrteam454', '_blank')}
                className="bg-racing-orange hover:bg-racing-orange/90 text-racing-white px-8 py-3 text-lg"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Telegram канал
              </Button>
              <Button variant="outline" className="border-racing-silver text-racing-silver hover:bg-racing-silver hover:text-racing-black px-8 py-3 text-lg">
                <Icon name="Trophy" size={20} className="mr-2" />
                Наши достижения
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 px-4 bg-racing-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-racing-orange mb-2">35</div>
              <div className="text-racing-silver">Побед</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-racing-orange mb-2">6</div>
              <div className="text-racing-silver">Чемпионств</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-racing-orange mb-2">3</div>
              <div className="text-racing-silver">Пилота</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-racing-orange mb-2">2024</div>
              <div className="text-racing-silver">Сезон</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Riders */}
      <section id="team" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-racing-orange/20 text-racing-orange mb-4">НАША КОМАНДА</Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-['Montserrat'] text-racing-white mb-4">
              Наши Спортсмены
            </h2>
            <p className="text-xl text-racing-silver max-w-2xl mx-auto">
              Элитные пилоты, покоряющие виртуальные трассы с непревзойденной скоростью и мастерством
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {riders.map((rider, index) => (
              <Card key={index} className="bg-racing-black/80 border-racing-silver/20 hover:border-racing-orange/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="relative mb-6 overflow-hidden rounded-lg">
                    <img 
                      src={rider.image} 
                      alt={rider.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-racing-orange text-racing-white font-bold text-2xl px-3 py-1 rounded">
                      #{rider.number}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-racing-white mb-2 font-['Montserrat']">
                    {rider.name}
                  </h3>
                  <p className="text-racing-silver mb-4">{rider.stats}</p>
                  <Button className="w-full bg-racing-orange/10 hover:bg-racing-orange text-racing-orange hover:text-racing-white border-racing-orange/50">
                    <Icon name="User" size={16} className="mr-2" />
                    Профиль пилота
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section id="sponsors" className="py-20 px-4 bg-racing-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-racing-orange/20 text-racing-orange mb-4">НАШИ ПАРТНЕРЫ</Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-['Montserrat'] text-racing-white mb-4">
              Наши Спонсоры
            </h2>
            <p className="text-xl text-racing-silver max-w-2xl mx-auto">
              Ведущие бренды, которые поддерживают нашу команду на пути к победам
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="bg-racing-white/5 p-6 rounded-lg hover:bg-racing-orange/10 transition-colors duration-300 flex items-center justify-center">
                <img 
                  src="/img/954e3a44-a1ae-4c0f-a1ee-996205c144f7.jpg" 
                  alt={`Sponsor ${i + 1}`}
                  className="max-w-full h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-racing-orange to-racing-orange/80">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-racing-white mb-6 font-['Montserrat']">
            Готовы к Гонкам?
          </h2>
          <p className="text-xl text-racing-white/90 mb-8">
            Присоединяйтесь к нашей команде или следите за нашими выступлениями
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.open('https://t.me/jwrteam454', '_blank')}
              className="bg-racing-white text-racing-orange hover:bg-racing-silver text-lg px-8 py-3"
            >
              <Icon name="Send" size={20} className="mr-2" />
              Подписаться в Telegram
            </Button>
            <Button variant="outline" className="border-racing-white text-racing-white hover:bg-racing-white hover:text-racing-orange text-lg px-8 py-3">
              <Icon name="Users" size={20} className="mr-2" />
              Стать частью команды
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-racing-black border-t border-racing-silver/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <img src="/img/2cb4a29f-3632-4bf0-9451-2ba9cb46f3e7.jpg" alt="SPYSTAV Team" className="h-10 w-auto" />
            <h3 className="text-2xl font-bold text-racing-orange font-['Montserrat']">SPYSTAV</h3>
          </div>
          <p className="text-racing-silver mb-4">© 2024 SPYSTAV Racing Team. Все права защищены.</p>
          <div className="flex justify-center space-x-6">
            <a href="https://t.me/jwrteam454" target="_blank" rel="noopener noreferrer" className="text-racing-silver hover:text-racing-orange transition-colors">
              <Icon name="Send" size={24} />
            </a>
            <a href="#" className="text-racing-silver hover:text-racing-orange transition-colors">
              <Icon name="Youtube" size={24} />
            </a>
            <a href="#" className="text-racing-silver hover:text-racing-orange transition-colors">
              <Icon name="MessageCircle" size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;