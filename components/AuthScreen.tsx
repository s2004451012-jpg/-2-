
import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { User, LogIn } from 'lucide-react';

const AuthScreen: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, register } = useAppContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('メールアドレスを入力してください。');
      return;
    }
    
    let success = false;
    if (isLogin) {
      success = login(email, password);
      if (!success) setError('メールアドレスまたはパスワードが違います。');
    } else {
      success = register(email, password);
      if (!success) setError('このメールアドレスは既に使用されています。');
    }
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-8 justify-center">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">ようこそ！</h1>
        <p className="text-lg font-light">ビルクリーニング練習アプリ</p>
      </div>
      
      <div className="bg-white text-slate-800 p-8 rounded-2xl shadow-2xl">
        <h2 className="text-2xl font-bold text-center mb-6">{isLogin ? 'ログイン' : '新規登録'}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-600">メールアドレス</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                         focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              placeholder="user@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="password"  className="block text-sm font-medium text-slate-600">パスワード (任意)</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                         focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              placeholder="••••••••"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isLogin ? 'ログイン' : '登録する'}
          </button>
        </form>
        
        <div className="text-center mt-6">
          <button onClick={() => { setIsLogin(!isLogin); setError(''); }} className="text-sm text-indigo-600 hover:underline">
            {isLogin ? 'アカウントをお持ちでないですか？新規登録' : 'すでにアカウントをお持ちですか？ログイン'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
