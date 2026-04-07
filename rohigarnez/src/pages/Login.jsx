import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Eye, EyeOff, Lock, User, ShieldCheck } from 'lucide-react';

export default function Login({ onNavigate, onLogin }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Error de login');

      // Creamos el objeto de usuario que espera App.jsx
      const userData = {
        email: data.email,
        token: data.token,
        role: data.role // debe ser 'admin' o 'user'
      };

      onLogin(userData);
      onNavigate(userData.role === 'admin' ? 'dashboard' : 'home');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#70a2ad]/20 relative overflow-hidden">
      {/* Technical Background Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,21,22,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,21,22,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-md w-full relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-[#141516] text-white mb-6">
            <User className="w-5 h-5" />
          </div>
          <h1 className="text-4xl font-light text-[#141516] font-[Urbanist] mb-2">
            Acceso <span className="text-[#70a2ad]">Cliente</span>
          </h1>
          <p className="text-gray-500 font-light tracking-wide">
            Gestión técnica y administrativa
          </p>
        </div>

        <div className="bg-white border border-[#141516]/10 p-8 sm:p-12 relative shadow-[0_0_40px_-10px_rgba(0,0,0,0.05)]">
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-2 h-2 bg-[#141516]"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#70a2ad]"></div>
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#141516]/20"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#141516]/20"></div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {error && (
              <div className="bg-red-50 border-l-2 border-red-500 p-4 text-xs text-red-700 font-mono uppercase tracking-wide">
                Error: {error}
              </div>
            )}

            <div className="space-y-8">
              <div>
                <Label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-500 font-mono mb-2 block flex items-center gap-2">
                  Identificador
                </Label>
                <div className="relative group">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-300 group-focus-within:text-[#70a2ad] transition-colors pointer-events-none" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="h-11 pl-11 pr-4 border-t-0 border-x-0 border-b border-gray-200 rounded-none focus:border-[#70a2ad] focus:ring-0 shadow-none h-11 transition-colors bg-transparent font-light text-lg"
                    placeholder="usuario@aquaclean.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password" className="text-xs uppercase tracking-widest text-gray-500 font-mono mb-2 block flex items-center gap-2">
                  Clave de Acceso
                </Label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-300 group-focus-within:text-[#70a2ad] transition-colors pointer-events-none" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    className="h-11 pl-11 pr-4 border-t-0 border-x-0 border-b border-gray-200 rounded-none focus:border-[#70a2ad] focus:ring-0 shadow-nonebg-transparent font-light text-lg"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    className="absolute right-0 top-3 text-gray-300 hover:text-[#141516] transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5 stroke-[1.5]" /> : <Eye className="h-5 w-5 stroke-[1.5]" />}
                  </button>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#141516] hover:bg-[#70a2ad] text-white rounded-none h-14 uppercase tracking-widest text-xs font-medium transition-all duration-300 shadow-none hover:shadow-lg"
              disabled={isLoading}
            >
              {isLoading ? 'Autenticando...' : 'Acceder al Sistema'}
            </Button>
          </form>

          <div className="mt-10 pt-10 border-t border-dashed border-gray-200">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-gray-200 bg-gray-50 mb-4">
                <ShieldCheck className="w-3 h-3 text-gray-400" />
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-mono">Credenciales Demo</span>
              </div>
              <div className="text-xs text-gray-500 space-y-2 font-mono">
                <p className="flex justify-center gap-2"><span className="text-[#141516] font-bold">ADMIN:</span> rohigarnez@admin.com / admin123</p>
                <p className="flex justify-center gap-2"><span className="text-[#141516] font-bold">USER:</span> (Cualquier email / pass)</p>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => onNavigate('home')}
                className="group inline-flex items-center gap-2 text-xs text-gray-400 hover:text-[#141516] uppercase tracking-widest font-mono transition-colors"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Volver al Portal
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-[10px] text-gray-300 font-mono uppercase tracking-widest">
          Secure Access Point v2.4
        </div>
      </div>
    </div>
  );
}