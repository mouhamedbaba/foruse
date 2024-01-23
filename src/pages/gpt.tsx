// AuthComponent.tsx

import React from 'react';
import { useForm } from 'react-hook-form';

const AuthComponent: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const handleLoginSubmit = (data: any) => {
    // Ajouter la logique de connexion ici
    console.log('Login Data:', data);
  };

  const handleRegisterSubmit = (data: any) => {
    // Ajouter la logique d'inscription ici
    console.log('Register Data:', data);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-2 gap-4">
        {/* Login Form */}
        <form onSubmit={handleSubmit(handleLoginSubmit)} className="bg-gray-200 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Connexion</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input {...register('email')} type="text" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Mot de passe</label>
            <input {...register('password')} type="password" className="w-full p-2 border rounded" />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Se connecter
          </button>
        </form>

        {/* Registration Form */}
        <form onSubmit={handleSubmit(handleRegisterSubmit)} className="bg-gray-200 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Inscription</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Nom</label>
            <input {...register('name')} type="text" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input {...register('email')} type="text" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Mot de passe</label>
            <input {...register('password')} type="password" className="w-full p-2 border rounded" />
          </div>
          <button type="submit" className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthComponent;
