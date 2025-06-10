
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria integrado com um serviço de email ou formulário
    console.log('Formulário enviado:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative z-10 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-cyan-300/30 mb-6">
            <Mail className="w-4 h-4 mr-2 text-cyan-300" />
            <span className="text-sm font-medium text-white/90">Fale Conosco</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vamos
            <span className="block bg-gradient-to-r from-cyan-300 to-green-300 bg-clip-text text-transparent">
              Conversar?
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Tire suas dúvidas, conheça nossos cursos ou agende uma visita. Estamos aqui para impulsionar seu negócio!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-cyan-300/20 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Envie sua Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 mb-2">Nome</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-cyan-300/30 text-white placeholder:text-white/50"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-white/80 mb-2">Telefone</label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-cyan-300/30 text-white placeholder:text-white/50"
                    placeholder="(55) 99999-9999"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/80 mb-2">E-mail</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-cyan-300/30 text-white placeholder:text-white/50"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2">Mensagem</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-white/10 border-cyan-300/30 text-white placeholder:text-white/50"
                  placeholder="Como podemos ajudar seu negócio?"
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-black font-semibold">
                Enviar Mensagem
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border-cyan-300/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-300" />
                  <div>
                    <div className="text-white font-medium">Endereço</div>
                    <div className="text-white/70">Centro de Santa Maria, RS</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-300" />
                  <div>
                    <div className="text-white font-medium">Telefone</div>
                    <div className="text-white/70">(55) 9999-9999</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-300" />
                  <div>
                    <div className="text-white font-medium">E-mail</div>
                    <div className="text-white/70">contato@impulsoempreendedor.com.br</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-cyan-300/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="border-cyan-300/30 text-cyan-300 hover:bg-cyan-300/10">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="border-cyan-300/30 text-cyan-300 hover:bg-cyan-300/10">
                  <Facebook className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-white/70 mt-4">
                Siga-nos nas redes sociais para dicas diárias de empreendedorismo e novidades sobre nossos workshops!
              </p>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-cyan-300/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Horário de Atendimento</h3>
              <div className="space-y-2 text-white/70">
                <div>Segunda a Sexta: 8h às 18h</div>
                <div>Sábado: 8h às 12h</div>
                <div>Domingo: Fechado</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
